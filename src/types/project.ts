export interface CaseStudy {
  problem: string;
  solution: string;
  challenges: string[];
  architecture: string;
  databaseDesign?: string;
  scalability?: string;
  architectureStack?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  img: string;
  github: string;
  live: string;
  featured: boolean;
  stars: number;
  caseStudy: CaseStudy;
}
