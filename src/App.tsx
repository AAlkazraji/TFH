function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',  // Changed from 100vh to 100vw
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      textAlign: 'center',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        maxWidth: '600px',
        width: '90%',  // Added responsive width
        padding: '2rem',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '1rem', textAlign: 'center' }}> Under Maintenance </h1>
                <h1 style={{ color: '#2c3e50', marginBottom: '1rem', textAlign: 'center' }}> 🚧</h1>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem', margin: '0.5rem 0', textAlign: 'center' }}>
          We're currently working on improving this page.
        </p>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem', margin: '0.5rem 0', textAlign: 'center' }}>
          Please check back soon!
        </p>
        <div style={{
          margin: '2rem auto',
          width: '50px',
          height: '50px',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default App