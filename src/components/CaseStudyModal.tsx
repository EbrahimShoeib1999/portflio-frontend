import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Wrench, AlertTriangle, Database, LayoutTemplate, Zap, Braces, Code2 } from 'lucide-react';
import { useModalStore } from '../hooks/useModalStore';
import { useProjectById } from '../services/projectService';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useTranslation } from 'react-i18next';

export function CaseStudyModal() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { activeProjectId, isProjectModalOpen, closeProjectModal } = useModalStore();
  const { data: project } = useProjectById(activeProjectId || undefined);

  const sections = useMemo(() => {
    if (!project?.id) return [];
    
    // دالة مساعدة لجلب النصوص من ملف الترجمة بسهولة
    const getT = (key: string) => t(`projectsData.${project.id}.caseStudy.${key}`, '');
    
    // جلب المصفوفات (التحديات) من ملف الترجمة
    const challenges = t(`projectsData.${project.id}.caseStudy.challenges`, { returnObjects: true }) as string[];

    const baseSections = [];

    const problem = getT('problem');
    if (problem) baseSections.push({ 
      icon: Layers, 
      title: isRTL ? 'بيان المشكلة' : 'Problem Statement', 
      text: problem, 
      color: 'text-blue-400', 
      isCode: false 
    });

    const solution = getT('solution');
    if (solution) baseSections.push({ 
      icon: Wrench, 
      title: isRTL ? 'الحل الهندسي' : 'Engineering Solution', 
      text: solution, 
      color: 'text-emerald-400', 
      isCode: false 
    });

    const databaseDesign = getT('databaseDesign');
    if (databaseDesign) baseSections.push({ 
      icon: Database, 
      title: isRTL ? 'تصميم البيانات والمخطط' : 'Data Schema & Design', 
      text: databaseDesign, 
      color: 'text-purple-400', 
      isCode: true 
    });

    const scalability = getT('scalability');
    if (scalability) baseSections.push({ 
      icon: Zap, 
      title: isRTL ? 'قرارات قابلية التوسع' : 'Scalability Decisions', 
      text: scalability, 
      color: 'text-yellow-400', 
      isCode: false 
    });

    const architectureStack = getT('architectureStack');
    const architecture = getT('architecture');
    if (architectureStack) {
      baseSections.push({ 
        icon: Braces, 
        title: isRTL ? 'هيكلية النظام' : 'Architecture Stack', 
        text: architectureStack, 
        color: 'text-cyan-400', 
        isCode: true 
      });
    } else if (architecture) {
      baseSections.push({ 
        icon: LayoutTemplate, 
        title: isRTL ? 'الهيكلية' : 'Architecture', 
        text: architecture, 
        color: 'text-cyan-400', 
        isCode: true 
      });
    }

    if (challenges && challenges.length > 0) {
      baseSections.push({ 
        icon: AlertTriangle, 
        title: isRTL ? 'تحديات تم حلها' : 'Key Challenges Solved', 
        text: challenges.join('\n• '), 
        color: 'text-rose-400', 
        isCode: false 
      });
    }

    return baseSections;
  }, [project?.id, t, isRTL]);

  return (
    <Dialog open={isProjectModalOpen} onOpenChange={closeProjectModal}>
      <AnimatePresence>
        {isProjectModalOpen && (
          <DialogContent 
            className="max-w-4xl rounded-3xl bg-card border border-border shadow-2xl max-h-[90vh] overflow-hidden p-0 gap-0"
            dir={isRTL ? 'rtl' : 'ltr'}
            asChild
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-background pointer-events-none" />
              
              <DialogHeader className="p-8 sm:p-10 pb-8 border-b border-border bg-muted/30 backdrop-blur-xl relative z-10 text-start">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                       <Badge className="bg-muted text-muted-foreground border border-border px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium">
                          {isRTL ? 'مواصفات تقنية' : 'Technical Spec'}
                       </Badge>
                       {project?.featured && (
                         <Badge className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 text-[10px] uppercase tracking-widest font-medium">
                            {t('projects.featured')}
                         </Badge>
                       )}
                    </div>
                    <DialogTitle className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight">
                      {/* جلب العنوان من الترجمة */}
                      {t(`projectsData.${project?.id}.title`, isRTL ? 'مواصفات النظام' : 'System Specification')}
                    </DialogTitle>
                    <p className="text-muted-foreground mt-4 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                      {/* جلب الوصف من الترجمة */}
                      {t(`projectsData.${project?.id}.description`)}
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={closeProjectModal} 
                    className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full h-12 w-12 flex-shrink-0 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="p-8 sm:p-10 overflow-y-auto max-h-[calc(90vh-180px)] custom-scrollbar relative z-10 bg-card/50">
                <div className="grid gap-8">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="relative"
                    >
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`p-2.5 rounded-xl bg-muted border border-border ${section.color} shadow-inner`}>
                           <section.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground tracking-tight">{section.title}</h3>
                      </div>
                      
                      {section.isCode ? (
                        <div className="ps-0 sm:ps-[60px]">
                           <div className="rounded-xl bg-muted border border-border p-6 relative overflow-hidden group/code">
                              <div className="absolute top-0 end-0 rounded-es-lg px-3 py-1 bg-background text-[10px] uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-2">
                                 <Code2 className="w-3 h-3" /> {isRTL ? 'تصميم النظام' : 'System Design'}
                              </div>
                              <code className="text-sm font-mono text-muted-foreground block whitespace-pre-wrap leading-loose">
                                {section.text || (isRTL ? 'جاري التحميل...' : 'Loading details...')}
                              </code>
                           </div>
                        </div>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed font-light text-[15px] ps-0 sm:ps-[60px] whitespace-pre-wrap">
                          {section.text || (isRTL ? 'جاري التحميل...' : 'Loading details...')}
                        </p>
                      )}

                      {/* Divider */}
                      {index < sections.length - 1 && (
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-8 ms-0 sm:ms-[60px] max-w-xl" />
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 relative">
                  <div className="absolute top-0 inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div>
                     <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                       {isRTL ? 'التقنيات المستخدمة' : 'Core Technologies'}
                     </div>
                     <div className="flex flex-wrap gap-2">
                       {project?.tech.map(t => (
                          <span key={t} className="px-3 py-1.5 rounded-lg bg-muted border border-border text-muted-foreground text-xs font-mono">
                            {t}
                          </span>
                       ))}
                     </div>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <Button 
                      variant="outline" 
                      onClick={closeProjectModal} 
                      className="flex-1 sm:flex-none border-border text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl h-12 px-8 font-medium"
                    >
                      {isRTL ? 'إغلاق' : 'Close Spec'}
                    </Button>
                    {project?.github && (
                      <Button 
                        className="flex-1 sm:flex-none bg-foreground text-background hover:bg-foreground/90 rounded-xl h-12 px-8 font-medium shadow-lg" 
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noreferrer">
                          {isRTL ? 'عرض الكود' : 'View Repository'}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}