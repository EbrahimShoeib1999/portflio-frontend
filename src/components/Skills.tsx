import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Progress } from './ui/progress';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "ES6", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "framer motion", level: 92 },
        { name: "Redux", level: 85 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Next.js", level: 88 }
      ]
    },
    {
      id: 'backend',
      category: "Backend",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 93 },
        { name: "GraphQL", level: 80 },
        { name: "JWT", level: 88 },
        { name: "OAuth", level: 82 }
      ]
    },
    {
      id: 'database',
      category: "Database",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 78 },
        { name: "Mongoose", level: 88 },
        { name: "squlize", level: 83 }
      ]
    },
    {
      id: 'tools',
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 92 },
        // { name: "Docker", level: 80 },
        // { name: "AWS", level: 75 },
        // { name: "Jest", level: 85 },
        // { name: "Webpack", level: 78 },
        { name: "npm", level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
          <h2 className="mb-4 text-white">Technical Skills</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="p-8">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={activeTab === category.id ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div key={index} variants={itemVariants} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={activeTab === category.id ? { scaleX: 1 } : { scaleX: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          style={{ transformOrigin: 'left' }}
                        >
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70 mb-4">Additional Technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Frontend Tools & Libraries', 'Postman', 'VS Code', 'Backend & Server', 'Databases & Data Handling', 'Development & Deployment', 'Soft Skills & Management', 'GitHub Actions'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Badge variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
