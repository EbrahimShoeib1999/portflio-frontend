import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Pencil, 
  Trash2, 
  ExternalLink,
  Github,
  Star,
  Search,
  MoreVertical,
  Filter
} from 'lucide-react';
import { Button } from '../ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../ui/table";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from 'react';
import { Badge } from '../ui/badge';

interface Project {
  _id?: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  img: string;
  github: string;
  live: string;
  featured: boolean;
  stars: number;
}

interface ProjectsTableProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

export function ProjectsTable({ projects, onEdit, onDelete }: ProjectsTableProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });


  return (
    <div className="glass-card rounded-[2rem] overflow-hidden border-border bg-card shadow-elegant">
      <div className="p-6 md:p-8 border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-muted/20">
        <div>
          <h2 className="text-xl font-black tracking-tight text-foreground">{t('dashboard.projects')}</h2>
          <p className="text-sm text-muted-foreground mt-1">{t('dashboard.manageProjects')}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64 group">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors`} />
            <Input 
              placeholder={t('dashboard.search')} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`${isRTL ? 'pr-10' : 'pl-10'} bg-muted/50 border-border focus:border-primary/50 h-11 rounded-2xl w-full`}
            />
          </div>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-44 h-11 bg-muted/50 border-border rounded-2xl focus:ring-primary/20">
              <div className="flex items-center gap-2">
                <Filter size={14} className="text-muted-foreground" />
                <SelectValue placeholder={t('dashboard.selectCategory')} />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-card border-border rounded-2xl shadow-2xl">
              <SelectItem value="all">{t('dashboard.allProjects')}</SelectItem>
              <SelectItem value="frontend">{t('dashboard.frontend')}</SelectItem>
              <SelectItem value="backend">{t('dashboard.backend')}</SelectItem>
              <SelectItem value="fullstack">{t('dashboard.fullstack')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className={`text-muted-foreground font-bold py-5 ${isRTL ? 'pr-8' : 'pl-8'} text-xs uppercase tracking-wider`}>{t('dashboard.projects')}</TableHead>
              <TableHead className="text-muted-foreground font-bold py-5 text-xs uppercase tracking-wider">{t('dashboard.category')}</TableHead>
              <TableHead className="text-muted-foreground font-bold py-5 text-center text-xs uppercase tracking-wider">{t('dashboard.featured')}</TableHead>
              <TableHead className="text-muted-foreground font-bold py-5 text-xs uppercase tracking-wider">{t('dashboard.stars')}</TableHead>
              <TableHead className={`text-muted-foreground font-bold py-5 text-right ${isRTL ? 'pl-8' : 'pr-8'} text-xs uppercase tracking-wider`}>{t('dashboard.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.map((project, i) => (
              <motion.tr
                key={project._id || i}
                initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group border-border hover:bg-muted/30 transition-colors"
              >
                <TableCell className={`py-5 ${isRTL ? 'pr-8' : 'pl-8'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-muted border border-border flex items-center justify-center text-xs font-black uppercase overflow-hidden shadow-inner group-hover:border-primary/30 transition-colors">
                       {project.img ? (
                         <span className="text-primary text-base">{project.img.substring(0, 2)}</span>
                       ) : (
                         <Github size={20} className="text-muted-foreground" />
                       )}
                    </div>
                    <div>
                      <p className="font-black text-base text-foreground tracking-tight">{project.title}</p>
                      <div className="flex gap-1.5 mt-1.5">
                        {project.tech.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 bg-muted border border-border rounded-lg text-muted-foreground font-black uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                        {project.tech.length > 2 && <span className="text-[10px] text-muted-foreground font-bold">+{project.tech.length - 2}</span>}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-5">
                  {project.category === 'frontend' && (
                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20 rounded-full font-bold px-3 py-1">
                      {t('dashboard.frontend')}
                    </Badge>
                  )}
                  {project.category === 'backend' && (
                    <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 hover:bg-purple-500/20 rounded-full font-bold px-3 py-1">
                      {t('dashboard.backend')}
                    </Badge>
                  )}
                  {project.category === 'fullstack' && (
                    <Badge className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-none shadow-md shadow-primary/20 hover:opacity-90 rounded-full font-bold px-3 py-1 text-[10px]">
                      {t('dashboard.fullstack')}
                    </Badge>
                  )}
                  {!['frontend', 'backend', 'fullstack'].includes(project.category) && (
                    <Badge variant="outline" className="rounded-full px-3 py-1">{project.category}</Badge>
                  )}
                </TableCell>
                <TableCell className="py-5 text-center">
                  {project.featured ? (
                    <div className="inline-flex items-center gap-1.5 text-yellow-500 bg-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/20 text-[10px] font-black uppercase tracking-widest shadow-sm">
                       <Star size={12} fill="currentColor" />
                       {t('dashboard.featured')}
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest opacity-40">{t('dashboard.unfeatured')}</span>
                  )}
                </TableCell>
                <TableCell className="py-5">
                  <div className="flex items-center gap-1.5 font-black text-foreground">
                    <Star size={16} className="text-yellow-500" />
                    {project.stars}
                  </div>
                </TableCell>
                <TableCell className={`py-5 ${isRTL ? 'pl-8' : 'pr-8'} text-right`}>
                  <div className={`flex items-center ${isRTL ? 'justify-start' : 'justify-end'} gap-1 opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onEdit(project)}
                      className="w-10 h-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => project._id && onDelete(project._id)}
                      className="w-10 h-10 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-all"
                    >
                      <Trash2 size={16} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      asChild
                      className="w-10 h-10 rounded-xl hover:bg-blue-500/10 hover:text-blue-500 transition-all"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                  <div className="group-hover:hidden">
                     <MoreVertical size={20} className="text-muted-foreground/30" />
                  </div>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-muted-foreground bg-muted/10">
        <p className="tracking-widest uppercase">
          {t('dashboard.showing', { count: filteredProjects.length, total: projects.length })}
        </p>
        <div className="flex gap-2">
           <Button variant="outline" size="sm" className="rounded-xl border-border hover:bg-muted text-foreground transition-all" disabled>
             {t('dashboard.previous')}
           </Button>
           <Button variant="outline" size="sm" className="rounded-xl border-border hover:bg-muted text-foreground transition-all" disabled>
             {t('dashboard.next')}
           </Button>
        </div>
      </div>
    </div>
  );
}
