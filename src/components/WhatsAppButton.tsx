import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export function WhatsAppButton() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/201271138683"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`fixed bottom-8 ${isRTL ? 'right-8' : 'left-8'} z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg text-white cursor-pointer hover:shadow-xl transition-all duration-300`}
          aria-label={isRTL ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
        >
          <FaWhatsapp className="w-8 h-8" />
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-75"></div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
