import React, { useState } from 'react';
import { AssessmentSandboxModal } from '../components/interactive/AssessmentSandboxModal';
import { Play, Clock, Code2 } from 'lucide-react';

export const PracticePage: React.FC = () => {
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('All');

  const practiceSuites = [
    {
      id: 'mock-1',
      title: 'TCS NQT & Accenture Aptitude Speed Drill',
      category: 'Aptitude',
      questionsCount: 20,
      duration: '25 Mins',
      difficulty: 'Intermediate',
      attempts: 42300,
      badge: 'Popular',
    },
    {
      id: 'mock-2',
      title: 'Tier-1 Coding: Dynamic Programming & Binary Trees',
      category: 'DSA',
      questionsCount: 4,
      duration: '45 Mins',
      difficulty: 'Hard',
      attempts: 28900,
      badge: 'High Impact',
    },
    {
      id: 'mock-3',
      title: 'Operating Systems & Concurrency In-Depth',
      category: 'Core CS',
      questionsCount: 15,
      duration: '20 Mins',
      difficulty: 'Intermediate',
      attempts: 19400,
      badge: 'Essential',
    },
    {
      id: 'mock-4',
      title: 'SQL Query Optimization, Indexes & DBMS Transactions',
      category: 'Core CS',
      questionsCount: 15,
      duration: '20 Mins',
      difficulty: 'Intermediate',
      attempts: 22100,
      badge: 'Essential',
    },
    {
      id: 'mock-5',
      title: 'Frontend Production Architecture (React & JS Virtual DOM)',
      category: 'Development',
      questionsCount: 12,
      duration: '30 Mins',
      difficulty: 'Hard',
      attempts: 11200,
      badge: 'Specialist',
    },
  ];

  const filtered =
    selectedTopic === 'All'
      ? practiceSuites
      : practiceSuites.filter((p) => p.category === selectedTopic);

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '6rem', backgroundColor: '#0b0b0e' }}>
      <div className="ctc-container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-header__tag">Training Ground</span>
          <h1 className="section-header__title">Pro-Suite Practice &amp; Assessment Center</h1>
          <p className="section-header__subtitle">
            Pressure-test your capabilities with real company-calibrated mock evaluations. Experience the actual zero-latency
            AI proctored environment before real drives.
          </p>
        </div>

        {/* Featured Sandbox Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 18, 30, 0.95) 0%, rgba(12, 10, 20, 0.95) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.4)',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            marginBottom: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            boxShadow: '0 20px 50px -10px rgba(0,0,0,0.8), 0 0 30px rgba(124, 58, 237, 0.15)',
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge--emerald">Interactive Simulation</span>
              <span className="badge badge--purple">Zero Lag Engine</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Launch Placement Sandbox Test
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Attempt our calibrated 4-question placement challenge right in your browser. Includes real algorithmic
              snippets, speed-aptitude problems, and instant detailed solutions.
            </p>
            <button
              type="button"
              onClick={() => setSandboxOpen(true)}
              className="btn btn--primary btn--lg"
            >
              <Play size={18} fill="#ffffff" />
              <span>Launch Live Mock Sandbox Now</span>
            </button>
          </div>

          <div
            style={{
              backgroundColor: '#0b0b0e',
              border: '1px solid #26262a',
              borderRadius: '1rem',
              padding: '1.5rem',
            }}
          >
            <div style={{ fontSize: '0.75rem', color: '#a78bfa', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              LIVE PROCTORING TELEMETRY SIMULATOR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d4d4d8' }}>
                <span>Environment:</span>
                <strong style={{ color: '#6ee7b7' }}>Browser Native / Pro-Suite Emulation</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d4d4d8' }}>
                <span>Focus Tracker:</span>
                <strong style={{ color: '#60a5fa' }}>Active (Tab-switch logging)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d4d4d8' }}>
                <span>Scoring Output:</span>
                <strong style={{ color: '#fcd34d' }}>Instant CTC Telemetry Impact</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Suites Filter */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['All', 'Aptitude', 'DSA', 'Core CS', 'Development'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedTopic(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: selectedTopic === cat ? '#7c3aed' : '#26262a',
                  backgroundColor: selectedTopic === cat ? 'rgba(124, 58, 237, 0.2)' : '#141418',
                  color: selectedTopic === cat ? '#ffffff' : '#a1a1aa',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#121216',
                border: '1px solid #26262a',
                borderRadius: '1.25rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge--purple">{item.category}</span>
                  <span className="badge badge--cyan">{item.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>

                <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.8125rem', color: '#71717a', marginBottom: '1.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} />
                    {item.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Code2 size={14} />
                    {item.questionsCount} Problems
                  </span>
                  <span>{item.attempts.toLocaleString()} Attempts</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSandboxOpen(true)}
                className="btn btn--outline"
                style={{ width: '100%' }}
              >
                <span>Take Mock Test</span>
                <Play size={14} fill="currentColor" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sandbox Modal */}
      <AssessmentSandboxModal isOpen={sandboxOpen} onClose={() => setSandboxOpen(false)} />
    </div>
  );
};
