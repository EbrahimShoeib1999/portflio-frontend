import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';
import type { Project } from '../types/project';
import { useModalStore } from '../hooks/useModalStore';
import { images } from './images';
import { useTranslation } from 'react-i18next'; // أضفنا الـ hook

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
const { t } = useTranslation();
  const openProjectModal = useModalStore((state) => state.openProjectModal);

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/50 shadow-xl shadow-black/30"
    >
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={images[project.img as keyof typeof images] || images.ecommerce}
          alt={t(`projectsData.${project.id}.title`)} // جلب الـ alt من الترجمة
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,_rgba(76,29,149,0.4),transparent_35%)] opacity-80" />

        {/* Inner scroll effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"
          initial={{ y: '100%' }}
          whileHover={{ y: '0%' }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-primary/80">{project.category}</p>
            {/* جلب العنوان من الترجمة */}
            <h3 className="text-2xl font-semibold text-white">{t(`projectsData.${project.id}.title`)}</h3>
          </div>
          {project.featured && (
            <Badge className="bg-yellow-500/15 text-yellow-300 border-yellow-500/40">{t('projects.featured')}</Badge>
          )}
        </div>

        {/* جلب الوصف من الترجمة */}
        <p className="text-white/70 line-clamp-3">{t(`projectsData.${project.id}.description`)}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto grid gap-3 sm:grid-cols-2">
          <Button
            variant="outline"
            size="sm"
            className="h-11 border-white/10 text-white/90 hover:border-primary/60"
            onClick={() => openProjectModal(project.id)}
          >
            {t('projects.caseStudy')}
          </Button>
          <Button
            size="sm"
            className="h-11 bg-primary hover:bg-primary/90 text-white"
            asChild
          >
            <a href={project.live} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-between text-sm text-white/60">
          <span className="inline-flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            {project.stars}
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}