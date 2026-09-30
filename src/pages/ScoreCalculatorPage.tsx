import React from 'react';
import { CTCScoreCalculator } from '../components/interactive/CTCScoreCalculator';
import { ShieldCheck, Target, Award } from 'lucide-react';

export const ScoreCalculatorPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '6rem', backgroundColor: '#0b0b0e' }}>
      <div className="ctc-container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-header__tag">Placement Signal Diagnostic</span>
          <h1 className="section-header__title">CTC Score Simulator &amp; Benchmarker</h1>
          <p className="section-header__subtitle">
            Evaluate your placement readiness across 5 core competency dimensions. Identify skill gaps before company
            registration deadlines.
          </p>
        </div>

        {/* Embedded Interactive Diagnostic Tool */}
        <div style={{ marginBottom: '4rem' }}>
          <CTCScoreCalculator />
        </div>

        {/* Informative Explanation: How the Score Operates */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1rem',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <ShieldCheck size={20} color="#7c3aed" />
              <h3 style={{ fontSize: '1.125rem', color: '#ffffff', margin: 0 }}>Defensible Anti-Cheat Signal</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              Because the score is anchored in AI-proctored Pro-Suite outcomes, recruiters trust it over self-reported
              resumes or easily gamified public profile counts.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1rem',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Target size={20} color="#10b981" />
              <h3 style={{ fontSize: '1.125rem', color: '#ffffff', margin: 0 }}>Company-Calibrated Thresholds</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              Each corporate pathway maintains explicit score cutoffs: 7.2+ for Mass Tech Consulting, 8.0+ for
              Specialist Programmer roles, and 8.8+ for Tier-1 Product Engineering.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1rem',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Award size={20} color="#f59e0b" />
              <h3 style={{ fontSize: '1.125rem', color: '#ffffff', margin: 0 }}>Institutional Endorsement</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              Partner colleges integrate the CTC Score directly into their Training &amp; Placement Cell (T&amp;P) databases to
              streamline shortlist allocations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
