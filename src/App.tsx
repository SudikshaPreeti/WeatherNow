import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { useWeather } from './hooks/useWeather';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const { data, loading, error } = useWeather(city);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h1 style={{ color: 'white', textAlign: 'center', margin: 0, fontWeight: 300, fontSize: '2rem' }}>
          WeatherNow
        </h1>

        <SearchBar onSearch={setCity} />

        {loading && <LoadingSkeleton />}

        {error && (
          <div
            style={{
              background: 'rgba(255, 100, 100, 0.25)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              padding: '1rem 1.5rem',
              color: 'white',
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}

        {data && !loading && <WeatherCard data={data} />}
      </div>
    </div>
  );
}

export default App;