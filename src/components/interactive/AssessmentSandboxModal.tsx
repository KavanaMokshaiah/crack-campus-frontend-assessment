import React, { useState, useEffect } from 'react';
import { Modal } from '../common/Modal';
import { MOCK_ASSESSMENT_QUESTIONS } from '../../data/mockQuestions';
import { ShieldCheck, Clock, CheckCircle2, XCircle, ArrowRight, ArrowLeft, RefreshCw, Award } from 'lucide-react';

interface AssessmentSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentSandboxModal: React.FC<AssessmentSandboxModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes (300s)
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isSubmitted]);

  // Reset when re-opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setSelectedAnswers({});
      setTimeLeft(300);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const questions = MOCK_ASSESSMENT_QUESTIONS;
  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionLabel: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionLabel,
    }));
  };

  const calculateResults = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    const percentage = Math.round((correctCount / questions.length) * 100);
    return { correctCount, total: questions.length, percentage };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const results = isSubmitted ? calculateResults() : null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Pro-Suite Assessment Sandbox" maxWidth="48rem">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Top Status Bar: Proctoring & Timer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            backgroundColor: '#1b1b22',
            borderRadius: '0.75rem',
            border: '1px solid #26262a',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#10b981' }}>
            <ShieldCheck size={16} />
            <span style={{ fontWeight: 600 }}>AI Proctor Active</span>
            <span style={{ color: '#71717a' }}>&bull; Focus Lockdown Simulator</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: timeLeft < 60 ? '#f43f5e' : '#f59e0b',
              fontSize: '0.875rem',
              fontWeight: 700,
              fontFamily: 'monospace',
            }}
          >
            <Clock size={16} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {!isSubmitted ? (
          <>
            {/* Stepper Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {questions.map((q, idx) => {
                const isAnswered = !!selectedAnswers[q.id];
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '0.375rem',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      border: '1px solid',
                      borderColor: isCurrent ? '#7c3aed' : isAnswered ? '#10b981' : '#26262a',
                      backgroundColor: isCurrent
                        ? '#7c3aed'
                        : isAnswered
                        ? 'rgba(16, 185, 129, 0.15)'
                        : '#141418',
                      color: isCurrent ? '#ffffff' : isAnswered ? '#6ee7b7' : '#a1a1aa',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
              <span style={{ fontSize: '0.8125rem', color: '#71717a', marginLeft: 'auto' }}>
                Question {currentIndex + 1} of {questions.length}
              </span>
            </div>

            {/* Question Card */}
            <div
              style={{
                backgroundColor: '#16161c',
                border: '1px solid #26262a',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge--purple">{currentQuestion.topic}</span>
                <span className="badge badge--cyan">{currentQuestion.difficulty}</span>
              </div>

              <h4 style={{ fontSize: '1.125rem', color: '#fafafa', marginBottom: '1rem' }}>
                {currentQuestion.title}
              </h4>

              {currentQuestion.codeSnippet && (
                <pre
                  style={{
                    backgroundColor: '#0a0a0d',
                    border: '1px solid #26262a',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    color: '#c4b5fd',
                    fontSize: '0.8125rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    overflowX: 'auto',
                    marginBottom: '1.25rem',
                    lineHeight: 1.5,
                  }}
                >
                  <code>{currentQuestion.codeSnippet}</code>
                </pre>
              )}

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === opt.label;
                  return (
                    <div
                      key={opt.label}
                      onClick={() => handleSelectOption(opt.label)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid',
                        borderColor: isSelected ? '#7c3aed' : '#26262a',
                        backgroundColor: isSelected ? 'rgba(124, 58, 237, 0.15)' : '#121216',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span
                        style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          backgroundColor: isSelected ? '#7c3aed' : '#1c1c24',
                          color: '#ffffff',
                          flexShrink: 0,
                        }}
                      >
                        {opt.label}
                      </span>
                      <span style={{ fontSize: '0.875rem', color: isSelected ? '#ffffff' : '#d4d4d8' }}>
                        {opt.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stepper Navigation Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="btn btn--outline btn--sm"
              >
                <ArrowLeft size={15} />
                Previous
              </button>

              {currentIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="btn btn--secondary btn--sm"
                >
                  Next Question
                  <ArrowRight size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSubmitted(true)}
                  className="btn btn--primary btn--sm"
                >
                  Submit Assessment
                </button>
              )}
            </div>
          </>
        ) : (
          /* Results Breakdown View */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                backgroundColor: '#16161c',
                border: '1px solid #26262a',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <Award size={48} color="#7c3aed" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                Assessment Complete!
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', margin: 0 }}>
                Pro-Suite verified scoring telemetry recorded.
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  margin: '1.25rem 0',
                }}
              >
                <span style={{ fontSize: '3.5rem', fontWeight: 900, color: '#10b981', lineHeight: 1 }}>
                  {results?.percentage}%
                </span>
                <span style={{ fontSize: '1.125rem', color: '#71717a' }}>
                  ({results?.correctCount}/{results?.total} Correct)
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge badge--emerald">+0.3 CTC Score Telemetry Boost</span>
                <span className="badge badge--purple">Zero Anomaly Detected</span>
              </div>
            </div>

            {/* Answer Explanations Review */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h4 style={{ fontSize: '0.9375rem', color: '#fafafa', fontWeight: 600 }}>Detailed Solution Review:</h4>
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    style={{
                      backgroundColor: '#121216',
                      border: '1px solid',
                      borderColor: isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)',
                      borderRadius: '0.75rem',
                      padding: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      {isCorrect ? (
                        <CheckCircle2 size={16} color="#10b981" />
                      ) : (
                        <XCircle size={16} color="#f43f5e" />
                      )}
                      <strong style={{ color: '#fafafa', fontSize: '0.875rem' }}>
                        Q{idx + 1}: {q.title}
                      </strong>
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: '0.25rem 0' }}>
                      Your Answer:{' '}
                      <span style={{ color: isCorrect ? '#6ee7b7' : '#f87171', fontWeight: 600 }}>
                        Option {userAns || 'None'}
                      </span>{' '}
                      &bull; Correct:{' '}
                      <span style={{ color: '#6ee7b7', fontWeight: 600 }}>Option {q.correctAnswer}</span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: '#71717a', margin: '0.35rem 0 0 0', lineHeight: 1.5 }}>
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button
                type="button"
                onClick={() => {
                  setCurrentIndex(0);
                  setSelectedAnswers({});
                  setTimeLeft(300);
                  setIsSubmitted(false);
                }}
                className="btn btn--outline"
              >
                <RefreshCw size={15} />
                <span>Retry Mock</span>
              </button>
              <button type="button" onClick={onClose} className="btn btn--primary">
                Done &amp; Return
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
