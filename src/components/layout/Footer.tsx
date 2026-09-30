import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowRight, CheckCircle2, Shield, Sparkles, Code2, MessageCircle, BriefcaseBusiness } from 'lucide-react';
import logoWebp from '../../assets/logo.webp';
import logoPng from '../../assets/logo.png';
import { apiService } from '../../services/apiService';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Please enter your email.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');
    try {
      await apiService.subscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Subscription failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#070709',
        borderTop: '1px solid #26262a',
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient glow at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '140px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="ctc-container">
        {/* Top Newsletter CTA Strip */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 26, 0.8) 0%, rgba(15, 10, 25, 0.8) 100%)',
            border: '1px solid #26262a',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            marginBottom: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="badge badge--purple" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={12} />
              Placement Intel Brief
            </span>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Stay ahead of company recruitment drives
            </h3>
            <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', margin: 0 }}>
              Get weekly updates on newly announced hiring pipelines, syllabus pattern shifts, and contest deadlines.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#6ee7b7',
                  fontSize: '0.9375rem',
                }}
              >
                <CheckCircle2 size={20} />
                <span>You are subscribed to the Weekly Placement Intelligence!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    placeholder="Enter your student email..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    required
                    style={{
                      flex: 1,
                      minWidth: '220px',
                      padding: '0.75rem 1rem',
                      borderRadius: '9999px',
                      background: '#0b0b0e',
                      border: '1px solid #323238',
                      color: '#fafafa',
                      fontSize: '0.875rem',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn--primary"
                    style={{ padding: '0.75rem 1.5rem' }}
                  >
                    {submitting ? 'Subscribing...' : 'Subscribe'}
                    <ArrowRight size={14} />
                  </button>
                </div>
                {errorMsg && (
                  <p style={{ color: '#f87171', fontSize: '0.8125rem', margin: '0.25rem 0 0 0.5rem' }}>{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem 2rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand & Vision Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <picture>
                <source srcSet={logoWebp} type="image/webp" />
                <img src={logoPng} alt="Crack The Campus" style={{ height: '2.25rem', width: 'auto' }} />
              </picture>
            </Link>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Campus-to-career infrastructure: Web Hub training, Pro-Suite verification, and defensible recruiter-trusted
              CTC Scores.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  background: '#141418',
                  border: '1px solid #26262a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a1a1aa',
                  transition: 'color 0.2s',
                }}
              >
                <Code2 size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  background: '#141418',
                  border: '1px solid #26262a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a1a1aa',
                  transition: 'color 0.2s',
                }}
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  background: '#141418',
                  border: '1px solid #26262a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a1a1aa',
                  transition: 'color 0.2s',
                }}
              >
                <BriefcaseBusiness size={16} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '1.25rem' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
              <li>
                <Link to="/explore" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  Explore Courses
                </Link>
              </li>
              <li>
                <Link to="/pricing" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  Pricing &amp; Coupons
                </Link>
              </li>
              <li>
                <Link to="/download" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  Download Desktop Suite
                </Link>
              </li>
              <li>
                <Link to="/institution" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  Campus Solutions
                </Link>
              </li>
              <li>
                <Link to="/score-calculator" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  CTC Score Simulator
                </Link>
              </li>
              <li>
                <Link to="/practice" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  Practice Sandbox
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Pathways */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '1.25rem' }}>
              Top Pathways
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/explore" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  Google SDE Track
                </Link>
              </li>
              <li>
                <Link to="/explore" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  Accenture AASE Prep
                </Link>
              </li>
              <li>
                <Link to="/explore" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  TCS Digital / Prime
                </Link>
              </li>
              <li>
                <Link to="/explore" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  Infosys Specialist Programmer
                </Link>
              </li>
              <li>
                <Link to="/explore" style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                  SAP Labs Platform Engineer
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional & Headquarters */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '1.25rem' }}>Headquarters</h4>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <MapPin size={18} color="#a78bfa" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
                Ground Floor, ThiDiff Tech Park, Metro Station - Patalamma Temple, near Singasandra, Aishwarya Crystal
                Layout, Singasandra, Bengaluru, Karnataka 560068
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} color="#a78bfa" />
              <a href="mailto:info@crackthecampus.com" style={{ fontSize: '0.8125rem', color: '#c4b5fd' }}>
                info@crackthecampus.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div
          style={{
            borderTop: '1px solid #1c1c22',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: '#71717a',
          }}
        >
          <p style={{ margin: 0 }}>&copy; 2026 Crack The Campus (Castlerockin Pvt Ltd). All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer', color: '#a1a1aa' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer', color: '#a1a1aa' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer', color: '#a1a1aa' }}>Proctoring Ethics</span>
            <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Shield size={13} />
              SOC2 &amp; GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
