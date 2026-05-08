import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // 1. Session Management
    const getSessionId = () => {
      const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
      let sessionId = localStorage.getItem('analytics_sessionId');
      let lastSeen = localStorage.getItem('analytics_lastSeen');
      const now = Date.now();

      if (!sessionId || !lastSeen || (now - parseInt(lastSeen)) > SESSION_TIMEOUT) {
        sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('analytics_sessionId', sessionId);
      }
      
      localStorage.setItem('analytics_lastSeen', now.toString());
      return sessionId;
    };

    // 2. Helper to detect device
    const getDeviceType = () => {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'tablet';
      }
      if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return 'mobile';
      }
      return 'desktop';
    };

    // 3. Tracking Logic
    const trackVisit = async () => {
      const sessionId = getSessionId();
      
      try {
        await fetch('http://localhost:5000/api/analytics/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            page: location.pathname,
            userAgent: navigator.userAgent,
            deviceType: getDeviceType(),
            referrer: document.referrer || 'direct'
          })
        });
      } catch (err) {
        console.debug('Analytics tracking failed', err);
      }
    };

    // 4. Execution Rules (Requirement: 10s stay OR interaction)
    let hasTracked = false;
    
    const triggerTrack = () => {
      if (!hasTracked) {
        hasTracked = true;
        trackVisit();
        cleanup();
      }
    };

    const timer = setTimeout(triggerTrack, 10000); // 10 seconds stay

    const handleInteraction = () => {
      triggerTrack();
    };

    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    return cleanup;
  }, [location.pathname]);

  return null;
}
