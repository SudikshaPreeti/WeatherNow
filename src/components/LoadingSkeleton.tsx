export function LoadingSkeleton() {
    return (
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: '20px',
          padding: '2rem',
          height: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          opacity: 0.7,
        }}
      >
        Loading weather...
      </div>
    );
  }