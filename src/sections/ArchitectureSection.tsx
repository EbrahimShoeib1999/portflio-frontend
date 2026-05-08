import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { ArrowDown, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ArchitectureSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section
      id="architecture"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-card"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 start-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 end-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-16"
        >
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-muted border border-border flex items-center justify-center">
            <Layers className="w-7 h-7 text-primary" />
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            {t('architecture.title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t('architecture.subtitle')}
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <div className="relative">
          {/* Central connecting line */}
          <div className="absolute top-0 bottom-0 left-[27px] sm:left-1/2 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent sm:-translate-x-1/2 rounded-full hidden sm:block overflow-hidden">
            <motion.div
              className="w-full h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
              animate={{ y: ['-100%', '600%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="grid gap-10 sm:gap-8">
            {['frontend', 'api', 'business', 'database'].map((layerId, index) => {
              const isEven = index % 2 === 0;
              const layerColor = 
                layerId === 'frontend' ? 'from-blue-500 to-cyan-500' :
                layerId === 'api' ? 'from-green-500 to-emerald-500' :
                layerId === 'business' ? 'from-purple-500 to-violet-500' :
                'from-orange-500 to-red-500';

              return (
                <motion.div
                  key={layerId}
                  initial={{ opacity: 0, y: 20, x: isEven ? -10 : 10 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: easing }}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-16 ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Connector Node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-11 h-11 rounded-full bg-card border border-border z-10 shadow-sm">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${layerColor}`} />
                  </div>

                  {/* Card */}
                  <div className={`w-full sm:w-[calc(50%-3rem)] ${isEven ? (isRTL ? 'sm:text-left' : 'sm:text-right') : (isRTL ? 'sm:text-right' : 'sm:text-left')}`}>
                    <Card className="group relative rounded-2xl border border-border bg-background/80 backdrop-blur-xl p-6 sm:p-8 hover:bg-background transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg overflow-hidden">
                      <div className={`absolute top-0 ${isEven ? (isRTL ? 'left-0' : 'right-0') : (isRTL ? 'right-0' : 'left-0')} w-full h-[2px] bg-gradient-to-r ${layerColor} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />

                      <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">{t(`architecture.layers.${layerId}.title`)}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-5 font-light text-sm">{t(`architecture.layers.${layerId}.summary`)}</p>

                      {/* Tech stack block */}
                      <div className={`text-xs text-muted-foreground leading-relaxed font-mono bg-muted/50 p-4 rounded-xl border border-border inline-block w-full ${isEven ? (isRTL ? 'text-left' : 'text-right') : (isRTL ? 'text-right' : 'text-left')}`}>
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground/60 uppercase tracking-widest text-[10px]">
                          <span>{t('architecture.techStack')}</span>
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        {t(`architecture.layers.${layerId}.details`)}
                      </div>

                      {/* Mobile arrow */}
                      {index < 3 && (
                        <div className="absolute -bottom-8 start-6 sm:hidden">
                          <ArrowDown className="w-4 h-4 text-border" />
                        </div>
                      )}
                    </Card>
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}