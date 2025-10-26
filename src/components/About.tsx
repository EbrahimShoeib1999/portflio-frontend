import { Code2, Database, Server, Smartphone } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Expert in React, modern JavaScript/TypeScript, and responsive design"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust APIs with Node.js, Express, and RESTful architecture"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Proficient in MongoDB, PostgreSQL, and database optimization"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices and platforms"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  } as const;

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-4 shadow-[0_0_10px_rgba(163,230,53,0.5)]"
          />
          <h2 className="mb-4 text-white">About Me</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            I'm a dedicated full-stack developer with a passion for creating innovative web solutions. 
            With expertise in the MERN stack, I bring ideas to life through clean code and thoughtful design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group border-border hover:border-primary/50">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </motion.div>
                  <h3 className="mb-2 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-[0_0_40px_rgba(163,230,53,0.1)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="mb-4 text-white">Let's Work Together</h3>
                <p className="text-white/70 mb-4">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
                    <span className="text-white/70">2+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
                    <span className="text-white/70">10+ Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
