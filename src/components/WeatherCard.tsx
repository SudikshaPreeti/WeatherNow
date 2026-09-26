import type { WeatherData } from '../hooks/useWeather';

interface Props {
  data: WeatherData;
}

export function WeatherCard({ data }: Props) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        padding: '2rem',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      }}
    >
      <h2 style={{ margin: 0, fontSize: '1.75rem' }}>{data.name}</h2>
      <img src={iconUrl} alt={data.weather[0].description} width={120} height={120} />
      <div style={{ fontSize: '3.5rem', fontWeight: 200, lineHeight: 1 }}>
        {Math.round(data.main.temp)}°C
      </div>
      <p style={{ textTransform: 'capitalize', marginTop: '0.5rem', opacity: 0.9 }}>
        {data.weather[0].description}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1.5rem', fontSize: '0.9rem' }}>
        <div>
          <div style={{ opacity: 0.7 }}>Feels like</div>
          <div>{Math.round(data.main.feels_like)}°C</div>
        </div>
        <div>
          <div style={{ opacity: 0.7 }}>Humidity</div>
          <div>{data.main.humidity}%</div>
        </div>
        <div>
          <div style={{ opacity: 0.7 }}>Wind</div>
          <div>{data.wind.speed} m/s</div>
        </div>
      </div>
    </div>
  );
}