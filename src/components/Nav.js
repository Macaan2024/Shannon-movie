import React from 'react';

const Nav = ({ categories, onSelectCategory }) => (
  <nav style={{ padding: '15px 20px', backgroundColor: '#121212', color: '#fff', display: 'flex', justifyContent: 'center', gap: '15px', borderBottom: '1px solid #333' }}>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onSelectCategory(category)}
        style={{
          padding: '10px 20px',
          color: '#fff',
          background: '#444',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background 0.3s',
        }}
        onMouseEnter={(e) => e.target.style.background = '#666'}
        onMouseLeave={(e) => e.target.style.background = '#444'}
      >
        {category}
      </button>
    ))}
  </nav>
);

export default Nav;
