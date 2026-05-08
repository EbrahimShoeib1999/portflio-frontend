import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  Clock, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Globe, 
  TrendingUp,
  History
} from 'lucide-react';

interface AnalyticsData {
  mostVisitedPages: { _id: string; count: number }[];
  deviceDistribution: { _id: string; count: number }[];
  recentVisits: {
    _id: string;
    page: string;
    deviceType: string;
    timestamp: string;
    ip?: string;
  }[];
}

interface AnalyticsInsightsProps {
  data: AnalyticsData | null;
}

export function AnalyticsInsights({ data }: AnalyticsInsightsProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  if (!data) return null;

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diff = Math.floor((now.getTime() - past.getTime()) / 60000); // minutes
    
    if (diff < 1) return t('analyticsInsight.justNow');
    return t('analyticsInsight.minutesAgo', { count: diff });
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Monitor;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Most Visited Pages */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-[2.5rem] border-border bg-card p-8 shadow-elegant overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <BarChart3 size={120} />
        </div>
        
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
            <TrendingUp size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{t('analyticsInsight.mostVisited')}</h3>
            <p className="text-sm text-muted-foreground">{t('analyticsInsight.subtitle')}</p>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          {data.mostVisitedPages.map((page, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 border border-border/50 group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center text-xs font-bold text-primary border border-border">
                  {idx + 1}
                </div>
                <span className="text-sm font-medium text-foreground/80 truncate max-w-[200px]">
                  {page._id}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-1.5 w-24 bg-muted rounded-full overflow-hidden hidden sm:block">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(page.count / data.mostVisitedPages[0].count) * 100}%` }}
                    className="h-full bg-primary"
                  />
                </div>
                <span className="text-sm font-bold text-foreground">{page.count}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-card rounded-[2.5rem] border-border bg-card p-8 shadow-elegant overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <History size={120} />
        </div>

        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{t('analyticsInsight.recentActivity')}</h3>
            <p className="text-sm text-muted-foreground">{t('analyticsInsight.subtitle')}</p>
          </div>
        </div>

        <div className="space-y-3 relative z-10">
          {data.recentVisits.map((visit, idx) => {
            const Icon = getDeviceIcon(visit.deviceType);
            return (
              <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground truncate max-w-[150px]">{visit.page}</p>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{visit.ip || 'ANONYMOUS'}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary/80 whitespace-nowrap bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                  {getTimeAgo(visit.timestamp)}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
