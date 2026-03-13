// =============================================
// Navbar.jsx — Navigation with Search & Theme
// =============================================

import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSun, FiMoon, FiSearch, FiX, FiMenu,
  FiBookOpen, FiGrid, FiInfo, FiMail, FiHome
} from 'react-icons/fi';
import { useTheme } from '../App';
import { BLOGS } from '../data/blogs';

const NAV_LINKS = [
  { label: 'Home', to: '/', icon: <FiHome size={14} /> },
  { label: 'Reviews', to: '/#blogs', icon: <FiBookOpen size={14} /> },
  { label: 'Categories', to: '/categories', icon: <FiGrid size={14} /> },
  { label: 'About', to: '/#about', icon: <FiInfo size={14} /> },
  { label: 'Contact', to: '/#contact', icon: <FiMail size={14} /> },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Search logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = BLOGS.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
    ).slice(0, 5);
    setSearchResults(results);
  }, [searchQuery]);

  // Focus search input
  useEffect(() => {
    if (searchOpen && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const handleSearchSelect = (id) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(`/blog/${id}`);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-warm))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FiBookOpen color="#fff" size={16} />
            </div>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.3rem',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              Cine<span style={{ color: 'var(--accent-warm)' }}>Space</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul style={{
            display: 'flex',
            gap: '0.25rem',
            alignItems: 'center',
          }} className="nav-links-desktop">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <FiSearch size={17} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--accent-amber)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {theme === 'light' ? <FiMoon size={17} /> : <FiSun size={17} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label="Toggle menu"
              className="mobile-menu-btn"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
              }}
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'var(--navbar-bg)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid var(--border-subtle)',
                overflow: 'hidden',
              }}
            >
              <div className="container" style={{ padding: '1rem 2rem' }}>
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.label}
                    to={link.to}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                    }}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backgroundColor: 'rgba(10,10,8,0.7)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '100px',
              padding: '100px 1.5rem 0',
            }}
            onClick={e => { if (e.target === e.currentTarget) setSearchOpen(false); }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              style={{
                width: '100%',
                maxWidth: '620px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-color)',
              }}
            >
              {/* Search Input */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                borderBottom: searchResults.length > 0 ? '1px solid var(--border-subtle)' : 'none',
              }}>
                <FiSearch size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search films, directors, genres..."
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                />
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  style={{
                    padding: '0.25rem 0.6rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-secondary)',
                    transition: 'all 0.2s',
                  }}
                >
                  ESC
                </button>
              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div style={{ padding: '0.5rem 0' }}>
                  {searchResults.map(blog => (
                    <button
                      key={blog.id}
                      onClick={() => handleSearchSelect(blog.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.875rem',
                        width: '100%',
                        padding: '0.65rem 1.25rem',
                        transition: 'background 0.15s ease',
                        textAlign: 'left',
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        style={{
                          width: '44px',
                          height: '44px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: 'var(--text-primary)',
                          lineHeight: 1.3,
                          marginBottom: '0.2rem',
                        }}>
                          {blog.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {blog.author} · {blog.date}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div style={{
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                }}>
                  No articles found for "{searchQuery}"
                </div>
              )}

              {!searchQuery && (
                <div style={{
                  padding: '1.5rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  textAlign: 'center',
                }}>
                  Start typing to search across all articles
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline responsive style for navbar */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
