import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { SectionTitle } from '../components/SectionTitle';
import { Code2, Server, Database, ShieldCheck } from 'lucide-react';

const strengths = [
  {
    Icon: Server,
    headline: 'Scalable Architecture',
    description: 'Designing systems that grow from MVP to enterprise scale with clean separation of concerns.',
  },
  {
    Icon: Code2,
    headline: 'Backend-First Development',
    description: 'Building robust APIs and services that power reliable frontend experiences.',
  },
  {
    Icon: Database,
    headline: 'Data-Driven Solutions',
    description: 'Optimizing database schemas and queries for performance and maintainability.',
  },
  {
    Icon: ShieldCheck,
    headline: 'Production-Ready Code',
    description: 'Implementing security, validation, and monitoring for real-world deployment.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05060d]">
      <SectionTitle
        label="About"
        title="Engineering scalable SaaS & ERP systems"
        description="I specialize in backend architecture and full-stack development, focusing on clean code, robust APIs, and systems that scale."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {strengths.map(({ Icon, headline, description }, index) => (
          <motion.div
            key={headline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/20 hover:border-primary/30 transition-colors">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-6">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{headline}</h3>
              <p className="text-white/70 leading-relaxed">{description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
