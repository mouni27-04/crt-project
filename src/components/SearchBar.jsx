// =============================================
// SearchBar.jsx — Inline Search/Filter Bar
// =============================================

import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchBar({ value, onChange, placeholder = 'Search articles...' }) {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      maxWidth: '420px',
      width: '100%',
    }}>
      <FiSearch
        size={16}
        color="var(--text-muted)"
        style={{
          position: 'absolute',
          left: '1rem',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.7rem 2.5rem 0.7rem 2.75rem',
          borderRadius: '40px',
          border: '1.5px solid var(--border-color)',
          backgroundColor: 'var(--search-bg)',
          color: 'var(--text-primary)',
          fontSize: '0.875rem',
          fontFamily: 'DM Sans, sans-serif',
          outline: 'none',
          transition: 'all 0.25s ease',
        }}
        onFocus={e => {
          e.target.style.borderColor = 'var(--accent-primary)';
          e.target.style.boxShadow = '0 0 0 3px rgba(61,107,71,0.1)';
        }}
        onBlur={e => {
          e.target.style.borderColor = 'var(--border-color)';
          e.target.style.boxShadow = 'none';
        }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          style={{
            position: 'absolute',
            right: '0.85rem',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--bg-primary)',
            transition: 'opacity 0.15s',
          }}
        >
          <FiX size={12} />
        </button>
      )}
    </div>
  );
}
