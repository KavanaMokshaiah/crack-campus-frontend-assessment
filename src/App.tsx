import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { AssessmentSandboxModal } from './components/interactive/AssessmentSandboxModal';
import { AuthModal } from './components/interactive/AuthModal';
import './styles/main.scss';

// Component to scroll to top whenever route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ open: boolean; mode: 'login' | 'signup' }>({
    open: false,
    mode: 'login',
  });

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthModal({ open: true, mode });
  };

  return (
    <>
      <ScrollToTop />
      <Header
        onOpenSandbox={() => setSandboxOpen(true)}
        onOpenContact={handleOpenContact}
        onOpenAuth={handleOpenAuth}
      />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppRoutes onOpenSandbox={() => setSandboxOpen(true)} onOpenAuth={handleOpenAuth} />
      </main>
      <Footer />

      {/* Global Interactive Mock Assessment Sandbox */}
      <AssessmentSandboxModal
        isOpen={sandboxOpen}
        onClose={() => setSandboxOpen(false)}
      />

      {/* Global Interactive Student Auth Modal */}
      <AuthModal
        isOpen={authModal.open}
        initialMode={authModal.mode}
        onClose={() => setAuthModal((prev) => ({ ...prev, open: false }))}
      />
    </>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
