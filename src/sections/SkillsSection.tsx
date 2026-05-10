import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { SectionTitle } from '../components/SectionTitle';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiZod,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Backend',
    skills: [
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Validation & Tools',
    skills: [
      { name: 'Zod', icon: SiZod, color: '#3E67B1' },
      { name: 'Joi', icon: FaCheckCircle, color: '#F04E37' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <SectionTitle
        label="Skills"
        title="Technical expertise"
        description="Core technologies and tools I use to build scalable systems and modern applications."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {skillCategories.map((category: any, categoryIndex: number) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <Card className="rounded-[2rem] border border-border bg-card p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="grid gap-4">
                {category.skills.map((skill: any, skillIndex: number) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: skill.color }} />
                      </div>
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
