import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  const styles = {
    header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#121212', color: '#fff', borderBottom: '2px solid #333' },
    logo: { display: 'flex', alignItems: 'center', gap: '10px' },
    title: { fontSize: '1.5rem', margin: 0, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' },
    nav: { display: 'flex', gap: '15px' },
    link: { color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' },
    form: { display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#1e1e1e', padding: '5px 10px', borderRadius: '5px' },
    input: { border: 'none', backgroundColor: 'transparent', color: '#fff', outline: 'none', fontSize: '1rem', width: '200px' },
    button: { backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#fff' }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="/Sflix.webp" alt="Movie App Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        <h1 style={styles.title}>FLIX</h1>
      </div>
      <nav style={styles.nav}>
        {['Home', 'Movies', 'About'].map((text) => (
          <a href={`/${text.toLowerCase()}`} key={text} style={styles.link}>{text}</a>
        ))}
      </nav>
      <form onSubmit={handleSearch} style={styles.form}>
        <input type="text" placeholder="Search movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={styles.input} />
        <button type="submit" style={styles.button}><i className="fa fa-search" style={{ fontSize: '1.2rem' }}></i></button>
      </form>
    </header>
  );
};

export default Header;
