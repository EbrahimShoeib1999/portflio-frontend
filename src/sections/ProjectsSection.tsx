import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { useProjects } from '../services/projectService';

export function ProjectsSection() {
  const { data: projects = [] } = useProjects();

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <SectionTitle
        label="Projects"
        title="Featured work"
        description="A selection of SaaS and ERP systems I've built, showcasing scalable architecture and modern development practices."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <CaseStudyModal />
    </section>
  );
}