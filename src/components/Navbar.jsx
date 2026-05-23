import { useState, useEffect } from 'react';
import { Leaf, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '1rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Leaf size={28} color="var(--primary)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: "'Playfair Display', serif" }}>
            Himalayan Gold
          </span>
        </div>
        <button 
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            transition: 'all 0.3s ease',
          }}
          className="theme-toggle-btn"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
