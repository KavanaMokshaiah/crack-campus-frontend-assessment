import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PromoBar: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div
      role="region"
      aria-label="Promotion"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        borderBottom: '1px solid rgba(45, 38, 64, 0.9)',
        background: 'linear-gradient(to right, #12081f, #1e0f3a, #12081f)',
        padding: '0.5rem 2.5rem 0.5rem 1rem',
        fontSize: '0.8125rem',
        color: '#ddd6fe',
        zIndex: 60,
      }}
    >
      <Sparkles size={16} color="#fcd34d" style={{ flexShrink: 0 }} />
      <p style={{ margin: 0, textAlign: 'center', fontWeight: 500 }}>
        <strong style={{ color: '#ffffff', marginRight: '0.35rem' }}>Special Campus Offer</strong>
        — Unlock free access to the 2026 Corporate Pathways &amp; Pro-Suite Mock Tests.{' '}
        <Link
          to="/explore"
          style={{
            color: '#ffffff',
            fontWeight: 600,
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            marginLeft: '0.35rem',
          }}
        >
          Explore Pathways &rarr;
        </Link>
      </p>
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        aria-label="Dismiss promotion"
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#a1a1aa',
          padding: '0.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          transition: 'color 0.2s',
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};
