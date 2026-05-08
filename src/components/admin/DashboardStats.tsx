import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, animate } from 'framer-motion';
import { 
  Users, 
  MousePointer2, 
  Clock,
  Activity,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  trend?: string;
  icon: any;
  color: string;
  index: number;
}

function AnimatedValue({ value }: { value: number | string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (typeof value === 'number') {
      const controls = animate(displayValue, value, {
        duration: 1,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [value]);

  if (typeof value !== 'number') return <>{value}</>;
  return <>{displayValue}</>;
}

function StatCard({ title, value, trend, icon: Icon, color, index }: StatCardProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-[2.5rem] p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-elegant"
    >
      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-${color}/10 blur-3xl rounded-full group-hover:bg-${color}/20 transition-all duration-500`} />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-${color}/40 transition-colors`}>
          <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        {trend && (
           <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
             <TrendingUp size={12} />
             {trend}
           </div>
        )}
      </div>

      <div className="relative z-10">
        <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-1.5">{title}</h3>
        <p className="text-3xl font-black tracking-tight">
          <AnimatedValue value={value} />
        </p>
      </div>

      <div className={`mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors relative z-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span>{t('dashboard.viewDetails')}</span>
        <ArrowUpRight size={14} className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRTL ? 'rotate-[-90deg]' : ''}`} />
      </div>
    </motion.div>
  );
}

interface AnalyticsData {
  totalVisits: number;
  uniqueVisitors: number;
  activeUsers: number;
  avgSessionDuration: number;
}

export function DashboardStats({ data }: { data: AnalyticsData | null }) {
  const { t } = useTranslation();

  const displayStats = [
    { 
      title: t('dashboard.totalVisits'), 
      value: data?.totalVisits || 0, 
      trend: '+12%', 
      icon: MousePointer2, 
      color: 'primary' 
    },
    { 
      title: t('dashboard.uniqueVisitors'), 
      value: data?.uniqueVisitors || 0, 
      trend: '+18%', 
      icon: Users, 
      color: 'blue-400' 
    },
    { 
      title: t('dashboard.activeUsers'), 
      value: data?.activeUsers || 0, 
      icon: Activity, 
      color: 'fuchsia-400' 
    },
    { 
      title: t('dashboard.avgSessionDuration'), 
      value: `${data?.avgSessionDuration || 0}${t('seconds')}`, 
      icon: Clock, 
      color: 'orange-400' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayStats.map((stat, i) => (
        <StatCard key={i} {...stat} index={i} />
      ))}
    </div>
  );
}
