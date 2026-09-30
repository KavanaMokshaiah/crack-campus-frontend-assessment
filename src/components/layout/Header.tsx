import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Terminal } from 'lucide-react';
import logoWebp from '../../assets/logo.webp';
import logoPng from '../../assets/logo.png';
import { PromoBar } from './PromoBar';

interface HeaderProps {
  onOpenSandbox?: () => void;
  onOpenContact?: () => void;
  onOpenAuth?: (mode: 'login' | 'signup') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSandbox,
  onOpenContact,
  onOpenAuth,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Institution', path: '/institution' },
    { label: 'Explore', path: '/explore' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Download', path: '/download' },
    { label: 'CTC Simulator', path: '/score-calculator' },
    { label: 'Practice', path: '/practice' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <PromoBar />
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          backgroundColor: 'rgba(11, 11, 14, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #26262a',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="ctc-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4rem',
            gap: '1rem',
          }}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            aria-label="Crack The Campus Homepage"
          >
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="Crack The Campus"
                style={{
                  height: '2rem',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </picture>
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: '#a78bfa',
                background: 'rgba(124, 58, 237, 0.15)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                padding: '0.15rem 0.45rem',
                borderRadius: '9999px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'none',
              }}
              className="badge-desktop"
            >
              Assessment
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.5rem',
            }}
            className="nav-desktop"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive(link.path) ? '#ffffff' : '#a1a1aa',
                  borderBottom: isActive(link.path) ? '2px solid #7c3aed' : '2px solid transparent',
                  padding: '0.25rem 0',
                  transition: 'color 0.2s, border-color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.path)) e.currentTarget.style.color = '#f4f4f5';
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.path)) e.currentTarget.style.color = '#a1a1aa';
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.65rem',
            }}
            className="actions-desktop"
          >
            {onOpenSandbox && (
              <button
                type="button"
                onClick={onOpenSandbox}
                className="btn btn--outline btn--sm"
                title="Open Live Mock Assessment Sandbox"
              >
                <Terminal size={14} color="#a78bfa" />
                <span>Sandbox</span>
              </button>
            )}

            {onOpenAuth && (
              <button
                type="button"
                onClick={() => onOpenAuth('signup')}
                className="btn btn--secondary btn--sm"
              >
                Signup
              </button>
            )}

            <button
              type="button"
              onClick={onOpenContact}
              className="btn btn--secondary btn--sm"
            >
              Contact
            </button>

            {onOpenAuth ? (
              <button
                type="button"
                onClick={() => onOpenAuth('login')}
                className="btn btn--primary btn--sm"
              >
                Login
                <ArrowRight size={14} />
              </button>
            ) : (
              <Link
                to="/score-calculator"
                className="btn btn--primary btn--sm"
              >
                Score
                <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #26262a',
              background: '#141418',
              color: '#f4f4f5',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            style={{
              borderTop: '1px solid #26262a',
              backgroundColor: 'rgba(11, 11, 14, 0.98)',
              padding: '1.25rem 1rem 2rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: isActive(link.path) ? '#ffffff' : '#a1a1aa',
                  backgroundColor: isActive(link.path) ? 'rgba(124, 58, 237, 0.15)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                {isActive(link.path) && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7c3aed' }} />}
              </Link>
            ))}

            <div
              style={{
                height: '1px',
                backgroundColor: '#26262a',
                margin: '0.5rem 0',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {onOpenSandbox && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSandbox();
                  }}
                  className="btn btn--outline"
                  style={{ width: '100%' }}
                >
                  <Terminal size={16} color="#a78bfa" />
                  Launch Assessment Sandbox
                </button>
              )}

              {onOpenAuth && (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuth('login');
                    }}
                    className="btn btn--primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuth('signup');
                    }}
                    className="btn btn--secondary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Signup
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="btn btn--secondary"
                style={{ width: '100%' }}
              >
                Contact Campus Team
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Responsive CSS for Header */}
      <style>{`
        @media (min-width: 960px) {
          .nav-desktop {
            display: flex !important;
          }
          .actions-desktop {
            display: flex !important;
          }
          .badge-desktop {
            display: inline-block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
