import type { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'scaling-saas-apis',
    title: 'Scaling SaaS APIs with NestJS and Prisma',
    description: 'How I use domain modules, RBAC, and PostgreSQL indexing to keep SaaS APIs performant.',
    publishedAt: 'May 2026',
    tags: ['NestJS', 'Prisma', 'SaaS'],
    readTime: '5 min read',
    url: '#',
  },
  {
    id: 'backend-first-ux',
    title: 'Backend-First UX for Enterprise Applications',
    description: 'Engineering UI workflows around API-first design to reduce technical debt and improve delivery speed.',
    publishedAt: 'April 2026',
    tags: ['API Design', 'System Thinking', 'ERP'],
    readTime: '4 min read',
    url: '#',
  },
];
