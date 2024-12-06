const Content = ({ movies }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '20px', backgroundColor: '#121212', color: '#fff' }}>
    {movies.map((movie) => (
      <div
        key={movie.id}
        style={{
          position: 'relative', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#1e1e1e', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', transition: 'transform 0.3s ease', cursor: 'pointer',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)' }} />
        <h3 style={{ position: 'absolute', bottom: '50px', left: '10px', fontSize: '1.2rem', color: '#fff', textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)', margin: 0 }}>
          {movie.title}
        </h3>
        <button
          style={{
            position: 'absolute', bottom: '10px', left: '10px', backgroundColor: '#ff4500', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: 'bold', fontSize: '0.9rem', transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e63e00'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff4500'}
        >
          Watch Now
        </button>
      </div>
    ))}
  </div>
);

export default Content;