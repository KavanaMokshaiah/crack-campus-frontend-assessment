import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustMarquee } from '../components/sections/TrustMarquee';
import { EcosystemSection } from '../components/sections/EcosystemSection';
import { CTCScoreSection } from '../components/sections/CTCScoreSection';
import { MonthlySeriesSection } from '../components/sections/MonthlySeriesSection';
import { InfrastructureSection } from '../components/sections/InfrastructureSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';

interface HomePageProps {
  onOpenSandbox: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenSandbox }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* 1. Hero Section with promotional backdrop */}
      <HeroSection onOpenSandbox={onOpenSandbox} />

      {/* 2. Trust Marquee of Hiring Partners */}
      <TrustMarquee />

      {/* 3. Dual-Core Ecosystem (Web Hub & Pro-Suite) */}
      <EcosystemSection onOpenSandbox={onOpenSandbox} />

      {/* 4. Beyond the Resume: The CTC Score */}
      <CTCScoreSection />

      {/* 5. Monthly Performance Series & Live Leaderboard */}
      <MonthlySeriesSection onOpenSandbox={onOpenSandbox} />

      {/* 6. Enterprise-Grade Scalability & Proctoring Infrastructure */}
      <InfrastructureSection />

      {/* 7. Searchable & Categorized FAQ Accordion */}
      <FAQSection />

      {/* 8. Campus Partnership & Consultation Inquiry */}
      <ContactSection />
    </div>
  );
};
