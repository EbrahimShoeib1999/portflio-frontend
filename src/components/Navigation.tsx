import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'skills', 'projects', 'architecture', 'api-design', 'system-thinking', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'architecture', label: t('nav.architecture') },
    { id: 'api-design', label: t('nav.apiDesign') },
    { id: 'system-thinking', label: t('nav.systemThinking') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 sm:top-5 left-0 right-0 z-[100] flex justify-center px-0 sm:px-6"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div
          className={`relative transition-all duration-500 ease-out ${
            scrolled
              ? 'bg-background/80 backdrop-blur-2xl border-b sm:border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full max-w-6xl sm:rounded-[2rem] px-5 py-2'
              : 'bg-transparent border-transparent w-full max-w-[90rem] px-8 py-6 sm:py-5'
          }`}
        >
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0 flex items-center gap-3 group"
            >
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/15 rounded-xl rotate-45 group-hover:rotate-90 transition-all duration-700 border border-primary/20" />
                <span className="font-black text-xl text-foreground relative z-10">I-S</span>
              </div>
              <span className="hidden lg:block font-black tracking-tighter text-lg text-foreground">Ibrahim-Shoeib</span>
            </motion.button>

            {/* Desktop Navigation - Optimized for better spacing */}
            <div className="hidden xl:flex items-center gap-1.5">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-3.5 h-9 text-[10px] uppercase tracking-[0.15em] font-black transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground/80 hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Right side Controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <div className="xl:hidden h-8 w-px bg-border/40 mx-0.5" />
              <motion.div className="xl:hidden" whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground hover:bg-muted/60 rounded-xl w-10 h-10 border border-transparent hover:border-border/40"
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-md z-[80] xl:hidden"
            />
            <motion.div
              initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isRTL ? -100 : 100, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 bottom-0 end-0 w-[300px] sm:w-[380px] z-[90] bg-background border-s border-border/50 shadow-2xl xl:hidden p-8 pt-28 flex flex-col"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
               <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar-hide">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 mb-6 px-4">Portfolio Navigation</span>
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.04 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full px-6 py-4 rounded-2xl text-sm font-black transition-all duration-300 text-start ${
                      activeSection === item.id
                        ? 'bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5'
                        : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-auto pt-8 border-t border-border/50">
                 <p className="text-[10px] text-muted-foreground/40 font-bold uppercase tracking-widest text-center italic">Engineering Portfolio v2.0</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
