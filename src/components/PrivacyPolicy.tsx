import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Smartphone, Globe, Clock, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const sections = [
    {
      icon: Eye,
      title: t('privacy.collection.title'),
      content: t('privacy.collection.description'),
      items: t('privacy.collection.items', { returnObjects: true }) as string[]
    },
    {
      icon: Globe,
      title: t('privacy.usage.title'),
      content: t('privacy.usage.description'),
      items: t('privacy.usage.items', { returnObjects: true }) as string[]
    },
    {
      icon: Clock,
      title: t('privacy.cookies.title'),
      content: t('privacy.cookies.description')
    },
    {
      icon: Lock,
      title: t('privacy.protection.title'),
      content: t('privacy.protection.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navigation />
      
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('privacy.subtitle')}
            </p>
          </motion.div>

          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-[2.5rem] mb-12 border-primary/10 bg-primary/5"
          >
            <div className="flex gap-4 items-start">
              <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-foreground/80 leading-relaxed font-medium">
                {t('privacy.intro')}
              </p>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 sm:p-10 rounded-[2.5rem] border-border hover:border-primary/20 transition-all group"
              >
                <div className={`flex flex-col sm:flex-row items-start gap-6 ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className="p-4 rounded-2xl bg-muted border border-border group-hover:border-primary/30 transition-colors">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                      {section.content}
                    </p>
                    {section.items && (
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-foreground/70 text-sm font-semibold">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Compliance Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center text-muted-foreground text-sm font-bold uppercase tracking-widest"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lock className="w-4 h-4" />
              <span>Secure & Private Architecture</span>
            </div>
            <p>© {new Date().getFullYear()} Ibrahim Shoeib. All rights reserved.</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
