export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      padding: '1rem'
    }}>
      <div style={{
        maxWidth: '28rem',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          404 - Page Not Found
        </h1>
        <p style={{
          color: '#6b7280',
          fontSize: '1rem'
        }}>
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#1e3a7a',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}
          data-testid="link-home"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
