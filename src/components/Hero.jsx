// =============================================
// Hero.jsx — Featured Blog Hero Section
// =============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiCalendar, FiUser } from 'react-icons/fi';
import { BLOGS, CATEGORIES } from '../data/blogs';

export default function Hero() {
  const featured = BLOGS.find(b => b.featured) || BLOGS[0];
  const categoryData = CATEGORIES.find(c => c.id === featured.category);

  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      marginTop: 0,
    }}>
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${featured.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(10,10,8,0.95) 0%, rgba(10,10,8,0.55) 45%, rgba(10,10,8,0.2) 75%, transparent 100%)',
      }} />

      {/* Decorative grain overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.06\'/%3E%3C/svg%3E")',
        opacity: 0.3,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        paddingBottom: '5rem',
        paddingTop: '10rem',
        width: '100%',
      }}>
        <div style={{ maxWidth: '760px' }}>
          {/* Category + Read Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.3rem 0.85rem',
              borderRadius: '20px',
              fontSize: '0.72rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backgroundColor: categoryData?.color || 'var(--accent-primary)',
              color: '#fff',
            }}>
              ✦ Featured
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.3rem 0.85rem',
              borderRadius: '20px',
              fontSize: '0.72rem',
              fontWeight: '600',
              letterSpacing: '0.04em',
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              color: 'rgba(255,255,255,0.9)',
            }}>
              <FiClock size={11} />
              {featured.readTime}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 5vw, 3.6rem)',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: 1.12,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            {featured.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.65,
              marginBottom: '2rem',
              maxWidth: '600px',
              fontWeight: '300',
            }}
          >
            {featured.excerpt}
          </motion.p>

          {/* Author + CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Author */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
            }}>
              <img
                src={featured.authorAvatar}
                alt={featured.author}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(255,255,255,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }}
              />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#fff' }}>
                  {featured.author}
                </div>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}>
                  <FiCalendar size={10} />
                  {featured.date}
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <Link to={`/blog/${featured.id}`}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.75rem',
                  backgroundColor: '#fff',
                  color: '#1a1a18',
                  borderRadius: '40px',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                  transition: 'box-shadow 0.2s ease',
                }}
              >
                Read Article <FiArrowRight size={15} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <div style={{
          width: '1px',
          height: '40px',
          backgroundColor: 'rgba(255,255,255,0.3)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        Scroll
      </motion.div>
    </section>
  );
}
