import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Briefcase, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import { Button } from '../ui/button';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isRTL = i18n.language === 'ar';

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: t('dashboard.title'), path: '/admin' },
    { id: 'projects', icon: Briefcase, label: t('dashboard.projects'), path: '/admin/projects' },
    { id: 'analytics', icon: BarChart3, label: t('dashboard.analytics'), path: '/admin/analytics' },
    { id: 'messages', icon: MessageSquare, label: t('dashboard.messages'), path: '/admin/messages' },
    { id: 'settings', icon: Settings, label: t('dashboard.settings'), path: '/admin/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    window.location.href = '/';
  };

  return (
    <motion.aside
      initial={false}
      animate={{ 
        width: isOpen ? 280 : 80,
        x: 0
      }}
      className={`fixed lg:relative z-50 h-screen bg-card border-r border-border flex flex-col transition-all duration-300 ease-in-out ${
        !isOpen && 'items-center'
      }`}
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <Zap className="w-5 h-5 text-primary relative z-10" />
          </div>
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl tracking-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60"
            >
              {t('dashboard.title')} {t('dashboard.admin')}
            </motion.span>
          )}
        </div>
      </div>

      {/* Toggle Button (Desktop) */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex absolute -right-4 top-16 w-8 h-8 rounded-full bg-card border border-border hover:bg-muted text-muted-foreground hover:text-foreground z-50 shadow-md"
      >
        {isOpen ? (isRTL ? <ChevronRight size={14} /> : <ChevronLeft size={14} />) : (isRTL ? <ChevronLeft size={14} /> : <ChevronRight size={14} />)}
      </Button>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.id} to={item.path}>
              <motion.div
                whileHover={{ x: isRTL ? -4 : 4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive 
                    ? 'bg-primary/10 text-primary shadow-[inset_0_0_20px_rgba(var(--primary),0.05)]' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className={`absolute ${isRTL ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'} w-1.5 h-6 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]`}
                  />
                )}
                <item.icon className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
                {isOpen && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-bold text-sm tracking-tight whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
                {!isOpen && (
                  <div className={`absolute ${isRTL ? 'right-full' : 'left-full'} ml-2 px-3 py-1.5 bg-foreground text-background text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-xl whitespace-nowrap z-50 pointer-events-none`}>
                    {item.label}
                  </div>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-500/10 transition-all ${
            !isOpen && 'justify-center'
          }`}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {isOpen && <span className="font-bold text-sm tracking-tight">{t('nav.logout')}</span>}
        </Button>
      </div>
    </motion.aside>
  );
}
