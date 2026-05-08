import { useTranslation } from 'react-i18next';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  formData: Project;
  setFormData: (data: Project) => void;
  onSubmit: (e: React.FormEvent) => void;
  isEdit: boolean;
}

export function ProjectModal({ isOpen, setIsOpen, formData, setFormData, onSubmit, isEdit }: ProjectModalProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const techs = e.target.value.split(',').map(t => t.trim());
    setFormData({ ...formData, tech: techs });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="glass-card border-border text-foreground sm:max-w-[600px] bg-card/95 backdrop-blur-2xl p-0 overflow-hidden rounded-[2.5rem] shadow-elegant-lg">
        <DialogHeader className="p-8 pb-0">
          <DialogTitle className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            {isEdit ? t('dashboard.editProject') : t('dashboard.addProject')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={onSubmit} dir={isRTL ? 'rtl' : 'ltr'}>
          <ScrollArea className="max-h-[70vh] p-8 pt-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('contact.name')}</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="bg-muted/50 border-border focus:border-primary/50 h-12 rounded-2xl transition-all font-medium"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="desc" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('dashboard.desc')}</Label>
                <Textarea
                  id="desc"
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="bg-muted/50 border-border focus:border-primary/50 min-h-[100px] rounded-2xl transition-all font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="grid gap-2">
                    <Label htmlFor="category" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('dashboard.category')}</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={val => setFormData({...formData, category: val})}
                    >
                      <SelectTrigger className="h-11 bg-muted/50 border-border rounded-2xl focus:ring-primary/20 font-medium">
                        <SelectValue placeholder={t('dashboard.selectCategory')} />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border rounded-2xl shadow-2xl">
                        <SelectItem value="frontend">{t('dashboard.frontend')}</SelectItem>
                        <SelectItem value="backend">{t('dashboard.backend')}</SelectItem>
                        <SelectItem value="fullstack">{t('dashboard.fullstack')}</SelectItem>
                      </SelectContent>
                    </Select>
                 </div>
                 <div className="grid gap-2">
                    <Label htmlFor="stars" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('dashboard.stars')}</Label>
                    <Input
                      id="stars"
                      type="number"
                      value={formData.stars}
                      onChange={e => setFormData({...formData, stars: Number(e.target.value)})}
                      className="bg-muted/50 border-border focus:border-primary/50 h-11 rounded-2xl font-medium"
                    />
                 </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tech" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('dashboard.tech')}</Label>
                <Input
                  id="tech"
                  value={formData.tech.join(', ')}
                  onChange={handleTechChange}
                  className="bg-muted/50 border-border focus:border-primary/50 h-11 rounded-2xl font-medium"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="github" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('dashboard.github')}</Label>
                  <Input
                    id="github"
                    value={formData.github}
                    onChange={e => setFormData({...formData, github: e.target.value})}
                    className="bg-muted/50 border-border focus:border-primary/50 h-11 rounded-2xl font-medium"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="live" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('dashboard.live')}</Label>
                  <Input
                    id="live"
                    value={formData.live}
                    onChange={e => setFormData({...formData, live: e.target.value})}
                    className="bg-muted/50 border-border focus:border-primary/50 h-11 rounded-2xl font-medium"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="img" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t('dashboard.imgKey')}</Label>
                <Input
                  id="img"
                  value={formData.img}
                  onChange={e => setFormData({...formData, img: e.target.value})}
                  className="bg-muted/50 border-border focus:border-primary/50 h-11 rounded-2xl font-medium"
                  placeholder={t('dashboard.imgPlaceholder')}
                />
              </div>

               <div className="flex items-center justify-between p-5 bg-muted/30 rounded-[1.5rem] border border-border shadow-inner">
                <div className="space-y-0.5">
                  <Label htmlFor="featured" className="text-base font-black tracking-tight">{t('dashboard.featured')}</Label>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{t('dashboard.featuredDescription')}</p>
                </div>
                <Switch 
                   id="featured" 
                   checked={formData.featured}
                   onCheckedChange={c => setFormData({...formData, featured: c})}
                />
              </div>
            </div>
          </ScrollArea>
          
          <DialogFooter className="p-8 pt-4 border-t border-border bg-muted/10">
             <div className="flex gap-3 w-full sm:justify-end">
               <Button 
                type="button" 
                variant="ghost" 
                onClick={() => setIsOpen(false)}
                className="flex-1 sm:flex-none h-12 rounded-2xl hover:bg-muted font-bold"
               >
                 {t('dashboard.cancel')}
               </Button>
               <Button 
                type="submit" 
                className="flex-1 sm:flex-none h-12 rounded-2xl bg-primary hover:bg-primary/90 px-10 font-black shadow-lg shadow-primary/20"
               >
                  {t('dashboard.save')}
               </Button>
             </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
