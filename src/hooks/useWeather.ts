import { useState, useEffect } from 'react';

export interface WeatherData {
  name: string;
  main: { temp: number; feels_like: number; humidity: number; pressure: number };
  wind: { speed: number };
  weather: { main: string; description: string; icon: string }[];
}

export function useWeather(city: string) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city.trim()) return;

    const controller = new AbortController();
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(res.status === 404 ? 'City not found' : 'Failed to fetch weather');
        return res.json();
      })
      .then((json: WeatherData) => {
        setData(json);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
          setData(null);
        }
      });

    return () => controller.abort();
  }, [city]);

  return { data, loading, error };
}