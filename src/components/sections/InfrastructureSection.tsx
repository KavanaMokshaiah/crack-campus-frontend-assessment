import React from 'react';
import { Server, ShieldCheck, Cpu } from 'lucide-react';

export const InfrastructureSection: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderBottom: '1px solid #26262a',
        backgroundColor: '#07070a',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="scalability-strip-heading"
    >
      {/* Decorative background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="ctc-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__tag">Institution-Grade Engineering</span>
          <h2 id="scalability-strip-heading" className="section-header__title">
            Enterprise-Grade Infrastructure for High-Stakes Placements.
          </h2>
          <p className="section-header__subtitle">
            Powering 1,300+ large-scale candidate drives with 99.9% uptime, zero-latency execution, and tamper-proof
            evaluations.
          </p>
        </div>

        {/* Big 3 Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif' }}>
              1,300+
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#c4b5fd', margin: '0.25rem 0 0.5rem 0' }}>
              Institutional Drives
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: 0 }}>
              Conducted across top universities and technical institutes with flawless execution.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10b981', fontFamily: 'Outfit, sans-serif' }}>
              0ms
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#6ee7b7', margin: '0.25rem 0 0.5rem 0' }}>
              Zero-Latency Proctoring
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: 0 }}>
              Local client AI inference ensures rapid question response without test lag or freezing.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'Outfit, sans-serif' }}>
              99.9%
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fcd34d', margin: '0.25rem 0 0.5rem 0' }}>
              Assessment Reliability
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: 0 }}>
              Automated offline cache persistence protects students during sudden campus Wi-Fi drops.
            </p>
          </div>
        </div>

        {/* Infrastructure Deep-Dive Strip */}
        <div
          style={{
            backgroundColor: '#141418',
            border: '1px solid #26262a',
            borderRadius: '1rem',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Server size={22} color="#7c3aed" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: '0.875rem', color: '#fafafa' }}>Concurrent Scalability</strong>
              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: '0.2rem 0 0 0' }}>
                Engineered to handle 50,000+ simultaneous candidates during national placement filtration drives.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <ShieldCheck size={22} color="#10b981" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: '0.875rem', color: '#fafafa' }}>Audio-Visual Anomaly Lock</strong>
              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: '0.2rem 0 0 0' }}>
                Face detection, tab-switch interception, and background app suppression during high-stakes exams.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Cpu size={22} color="#06b6d4" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: '0.875rem', color: '#fafafa' }}>Lightweight Footprint</strong>
              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: '0.2rem 0 0 0' }}>
                Sub-50MB desktop installation package running effortlessly on 4GB RAM student laptops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
