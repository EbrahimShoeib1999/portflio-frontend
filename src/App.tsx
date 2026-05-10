import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { lazy } from 'react';
const Home = lazy(() => import('./components/Home').then(module => ({ default: module.Home })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
import { WhatsAppButton } from './components/WhatsAppButton';
import { CursorFollower } from './components/CursorFollower';
import { Toaster } from './components/ui/sonner';
import { Loader2 } from 'lucide-react';

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#020202] flex items-center justify-center">
    <Loader2 className="w-10 h-10 text-primary animate-spin" />
  </div>
);

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <CursorFollower />
      <WhatsAppButton />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Router>
  );
}
