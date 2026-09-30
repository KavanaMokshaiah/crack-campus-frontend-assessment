import React, { useState } from 'react';
import { CURRENT_SPRINT_INFO, LEADERBOARD_DATA } from '../../data/leaderboard';
import { Trophy, Clock, Gift, Medal, Flame, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MonthlySeriesSectionProps {
  onOpenSandbox?: () => void;
}

export const MonthlySeriesSection: React.FC<MonthlySeriesSectionProps> = ({ onOpenSandbox }) => {
  const [filterTier, setFilterTier] = useState<string>('all');

  const filteredEntries =
    filterTier === 'all'
      ? LEADERBOARD_DATA
      : LEADERBOARD_DATA.filter((e) => e.tier.toLowerCase() === filterTier.toLowerCase());

  return (
    <section
      id="explore"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderBottom: '1px solid #26262a',
        backgroundColor: '#0b0b0e',
        position: 'relative',
      }}
      aria-labelledby="monthly-series-heading"
    >
      <div className="ctc-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__tag">The Monthly Sprint</span>
          <h2 id="monthly-series-heading" className="section-header__title">
            The Monthly Performance Series.
          </h2>
          <p className="section-header__subtitle">
            Test your placement readiness, compete with engineering peers across India, and earn verified recruiter
            credentials.
          </p>
        </div>

        {/* Sprint Overview & Rewards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Active Competition Card */}
          <div
            style={{
              backgroundColor: '#141418',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              borderRadius: '1.25rem',
              padding: '2rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 12px 36px -10px rgba(0, 0, 0, 0.8), 0 0 24px rgba(124, 58, 237, 0.1)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="badge badge--emerald" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      boxShadow: '0 0 6px #10b981',
                    }}
                  />
                  {CURRENT_SPRINT_INFO.status}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f59e0b', fontSize: '0.8125rem', fontWeight: 600 }}>
                  <Clock size={15} />
                  <span>Ends in {CURRENT_SPRINT_INFO.endsInDays}d {CURRENT_SPRINT_INFO.endsInHours}h</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                {CURRENT_SPRINT_INFO.title}
              </h3>
              <p style={{ color: '#c4b5fd', fontSize: '0.9375rem', fontWeight: 500, marginBottom: '1rem' }}>
                {CURRENT_SPRINT_INFO.theme}
              </p>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Every month, we launch a new Corporate Pathway challenge. Master the company-specific tech stack, top the
                leaderboard, and unlock direct interview referrals.
              </p>

              {/* Contest Telemetry Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#1b1b22',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #26262a',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#71717a' }}>Participants</div>
                  <strong style={{ fontSize: '1.125rem', color: '#ffffff' }}>
                    {CURRENT_SPRINT_INFO.participantsCount.toLocaleString()} Students
                  </strong>
                </div>
                <div
                  style={{
                    backgroundColor: '#1b1b22',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #26262a',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#71717a' }}>Proctoring Engine</div>
                  <strong style={{ fontSize: '1.125rem', color: '#10b981' }}>Pro-Suite AI Active</strong>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/practice" className="btn btn--primary" style={{ flex: 1 }}>
                <span>Enter Monthly Sprint</span>
                <Flame size={16} />
              </Link>
              {onOpenSandbox && (
                <button
                  type="button"
                  onClick={onOpenSandbox}
                  className="btn btn--outline"
                >
                  Preview Questions
                </button>
              )}
            </div>
          </div>

          {/* Tier Rewards Breakdown Card */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Gift size={20} color="#f59e0b" />
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>Career Bounties &amp; Rewards</h3>
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                We reward commitment and problem solving excellence with tangible academic grants and recruitment pipelines.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Elite Tier */}
                <div
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Medal size={16} color="#f59e0b" />
                    <strong style={{ color: '#fcd34d', fontSize: '0.875rem' }}>Elite Tier (Top 5%)</strong>
                  </div>
                  <p style={{ color: '#e4e4e7', fontSize: '0.8125rem', margin: 0 }}>
                    {CURRENT_SPRINT_INFO.bounties.elite}
                  </p>
                </div>

                {/* Growth Tier */}
                <div
                  style={{
                    backgroundColor: 'rgba(124, 58, 237, 0.08)',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Sparkles size={16} color="#c4b5fd" />
                    <strong style={{ color: '#ddd6fe', fontSize: '0.875rem' }}>Growth Tier (Next 20%)</strong>
                  </div>
                  <p style={{ color: '#e4e4e7', fontSize: '0.8125rem', margin: 0 }}>
                    {CURRENT_SPRINT_INFO.bounties.growth}
                  </p>
                </div>

                {/* Participation Tier */}
                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Trophy size={16} color="#6ee7b7" />
                    <strong style={{ color: '#a7f3d0', fontSize: '0.875rem' }}>Participation Tier (All Finishers)</strong>
                  </div>
                  <p style={{ color: '#e4e4e7', fontSize: '0.8125rem', margin: 0 }}>
                    {CURRENT_SPRINT_INFO.bounties.participation}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '1.25rem', fontSize: '0.8125rem', color: '#71717a' }}>
              All scores are audited by anti-cheating algorithms prior to bounty distribution.
            </div>
          </div>
        </div>

        {/* Live Leaderboard Interactive Table */}
        <div
          style={{
            backgroundColor: '#121216',
            border: '1px solid #26262a',
            borderRadius: '1.25rem',
            padding: '2rem',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>Live Leaderboard Preview</h3>
              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: '0.2rem 0 0 0' }}>
                Rankings update after every proctored sprint submission
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Filter size={15} color="#71717a" />
              {(['all', 'elite', 'growth', 'participation'] as const).map((tierKey) => (
                <button
                  key={tierKey}
                  type="button"
                  onClick={() => setFilterTier(tierKey)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    borderRadius: '9999px',
                    border: '1px solid',
                    borderColor: filterTier === tierKey ? '#7c3aed' : '#26262a',
                    backgroundColor: filterTier === tierKey ? 'rgba(124, 58, 237, 0.2)' : '#18181d',
                    color: filterTier === tierKey ? '#ffffff' : '#a1a1aa',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {tierKey === 'all' ? 'All Tiers' : tierKey}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.875rem',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid #26262a', color: '#71717a', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Rank</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Participant</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Institution / College</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Sprint Points</th>
                  <th style={{ padding: '0.75rem 1rem' }}>CTC Score</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Badge Awarded</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((student) => (
                  <tr
                    key={student.rank}
                    style={{
                      borderBottom: '1px solid #1c1c22',
                      backgroundColor: student.rank <= 3 ? 'rgba(124, 58, 237, 0.04)' : 'transparent',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <td style={{ padding: '1rem', fontWeight: 700, color: student.rank === 1 ? '#f59e0b' : '#fafafa' }}>
                      #{student.rank}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div
                          style={{
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            backgroundColor: '#26262a',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 600,
                            fontSize: '0.8125rem',
                          }}
                        >
                          {student.name.charAt(0)}
                        </div>
                        <span style={{ fontWeight: 600, color: '#fafafa' }}>{student.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', color: '#a1a1aa' }}>{student.college}</td>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#c4b5fd' }}>
                      {student.points.toLocaleString()} pts
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span
                        style={{
                          fontWeight: 700,
                          color: student.ctcScore >= 9.0 ? '#10b981' : '#60a5fa',
                        }}
                      >
                        {student.ctcScore.toFixed(1)}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span
                        className={
                          student.tier === 'Elite'
                            ? 'badge badge--amber'
                            : student.tier === 'Growth'
                            ? 'badge badge--purple'
                            : 'badge badge--cyan'
                        }
                      >
                        {student.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
