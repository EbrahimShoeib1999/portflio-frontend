import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../hooks/useThemeStore';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card hover:bg-muted transition-colors duration-200"
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'dark'
          ? <Sun className="h-4 w-4 text-amber-400" />
          : <Moon className="h-4 w-4 text-slate-600" />
        }
      </motion.div>
    </motion.button>
  );
}
