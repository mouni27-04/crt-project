// =============================================
// Footer.jsx — Site Footer
// =============================================

import { Link } from 'react-router-dom';
import { FiBookOpen, FiTwitter, FiGithub, FiInstagram, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { CATEGORIES } from '../data/blogs';

const SOCIAL_LINKS = [
  { icon: <FiTwitter size={17} />, label: 'Twitter', href: '#' },
  { icon: <FiGithub size={17} />, label: 'GitHub', href: '#' },
  { icon: <FiInstagram size={17} />, label: 'Instagram', href: '#' },
  { icon: <FiLinkedin size={17} />, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      marginTop: '6rem',
    }}>
      <div className="container">
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-warm))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <FiBookOpen color="#fff" size={15} />
              </div>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.2rem',
                fontWeight: '800',
                color: 'var(--text-primary)',
              }}>
                Cine<span style={{ color: 'var(--accent-warm)' }}>Space</span>
              </span>
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
              maxWidth: '280px',
            }}>
              A curated space for film reviews, director profiles, and cinematic analysis for the passionate moviegoer.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
            }}>
              Categories
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                <li key={cat.id}>
                  <Link
                    to={`/categories?cat=${cat.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <span style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: cat.color,
                      flexShrink: 0,
                    }} />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
            }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Home', 'Latest Reviews', 'Categories', 'About Us', 'Pitch a Review', 'Privacy Policy'].map(link => (
                <li key={link}>
                  <Link
                    to="/"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
            }}>
              Stay Updated
            </h4>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              lineHeight: 1.6,
            }}>
              Get the latest film reviews delivered straight to your inbox.
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
            }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  border: '1.5px solid var(--border-color)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontSize: '0.825rem',
                  fontFamily: 'DM Sans, sans-serif',
                  outline: 'none',
                }}
              />
              <button style={{
                padding: '0.6rem 0.9rem',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-primary)',
                color: '#fff',
                fontSize: '0.825rem',
                fontWeight: '600',
                transition: 'opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <FiArrowRight size={15} />
              </button>
            </div>
            <div style={{
              marginTop: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontSize: '0.825rem',
            }}>
              <FiMail size={14} color="var(--accent-warm)" />
              hello@cinespace.dev
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}>
            © 2025 CineSpace. Crafted with care.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
          }}>
            {['Terms', 'Privacy', 'Cookies'].map(item => (
              <Link
                key={item}
                to="/"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
