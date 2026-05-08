import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { AdminLayout } from './admin/AdminLayout';
import { DashboardStats } from './admin/DashboardStats';
import { ProjectsTable } from './admin/ProjectsTable';
import { ProjectModal } from './admin/ProjectModal';
import { EmptyState } from './admin/EmptyState';
import { AnalyticsInsights } from './admin/AnalyticsInsights';
import { toast } from "sonner";
import { Routes, Route } from 'react-router-dom';
import { motion } from "framer-motion";

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

interface AnalyticsData {
  totalVisits: number;
  uniqueVisitors: number;
  activeUsers: number;
  avgSessionDuration: number;
  pageViews: number;
  mostVisitedPages: { _id: string; count: number }[];
  deviceDistribution: { _id: string; count: number }[];
  recentVisits: {
    _id: string;
    page: string;
    deviceType: string;
    timestamp: string;
    ip?: string;
  }[];
}

const initialProject: Project = {
  title: '',
  description: '',
  tech: [],
  category: 'fullstack',
  img: 'ecommerce',
  github: '',
  live: '',
  featured: false,
  stars: 0
};

export function AdminDashboard() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<Project>(initialProject);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchAnalytics, 10000); // Polling for live updates
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchProjects(), fetchAnalytics()]);
    setLoading(false);
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/projects');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
      toast.error(t('dashboard.connectionError'));
    }
  };

  const fetchAnalytics = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/analytics/stats');
      if (res.ok) {
        const data = await res.json();
        setAnalytics(data);
      }
    } catch (err) {
      console.error('Failed to fetch analytics', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('dashboard.confirmDelete'))) return;
    try {
      const res = await fetch(`http://localhost:5000/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter(p => p._id !== id));
        toast.success(t('dashboard.projectDeleted'));
      }
    } catch (error) {
      console.error(error);
      toast.error(t('dashboard.deleteFailed'));
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData(project);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setEditingProject(null);
    setFormData(initialProject);
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEdit = !!editingProject?._id;
    const url = isEdit 
      ? `http://localhost:5000/api/projects/${editingProject._id}`
      : 'http://localhost:5000/api/projects';
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsDialogOpen(false);
        fetchProjects();
        toast.success(isEdit ? t('dashboard.projectUpdated') : t('dashboard.projectCreated'));
      } else {
        toast.error(t('dashboard.saveFailed'));
      }
    } catch (error) {
      console.error(error);
      toast.error(t('dashboard.errorOccurred'));
    }
  };

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-2">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-4xl font-black tracking-tighter text-foreground"
                >
                  {t('dashboard.title')}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-muted-foreground mt-2 text-lg font-medium"
                >
                  {t('dashboard.welcome')}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button onClick={handleAdd} className="bg-primary hover:bg-primary/90 h-14 px-8 rounded-2xl font-black text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <Plus className="w-6 h-6 mr-2 ms-0 me-2" /> {t('dashboard.addProject')}
                </Button>
              </motion.div>
            </div>

            <DashboardStats data={analytics} />

            <div className="space-y-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center p-32 glass-card rounded-[3rem] border-border bg-card/50">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    <p className="text-muted-foreground font-black uppercase tracking-widest mt-8 animate-pulse">{t('dashboard.syncing')}</p>
                </div>
              ) : projects.length > 0 ? (
                <ProjectsTable 
                  projects={projects} 
                  onEdit={handleEdit} 
                  onDelete={handleDelete} 
                />
              ) : (
                <EmptyState onAdd={handleAdd} />
              )}
            </div>
          </div>
        } />
        <Route path="/projects" element={
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div>
                 <h1 className="text-4xl font-black tracking-tighter text-foreground">{t('dashboard.projects')}</h1>
                 <p className="text-muted-foreground mt-2 font-medium text-lg">{t('dashboard.projectsDescription')}</p>
               </div>
               <Button onClick={handleAdd} className="bg-primary hover:bg-primary/90 h-14 px-8 rounded-2xl font-black text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                 <Plus className="w-6 h-6 mr-2 ms-0 me-2" /> {t('dashboard.addProject')}
               </Button>
            </div>
            {loading ? (
              <div className="flex flex-col items-center justify-center p-32 glass-card rounded-[3rem] border-border bg-card/50">
                 <Loader2 className="w-12 h-12 text-primary animate-spin" />
              </div>
            ) : (
              <ProjectsTable 
                projects={projects} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            )}
          </div>
        } />
        <Route path="/analytics" element={
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-foreground">{t('dashboard.analytics')}</h1>
              <p className="text-muted-foreground mt-2 font-medium text-lg">{t('analyticsInsight.subtitle')}</p>
            </div>
            
            <DashboardStats data={analytics} />
            <AnalyticsInsights data={analytics} />
          </div>
        } />
        <Route path="/messages" element={
          <div className="space-y-8">
            <h1 className="text-3xl font-black tracking-tight text-white">{t('dashboard.messages')}</h1>
            <div className="glass-card p-24 rounded-[2.5rem] text-center">
               <p className="text-muted-foreground italic">{t('dashboard.noMessages')}</p>
            </div>
          </div>
        } />
        <Route path="/settings" element={
          <div className="space-y-8">
            <h1 className="text-3xl font-black tracking-tight text-white">{t('dashboard.settings')}</h1>
            <div className="glass-card p-12 rounded-[2rem]">
               <p className="text-muted-foreground italic">{t('dashboard.settingsComingSoon')}</p>
            </div>
          </div>
        } />
      </Routes>

      <ProjectModal 
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isEdit={!!editingProject}
      />
    </AdminLayout>
  );
}
