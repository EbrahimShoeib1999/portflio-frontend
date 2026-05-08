import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, Lock, Mail, Loader2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';

export function AdminLogin() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isRTL = i18n.language === 'ar';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock login logic
    setTimeout(() => {
      if (email === 'admin@codex.com' && password === 'admin123') {
        localStorage.setItem('admin_auth', 'true');
        toast.success(t('dashboard.loginSuccess'));
        window.location.href = '/admin';
      } else {
        toast.error(t('dashboard.invalidCredentials'));
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center p-4" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[450px] relative z-10"
      >
        <div className="glass-card rounded-[2.5rem] border-white/10 p-8 md:p-10 shadow-2xl overflow-hidden relative group">
           {/* Glow Effect */}
           <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 blur-[60px] group-hover:bg-primary/30 transition-all duration-700" />

           <div className="flex flex-col items-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 relative">
                 <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
                 <Zap className="w-8 h-8 text-primary relative z-10" />
              </div>
              <h1 className="text-3xl font-black tracking-tight mb-2">{t('dashboard.title')} {t('dashboard.admin')}</h1>
              <p className="text-muted-foreground text-center">{t('dashboard.loginSubtitle')}</p>
           </div>

           <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className={`text-sm font-medium text-muted-foreground ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('dashboard.email')}</Label>
                <div className="relative group">
                  <Mail className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors`} />
                  <Input 
                    id="email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@codex.com"
                    className={`h-14 ${isRTL ? 'pr-12' : 'pl-12'} bg-white/5 border-white/10 focus:border-primary/50 rounded-2xl transition-all`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className={`flex justify-between items-center ${isRTL ? 'mr-1' : 'ml-1'}`}>
                  <Label htmlFor="password">{t('dashboard.password')}</Label>
                  <a href="#" className="text-xs text-primary hover:underline">{t('dashboard.forgotPassword')}</a>
                </div>
                <div className="relative group">
                  <Lock className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors`} />
                  <Input 
                    id="password"
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`h-14 ${isRTL ? 'pr-12' : 'pl-12'} bg-white/5 border-white/10 focus:border-primary/50 rounded-2xl transition-all`}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <span className="flex items-center gap-2">
                    {t('dashboard.accessDashboard')}
                    <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                  </span>
                )}
              </Button>
           </form>

           <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-sm text-muted-foreground">
                {t('dashboard.authorizedAccess')}
              </p>
           </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-muted-foreground text-xs font-light"
        >
          {t('footer.copyright')}
        </motion.p>
      </motion.div>
    </div>
  );
}
