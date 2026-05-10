import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TimelineStepProps {
  label: string;
  title: string;
  description: string;
  index: number;
}

export function TimelineStep({ label, title, description, index }: TimelineStepProps) {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center sm:justify-between w-full mb-16 last:mb-0 group"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Central Line for mobile */}
      <div className="absolute start-[27px] top-14 bottom-[-64px] w-0.5 bg-border sm:hidden last:hidden" />

      {/* Desktop side content */}
      <div className={`hidden sm:block w-[calc(50%-3rem)] ${!isEven ? 'order-1 text-end' : 'order-3 text-start'}`}>
        {((!isEven && !isRTL) || (isEven && isRTL)) ? (
           <div className="pe-10">
             <h3 className="text-2xl font-black text-foreground tracking-tight mb-3">{title}</h3>
             <p className="text-foreground/70 dark:text-muted-foreground leading-relaxed font-medium">{description}</p>
           </div>
        ) : null}
      </div>

      {/* Center Node */}
      <div className="absolute start-0 sm:start-1/2 transform sm:-translate-x-1/2 flex flex-col items-center justify-center z-10 w-14 h-14 bg-background rounded-full border-4 border-card shadow-lg group-hover:border-primary/40 transition-all duration-500 order-2">
        <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
      </div>

      {/* Desktop/Mobile Card Content */}
      <div className={`w-full ps-20 sm:p-0 sm:w-[calc(50%-3rem)] ${isEven ? 'order-3' : 'order-1 sm:hidden'}`}>
        {isEven ? (
          <div className="sm:ps-10">
            <Badge className="mb-4 bg-primary text-primary-foreground border-none px-4 py-1 font-bold text-[10px] tracking-widest uppercase rounded-full shadow-sm">{label}</Badge>
            <h3 className="text-2xl font-black text-foreground tracking-tight mb-3">{title}</h3>
            <p className="text-foreground/70 dark:text-muted-foreground leading-relaxed font-medium">{description}</p>
          </div>
        ) : (
          <Card className="rounded-[2rem] border border-border bg-card p-8 shadow-xl sm:hidden relative overflow-hidden group-hover:border-primary/20 transition-all">
            <div className="absolute top-0 start-0 w-1.5 h-full bg-primary/40" />
            <Badge className="mb-4 bg-primary text-primary-foreground border-none px-4 py-1 font-bold text-[10px] tracking-widest uppercase rounded-full">{label}</Badge>
            <h3 className="text-xl font-black text-foreground tracking-tight mb-3">{title}</h3>
            <p className="text-foreground/70 dark:text-muted-foreground leading-relaxed font-medium text-sm">{description}</p>
          </Card>
        )}
      </div>
      
      {/* Mobile-only for even indexes */}
      {isEven && (
         <div className="w-full ps-20 sm:hidden absolute inset-0 flex items-center">
            <Card className="w-full rounded-[2rem] border border-border bg-card p-8 shadow-xl relative overflow-hidden group-hover:border-primary/20 transition-all">
              <div className="absolute top-0 start-0 w-1.5 h-full bg-primary/40" />
              <Badge className="mb-4 bg-primary text-primary-foreground border-none px-4 py-1 font-bold text-[10px] tracking-widest uppercase rounded-full">{label}</Badge>
              <h3 className="text-xl font-black text-foreground tracking-tight mb-3">{title}</h3>
              <p className="text-foreground/70 dark:text-muted-foreground leading-relaxed font-medium text-sm">{description}</p>
            </Card>
         </div>
      )}
    </motion.div>
  );
}
