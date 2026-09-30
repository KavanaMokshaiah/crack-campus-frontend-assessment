import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Award, Code2 } from 'lucide-react';
import heroWebp from '../../assets/hero-promo-office.webp';
import heroJpg from '../../assets/hero-promo-office.jpg';
import badgeCtcHero from '../../assets/badge-ctc-hero.webp';

interface HeroSectionProps {
  onOpenSandbox?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSandbox }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'min(92vh, 48rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid #26262a',
        backgroundColor: '#0b0b0e',
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background Hero Office Image with Multi-layer Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <picture>
          <source srcSet={heroWebp} type="image/webp" />
          <img
            src={heroJpg}
            alt=""
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '55% 22%',
              opacity: 0.38,
              filter: 'saturate(120%) contrast(105%)',
            }}
          />
        </picture>

        {/* Sophisticated dark linear & radial gradient mask */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to right, 
                rgba(11, 11, 14, 0.98) 0%, 
                rgba(11, 11, 14, 0.92) 20%, 
                rgba(11, 11, 14, 0.82) 40%, 
                rgba(11, 11, 14, 0.55) 60%, 
                rgba(11, 11, 14, 0.3) 80%, 
                transparent 100%),
              linear-gradient(to top, rgba(11, 11, 14, 1) 0%, transparent 60%)
            `,
          }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.6,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="ctc-container" style={{ position: 'relative', zIndex: 10, padding: '3.5rem 1rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          {/* Left Column: Headline and Call-to-Actions */}
          <div style={{ maxWidth: '42rem' }}>
            {/* Student-centric Live Placement Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(124, 58, 237, 0.12)',
                border: '1px solid rgba(124, 58, 237, 0.35)',
                color: '#ddd6fe',
                fontSize: '0.8125rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                }}
              />
              2026 Campus Placement Engine &bull; AI Proctored
            </div>

            {/* Left Accent Bordered Hero Title */}
            <div
              style={{
                borderLeft: '3px solid #7c3aed',
                paddingLeft: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              <h1
                id="hero-heading"
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  textShadow: '0 2px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                Your Fast Track to <span style={{ color: '#c4b5fd' }}>Top Placements.</span>
              </h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                    color: '#d4d4d8',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Upskill with industry-expert courses and master{' '}
                  <strong style={{ color: '#fafafa', fontWeight: 600 }}>Corporate Pathways</strong> built for your
                  dream companies.
                </p>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                    color: '#d4d4d8',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Build a <strong style={{ color: '#a78bfa', fontWeight: 600 }}>CTC Score</strong> that gets you
                  noticed by top tech recruiters.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <Link to="/explore" className="btn btn--primary btn--lg">
                <span>Start Upskilling</span>
                <ArrowRight size={18} />
              </Link>

              {onOpenSandbox ? (
                <button
                  type="button"
                  onClick={onOpenSandbox}
                  className="btn btn--secondary btn--lg"
                >
                  <Code2 size={18} color="#a78bfa" />
                  <span>Launch Practice Sandbox</span>
                </button>
              ) : (
                <Link to="/practice" className="btn btn--secondary btn--lg">
                  <Code2 size={18} color="#a78bfa" />
                  <span>Explore Practice Sandbox</span>
                </Link>
              )}
            </div>

            {/* Quick Proof Pillars */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: '#a1a1aa' }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>Zero-Latency Pro-Suite</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: '#a1a1aa' }}>
                <Shield size={16} color="#7c3aed" />
                <span>AI Anti-Cheat Telemetry</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: '#a1a1aa' }}>
                <TrendingUp size={16} color="#f59e0b" />
                <span>1,300+ College Drives</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Visual Placement Card Showcase */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Interactive Card */}
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                background: 'linear-gradient(145deg, rgba(24, 24, 30, 0.85) 0%, rgba(15, 15, 20, 0.95) 100%)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                borderRadius: '1.25rem',
                padding: '1.75rem',
                boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(124, 58, 237, 0.15)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.6875rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                    STUDENT CREDENTIAL
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: '0.2rem 0' }}>Verified CTC Score</h3>
                  <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: 0 }}>Institution-Grade Signal</p>
                </div>
                <img
                  src={badgeCtcHero}
                  alt="CTC Badge"
                  style={{
                    width: '3.75rem',
                    height: '3.75rem',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 12px rgba(124, 58, 237, 0.4))',
                  }}
                />
              </div>

              {/* Dynamic Score Display */}
              <div
                style={{
                  background: 'rgba(11, 11, 14, 0.8)',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  marginBottom: '1.25rem',
                  border: '1px solid #26262a',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>9.4</span>
                  <span style={{ fontSize: '1rem', color: '#71717a', marginLeft: '0.35rem' }}>/ 10.0</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge--emerald">Tier-1 Elite Ready</span>
                  <div style={{ fontSize: '0.75rem', color: '#a1a1aa', marginTop: '0.35rem' }}>Top 1.8% Nationally</div>
                </div>
              </div>

              {/* Metric Breakdown Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#d4d4d8' }}>DSA &amp; Problem Solving</span>
                    <span style={{ color: '#c4b5fd', fontWeight: 600 }}>96%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#1c1c24', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: '96%', height: '100%', background: 'linear-gradient(90deg, #7c3aed, #a78bfa)', borderRadius: '9999px' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#d4d4d8' }}>Quantitative Aptitude Speed</span>
                    <span style={{ color: '#6ee7b7', fontWeight: 600 }}>92%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#1c1c24', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)', borderRadius: '9999px' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#d4d4d8' }}>System Design &amp; Core CS</span>
                    <span style={{ color: '#fcd34d', fontWeight: 600 }}>88%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#1c1c24', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', borderRadius: '9999px' }} />
                  </div>
                </div>
              </div>

              {/* Action Button inside card */}
              <Link
                to="/score-calculator"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.35)',
                  color: '#ddd6fe',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}
              >
                <Award size={16} />
                <span>Simulate Your Placement Score &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
