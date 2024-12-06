import React from 'react';

const Footer = () => (
  <footer style={{ padding: '20px', backgroundColor: '#121212', color: '#fff', textAlign: 'center', borderTop: '1px solid #333' }}>
    <p style={{ fontSize: '1.2rem', margin: '10px 0', fontWeight: 'bold' }}>© 2024 Movie App</p>
    <div style={{ margin: '10px 0' }}>
      {[
        { href: 'https://www.facebook.com/https://www.facebook.com/profile.php?id=100008807101109', color: '#4267B2', icon: 'facebook' },
        { href: 'https://twitter.com/https://x.com/sflixhqto', color: '#1DA1F2', icon: 'twitter' },
        { href: 'https://www.instagram.com/YOUR_INSTAGRAM_URL', color: '#E1306C', icon: 'instagram' }
      ].map(({ href, color, icon }) => (
        <a key={icon} href={href} target="_blank" rel="noopener noreferrer" style={{ color, textDecoration: 'none', margin: '0 10px', fontSize: '1.5rem' }}>
          <i className={`fab fa-${icon}`}></i>
        </a>
      ))}
    </div>
    <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
      <a href="/terms" style={{ color: '#aaa', textDecoration: 'none', margin: '0 10px' }}>Terms of Service</a> | 
      <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a>
    </p>
  </footer>
);

export default Footer;
