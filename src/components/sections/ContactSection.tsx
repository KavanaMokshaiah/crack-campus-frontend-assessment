import React, { useState } from 'react';
import type { ContactFormData, LeadSubmissionResponse } from '../../types';
import { apiService } from '../../services/apiService';
import { Send, CheckCircle2, Phone, Mail, Building, User } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    college: '',
    phone: '',
    role: 'student',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<LeadSubmissionResponse | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'College or organization name is required.';
    }

    if (formData.phone.trim() && !/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (digits only).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details on how we can assist you.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more context (minimum 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await apiService.submitContactLead(formData);
      setSubmissionResult(response);
      setFormData({
        fullName: '',
        email: '',
        college: '',
        phone: '',
        role: 'student',
        message: '',
      });
      setErrors({});
    } catch (err: any) {
      setErrors({ message: err.message || 'Submission failed. Please check inputs and retry.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#0e0e13',
        borderBottom: '1px solid #26262a',
      }}
      aria-labelledby="contact-heading"
    >
      <div className="ctc-container">
        <div className="section-header">
          <span className="section-header__tag">Get In Touch</span>
          <h2 id="contact-heading" className="section-header__title">
            Partner with Crack The Campus
          </h2>
          <p className="section-header__subtitle">
            Whether you are a student preparing for upcoming drives, a placement officer scheduling campus assessments,
            or an employer seeking verified talent.
          </p>
        </div>

        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            backgroundColor: '#141418',
            border: '1px solid #26262a',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            boxShadow: '0 20px 50px -10px rgba(0,0,0,0.8)',
          }}
        >
          {submissionResult && (
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                animation: 'fadeIn 0.25s ease-out',
              }}
            >
              <CheckCircle2 size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
              <div>
                <strong style={{ color: '#6ee7b7', fontSize: '1rem', display: 'block' }}>
                  Inquiry Dispatched Successfully!
                </strong>
                <p style={{ color: '#d1fae5', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
                  {submissionResult.message}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Role Radio Pills */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#f4f4f5', marginBottom: '0.5rem' }}>
                I am reaching out as a:
              </label>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {[
                  { id: 'student', label: 'Student / Candidate' },
                  { id: 'college_admin', label: 'College / Placement Cell' },
                  { id: 'recruiter', label: 'Corporate Recruiter' },
                ].map((item) => (
                  <label
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      border: '1px solid',
                      borderColor: formData.role === item.id ? '#7c3aed' : '#26262a',
                      backgroundColor: formData.role === item.id ? 'rgba(124, 58, 237, 0.15)' : '#1a1a20',
                      color: formData.role === item.id ? '#ffffff' : '#a1a1aa',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={item.id}
                      checked={formData.role === item.id}
                      onChange={() => setFormData({ ...formData, role: item.id as any })}
                      style={{ accentColor: '#7c3aed' }}
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-fullName"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#d4d4d8', marginBottom: '0.35rem' }}
                >
                  Full Name <span style={{ color: '#f43f5e' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <User
                    size={16}
                    color="#71717a"
                    style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    id="contact-fullName"
                    type="text"
                    placeholder="e.g. Priyanshu Singh"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '0.5rem',
                      backgroundColor: '#1b1b22',
                      border: `1px solid ${errors.fullName ? '#f43f5e' : '#2e2e36'}`,
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      outline: 'none',
                    }}
                  />
                </div>
                {errors.fullName && (
                  <span style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#d4d4d8', marginBottom: '0.35rem' }}
                >
                  Email Address <span style={{ color: '#f43f5e' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail
                    size={16}
                    color="#71717a"
                    style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="name@college.edu or name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '0.5rem',
                      backgroundColor: '#1b1b22',
                      border: `1px solid ${errors.email ? '#f43f5e' : '#2e2e36'}`,
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      outline: 'none',
                    }}
                  />
                </div>
                {errors.email && (
                  <span style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* College / Organization */}
              <div>
                <label
                  htmlFor="contact-college"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#d4d4d8', marginBottom: '0.35rem' }}
                >
                  Institution / College / Company <span style={{ color: '#f43f5e' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <Building
                    size={16}
                    color="#71717a"
                    style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    id="contact-college"
                    type="text"
                    placeholder="e.g. RV College of Engineering"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '0.5rem',
                      backgroundColor: '#1b1b22',
                      border: `1px solid ${errors.college ? '#f43f5e' : '#2e2e36'}`,
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      outline: 'none',
                    }}
                  />
                </div>
                {errors.college && (
                  <span style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.college}
                  </span>
                )}
              </div>

              {/* Phone (Optional) */}
              <div>
                <label
                  htmlFor="contact-phone"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#d4d4d8', marginBottom: '0.35rem' }}
                >
                  Phone Number (Optional)
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone
                    size={16}
                    color="#71717a"
                    style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.5rem',
                      borderRadius: '0.5rem',
                      backgroundColor: '#1b1b22',
                      border: `1px solid ${errors.phone ? '#f43f5e' : '#2e2e36'}`,
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      outline: 'none',
                    }}
                  />
                </div>
                {errors.phone && (
                  <span style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label
                htmlFor="contact-message"
                style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#d4d4d8', marginBottom: '0.35rem' }}
              >
                Inquiry / Requirement Details <span style={{ color: '#f43f5e' }}>*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Tell us about your batch strength, target companies, or specific pathway requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#1b1b22',
                  border: `1px solid ${errors.message ? '#f43f5e' : '#2e2e36'}`,
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
              {errors.message && (
                <span style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn--primary btn--lg"
                style={{ width: '100%', maxWidth: '240px' }}
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
