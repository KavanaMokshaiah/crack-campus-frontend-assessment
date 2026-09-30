import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ChevronRight, Zap, Shield, Sparkles, TrendingUp } from 'lucide-react';
import badgeCtcHero from '../../assets/badge-ctc-hero.webp';

export const CTCScoreSection: React.FC = () => {
  // Mini interactive state
  const [aptitude, setAptitude] = useState(85);
  const [dsa, setDsa] = useState(90);
  const [coreCs, setCoreCs] = useState(80);

  // Quick formula: 0.25 apt + 0.50 dsa + 0.25 core
  const calculatedScore = Math.min(10.0, Math.max(1.0, (aptitude * 0.25 + dsa * 0.5 + coreCs * 0.25) / 10)).toFixed(1);
  const numScore = parseFloat(calculatedScore);

  let tier = 'Placement Ready';
  let badgeColor = '#60a5fa';
  if (numScore >= 9.0) {
    tier = 'Tier-1 Elite Product Track (Google, Amazon)';
    badgeColor = '#10b981';
  } else if (numScore >= 7.8) {
    tier = 'High Package Track (TCS Prime, Accenture AASE)';
    badgeColor = '#a78bfa';
  } else if (numScore >= 6.5) {
    tier = 'Core IT Placement Track (Infosys, Wipro)';
    badgeColor = '#f59e0b';
  }

  return (
    <section
      id="ctc-score"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderBottom: '1px solid #26262a',
        backgroundColor: '#0e0e13',
        position: 'relative',
      }}
      aria-labelledby="ctc-score-heading"
    >
      <div className="ctc-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__tag">The Placement Signal</span>
          <h2 id="ctc-score-heading" className="section-header__title">
            Beyond the Resume: The CTC Score.
          </h2>
          <p className="section-header__subtitle">
            Give recruiters a defensible, institution-grade signal. Web Hub builds your foundation; Pro-Suite verifies
            performance — rolled into one tamper-proof credential.
          </p>
        </div>

        {/* 3 Telemetry Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#141418',
              border: '1px solid #26262a',
              borderRadius: '1rem',
              padding: '1.75rem',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60a5fa',
                }}
              >
                <Zap size={16} />
              </div>
              <h3 style={{ fontSize: '1.125rem', color: '#ffffff', margin: 0 }}>01 &bull; Verified Skills</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', margin: 0, lineHeight: 1.6 }}>
              Capability signal continuously calibrated from your Web Hub profile, completed modules, and pathway milestones.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#141418',
              border: '1px solid #26262a',
              borderRadius: '1rem',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                }}
              >
                <TrendingUp size={16} />
              </div>
              <h3 style={{ fontSize: '1.125rem', color: '#ffffff', margin: 0 }}>02 &bull; Practice Telemetry</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', margin: 0, lineHeight: 1.6 }}>
              Consistency, mock attempts, problem solving pace, and concept mastery logged through automated telemetry.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#141418',
              border: '1px solid #26262a',
              borderRadius: '1rem',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a78bfa',
                }}
              >
                <Shield size={16} />
              </div>
              <h3 style={{ fontSize: '1.125rem', color: '#ffffff', margin: 0 }}>03 &bull; Pro-Suite Outcomes</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', margin: 0, lineHeight: 1.6 }}>
              Timed test outcomes recorded under AI proctoring in the desktop environment, preventing any fraudulent scores.
            </p>
          </div>
        </div>

        {/* Interactive Live Mini-Score Predictor */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 26, 0.9) 0%, rgba(16, 12, 28, 0.9) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.35)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            boxShadow: '0 20px 50px -10px rgba(0,0,0,0.8)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Sliders */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Sparkles size={16} color="#c4b5fd" />
                <span style={{ fontSize: '0.75rem', color: '#c4b5fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  INTERACTIVE SIMULATION
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Tune Your Preparation Level
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '1.75rem' }}>
                Drag the sliders to see how improving specific placement disciplines boosts your predicted CTC Score.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Slider 1: Aptitude */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#d4d4d8' }}>Quantitative Aptitude &amp; Logic</span>
                    <strong style={{ color: '#60a5fa' }}>{aptitude}%</strong>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={aptitude}
                    onChange={(e) => setAptitude(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#3b82f6', cursor: 'pointer' }}
                  />
                </div>

                {/* Slider 2: DSA */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#d4d4d8' }}>Data Structures &amp; Coding Speed</span>
                    <strong style={{ color: '#a78bfa' }}>{dsa}%</strong>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={dsa}
                    onChange={(e) => setDsa(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#7c3aed', cursor: 'pointer' }}
                  />
                </div>

                {/* Slider 3: Core CS */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#d4d4d8' }}>Core CS (OS, DBMS, Networks)</span>
                    <strong style={{ color: '#10b981' }}>{coreCs}%</strong>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={coreCs}
                    onChange={(e) => setCoreCs(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Dynamic Calculated Outcome Card */}
            <div
              style={{
                backgroundColor: '#0b0b0e',
                border: '1px solid #26262a',
                borderRadius: '1.25rem',
                padding: '2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <img
                src={badgeCtcHero}
                alt="CTC Hero"
                style={{ width: '4.5rem', height: '4.5rem', objectFit: 'contain', marginBottom: '1rem' }}
              />

              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#71717a', fontWeight: 600 }}>
                CALCULATED CTC SCORE
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', margin: '0.5rem 0' }}>
                <span
                  style={{
                    fontSize: '3.75rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1,
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  {calculatedScore}
                </span>
                <span style={{ fontSize: '1.25rem', color: '#71717a' }}>/ 10.0</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: `1px solid ${badgeColor}`,
                  color: badgeColor,
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              >
                <Award size={14} />
                <span>{tier}</span>
              </div>

              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: '0 0 1.25rem 0', maxWidth: '280px' }}>
                Recruiters rely on this composite score to screen candidates automatically during high-volume campus hiring.
              </p>

              <Link
                to="/score-calculator"
                className="btn btn--primary"
                style={{ width: '100%' }}
              >
                <span>Full Radar Diagnostic Simulator</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
