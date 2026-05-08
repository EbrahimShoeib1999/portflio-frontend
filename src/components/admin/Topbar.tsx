import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  Menu,
  ChevronDown
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ThemeToggle } from '../ThemeToggle';
import { LanguageToggle } from '../LanguageToggle';

interface TopbarProps {
  toggleSidebar: () => void;
}

export function Topbar({ toggleSidebar }: TopbarProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <header className="h-20 bg-background/80 backdrop-blur-md border-b border-border px-4 md:px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="lg:hidden text-foreground"
        >
          <Menu size={24} />
        </Button>

        <div className="hidden md:flex items-center relative max-w-md w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder={t('dashboard.search')} 
            className="pl-10 bg-muted/50 border-border focus:border-primary/50 rounded-full h-10 w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full border border-border">
           <ThemeToggle />
           <div className="w-[1px] h-4 bg-border mx-1" />
           <LanguageToggle />
        </div>

        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
        </Button>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 pl-2 pr-4 py-1.5 bg-muted/50 hover:bg-muted border border-border rounded-full cursor-pointer transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-fuchsia-600 flex items-center justify-center font-bold text-xs text-white">
            IS
          </div>
          <div className={`hidden lg:block ${isRTL ? 'text-right' : 'text-left'}`}>
             <p className="text-sm font-bold leading-none text-foreground">Ibrahim S.</p>
             <p className="text-[10px] text-muted-foreground leading-none mt-1">{t('dashboard.adminAccount')}</p>
          </div>
          <ChevronDown size={14} className="text-muted-foreground" />
        </motion.div>
      </div>
    </header>
  );
}
