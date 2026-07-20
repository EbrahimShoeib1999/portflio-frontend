export interface Project {
  id: string;
  tech: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  img: string;
  github: string;
  live: string;
  featured: boolean;
  stars: number;
  // لاحظ أننا شيلنا title, description, caseStudy لأنهم هيجوا من ملف الترجمة
}