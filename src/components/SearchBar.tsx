import { useState, type FormEvent } from 'react';

interface Props {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        type="text"
        placeholder="Search a city..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          flex: 1,
          padding: '0.75rem 1rem',
          borderRadius: '10px',
          border: 'none',
          fontSize: '1rem',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.75rem 1.5rem',
          borderRadius: '10px',
          border: 'none',
          background: '#1e293b',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
}