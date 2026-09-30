import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { User, Lock, Building, Mail, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [gradYear, setGradYear] = useState('2026');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleQuickDemoStudent = () => {
    setEmail('arjun.sharma@campus.edu.in');
    setPassword('Placement2026!');
    setFullName('Arjun Sharma');
    setCollegeName('RV College of Engineering');
    setErrors({});
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Enter a valid student or institutional email.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    if (mode === 'signup') {
      if (!fullName.trim()) errs.fullName = 'Full name is required.';
      if (!collegeName.trim()) errs.collegeName = 'College name is required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsLoggedIn(true);
      setTimeout(() => {
        setIsLoggedIn(false);
        onClose();
      }, 2000);
    }, 800);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'login' ? 'Sign In to Crack The Campus' : 'Create Student Account'}
      maxWidth="480px"
    >
      {isLoggedIn ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div
            style={{
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: '#10b981',
            }}
          >
            <CheckCircle2 size={32} />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>
            {mode === 'login' ? 'Welcome Back!' : 'Account Created Successfully!'}
          </h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
            Redirecting to your personalized CTC Score dashboard and Corporate Pathways...
          </p>
        </div>
      ) : (
        <div>
          {/* Role & Mode Switchers */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <button
              type="button"
              onClick={() => setMode('login')}
              style={{
                flex: 1,
                padding: '0.6rem',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: mode === 'login' ? '#7c3aed' : '#18181d',
                color: mode === 'login' ? '#ffffff' : '#a1a1aa',
                transition: 'all 0.2s',
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              style={{
                flex: 1,
                padding: '0.6rem',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: mode === 'signup' ? '#7c3aed' : '#18181d',
                color: mode === 'signup' ? '#ffffff' : '#a1a1aa',
                transition: 'all 0.2s',
              }}
            >
              New Student Signup
            </button>
          </div>

          {/* Quick Demo Pre-fill for reviewers */}
          <div
            style={{
              padding: '0.5rem 0.75rem',
              backgroundColor: 'rgba(124, 58, 237, 0.1)',
              border: '1px dashed rgba(124, 58, 237, 0.4)',
              borderRadius: '0.5rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#c4b5fd' }}>Want to test with sample student data?</span>
            <button
              type="button"
              onClick={handleQuickDemoStudent}
              style={{
                backgroundColor: '#7c3aed',
                color: '#ffffff',
                border: 'none',
                padding: '0.25rem 0.6rem',
                borderRadius: '0.35rem',
                fontSize: '0.6875rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Fill Demo Data
            </button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mode === 'signup' && (
              <>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', color: '#d4d4d8', marginBottom: '0.35rem' }}>
                    Full Name
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} color="#71717a" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      placeholder="e.g. Arjun Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.75rem 0.6rem 2.25rem',
                        backgroundColor: '#121216',
                        border: errors.fullName ? '1px solid #ef4444' : '1px solid #26262a',
                        borderRadius: '0.5rem',
                        color: '#ffffff',
                        fontSize: '0.875rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  {errors.fullName && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.fullName}</div>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', color: '#d4d4d8', marginBottom: '0.35rem' }}>
                    College / Institute
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Building size={16} color="#71717a" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      placeholder="e.g. RV College of Engineering"
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.75rem 0.6rem 2.25rem',
                        backgroundColor: '#121216',
                        border: errors.collegeName ? '1px solid #ef4444' : '1px solid #26262a',
                        borderRadius: '0.5rem',
                        color: '#ffffff',
                        fontSize: '0.875rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  {errors.collegeName && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.collegeName}</div>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', color: '#d4d4d8', marginBottom: '0.35rem' }}>
                    Graduation Year
                  </label>
                  <div style={{ position: 'relative' }}>
                    <GraduationCap size={16} color="#71717a" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <select
                      value={gradYear}
                      onChange={(e) => setGradYear(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.75rem 0.6rem 2.25rem',
                        backgroundColor: '#121216',
                        border: '1px solid #26262a',
                        borderRadius: '0.5rem',
                        color: '#ffffff',
                        fontSize: '0.875rem',
                        outline: 'none',
                      }}
                    >
                      <option value="2025">2025 (Immediate Hiring)</option>
                      <option value="2026">2026 (Pre-Final Year / Internships)</option>
                      <option value="2027">2027 (Foundational Preparation)</option>
                      <option value="2028">2028</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', color: '#d4d4d8', marginBottom: '0.35rem' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="#71717a" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  placeholder="student@college.edu.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.75rem 0.6rem 2.25rem',
                    backgroundColor: '#121216',
                    border: errors.email ? '1px solid #ef4444' : '1px solid #26262a',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    outline: 'none',
                  }}
                />
              </div>
              {errors.email && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</div>}
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', color: '#d4d4d8', marginBottom: '0.35rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color="#71717a" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.75rem 0.6rem 2.25rem',
                    backgroundColor: '#121216',
                    border: errors.password ? '1px solid #ef4444' : '1px solid #26262a',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    outline: 'none',
                  }}
                />
              </div>
              {errors.password && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.password}</div>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn--primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <span>{isSubmitting ? 'Authenticating...' : mode === 'login' ? 'Sign In' : 'Create My Account'}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Footer note */}
          <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.75rem', color: '#71717a' }}>
            By signing in, you agree to Crack The Campus Academic Integrity Standards and Proctored Code of Conduct.
          </div>
        </div>
      )}
    </Modal>
  );
};
