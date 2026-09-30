import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Monitor, ArrowRight, CheckCircle2, BookOpen, Target, FileText, Activity, ShieldCheck, Lock, Award, Download } from 'lucide-react';
import badgeSkills from '../../assets/badge-skills.webp';
import badgeSoftware from '../../assets/badge-software.webp';

interface EcosystemSectionProps {
  onOpenSandbox?: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onOpenSandbox }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'web' | 'pro'>('both');

  return (
    <section
      id="ecosystem"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderBottom: '1px solid #26262a',
        backgroundColor: '#0b0b0e',
        position: 'relative',
      }}
      aria-labelledby="ecosystem-heading"
    >
      <div className="ctc-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__tag">Dual-Core Structure</span>
          <h2 id="ecosystem-heading" className="section-header__title">
            One Ecosystem. Two Ways to Win.
          </h2>
          <p className="section-header__subtitle">
            Start with open-access learning on the web, then prove your verified skills in an institution-grade hiring
            environment.
          </p>

          {/* Interactive view toggle buttons */}
          <div
            style={{
              display: 'inline-flex',
              padding: '0.25rem',
              backgroundColor: '#141418',
              borderRadius: '9999px',
              border: '1px solid #26262a',
              marginTop: '1.5rem',
              gap: '0.25rem',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              style={{
                padding: '0.4rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: '9999px',
                color: activeTab === 'both' ? '#ffffff' : '#a1a1aa',
                backgroundColor: activeTab === 'both' ? '#7c3aed' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              Unified Architecture
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              style={{
                padding: '0.4rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: '9999px',
                color: activeTab === 'web' ? '#ffffff' : '#a1a1aa',
                backgroundColor: activeTab === 'web' ? '#7c3aed' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              01 &bull; Web Hub
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pro')}
              style={{
                padding: '0.4rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: '9999px',
                color: activeTab === 'pro' ? '#ffffff' : '#a1a1aa',
                backgroundColor: activeTab === 'pro' ? '#7c3aed' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              02 &bull; Pro-Suite
            </button>
          </div>
        </div>

        {/* Dual Core Grid Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: activeTab === 'both' ? 'repeat(auto-fit, minmax(340px, 1fr))' : '1fr',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: The Web Hub */}
          {(activeTab === 'both' || activeTab === 'web') && (
            <div
              style={{
                backgroundColor: '#121216',
                border: '1px solid #26262a',
                borderRadius: '1.25rem',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s, border-color 0.25s',
              }}
            >
              {/* Subtle top indicator bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                }}
              />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#60a5fa',
                      }}
                    >
                      <Globe size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        01 &bull; WEB BROWSER
                      </span>
                      <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>The Web Hub</h3>
                    </div>
                  </div>

                  <img
                    src={badgeSkills}
                    alt="Web Hub Badge"
                    style={{ width: '3rem', height: '3rem', objectFit: 'contain' }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#e4e4e7', marginBottom: '0.35rem' }}>Your Daily Training Ground</h4>
                  <p style={{ fontSize: '0.875rem', color: '#a1a1aa', margin: 0 }}>
                    Open access to prepare anytime, anywhere. Master courses, build ATS-proof resumes, and train for
                    corporate tests.
                  </p>
                </div>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <BookOpen size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>AI-Assisted Courses</strong>
                      <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', margin: '0.15rem 0 0 0' }}>
                        Industry-mapped modules spanning DSA, System Design, Operating Systems &amp; Aptitude drills.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Target size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>Corporate Pathways</strong>
                      <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', margin: '0.15rem 0 0 0' }}>
                        Company-targeted tracks tailored to actual interview syllabi of Google, TCS, Accenture, and Infosys.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <FileText size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>AI Resume Builder</strong>
                      <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', margin: '0.15rem 0 0 0' }}>
                        Generate high-impact ATS-optimized resumes with verifiable CTC Score badges embedded.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Activity size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>Practice Assessments</strong>
                      <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', margin: '0.15rem 0 0 0' }}>
                        Unlimited low-pressure practice mocks to test speed, reasoning, and conceptual depth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <Link to="/explore" className="btn btn--outline" style={{ width: '100%' }}>
                <span>Explore Courses &amp; Pathways</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {/* Card 2: The Pro-Suite */}
          {(activeTab === 'both' || activeTab === 'pro') && (
            <div
              style={{
                backgroundColor: '#14121a',
                border: '1px solid rgba(124, 58, 237, 0.4)',
                borderRadius: '1.25rem',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 40px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(124, 58, 237, 0.1)',
                transition: 'transform 0.25s, border-color 0.25s',
              }}
            >
              {/* Subtle top indicator bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
                }}
              />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'rgba(124, 58, 237, 0.2)',
                        border: '1px solid rgba(124, 58, 237, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c4b5fd',
                      }}
                    >
                      <Monitor size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#c4b5fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        02 &bull; DESKTOP PRO-SUITE
                      </span>
                      <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>The Pro-Suite</h3>
                    </div>
                  </div>

                  <img
                    src={badgeSoftware}
                    alt="Pro Suite Badge"
                    style={{ width: '3rem', height: '3rem', objectFit: 'contain' }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#e4e4e7', marginBottom: '0.35rem' }}>The Official Hiring Environment</h4>
                  <p style={{ fontSize: '0.875rem', color: '#a1a1aa', margin: 0 }}>
                    The anti-cheat proctored desktop software that secures your placement credential and directly reaches
                    recruiters.
                  </p>
                </div>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Award size={18} color="#c4b5fd" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>Official Hiring Drives</strong>
                      <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', margin: '0.15rem 0 0 0' }}>
                        College placement drives and national employer tests executed under secure timed conditions.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <ShieldCheck size={18} color="#c4b5fd" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>AI Proctoring &amp; Anti-Cheating</strong>
                      <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', margin: '0.15rem 0 0 0' }}>
                        Multi-monitor lockdown, window focus tracking, and audio-visual telemetry ensuring 100% integrity.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Lock size={18} color="#c4b5fd" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>Recruiter-Trusted CTC Score</strong>
                      <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', margin: '0.15rem 0 0 0' }}>
                        High-stakes verification yields a composite score (0-10) recognized by HR teams nationwide.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#c4b5fd" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>Zero-Latency Execution</strong>
                      <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', margin: '0.15rem 0 0 0' }}>
                        Optimized desktop client running smoothly on Windows, Mac, and Linux laptops with minimal resource usage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/practice" className="btn btn--primary" style={{ flex: 1 }}>
                  <span>Launch Practice Test</span>
                  <ArrowRight size={16} />
                </Link>
                {onOpenSandbox && (
                  <button
                    type="button"
                    onClick={onOpenSandbox}
                    className="btn btn--secondary"
                    title="Try proctored simulator modal"
                  >
                    <Download size={15} />
                    <span>Demo Client</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
