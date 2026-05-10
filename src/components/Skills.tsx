import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, SiRedux, SiNestjs, SiPrisma, SiPostgresql, 
  SiReactquery, SiNextdotjs, SiTailwindcss, SiZod, SiMongodb,
  SiFramer, SiReacthookform,
  SiExpress, SiMui
} from 'react-icons/si';
import { 
  Layout, 
  Server, 
  Database as DbIcon, 
  Wrench, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Monitor
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// --- Types ---
interface Skill {
  name: string;
  icon: any;
  color: string;
  isMainStack?: boolean;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  colorClass: string;
  skills: Skill[];
}

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Skills() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('backend');

  const SKILLS_DATA: SkillCategory[] = [
    {
      id: 'backend',
      title: isRTL ? 'الخلفية (Backend)' : 'Backend',
      icon: Server,
      colorClass: 'from-red-500/20 to-rose-500/20 text-rose-500',
      skills: [
        { name: 'NestJS', icon: SiNestjs, color: '#E0234E', isMainStack: true },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', isMainStack: true },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', isMainStack: true },
      ],
    },
    {
      id: 'frontend',
      title: isRTL ? 'الأمامية (Frontend)' : 'Frontend',
      icon: Monitor,
      colorClass: 'from-blue-500/20 to-cyan-500/20 text-cyan-500',
      skills: [
        { name: 'React.js', icon: FaReact, color: '#61DAFB', isMainStack: true },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', isMainStack: true },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', isMainStack: true },
      ],
    },
    {
      id: 'state',
      title: isRTL ? 'إدارة الحالة' : 'State Management',
      icon: Layers,
      colorClass: 'from-purple-500/20 to-indigo-500/20 text-indigo-500',
      skills: [
        { name: 'Redux Toolkit (RTK)', icon: SiRedux, color: '#764ABC' },
        { name: 'RTK Query', icon: SiReactquery, color: '#764ABC' },
        { name: 'Zustand', icon: Zap, color: '#4338ca' },
        { name: 'Context API', icon: FaReact, color: '#61DAFB' },
      ],
    },
    {
      id: 'database',
      title: isRTL ? 'قواعد البيانات' : 'Database & ORM',
      icon: DbIcon,
      colorClass: 'from-emerald-500/20 to-teal-500/20 text-emerald-500',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', isMainStack: true },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748', isMainStack: true },
      ],
    },
    {
      id: 'forms',
      title: isRTL ? 'التحقق' : 'Forms & Validation',
      icon: ShieldCheck,
      colorClass: 'from-amber-500/20 to-yellow-500/20 text-amber-500',
      skills: [
        { name: 'React Hook Form', icon: SiReacthookform, color: '#EC5990' },
        { name: 'Zod', icon: SiZod, color: '#3E67B1' },
        { name: 'Yup', icon: ShieldCheck, color: '#F97316' },
        { name: 'Joi', icon: ShieldCheck, color: '#000000' },
      ],
    },
    {
      id: 'ui',
      title: isRTL ? 'التصميم' : 'UI & Design',
      icon: Layout,
      colorClass: 'from-pink-500/20 to-rose-500/20 text-pink-500',
      skills: [
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'shadcn/ui', icon: SiTailwindcss, color: '#000000' },
        { name: 'Material UI', icon: SiMui, color: '#007FFF' },
        { name: 'PrimeReact', icon: FaReact, color: '#1B6ED8' },
        { name: 'Flowbite', icon: SiTailwindcss, color: '#1C64F2' },
        { name: 'Framer Motion', icon: SiFramer, color: '#E91E63' },
      ],
    },
    {
      id: 'devops',
      title: isRTL ? 'الأدوات' : 'DevOps & Tools',
      icon: Wrench,
      colorClass: 'from-slate-500/20 to-zinc-500/20 text-slate-500',
      skills: [
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.25em] bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            {isRTL ? 'قدراتي التقنية' : 'Technical Capabilities'}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tighter mb-6">
            {t('skills.title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <Tabs defaultValue="backend" className="w-full" onValueChange={setActiveTab}>
          <div className="relative mb-12 sm:mb-16">
            {/* Mobile Edge Fade Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden" />

            <TabsList className="lg:justify-center px-6 md:px-2 mx-auto">
              {SKILLS_DATA.map((cat) => {
                const CatIcon = cat.icon;
                const isActive = activeTab === cat.id;

                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="gap-2.5 px-5 py-3"
                  >
                    <CatIcon size={16} />
                    <span>{cat.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute inset-0 bg-primary/5 rounded-xl blur-md -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
          </div>

  {/* Tabs Content */}
  <div className="relative min-h-[420px]">
    <AnimatePresence mode="wait">
      {SKILLS_DATA.map((category) => (
        <TabsContent
          key={category.id}
          value={category.id}
          className="mt-0 outline-none focus-visible:ring-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{
              duration: 0.4,
              ease: easing,
            }}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              sm:gap-6
            "
          >
            {category.skills.map((skill, skillIdx) => {
              const SkillIcon = skill.icon;

              return (
                <motion.div
                  key={skillIdx}
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                  }}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-4
                    sm:gap-5

                    p-5
                    sm:p-6

                    rounded-[1.75rem]
                    border

                    transition-all
                    duration-500

                    ${
                      skill.isMainStack
                        ? 'bg-primary/[0.02] border-primary/20 shadow-[0_0_25px_hsl(var(--primary)/0.02)]'
                        : 'bg-card/30 border-border/30 hover:border-primary/20 hover:bg-card/50 shadow-elegant'
                    }
                  `}
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-[0.02]
                      transition-opacity
                      duration-700
                      pointer-events-none
                    "
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${skill.color}, transparent 60%)`,
                    }}
                  />

                  {/* Icon */}
                  <div className="relative">
                    <div
                      className="
                        absolute
                        inset-0
                        blur-xl
                        opacity-0
                        group-hover:opacity-20
                        transition-opacity
                        duration-500
                      "
                      style={{
                        backgroundColor: skill.color,
                      }}
                    />

                    <div
                      className="
                        relative
                        w-12
                        h-12
                        sm:w-14
                        sm:h-14

                        rounded-2xl

                        bg-muted/40

                        flex
                        items-center
                        justify-center

                        border
                        border-border/40

                        group-hover:border-primary/30

                        transition-all
                        duration-500
                      "
                    >
                      <SkillIcon
                        className="
                          w-7
                          h-7
                          sm:w-8
                          sm:h-8

                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                        style={{
                          color: skill.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <h4
                      className="
                        text-sm
                        sm:text-base
                        font-black
                        text-foreground
                        group-hover:text-primary
                        transition-colors
                      "
                    >
                      {skill.name}
                    </h4>

                    {skill.isMainStack ? (
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />

                        <span
                          className="
                            text-[9px]
                            font-black
                            text-primary
                            uppercase
                            tracking-tighter
                          "
                        >
                          Premium Stack
                        </span>
                      </div>
                    ) : (
                      <span
                        className="
                          text-[9px]
                          font-bold
                          text-muted-foreground
                          uppercase
                          tracking-widest
                          opacity-60
                        "
                      >
                        Proficient
                      </span>
                    )}
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      translate-x-2
                      group-hover:translate-x-0
                    "
                  >
                    <Zap
                      size={14}
                      className="text-primary/70"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </TabsContent>
      ))}
    </AnimatePresence>
  </div>
</Tabs>

        {/* Footer CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-12 rounded-[3rem] glass-card border-border/40 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 text-gradient">
                {isRTL ? 'هندسة معمارية قوية' : 'Robust System Architecture'}
              </h3>
              <p className="text-muted-foreground font-medium max-w-lg leading-relaxed text-sm sm:text-base opacity-80">
                {isRTL 
                  ? 'أقوم ببناء تطبيقات كاملة تركز على الأداء العالي، الأمان، وقابلية التوسع باستخدام أحدث الأدوات والتقنيات.' 
                  : 'I engineer production-grade applications with a focus on high-performance, security, and extreme scalability.'}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 opacity-50 hover:opacity-100 transition-opacity duration-500">
               <SiNestjs size={28} className="sm:w-10 sm:h-10 hover:text-[#E0234E] transition-colors" />
               <FaReact size={28} className="sm:w-10 sm:h-10 hover:text-[#61DAFB] transition-colors" />
               <SiTypescript size={28} className="sm:w-10 sm:h-10 hover:text-[#3178C6] transition-colors" />
               <SiPrisma size={28} className="sm:w-10 sm:h-10 hover:text-white transition-colors" />
               <SiPostgresql size={28} className="sm:w-10 sm:h-10 hover:text-[#4169E1] transition-colors" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


