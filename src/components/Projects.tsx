import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, Star, Loader2, ArrowRight, Layers, Server, Monitor } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { images } from "./images";
import { useProjects } from "../services/projectService";
import { useModalStore } from "../hooks/useModalStore";
import { useTranslation } from "react-i18next";

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Projects() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState("all");
  const { data: projects = [], isLoading } = useProjects();

  const openProjectModal = useModalStore((state) => state.openProjectModal);

  const filteredProjects = projects.filter((p) =>
    filter === "all" ? true : p.category === filter
  );

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easing },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-10 rounded-full" />
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easing }}
          className="mb-16 flex justify-center"
        >
          <Tabs value={filter} onValueChange={setFilter} className="w-fit">
            <TabsList className="relative flex h-auto bg-muted/20 border border-border/40 p-1.5 rounded-full shadow-lg backdrop-blur-md overflow-x-auto no-scrollbar max-w-[90vw] sm:max-w-none">
              <TabsTrigger 
                value="all" 
                className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 data-[state=active]:bg-purple-600/10 data-[state=active]:text-purple-400 data-[state=active]:border-purple-500/30 data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.15)] border border-transparent font-black text-[10px] sm:text-xs uppercase tracking-[0.1em]"
              >
                <Layers size={14} className="group-data-[state=active]:text-purple-400 opacity-60 group-data-[state=active]:opacity-100 transition-opacity" />
                {t('projects.all')}
              </TabsTrigger>
              
              <TabsTrigger 
                value="backend" 
                className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 data-[state=active]:bg-purple-600/10 data-[state=active]:text-purple-400 data-[state=active]:border-purple-500/30 data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.15)] border border-transparent font-black text-[10px] sm:text-xs uppercase tracking-[0.1em]"
              >
                <Server size={14} className="group-data-[state=active]:text-purple-400 opacity-60 group-data-[state=active]:opacity-100 transition-opacity" />
                {t('projects.backend')}
              </TabsTrigger>

              <TabsTrigger 
                value="frontend" 
                className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 data-[state=active]:bg-purple-600/10 data-[state=active]:text-purple-400 data-[state=active]:border-purple-500/30 data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.15)] border border-transparent font-black text-[10px] sm:text-xs uppercase tracking-[0.1em]"
              >
                <Monitor size={14} className="group-data-[state=active]:text-purple-400 opacity-60 group-data-[state=active]:opacity-100 transition-opacity" />
                {t('projects.frontend')}
              </TabsTrigger>

              <TabsTrigger 
                value="fullstack" 
                className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 data-[state=active]:bg-purple-600/10 data-[state=active]:text-purple-400 data-[state=active]:border-purple-500/30 data-[state=active]:shadow-[0_0_20px_rgba(147,51,234,0.15)] border border-transparent font-black text-[10px] sm:text-xs uppercase tracking-[0.1em]"
              >
                <ArrowRight size={14} className="group-data-[state=active]:text-purple-400 opacity-60 group-data-[state=active]:opacity-100 transition-opacity" />
                {t('projects.fullstack')}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
             <Loader2 className="w-8 h-8 animate-spin text-primary/30" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="group h-full">
                <Card className="flex flex-col h-full relative overflow-hidden rounded-[2rem] bg-card border border-border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl">
                  
                  {/* Image Section */}
                  <div className="relative h-[280px] overflow-hidden bg-muted">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    
                    <div className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100 origin-center">
                      <img 
                        src={images[project.img as keyof typeof images] || images.ecommerce} 
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                     
                    {project.featured && (
                      <div className="absolute top-6 end-6 z-20">
                        <Badge className="bg-primary text-primary-foreground border-none px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold shadow-lg">
                          {t('projects.featured')}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-8 pt-0 flex flex-col flex-1 relative z-20 -mt-16">
                    <div className="mb-6">
                      <div className="flex justify-between items-start mb-4 gap-4">
                         <h3 className="text-2xl font-extrabold text-foreground tracking-tight leading-tight">{project.title}</h3>
                         <div className="flex items-center gap-1.5 text-primary text-xs font-bold bg-primary/5 px-2.5 py-1.5 rounded-xl border border-primary/10 shadow-sm">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {project.stars}
                         </div>
                      </div>
                      <p className="text-foreground/80 dark:text-muted-foreground text-sm line-clamp-3 leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-xl bg-muted border border-border text-foreground/70 dark:text-muted-foreground font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-background border-border text-foreground transition-all rounded-2xl h-12 font-bold text-sm hover:border-primary/40 shadow-sm"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="me-2 h-4.5 w-4.5 opacity-70" />
                            {t('projects.source')}
                          </a>
                        </Button>
                        <Button 
                           onClick={() => openProjectModal(project.id)}
                           className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-2xl h-12 font-bold text-sm shadow-md shadow-primary/20"
                        >
                          {t('projects.caseStudy')} <ArrowRight className={`ms-2 h-4.5 w-4.5 ${isRTL ? 'rotate-180' : ''}`} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}