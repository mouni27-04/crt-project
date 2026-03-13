// =============================================
// BlogCard.jsx — Animated Blog Post Card
// =============================================

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import { CATEGORIES } from '../data/blogs';

// Category color map
const getCategoryColor = (categoryId) => {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  return cat?.color || '#4a7c59';
};

export default function BlogCard({ blog, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const catColor = getCategoryColor(blog.category);
  const catLabel = CATEGORIES.find(c => c.id === blog.category)?.label || blog.category;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? 'var(--shadow-hover)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
    >
      {/* Image Container */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '16/10',
        flexShrink: 0,
      }}>
        <motion.img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />

        {/* Category Badge over image */}
        <div style={{
          position: 'absolute',
          top: '0.875rem',
          left: '0.875rem',
          padding: '0.25rem 0.7rem',
          borderRadius: '20px',
          fontSize: '0.68rem',
          fontWeight: '700',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          backgroundColor: catColor,
          color: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>
          {catLabel}
        </div>

        {/* Read time */}
        <div style={{
          position: 'absolute',
          top: '0.875rem',
          right: '0.875rem',
          padding: '0.25rem 0.6rem',
          borderRadius: '20px',
          fontSize: '0.68rem',
          fontWeight: '500',
          backgroundColor: 'rgba(10,10,8,0.65)',
          backdropFilter: 'blur(6px)',
          color: 'rgba(255,255,255,0.9)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}>
          <FiClock size={10} />
          {blog.readTime}
        </div>
      </div>

      {/* Card Content */}
      <div style={{
        padding: '1.4rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}>
        {/* Title */}
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          fontWeight: '700',
          lineHeight: 1.25,
          color: 'var(--text-primary)',
          transition: 'color 0.2s ease',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p style={{
          fontSize: '0.865rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {blog.excerpt}
        </p>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: 'var(--border-subtle)',
        }} />

        {/* Footer Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
        }}>
          {/* Author */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
            minWidth: 0,
          }}>
            <img
              src={blog.authorAvatar}
              alt={blog.author}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
                backgroundColor: 'var(--bg-secondary)',
              }}
            />
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: '0.78rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {blog.author}
              </div>
              <div style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}>
                <FiCalendar size={9} />
                {blog.date}
              </div>
            </div>
          </div>

          {/* Read More */}
          <Link to={`/blog/${blog.id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '20px',
                fontSize: '0.76rem',
                fontWeight: '700',
                color: catColor,
                backgroundColor: `${catColor}16`,
                border: `1px solid ${catColor}30`,
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Read <FiArrowRight size={12} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
