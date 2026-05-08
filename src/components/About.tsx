import { Code2, Database, Server, Workflow } from 'lucide-react';
import { Card } from './ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: Server,
      title: t('about.highlights.architecture.title'),
      description: t('about.highlights.architecture.description'),
    },
    {
      icon: Database,
      title: t('about.highlights.database.title'),
      description: t('about.highlights.database.description'),
    },
    {
      icon: Workflow,
      title: t('about.highlights.api.title'),
      description: t('about.highlights.api.description'),
    },
    {
      icon: Code2,
      title: t('about.highlights.frontend.title'),
      description: t('about.highlights.frontend.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute top-0 end-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: easing }}
          className="max-w-3xl mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            style={{ originX: isRTL ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1.5 bg-gradient-to-r from-primary to-blue-500 mb-8 rounded-full"
          />
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            {t('about.title')}{' '}
            <span className="text-muted-foreground font-light">
              {t('about.titleHighlight')}
            </span>
          </h2>
          <p className="text-foreground/80 dark:text-muted-foreground text-base sm:text-lg leading-relaxed font-light">
            {t('about.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="p-8 h-full bg-background border border-border hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2 rounded-[1.5rem] shadow-sm hover:shadow-lg">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                      <Icon className="text-muted-foreground group-hover:text-primary transition-colors duration-500" size={26} />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
