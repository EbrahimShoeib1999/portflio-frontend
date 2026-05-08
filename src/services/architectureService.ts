import { useQuery } from '@tanstack/react-query';

export interface ArchitectureLayer {
  id: string;
  title: string;
  summary: string;
  details: string;
  color: string;
}

const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'frontend',
    title: 'Frontend Layer',
    summary: 'React + TypeScript with modern UI frameworks for responsive, interactive user experiences.',
    details: 'Handles user interactions, form validation, state management, and real-time updates using React Query for server state.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'api',
    title: 'API Layer',
    summary: 'RESTful Express.js APIs with JWT authentication and comprehensive middleware for security.',
    details: 'Implements rate limiting, CORS, input validation with Joi, and structured error handling for reliable client-server communication.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'business',
    title: 'Business Logic Layer',
    summary: 'Domain-driven design with service classes handling complex ERP/SaaS business rules.',
    details: 'Manages multi-tenant data isolation, role-based permissions, workflow automation, and integration with external services.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 'database',
    title: 'Database Layer',
    summary: 'PostgreSQL with Prisma ORM for type-safe database operations and migrations.',
    details: 'Optimized queries, database indexing, connection pooling, and backup strategies for high-performance data persistence.',
    color: 'from-orange-500 to-red-500',
  },
];

export function useArchitectureLayers() {
  return useQuery({
    queryKey: ['architecture-layers'],
    queryFn: () => Promise.resolve(architectureLayers),
    staleTime: Infinity,
  });
}
