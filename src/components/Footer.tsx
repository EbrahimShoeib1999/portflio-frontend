import { Github, Linkedin, Mail,  ArrowUp ,Phone} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

   const socialLinks = [
    { icon: Github, href: 'https://github.com/EbrahimShoeib1999', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ibrahim-shoeib-9b1339246', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/u/1', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/201271138683', label: 'WhatsApp' },
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                <div className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_8px_rgba(163,230,53,0.6)]" />
                <div className="flex flex-col gap-0.5">
                  <div className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_8px_rgba(163,230,53,0.6)]" />
                  <div className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_8px_rgba(163,230,53,0.6)]" />
                </div>
              </div>
              <h3 className="uppercase tracking-wider text-white" style={{ fontFamily: 'monospace' }}>CODEX</h3>
            </div>
            <p className="text-white/70">
              Full Stack Developer specializing in MERN stack applications. 
              Building the web, one project at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/70 hover:text-primary transition-colors capitalize"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-white">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all group"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <Icon size={18} className="text-white/60 group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-white/70">
              Let's create something amazing together!
            </p>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/70 flex items-center gap-2"
          >
            © {currentYear}
             {/* Made with */}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              {/* <Heart size={16} className="text-primary fill-primary" /> */}
            </motion.span>
            by Ibrahim Shoeib
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="gap-2"
              asChild
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to top
                <ArrowUp size={16} />
              </motion.button>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
