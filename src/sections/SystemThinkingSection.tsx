import { motion } from 'framer-motion';
import { TimelineStep } from '../components/TimelineStep';
import { Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function SystemThinkingSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section
      id="system-thinking"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute top-0 end-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 start-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-16"
        >
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-muted border border-border flex items-center justify-center">
            <Workflow className="w-7 h-7 text-primary" />
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            {t('systemThinking.title').split(' ')[0]}{' '}
            <span className="text-gradient-primary">
              {t('systemThinking.title').split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-light">
            {t('systemThinking.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Central connecting line — desktop only */}
          <div className="hidden sm:block absolute top-0 bottom-0 start-1/2 w-0.5 bg-border -translate-x-1/2 rounded-full" />

          <div className="flex flex-col">
            {['analyze', 'design', 'build', 'optimize', 'scale'].map((stepId, index) => (
              <TimelineStep
                key={stepId}
                label={(index + 1).toString()}
                title={t(`systemThinking.steps.${stepId}.title`)}
                description={t(`systemThinking.steps.${stepId}.summary`)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}