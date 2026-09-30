import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Building2, Zap, HelpCircle } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'SUMMER25' || code === 'CTC2026' || code === 'STUDENT') {
      setAppliedDiscount(20);
      setCouponMessage({ text: 'Summer Coupon applied! Extra 20% discount activated.', type: 'success' });
    } else if (code === '') {
      setCouponMessage({ text: 'Please enter a coupon code.', type: 'error' });
    } else {
      setAppliedDiscount(0);
      setCouponMessage({ text: 'Invalid coupon code. Try SUMMER25 or CTC2026.', type: 'error' });
    }
  };

  const getProPrice = () => {
    let base = billingCycle === 'annual' ? 399 : 499;
    if (appliedDiscount > 0) {
      base = Math.round(base * (1 - appliedDiscount / 100));
    }
    return base;
  };

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '6rem', backgroundColor: '#0b0b0e' }}>
      <div className="ctc-container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-header__tag">Transparent Investment in Your Future</span>
          <h1 className="section-header__title">Plans Built for Campus Placement Success</h1>
          <p className="section-header__subtitle">
            Start for free to benchmark your foundational skills, or upgrade to Pro for verified credentials, company-specific corporate pathways, and direct recruiter access.
          </p>

          {/* Billing Cycle Switch */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#141418',
              border: '1px solid #26262a',
              borderRadius: '9999px',
              padding: '0.35rem',
              marginTop: '2rem',
              gap: '0.25rem',
            }}
          >
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: billingCycle === 'monthly' ? '#7c3aed' : 'transparent',
                color: billingCycle === 'monthly' ? '#ffffff' : '#a1a1aa',
              }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: billingCycle === 'annual' ? '#7c3aed' : 'transparent',
                color: billingCycle === 'annual' ? '#ffffff' : '#a1a1aa',
              }}
            >
              <span>Annual Billing</span>
              <span
                style={{
                  fontSize: '0.6875rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  backgroundColor: '#10b981',
                  color: '#000000',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Summer Coupon Redemption Box */}
        <div
          style={{
            maxWidth: '32rem',
            margin: '0 auto 3.5rem auto',
            backgroundColor: '#121216',
            border: '1px solid #26262a',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#c4b5fd', fontWeight: 600 }}>
            <Sparkles size={16} color="#fbbf24" />
            <span>Have a student discount code? (Try code SUMMER25)</span>
          </div>
          <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              placeholder="Enter coupon code (e.g. SUMMER25)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              style={{
                flex: 1,
                padding: '0.6rem 1rem',
                backgroundColor: '#0b0b0e',
                border: '1px solid #323238',
                borderRadius: '0.5rem',
                color: '#ffffff',
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              className="btn btn--outline"
              style={{ whiteSpace: 'nowrap', padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
            >
              Apply Code
            </button>
          </form>
          {couponMessage && (
            <div
              style={{
                fontSize: '0.8125rem',
                color: couponMessage.type === 'success' ? '#6ee7b7' : '#f87171',
                marginTop: '0.25rem',
              }}
            >
              {couponMessage.text}
            </div>
          )}
        </div>

        {/* 3 Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
            marginBottom: '5rem',
          }}
        >
          {/* Card 1: Free Starter */}
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Starter Tier
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Ideal for 1st &amp; 2nd year engineering students exploring placement requirements and test patterns.
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif' }}>
                  ₹0
                </span>
                <span style={{ color: '#71717a', fontSize: '0.875rem' }}>/ forever free</span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#26262a', marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  '5 Free Aptitude & Logical Speed Drills',
                  'Basic CTC Score Estimation',
                  'Access to 2 Corporate Pathways (TCS & Infosys basics)',
                  'Web Hub open learning modules',
                  'Community monthly contest participation',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: '#d4d4d8' }}>
                    <Check size={16} color="#7c3aed" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/explore" className="btn btn--outline" style={{ width: '100%' }}>
                Start Free Preparation
              </Link>
            </div>
          </div>

          {/* Card 2: Pro Student (Featured) */}
          <div
            style={{
              backgroundColor: '#151022',
              border: '2px solid #7c3aed',
              borderRadius: '1.25rem',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 0 40px -10px rgba(124, 58, 237, 0.35)',
              transform: 'scale(1.02)',
            }}
          >
            {/* Best Value Ribbon */}
            <div
              style={{
                position: 'absolute',
                top: '-0.85rem',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#7c3aed',
                color: '#ffffff',
                padding: '0.25rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                boxShadow: '0 4px 12px rgba(124,58,237,0.4)',
              }}
            >
              Recommended for Placements
            </div>

            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Pro Student
              </div>
              <p style={{ color: '#d4d4d8', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Complete campus-to-career preparation with verified proctored tests, full pathways, and recruiter credentialing.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif' }}>
                  ₹{getProPrice()}
                </span>
                <span style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>/ month</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#c4b5fd', marginBottom: '2rem' }}>
                {billingCycle === 'annual' ? 'Billed annually (₹4,788/yr)' : 'Billed monthly'}
                {appliedDiscount > 0 && ` • Extra ${appliedDiscount}% coupon discount applied`}
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(124, 58, 237, 0.3)', marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  'Unlimited AI-Proctored Mock Screenings',
                  'Defensible CTC Score Credential (0.0 - 10.0)',
                  'All Corporate Pathways (TCS, Infosys, Wipro, Accenture, Google)',
                  'Official Pro-Suite Desktop App access',
                  'AI Resume Optimizer (ATS-ready formatting)',
                  'Recruiter verification link & shareable badge',
                  'Priority access to monthly performance prize pools',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: '#ffffff' }}>
                    <Check size={16} color="#10b981" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 500 }}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/score-calculator" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Zap size={16} />
                <span>Get Pro Placement Access</span>
              </Link>
            </div>
          </div>

          {/* Card 3: Campus / Institution */}
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1.25rem',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Institution Suite
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                For engineering colleges, universities, and T&amp;P cells running batch-wide placement assessments.
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'Outfit, sans-serif' }}>
                  Custom
                </span>
                <span style={{ color: '#71717a', fontSize: '0.875rem' }}>/ campus quote</span>
              </div>

              <div style={{ height: '1px', backgroundColor: '#26262a', marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  '1,300+ drives high-concurrency exam engine',
                  'Dedicated college T&P analytics portal',
                  'AI Proctoring lock (webcam, tab & audio suppression)',
                  'Custom question bank & syllabus creation',
                  'NBA / NAAC outcome accreditation reports',
                  'Direct corporate recruitment pipeline sync',
                  'Dedicated SLA support & campus training',
                ].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: '#d4d4d8' }}>
                    <Check size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/institution" className="btn btn--outline" style={{ width: '100%' }}>
                <Building2 size={16} />
                <span>Request Campus Demo</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Comparison Matrix */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '1.75rem', color: '#ffffff', textAlign: 'center', marginBottom: '2rem' }}>
            Detailed Feature Breakdown
          </h2>
          <div
            style={{
              backgroundColor: '#121216',
              border: '1px solid #26262a',
              borderRadius: '1rem',
              overflowX: 'auto',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #26262a', backgroundColor: '#18181d' }}>
                  <th style={{ padding: '1rem 1.5rem', color: '#fafafa', fontSize: '0.875rem', fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: '1rem 1.5rem', color: '#fafafa', fontSize: '0.875rem', fontWeight: 600 }}>Starter (₹0)</th>
                  <th style={{ padding: '1rem 1.5rem', color: '#a78bfa', fontSize: '0.875rem', fontWeight: 600 }}>Pro Student</th>
                  <th style={{ padding: '1rem 1.5rem', color: '#f59e0b', fontSize: '0.875rem', fontWeight: 600 }}>Campus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Web Hub Access', free: 'Basic Modules', pro: 'Full Access', campus: 'Full Access' },
                  { name: 'Corporate Pathways', free: '2 Previews', pro: 'All 8+ Corporate Stacks', campus: 'All + Custom' },
                  { name: 'Practice Questions', free: '50 questions', pro: '1,500+ Questions', campus: 'Custom Bank' },
                  { name: 'AI Proctoring Engine', free: 'No', pro: 'Yes (Desktop Suite)', campus: 'Yes (Full Lockdown)' },
                  { name: 'Verified CTC Score', free: 'Estimated', pro: 'Defensible Recruiter Credential', campus: 'Defensible Recruiter Credential' },
                  { name: 'Resume ATS Optimizer', free: '1 scan', pro: 'Unlimited Scans', campus: 'Unlimited' },
                  { name: 'Monthly Contest Prizes', free: 'Leaderboard only', pro: 'Hardware & Scholarship Pool', campus: 'College Leaderboards' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #1c1c22' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#fafafa', fontSize: '0.875rem', fontWeight: 500 }}>{row.name}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#a1a1aa', fontSize: '0.875rem' }}>{row.free}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#6ee7b7', fontSize: '0.875rem', fontWeight: 600 }}>{row.pro}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#fcd34d', fontSize: '0.875rem' }}>{row.campus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#ffffff', textAlign: 'center', marginBottom: '1.5rem' }}>
            Frequently Asked Pricing Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'Can I cancel my Pro Student subscription anytime?',
                a: 'Yes. You can cancel your monthly or annual subscription directly from your account settings at any time with no cancellation penalties.',
              },
              {
                q: 'What is the summer discount code?',
                a: 'Use the code SUMMER25 or CTC2026 during checkout or apply it in the box above to get an instant 20% discount on any Pro subscription.',
              },
              {
                q: 'If my college signs up, do I still need a Pro account?',
                a: 'No! If your engineering college is an accredited Crack The Campus institutional partner, all enrolled students receive complimentary Pro Suite credentials provided by the college T&P cell.',
              },
              {
                q: 'How does the CTC Score help with placements?',
                a: 'Unlike unverified resume claims, the CTC Score is a 0.0 to 10.0 credential earned through proctored tests that recruiters trust, fast-tracking your resume to interview shortlists.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#121216',
                  border: '1px solid #26262a',
                  borderRadius: '0.75rem',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fafafa', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
                  <HelpCircle size={16} color="#a78bfa" />
                  <span>{faq.q}</span>
                </div>
                <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.5rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
