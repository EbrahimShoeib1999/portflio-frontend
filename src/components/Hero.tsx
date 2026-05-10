import { Github, Linkedin, Mail, Phone, Download, ArrowRight, Database, Server } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import img from "../assets/ibrahim.jpg";

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Hero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [typingText, setTypingText] = useState('');
  const fullText = t('hero.typingText');

  useEffect(() => {
    setTypingText('');
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [i18n.language]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/EbrahimShoeib1999', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ibrahim-shoeib-9b1339246/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ibrahimshoeib255@gmail.com', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/201024994092', label: 'WhatsApp' },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-primary/10 via-blue-600/5 to-transparent blur-[100px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] opacity-40 rounded-full" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-900/5 blur-[150px] opacity-30 rounded-full" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full mx-auto text-center relative z-10 pt-24 pb-16"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: easing }}
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-3xl p-1 bg-gradient-to-b from-border to-transparent shadow-2xl relative group overflow-hidden border border-border"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative z-10 bg-muted">
              <img
                src={img}
                alt="Ibrahim Mohamed Shoeib"
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>
            <div className="absolute top-0 start-0 w-4 h-4 border-t-2 border-s-2 border-primary/40 rounded-tl-xl" />
            <div className="absolute bottom-0 end-0 w-4 h-4 border-b-2 border-e-2 border-primary/40 rounded-br-xl" />
          </motion.div>
        </motion.div>

        {/* Typing badge */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-8 px-4">
          <Server className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="inline-block py-2 px-5 rounded-full bg-muted border border-border text-foreground/80 text-xs sm:text-sm font-bold tracking-wide min-w-0 overflow-hidden text-ellipsis whitespace-nowrap max-w-[260px] sm:max-w-none shadow-sm">
            {typingText}
            <span className="animate-pulse inline-block w-0.5 h-4 ms-1 bg-primary align-middle" />
          </span>
          <Database className="w-4 h-4 text-blue-500 flex-shrink-0" />
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants}>
          <h1 className="mb-4 text-4xl sm:text-6xl lg:text-8xl font-black text-foreground tracking-tighter leading-none">
            Ibrahim{' '}
            <span className="text-gradient-primary">
              Shoeib
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl sm:text-2xl md:text-4xl text-foreground font-extrabold tracking-tight px-4 mb-8">
            {isRTL ? (
              <>بناء أنظمة <span className="text-primary">SaaS و ERP</span> القابلة للتوسع</>
            ) : (
              <>Building scalable <span className="text-primary">SaaS &amp; ERP</span> systems</>
            )}
          </h2>
        </motion.div>

        <motion.p variants={itemVariants} className="text-foreground/70 dark:text-muted-foreground max-w-2xl mx-auto mb-12 text-base sm:text-lg font-medium leading-relaxed px-4">
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all font-bold text-base"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.viewWork')}
            <ArrowRight className={`ms-2 w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-background border-border text-foreground hover:bg-muted transition-all hover:border-primary/30 font-bold text-base shadow-sm"
            asChild
          >
            <a href="/Ibrahim_Mohamed Shoeib_Backend-Focused Full-Stack Developer resume.pdf" download="Ibrahim_Mohamed Shoeib_Backend-Focused Full-Stack Developer resume.pdf">
              <Download className="me-2 h-5 w-5 opacity-70" />
              {t('nav.resume')}
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon size={24} className="relative z-10" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
