import { Github, Linkedin, Mail, ArrowUp, Phone, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/EbrahimShoeib1999', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ibrahim-shoeib-9b1339246/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ibrahimshoeib255@gmail.com', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/201024994092', label: 'WhatsApp' },
  ];

  const navSections = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'system-thinking', label: t('nav.systemThinking') },
    { id: 'contact', label: t('nav.contact') },
    { id: 'privacy', label: t('privacyPolicy'), href: '/privacy' },
    { id: 'admin', label: t('dashboard.title'), href: '/admin' },
  ];

  return (
    <footer
      className="bg-card border-t border-border py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 start-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground">Ibrahim Shoeib</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-light mb-6 max-w-sm text-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-muted hover:bg-primary/10 border border-border hover:border-primary/30 flex items-center justify-center transition-all group"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <Icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h3 className="mb-5 text-xs font-semibold text-foreground uppercase tracking-widest">
              {t('footer.navigation')}
            </h3>
            <div className="space-y-2.5">
              {navSections.map((section) => (
                section.href ? (
                  <Link
                    key={section.id}
                    to={section.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
                  >
                    {section.label}
                  </Link>
                ) : (
                  <motion.button
                    key={section.id}
                    onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
                    whileHover={{ x: isRTL ? -4 : 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {section.label}
                  </motion.button>
                )
              ))}
            </div>
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <h3 className="mb-5 text-xs font-semibold text-foreground uppercase tracking-widest">
              {t('footer.systemStatus')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                {t('footer.allSystemsOk')}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                {t('footer.latestBuild')}: {new Date().toISOString().split('T')[0]}
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="bg-border my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xs font-light"
          >
            © {currentYear} Ibrahim Shoeib. {t('footer.copyright')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="gap-2 border border-border text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl h-9 text-xs"
            >
              {t('footer.backToTop')}
              <ArrowUp size={13} />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
