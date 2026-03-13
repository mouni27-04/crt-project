// =============================================
// BlogDetails.jsx — Full Article View
// =============================================

import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowLeft, FiClock, FiCalendar, FiShare2,
  FiTwitter, FiLinkedin, FiLink, FiBookmark,
  FiChevronRight
} from 'react-icons/fi';
import { BLOGS, CATEGORIES } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import { useState } from 'react';

// Simple markdown-like renderer for **bold** text
function renderContent(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <h3 key={i} style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.3rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginTop: '2rem',
          marginBottom: '0.75rem',
        }}>
          {line.slice(2, -2)}
        </h3>
      );
    }
    if (line.startsWith('```')) return null;
    if (line.trim() === '') return <div key={i} style={{ height: '0.75rem' }} />;

    // Inline bold for **text** within paragraphs
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} style={{
        fontSize: '1.05rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.8,
        marginBottom: '0.25rem',
      }}>
        {parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
}

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const blog = BLOGS.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', paddingTop: '80px' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: 'var(--text-primary)' }}>Article not found</h2>
        <Link to="/" style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>← Back to Home</Link>
      </div>
    );
  }

  const category = CATEGORIES.find(c => c.id === blog.category);
  const relatedBlogs = BLOGS
    .filter(b => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ paddingTop: '68px' }}
    >
      {/* Hero Image */}
      <div style={{ position: 'relative', height: 'clamp(300px, 50vw, 520px)', overflow: 'hidden' }}>
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.0 }}
          src={blog.image}
          alt={blog.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,8,0.8) 0%, rgba(10,10,8,0.25) 50%, transparent 100%)',
        }} />

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            fontSize: '0.82rem',
            fontWeight: '600',
            transition: 'background 0.2s',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)'}
        >
          <FiArrowLeft size={14} /> Back
        </motion.button>
      </div>

      {/* Article Content */}
      <div className="container" style={{ maxWidth: '780px' }}>
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          style={{ paddingTop: '3rem', paddingBottom: '4rem' }}
        >
          {/* Category + Read Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{
              padding: '0.25rem 0.8rem',
              borderRadius: '20px',
              fontSize: '0.72rem',
              fontWeight: '700',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              backgroundColor: category?.color || 'var(--accent-primary)',
              color: '#fff',
            }}>
              {category?.label || blog.category}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}>
              <FiClock size={12} /> {blog.readTime}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}>
              <FiCalendar size={12} /> {blog.date}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: '800',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}>
            {blog.title}
          </h1>

          {/* Author + Share Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            paddingBottom: '2rem',
            borderBottom: '2px solid var(--border-subtle)',
            marginBottom: '2.5rem',
          }}>
            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src={blog.authorAvatar}
                alt={blog.author}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '2px solid var(--border-color)',
                }}
              />
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {blog.author}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Contributing Writer
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                onClick={() => setSaved(s => !s)}
                title="Bookmark"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1.5px solid var(--border-color)',
                  backgroundColor: saved ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: saved ? '#fff' : 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
              >
                <FiBookmark size={15} />
              </button>

              {[
                { icon: <FiTwitter size={15} />, href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`, label: 'Share on Twitter' },
                { icon: <FiLinkedin size={15} />, href: `https://linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`, label: 'Share on LinkedIn' },
              ].map(btn => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={btn.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid var(--border-color)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {btn.icon}
                </a>
              ))}

              <button
                onClick={copyLink}
                title="Copy link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '8px',
                  border: '1.5px solid var(--border-color)',
                  backgroundColor: copied ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: copied ? '#fff' : 'var(--text-secondary)',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  height: '36px',
                }}
              >
                <FiLink size={13} />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div style={{ marginBottom: '3rem' }}>
            {/* Intro excerpt styled */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-primary)',
              lineHeight: 1.75,
              fontWeight: '400',
              fontStyle: 'italic',
              borderLeft: '3px solid var(--accent-primary)',
              paddingLeft: '1.25rem',
              marginBottom: '2rem',
              fontFamily: 'Playfair Display, serif',
            }}>
              {blog.excerpt}
            </p>

            {/* Main content */}
            {renderContent(blog.content)}
          </div>

          {/* Tags */}
          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            marginBottom: '1.5rem',
          }}>
            <div style={{ fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
              Topics
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {blog.tags.map(tag => (
                <span key={tag} style={{
                  padding: '0.3rem 0.85rem',
                  borderRadius: '20px',
                  backgroundColor: 'var(--tag-bg)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  border: '1px solid var(--border-subtle)',
                }}>
                  # {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>

      {/* ---- Related Posts ---- */}
      {relatedBlogs.length > 0 && (
        <section style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '4rem 0',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
              }}>
                More in {category?.label}
              </h2>
              <Link
                to="/categories"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--accent-primary)',
                }}
              >
                View all <FiChevronRight size={14} />
              </Link>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}>
              {relatedBlogs.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
