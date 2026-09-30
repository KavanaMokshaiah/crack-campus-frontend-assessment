import React, { useState, useEffect } from 'react';
import type { ScoreFactors, CalculatedCtcScore } from '../../types';
import { apiService } from '../../services/apiService';
import { Sparkles, Building, CheckCircle2, Share2 } from 'lucide-react';
import badgeCtcHero from '../../assets/badge-ctc-hero.webp';

export const CTCScoreCalculator: React.FC = () => {
  const [factors, setFactors] = useState<ScoreFactors>({
    aptitudeScore: 82,
    dsaProblemSolving: 88,
    coreFundamentals: 76,
    projectsReadiness: 85,
    softSkillsComm: 80,
  });

  const [calculation, setCalculation] = useState<CalculatedCtcScore | null>(null);
  const [copied, setCopied] = useState(false);

  // Recalculate whenever factors change
  useEffect(() => {
    let isCurrent = true;

    apiService.calculateScore(factors).then((res) => {
      if (isCurrent) {
        setCalculation(res);
      }
    });

    return () => {
      isCurrent = false;
    };
  }, [factors]);

  const updateFactor = (key: keyof ScoreFactors, val: number) => {
    setFactors((prev) => ({ ...prev, [key]: val }));
  };

  const handleShare = () => {
    if (!calculation) return;
    const text = `I just benchmarked my Placement Readiness on Crack The Campus! My predicted CTC Score is ${calculation.finalScore}/10.0 (Top ${calculation.percentile}th percentile nationally). Check yours at Crack The Campus!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#121216',
        border: '1px solid #26262a',
        borderRadius: '1.25rem',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.8)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Sliders Input Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Sparkles size={16} color="#c4b5fd" />
            <span style={{ fontSize: '0.75rem', color: '#c4b5fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              CALIBRATED TELEMETRY
            </span>
          </div>

          <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.5rem' }}>
            Placement Signal Diagnostics
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '2rem' }}>
            Adjust your competency levels in each key hiring discipline to compute your composite CTC Score and view eligible
            corporate pathways.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* 1. Aptitude */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                <span style={{ color: '#e4e4e7', fontWeight: 500 }}>Quantitative &amp; Logical Aptitude</span>
                <span style={{ color: '#60a5fa', fontWeight: 700 }}>{factors.aptitudeScore}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={factors.aptitudeScore}
                onChange={(e) => updateFactor('aptitudeScore', Number(e.target.value))}
                style={{ width: '100%', accentColor: '#3b82f6', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.75rem', color: '#71717a' }}>Weight: 20% &bull; Used in initial placement filtration rounds</span>
            </div>

            {/* 2. DSA */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                <span style={{ color: '#e4e4e7', fontWeight: 500 }}>Data Structures &amp; Coding Speed</span>
                <span style={{ color: '#c4b5fd', fontWeight: 700 }}>{factors.dsaProblemSolving}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={factors.dsaProblemSolving}
                onChange={(e) => updateFactor('dsaProblemSolving', Number(e.target.value))}
                style={{ width: '100%', accentColor: '#7c3aed', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.75rem', color: '#71717a' }}>Weight: 35% &bull; Primary differentiator for Tier-1 engineering packages</span>
            </div>

            {/* 3. Core CS */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                <span style={{ color: '#e4e4e7', fontWeight: 500 }}>Core CS Fundamentals (OS, DBMS, Networks)</span>
                <span style={{ color: '#10b981', fontWeight: 700 }}>{factors.coreFundamentals}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={factors.coreFundamentals}
                onChange={(e) => updateFactor('coreFundamentals', Number(e.target.value))}
                style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.75rem', color: '#71717a' }}>Weight: 20% &bull; SQL query indexing, concurrency, and architecture</span>
            </div>

            {/* 4. Projects */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                <span style={{ color: '#e4e4e7', fontWeight: 500 }}>Production Projects &amp; Tech Stack Depth</span>
                <span style={{ color: '#f59e0b', fontWeight: 700 }}>{factors.projectsReadiness}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={factors.projectsReadiness}
                onChange={(e) => updateFactor('projectsReadiness', Number(e.target.value))}
                style={{ width: '100%', accentColor: '#f59e0b', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.75rem', color: '#71717a' }}>Weight: 15% &bull; Full-stack deployment and real-world system exposure</span>
            </div>

            {/* 5. Soft Skills */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                <span style={{ color: '#e4e4e7', fontWeight: 500 }}>Technical Communication &amp; HR Fit</span>
                <span style={{ color: '#06b6d4', fontWeight: 700 }}>{factors.softSkillsComm}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={factors.softSkillsComm}
                onChange={(e) => updateFactor('softSkillsComm', Number(e.target.value))}
                style={{ width: '100%', accentColor: '#06b6d4', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.75rem', color: '#71717a' }}>Weight: 10% &bull; Articulation of technical design decisions</span>
            </div>
          </div>
        </div>

        {/* Output Diagnostic Report Column */}
        {calculation && (
          <div
            style={{
              backgroundColor: '#0b0b0e',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              borderRadius: '1.25rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 12px 40px rgba(0,0,0,0.8), 0 0 30px rgba(124,58,237,0.15)',
              position: 'relative',
            }}
          >
            {/* Top Score Box */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <img
                src={badgeCtcHero}
                alt="CTC Hero Badge"
                style={{ width: '4.5rem', height: '4.5rem', objectFit: 'contain', margin: '0 auto 0.75rem auto' }}
              />

              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a78bfa', fontWeight: 700 }}>
                CALCULATED PLACEMENT SIGNAL
              </span>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  margin: '0.5rem 0',
                }}
              >
                <span
                  style={{
                    fontSize: '4.25rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    fontFamily: 'Outfit, sans-serif',
                    lineHeight: 1,
                  }}
                >
                  {calculation.finalScore.toFixed(1)}
                </span>
                <span style={{ fontSize: '1.5rem', color: '#71717a' }}>/ 10.0</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span
                  className={
                    calculation.tier === 'Elite'
                      ? 'badge badge--emerald'
                      : calculation.tier === 'Tier-1 Ready'
                      ? 'badge badge--purple'
                      : 'badge badge--amber'
                  }
                  style={{ fontSize: '0.8125rem', padding: '0.35rem 0.85rem' }}
                >
                  {calculation.statusBadge}
                </span>

                <span className="badge badge--cyan" style={{ fontSize: '0.8125rem', padding: '0.35rem 0.85rem' }}>
                  Top {calculation.percentile}% Nationally
                </span>
              </div>
            </div>

            {/* Matched Companies */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '0.5rem' }}>
                <Building size={14} />
                <span>Eligible Company Hiring Pools</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {calculation.eligibleCompanies.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#fafafa',
                      backgroundColor: '#1b1b22',
                      border: '1px solid #2e2e38',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0.375rem',
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Recommendations */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.8125rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '0.5rem' }}>
                Next Pathway Steps
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                {calculation.recommendations.map((rec, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.8125rem',
                      color: '#d4d4d8',
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Controls */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={handleShare}
                className="btn btn--outline"
                style={{ flex: 1 }}
              >
                <Share2 size={16} />
                <span>{copied ? 'Copied to Clipboard!' : 'Share Signal'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
