import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Users, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section 
      id="experience" 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-20"
        >
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-muted border border-border flex items-center justify-center">
            <Briefcase className="w-7 h-7 text-primary" />
          </div>
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            {t('experience.title').split(' ')[0]}{' '}
            <span className="text-gradient-primary">
              {t('experience.title').split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-light">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8">
          {['erp-system-lead', 'saas-platform-architect', 'ecommerce-backend-dev'].map((expId, index) => {
            const exp = {
              id: expId,
              title: t(`experience.entries.${expId}.title`),
              period: t(`experience.entries.${expId}.period`),
              location: t(`experience.entries.${expId}.location`),
              teamSize: t(`experience.entries.${expId}.teamSize`),
              type: t(`experience.entries.${expId}.type`),
              description: t(`experience.entries.${expId}.description`),
              achievements: t(`experience.entries.${expId}.achievements`, { returnObjects: true }) as string[],
              challenges: t(`experience.entries.${expId}.challenges`, { returnObjects: true }) as string[],
              technologies: 
                expId === 'erp-system-lead' ? ['Node.js', 'PostgreSQL', 'React', 'Prisma', 'Redis', 'Docker'] :
                expId === 'saas-platform-architect' ? ['NestJS', 'PostgreSQL', 'React', 'TypeScript', 'Stripe API', 'AWS'] :
                ['Express.js', 'MongoDB', 'React', 'Redis', 'Stripe', 'Kubernetes']
            };
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: easing }}
              >
                <Card className="group relative rounded-3xl border border-border bg-card p-6 sm:p-10 hover:bg-muted/50 transition-all duration-500 overflow-hidden hover:shadow-lg hover:border-primary/20">
                  <div className={`absolute top-0 start-0 w-1.5 h-full bg-gradient-to-b from-primary to-blue-500 opacity-40 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-sm text-muted-foreground font-medium">
                        <span className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-lg border border-border">
                          <Calendar className="w-4 h-4 text-primary" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground/50" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground/50" />
                          {exp.teamSize}
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm whitespace-nowrap self-start">
                      {exp.type}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg font-light">
                    {exp.description}
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2 mb-8">
                    <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                      <h4 className="text-xs font-semibold text-primary mb-4 uppercase tracking-widest">
                        {t('footer.achievements')}
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground font-light text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                      <h4 className="text-xs font-semibold text-blue-500 mb-4 uppercase tracking-widest">
                        {t('footer.challenges')}
                      </h4>
                      <ul className="space-y-3">
                        {exp.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground font-light text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="rounded-xl border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground group-hover:text-foreground group-hover:border-primary/20 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}