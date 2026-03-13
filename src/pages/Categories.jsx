// =============================================
// Categories.jsx — Browse by Category
// =============================================

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { BLOGS, CATEGORIES } from '../data/blogs';

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'all');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = activeCategory === 'all'
    ? BLOGS
    : BLOGS.filter(b => b.category === activeCategory);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setSearchParams(catId !== 'all' ? { cat: catId } : {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const catData = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ paddingTop: '68px', minHeight: '100vh' }}
    >
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '4rem 0 3rem',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-warm)',
              marginBottom: '0.6rem',
            }}>
              Browse
            </p>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              Explore by Category
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
            }}>
              Browse our full library of film reviews organized by genre. Filter by your area of interest.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 2rem' }}>
        {/* Category Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '1rem',
          marginBottom: '3.5rem',
        }}>
          {CATEGORIES.map((cat, i) => {
            const count = cat.id === 'all' ? BLOGS.length : BLOGS.filter(b => b.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleCategoryChange(cat.id)}
                style={{
                  padding: '1.25rem',
                  borderRadius: '14px',
                  border: isActive
                    ? `2px solid ${cat.color}`
                    : '2px solid var(--border-subtle)',
                  backgroundColor: isActive ? `${cat.color}12` : 'var(--bg-card)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? `0 6px 20px ${cat.color}25` : 'var(--shadow-sm)',
                }}
              >
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: cat.color,
                  marginBottom: '0.75rem',
                }} />
                <div style={{
                  fontWeight: '700',
                  fontSize: '0.875rem',
                  color: isActive ? cat.color : 'var(--text-primary)',
                  marginBottom: '0.25rem',
                  lineHeight: 1.3,
                }}>
                  {cat.label}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}>
                  {count} {count === 1 ? 'review' : 'reviews'}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Category Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--border-subtle)',
        }}>
          {catData && (
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: catData.color,
              flexShrink: 0,
            }} />
          )}
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            fontWeight: '700',
            color: 'var(--text-primary)',
          }}>
            {catData?.label || 'All Posts'}
          </h2>
          <span style={{
            padding: '0.2rem 0.7rem',
            borderRadius: '20px',
            backgroundColor: 'var(--tag-bg)',
            fontSize: '0.78rem',
            fontWeight: '600',
            color: 'var(--text-muted)',
          }}>
            {filtered.length}
          </span>
        </div>

        {/* Blog Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📭</div>
            <p style={{ fontSize: '1rem' }}>No reviews in this category yet.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}>
            {filtered.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
