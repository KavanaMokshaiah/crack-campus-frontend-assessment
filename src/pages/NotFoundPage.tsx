import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: '6rem',
        paddingBottom: '8rem',
        backgroundColor: '#0b0b0e',
        textAlign: 'center',
      }}
    >
      <div className="ctc-container" style={{ maxWidth: '36rem' }}>
        <div
          style={{
            fontSize: '6rem',
            fontWeight: 900,
            color: '#7c3aed',
            fontFamily: 'Outfit, sans-serif',
            lineHeight: 1,
            marginBottom: '1rem',
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: '#a1a1aa', fontSize: '0.9375rem', marginBottom: '2rem' }}>
          The requested placement resource, corporate pathway, or test environment does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn--primary btn--lg">
          <Home size={18} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
