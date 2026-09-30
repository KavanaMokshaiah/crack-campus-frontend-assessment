import React from 'react';
import { Building2, ShieldCheck, BarChart3 } from 'lucide-react';
import { ContactSection } from '../components/sections/ContactSection';

export const InstitutionPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '2.5rem', backgroundColor: '#0b0b0e' }}>
      <div className="ctc-container" style={{ marginBottom: '5rem' }}>
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <span className="section-header__tag">Campus &amp; University Solutions</span>
          <h1 className="section-header__title">Transform Your Institutional Placement Outcomes</h1>
          <p className="section-header__subtitle">
            Equip your campus with AI-proctored examination infrastructure, industry-mapped corporate pathways, and
            transparent student readiness analytics.
          </p>
        </div>

        {/* 3 Core Value Pillars for Colleges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a78bfa',
                  marginBottom: '1.25rem',
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Secure AI Proctoring Infrastructure
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                Run high-stakes screening exams on existing campus computer labs or remote student laptops. Includes
                lockdown browser controls, multi-monitor suppression, and automated tamper detection.
              </p>
            </div>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #1c1c22', marginTop: '1.5rem', fontSize: '0.8125rem', color: '#6ee7b7' }}>
              &check; 99.9% Uptime with local offline caching
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  marginBottom: '1.25rem',
                }}
              >
                <BarChart3 size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Accreditation &amp; Batch Analytics
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                Export one-click NBA/NAAC outcome compliance reports. Track department-wise readiness metrics, identify
                at-risk candidates early, and monitor batch progress across academic semesters.
              </p>
            </div>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #1c1c22', marginTop: '1.5rem', fontSize: '0.8125rem', color: '#6ee7b7' }}>
              &check; Automated T&amp;P roster generation
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f59e0b',
                  marginBottom: '1.25rem',
                }}
              >
                <Building2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Corporate Recruiter Pipeline
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                Attract top tier employers to your campus drives by offering pre-authenticated, recruiter-trusted CTC Score
                rosters that eliminate first-round filtering overhead.
              </p>
            </div>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #1c1c22', marginTop: '1.5rem', fontSize: '0.8125rem', color: '#6ee7b7' }}>
              &check; Direct company shortlisting integration
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Integration */}
      <ContactSection />
    </div>
  );
};
