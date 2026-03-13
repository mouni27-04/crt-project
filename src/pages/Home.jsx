// =============================================
// Home.jsx — Main Landing Page
// =============================================

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import { BLOGS, CATEGORIES } from '../data/blogs';
import { FiFilter, FiRefreshCw } from 'react-icons/fi';

const POSTS_PER_PAGE = 6;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  // Filter blogs based on category + search
  const filteredBlogs = useMemo(() => {
    let result = BLOGS.filter(b => !b.featured);
    if (activeCategory !== 'all') {
      result = result.filter(b => b.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  const resetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setVisibleCount(POSTS_PER_PAGE);
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <Hero />

      {/* ---- Blog List Section ---- */}
      <section id="blogs" style={{ padding: '5rem 0' }}>
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}>
              <div>
                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-warm)',
                  marginBottom: '0.5rem',
                }}>
                  Our Reviews
                </p>
                <h2 className="section-title">
                  Explore All Film<span className="accent-dot"> Reviews</span>
                </h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  marginTop: '0.4rem',
                }}>
                  Discover in-depth film criticism, director profiles, and cinematic analysis.
                </p>
              </div>
              <SearchBar
                value={searchQuery}
                onChange={val => { setSearchQuery(val); setVisibleCount(POSTS_PER_PAGE); }}
                placeholder="Search reviews..."
              />
            </div>

            {/* Category Filters */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                marginRight: '0.25rem',
              }}>
                <FiFilter size={13} /> Filter:
              </span>
              {CATEGORIES.map(cat => (
                <motion.button
                  key={cat.id}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    border: activeCategory === cat.id
                      ? `1.5px solid ${cat.color}`
                      : '1.5px solid var(--border-color)',
                    backgroundColor: activeCategory === cat.id
                      ? cat.color
                      : 'var(--bg-card)',
                    color: activeCategory === cat.id
                      ? '#fff'
                      : 'var(--text-secondary)',
                    boxShadow: activeCategory === cat.id
                      ? `0 2px 12px ${cat.color}40`
                      : 'none',
                  }}
                >
                  {cat.label}
                </motion.button>
              ))}

              {/* Reset if filtering */}
              <AnimatePresence>
                {(activeCategory !== 'all' || searchQuery) && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={resetFilters}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      border: '1.5px solid var(--border-color)',
                      backgroundColor: 'transparent',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    <FiRefreshCw size={11} /> Reset
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Results Summary */}
          <AnimatePresence mode="wait">
            {filteredBlogs.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  textAlign: 'center',
                  padding: '5rem 2rem',
                  color: 'var(--text-muted)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.4rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                }}>
                  No reviews found
                </h3>
                <p style={{ fontSize: '0.9rem' }}>
                  Try adjusting your search or filter criteria
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={resetFilters}
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.65rem 1.5rem',
                    borderRadius: '8px',
                    backgroundColor: 'var(--accent-primary)',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Results count */}
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.75rem',
                }}>
                  Showing <strong style={{ color: 'var(--text-secondary)' }}>
                    {Math.min(visibleCount, filteredBlogs.length)}
                  </strong> of <strong style={{ color: 'var(--text-secondary)' }}>
                    {filteredBlogs.length}
                  </strong> articles
                  {activeCategory !== 'all' && ` in "${CATEGORIES.find(c => c.id === activeCategory)?.label}"`}
                </p>

                {/* Blog Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '1.75rem',
                }}>
                  {visibleBlogs.map((blog, i) => (
                    <BlogCard key={blog.id} blog={blog} index={i} />
                  ))}
                </div>

                {/* Load More / Pagination */}
                {hasMore && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ textAlign: 'center', marginTop: '3.5rem' }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setVisibleCount(prev => prev + POSTS_PER_PAGE)}
                      style={{
                        padding: '0.85rem 2.5rem',
                        borderRadius: '40px',
                        border: '2px solid var(--accent-primary)',
                        backgroundColor: 'transparent',
                        color: 'var(--accent-primary)',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--accent-primary)';
                      }}
                    >
                      Load More Reviews ({filteredBlogs.length - visibleCount} remaining)
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ---- About Section ---- */}
      <section id="about" style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '5rem 0',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-warm)',
                marginBottom: '0.75rem',
              }}>
                About CineSpace
              </p>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: '800',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
              }}>
                Where Cinema Finds Its <em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Voice</em>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                CineSpace is a curated film criticism platform for cinephiles, casual viewers, and everyone in between. We bring together passionate voices across reviews, film history, director profiles, and industry analysis to deepen your love of cinema.
              </p>
              <div style={{
                display: 'flex',
                gap: '2.5rem',
                flexWrap: 'wrap',
              }}>
                {[
                  { num: '120+', label: 'Films Reviewed' },
                  { num: '18k', label: 'Monthly Readers' },
                  { num: '6', label: 'Film Critics' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: 'var(--accent-primary)',
                      lineHeight: 1,
                    }}>
                      {stat.num}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}
            >
              {[
                { title: 'Passionate Critics', desc: 'Written by film lovers who\'ve spent years studying cinema — not algorithm-generated summaries.' },
                { title: 'No Star Ratings', desc: 'We write essays, not scores. Cinema deserves more than a number out of five.' },
                { title: 'Historical Depth', desc: 'We connect new releases to the broader history of cinema, because context is everything.' },
                { title: 'Open Access', desc: 'Great film criticism should be accessible to everyone, without paywalls or barriers.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  style={{
                    padding: '1.25rem',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- Contact Section ---- */}
      <section id="contact" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-warm)',
              marginBottom: '0.75rem',
            }}>
              Get In Touch
            </p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
            }}>
              Have a Film to Recommend?
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '2rem',
            }}>
              We welcome pitches from film writers and critics. Reach out to discuss your ideas or propose a review.
            </p>
            <a
              href="mailto:hello@cinespace.dev"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 2.25rem',
                borderRadius: '40px',
                backgroundColor: 'var(--accent-primary)',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: '700',
                transition: 'all 0.25s ease',
                boxShadow: '0 6px 24px rgba(61,107,71,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(61,107,71,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(61,107,71,0.3)';
              }}
            >
              hello@cinespace.dev
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
