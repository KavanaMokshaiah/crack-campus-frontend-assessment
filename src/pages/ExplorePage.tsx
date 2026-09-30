import React, { useState } from 'react';
import { COURSES_DATA, CORPORATE_PATHWAYS } from '../data/courses';
import type { CorporatePathway } from '../types';
import { Search, Sparkles, BookOpen, Clock, Users, Star, ArrowRight, Building, CheckCircle2, ChevronRight } from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
  const [selectedPathway, setSelectedPathway] = useState<CorporatePathway | null>(null);

  const categories = ['All', 'DSA', 'Aptitude', 'Core CS', 'Fullstack', 'AI & System'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCat = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch =
      search.trim() === '' ||
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase()) ||
      course.companyTags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const toggleEnroll = (courseId: string) => {
    setEnrolledCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '6rem', backgroundColor: '#0b0b0e' }}>
      <div className="ctc-container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="section-header__tag">Placement Academy</span>
          <h1 className="section-header__title">Corporate Pathways &amp; Skill Courses</h1>
          <p className="section-header__subtitle">
            Study industry-mapped curricula built directly from the latest recruitment patterns of Tier-1 product and
            consulting firms.
          </p>
        </div>

        {/* Section 1: Featured Corporate Pathways */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Sparkles size={20} color="#a78bfa" />
            <h2 style={{ fontSize: '1.5rem', color: '#ffffff', margin: 0 }}>Targeted Corporate Pathways</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {CORPORATE_PATHWAYS.map((pathway) => (
              <div
                key={pathway.id}
                style={{
                  backgroundColor: '#141418',
                  border: '1px solid #26262a',
                  borderRadius: '1.25rem',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#60a5fa', fontSize: '0.8125rem', fontWeight: 600 }}>
                      <Building size={16} />
                      <span>{pathway.companyName}</span>
                    </div>

                    <span
                      className={
                        pathway.status === 'Open'
                          ? 'badge badge--emerald'
                          : pathway.status === 'Filling Fast'
                          ? 'badge badge--amber'
                          : 'badge badge--purple'
                      }
                    >
                      {pathway.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    {pathway.role}
                  </h3>

                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8125rem', color: '#a1a1aa', marginBottom: '1rem' }}>
                    <span>Package: <strong style={{ color: '#10b981' }}>{pathway.salaryRange}</strong></span>
                    <span>&bull;</span>
                    <span>Min CTC: <strong style={{ color: '#c4b5fd' }}>{pathway.minCtcScore}+</strong></span>
                  </div>

                  {/* Required skills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                    {pathway.requiredSkills.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: '#1b1b22',
                          color: '#d4d4d8',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '0.25rem',
                          border: '1px solid #2e2e38',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #26262a', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: '#71717a' }}>Drive: {pathway.hiringDriveDate}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedPathway(pathway)}
                    className="btn btn--outline btn--sm"
                  >
                    <span>View Blueprint</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Skill Center Courses with Filter */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} color="#7c3aed" />
              <h2 style={{ fontSize: '1.5rem', color: '#ffffff', margin: 0 }}>Skill Center Courses</h2>
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '20rem' }}>
              <Search
                size={16}
                color="#71717a"
                style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search courses or companies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 1rem 0.6rem 2.4rem',
                  borderRadius: '9999px',
                  backgroundColor: '#141418',
                  border: '1px solid #26262a',
                  color: '#ffffff',
                  fontSize: '0.8125rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#7c3aed' : '#26262a',
                  backgroundColor: activeCategory === cat ? 'rgba(124, 58, 237, 0.2)' : '#141418',
                  color: activeCategory === cat ? '#ffffff' : '#a1a1aa',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredCourses.map((course) => {
              const isEnrolled = enrolledCourses.includes(course.id);
              return (
                <div
                  key={course.id}
                  style={{
                    backgroundColor: '#121216',
                    border: '1px solid #26262a',
                    borderRadius: '1.25rem',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span className="badge badge--purple">{course.category}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b', fontSize: '0.8125rem', fontWeight: 600 }}>
                        <Star size={14} fill="#f59e0b" color="#f59e0b" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                      {course.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {course.description}
                    </p>

                    <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.8125rem', color: '#71717a', marginBottom: '1.25rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={14} />
                        {course.duration}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Users size={14} />
                        {course.enrolledStudents.toLocaleString()} Students
                      </span>
                    </div>

                    {/* Company match pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                      {course.companyTags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.75rem',
                            color: '#a78bfa',
                            backgroundColor: 'rgba(124, 58, 237, 0.1)',
                            border: '1px solid rgba(124, 58, 237, 0.25)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '9999px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleEnroll(course.id)}
                    className={isEnrolled ? 'btn btn--outline' : 'btn btn--primary'}
                    style={{ width: '100%' }}
                  >
                    {isEnrolled ? (
                      <>
                        <CheckCircle2 size={16} color="#10b981" />
                        <span>Enrolled in Web Hub</span>
                      </>
                    ) : (
                      <>
                        <span>Start Free Module</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pathway Blueprint Modal */}
      {selectedPathway && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedPathway(null);
          }}
        >
          <div
            style={{
              backgroundColor: '#141418',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              borderRadius: '1.25rem',
              padding: '2rem',
              maxWidth: '32rem',
              width: '100%',
              boxShadow: '0 25px 50px rgba(0,0,0,0.9)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge badge--purple">{selectedPathway.companyName} Placement Blueprint</span>
              <button
                type="button"
                onClick={() => setSelectedPathway(null)}
                style={{ color: '#a1a1aa', cursor: 'pointer', padding: '0.25rem' }}
              >
                &times;
              </button>
            </div>

            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              {selectedPathway.role}
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
              Eligible for {selectedPathway.batchEligibility}. Expected salary bracket {selectedPathway.salaryRange}.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.8125rem', color: '#c4b5fd', fontWeight: 600 }}>Required Minimum CTC Score:</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981' }}>
                {selectedPathway.minCtcScore} / 10.0
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#71717a' }}>
                Passing this threshold automatically routes your profile to campus recruiters for direct test invites.
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPathway(null)}
              className="btn btn--primary"
              style={{ width: '100%' }}
            >
              Add to My Training Hub
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
