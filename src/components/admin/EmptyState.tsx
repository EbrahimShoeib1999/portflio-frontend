import { useTranslation } from 'react-i18next';
import { PackageOpen, Plus } from 'lucide-react';
import { Button } from '../ui/button';

interface EmptyStateProps {
  onAdd: () => void;
}

export function EmptyState({ onAdd }: EmptyStateProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center p-12 glass-card rounded-[2.5rem] border-dashed border-white/10 min-h-[400px] text-center">
      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
        <PackageOpen className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{t('dashboard.noProjects')}</h3>
      <p className="text-muted-foreground max-w-sm mb-8">
        {t('dashboard.emptyStateDescription')}
      </p>
      <Button onClick={onAdd} className="bg-primary hover:bg-primary/90 h-12 px-8 rounded-full font-bold">
        <Plus className="w-4 h-4 mr-2" />
        {t('dashboard.addProject')}
      </Button>
    </div>
  );
}
