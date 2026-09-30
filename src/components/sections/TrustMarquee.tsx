import React, { useState } from 'react';
import { HIRING_COMPANIES } from '../../data/companies';
import type { HiringCompany } from '../../data/companies';
import { Users } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  const [hoveredCompany, setHoveredCompany] = useState<HiringCompany | null>(null);

  // Duplicate list to achieve continuous infinite marquee loop
  const marqueeItems = [...HIRING_COMPANIES, ...HIRING_COMPANIES, ...HIRING_COMPANIES];

  return (
    <section
      style={{
        borderBottom: '1px solid #26262a',
        backgroundColor: '#0b0b0e',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="trust-marquee-heading"
    >
      <div className="ctc-container" style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <h2
          id="trust-marquee-heading"
          style={{
            fontSize: '0.8125rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#71717a',
            margin: 0,
          }}
        >
          Empowering students to crack recruitment at&hellip;
        </h2>
      </div>

      {/* Marquee Wrapper with Gradient Mask Fades */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Left Fade Mask */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 'clamp(3rem, 10vw, 8rem)',
            background: 'linear-gradient(to right, #0b0b0e, transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Right Fade Mask */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: 'clamp(3rem, 10vw, 8rem)',
            background: 'linear-gradient(to left, #0b0b0e, transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Moving Track */}
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            width: 'max-content',
            animation: 'marqueeScroll 35s linear infinite',
            padding: '0.75rem 0',
          }}
        >
          {marqueeItems.map((comp, idx) => (
            <div
              key={`${comp.name}-${idx}`}
              onMouseEnter={() => setHoveredCompany(comp)}
              onMouseLeave={() => setHoveredCompany(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                borderRadius: '0.75rem',
                backgroundColor: hoveredCompany?.name === comp.name ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
              title={`${comp.name} - ${comp.drivesHeld}+ Drives Conducted`}
            >
              <svg
                role="img"
                viewBox={comp.viewBox}
                aria-hidden="true"
                style={{
                  height: '1.75rem',
                  width: 'auto',
                  maxWidth: '5rem',
                  color: hoveredCompany?.name === comp.name ? comp.color : '#71717a',
                  filter: hoveredCompany?.name === comp.name ? 'none' : 'grayscale(100%)',
                  opacity: hoveredCompany?.name === comp.name ? 1 : 0.6,
                  transition: 'all 0.25s ease',
                }}
              >
                <path fill="currentColor" d={comp.svgPath} />
              </svg>
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: hoveredCompany?.name === comp.name ? '#ffffff' : '#71717a',
                  transition: 'color 0.2s',
                }}
              >
                {comp.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Tooltip Card when hovering a company */}
      {hoveredCompany && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1.25rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              backgroundColor: '#16161c',
              border: `1px solid ${hoveredCompany.color}40`,
              boxShadow: `0 4px 20px ${hoveredCompany.color}20`,
              fontSize: '0.8125rem',
            }}
          >
            <span style={{ color: hoveredCompany.color, fontWeight: 700 }}>{hoveredCompany.name}</span>
            <span style={{ color: '#52525b' }}>&bull;</span>
            <span style={{ color: '#a1a1aa' }}>Category: {hoveredCompany.category}</span>
            <span style={{ color: '#52525b' }}>&bull;</span>
            <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Users size={13} /> {hoveredCompany.drivesHeld}+ Campus Drives Powering Placements
            </span>
          </div>
        </div>
      )}

      {/* Marquee pause on hover */}
      <style>{`
        .marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};
