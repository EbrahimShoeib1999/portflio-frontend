import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted transition-all duration-200 text-xs font-medium text-muted-foreground hover:text-foreground"
      title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <span className={`transition-all ${isArabic ? 'opacity-50' : 'opacity-100 text-foreground font-semibold'}`}>EN</span>
      <div className="w-px h-3 bg-border" />
      <span className={`transition-all ${isArabic ? 'opacity-100 text-foreground font-semibold' : 'opacity-50'}`}>ع</span>
    </motion.button>
  );
}
