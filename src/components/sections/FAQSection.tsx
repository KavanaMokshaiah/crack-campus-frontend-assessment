import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/faq';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string>('faq-1');

  const categories = ['All', 'General', 'Students', 'CTC Score', 'Institutions'];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section
      id="faq"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderBottom: '1px solid #26262a',
        backgroundColor: '#0b0b0e',
      }}
      aria-labelledby="faq-heading"
    >
      <div className="ctc-container">
        {/* Header */}
        <div className="section-header">
          <span className="section-header__tag">Got Questions?</span>
          <h2 id="faq-heading" className="section-header__title">
            Common Questions About Crack The Campus
          </h2>
          <p className="section-header__subtitle">
            Everything you need to know about the platform, proctoring security, placement pathways, and the CTC Score.
          </p>

          {/* Search bar */}
          <div
            style={{
              position: 'relative',
              maxWidth: '28rem',
              margin: '1.5rem auto 1rem auto',
            }}
          >
            <Search
              size={18}
              color="#71717a"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <input
              type="text"
              placeholder="Search placement queries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search FAQs"
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                borderRadius: '9999px',
                backgroundColor: '#141418',
                border: '1px solid #26262a',
                color: '#fafafa',
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '1rem',
            }}
          >
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
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '52rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredFaqs.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem',
                backgroundColor: '#141418',
                borderRadius: '1rem',
                border: '1px solid #26262a',
              }}
            >
              <HelpCircle size={32} color="#71717a" style={{ marginBottom: '0.5rem' }} />
              <p style={{ color: '#a1a1aa', margin: 0 }}>No matching answers found for "{searchQuery}".</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: isOpen ? '#16161c' : '#121216',
                    border: '1px solid',
                    borderColor: isOpen ? 'rgba(124, 58, 237, 0.4)' : '#26262a',
                    borderRadius: '0.875rem',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: isOpen ? '#ffffff' : '#f4f4f5',
                      fontWeight: 600,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      gap: '1rem',
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      color={isOpen ? '#a78bfa' : '#71717a'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      style={{
                        padding: '0 1.5rem 1.25rem 1.5rem',
                        color: '#a1a1aa',
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
                        animation: 'fadeIn 0.2s ease-out',
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
