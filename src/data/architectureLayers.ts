import type { ArchitectureLayer } from '../types/architecture';

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'frontend',
    title: 'Frontend (React & Next.js)',
    summary: 'Premium user interfaces and resilient client state.',
    details: 'React Query for data fetching, Zustand for UI state, and Framer Motion for cinematic interactions.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'api',
    title: 'API Layer (NestJS)',
    summary: 'Robust REST and GraphQL endpoints acting as the system gateway.',
    details: 'Centralized authentication, Role-Based Access Control (RBAC), and strict DTO validation using Zod/Joi.',
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    id: 'logic',
    title: 'Business Logic Services',
    summary: 'Modular domain services encapsulating core SaaS/ERP rules.',
    details: 'Decoupled workflow execution, event-driven architecture, and caching strategies for high performance.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'orm',
    title: 'Prisma ORM',
    summary: 'Type-safe database access and schema migrations.',
    details: 'Predictable query generation, transaction management, and streamlined relational mapping.',
    color: 'from-blue-600 to-indigo-500',
  },
  {
    id: 'database',
    title: 'PostgreSQL Database',
    summary: 'Reliable, scalable, and ACID-compliant data storage.',
    details: 'Optimized schema design, strategic indexing, and multi-tenant data isolation.',
    color: 'from-orange-500 to-amber-500',
  },
];
