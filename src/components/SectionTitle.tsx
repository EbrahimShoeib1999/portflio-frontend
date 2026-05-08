interface SectionTitleProps {
  label: string;
  title: string;
  description: string;
}

export function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-primary mb-5">{label}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6 leading-tight">{title}</h2>
      <p className="mx-auto max-w-2xl text-foreground/70 dark:text-muted-foreground text-base sm:text-lg leading-relaxed font-medium">{description}</p>
    </div>
  );
}
