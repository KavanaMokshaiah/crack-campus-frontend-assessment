import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

// Lazy loading route components for optimal initial bundle performance
const ExplorePage = lazy(() => import('../pages/ExplorePage').then((m) => ({ default: m.ExplorePage })));
const ScoreCalculatorPage = lazy(() =>
  import('../pages/ScoreCalculatorPage').then((m) => ({ default: m.ScoreCalculatorPage }))
);
const PracticePage = lazy(() => import('../pages/PracticePage').then((m) => ({ default: m.PracticePage })));
const InstitutionPage = lazy(() => import('../pages/InstitutionPage').then((m) => ({ default: m.InstitutionPage })));
const PricingPage = lazy(() => import('../pages/PricingPage').then((m) => ({ default: m.PricingPage })));
const DownloadPage = lazy(() => import('../pages/DownloadPage').then((m) => ({ default: m.DownloadPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

interface AppRoutesProps {
  onOpenSandbox: () => void;
  onOpenAuth?: (mode: 'login' | 'signup') => void;
}

const RouteLoadingFallback: React.FC = () => (
  <div
    style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0b0b0e',
      gap: '1rem',
    }}
  >
    <div
      style={{
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        border: '3px solid rgba(124, 58, 237, 0.2)',
        borderTopColor: '#7c3aed',
        animation: 'spin 0.8s linear infinite',
      }}
    />
    <span style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>Loading placement modules...</span>
  </div>
);

export const AppRoutes: React.FC<AppRoutesProps> = ({ onOpenSandbox }) => {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage onOpenSandbox={onOpenSandbox} />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/score-calculator" element={<ScoreCalculatorPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/institution" element={<InstitutionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
