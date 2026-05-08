import type { Project } from '../types/project';
import type { BlogPost } from '../types/blog';
import type { ArchitectureLayer } from '../types/architecture';
import type { ApiEndpoint } from '../types/api';
import type { SystemStep, ExperienceEntry } from '../types/system';

export const projects: Project[] = [
  {
    id: 'codex',
    title: 'Codex ERP Suite',
    description: 'A modular ERP product that centralizes finance, inventory, and team workflows for growing SaaS operations.',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Tailwind', 'Redis'],
    category: 'fullstack',
    img: 'codex',
    github: 'https://github.com/example/codex-erp',
    live: 'https://codex.example.com',
    featured: true,
    stars: 128,
    caseStudy: {
      problem: 'Disconnected operational workflows and slow reporting for sales and finance teams.',
      solution: 'Built a backend-first ERP platform using NestJS and Prisma to unify event-driven data flows and give teams real-time visibility.',
      challenges: [
        'Keeping backend performance strong under multi-tenant workloads.',
        'Designing a clean API contract for dashboards and reports.',
        'Implementing RBAC without sacrificing developer velocity.',
      ],
      architecture: 'API Gateway → Auth Module → Projects Module → Prisma ORM → PostgreSQL / Redis caching',
      databaseDesign: 'Designed normalized entities (Users, Roles, Products, Orders) using Prisma schema. Used indexing on high-read columns like organization_id for multi-tenant queries.',
      scalability: 'Implemented modular services, cursor-based pagination for large datasets, and a strict RBAC policy checking at the API gateway level to distribute load.',
      architectureStack: 'React → NestJS → Prisma → PostgreSQL'
    },
  },
  {
    id: 'adwallpro',
    title: 'AdWallPro Analytics',
    description: 'A high-conversion dashboard for advertisers with advanced campaign tracking, A/B testing, and budgeting insights.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind', 'NestJS', 'PostgreSQL'],
    category: 'frontend',
    img: 'adwallpro',
    github: 'https://github.com/example/adwallpro',
    live: 'https://adwallpro.example.com',
    featured: true,
    stars: 89,
    caseStudy: {
      problem: 'Advertisers needed faster insights and smoother UI for campaign optimization.',
      solution: 'Designed a performant dashboard with nested scrolling, reusable data cards, and a responsive analytics canvas.',
      challenges: [
        'Balancing lightweight visuals with complex data charts.',
        'Maintaining consistency across desktop and touch interfaces.',
      ],
      architecture: 'React query → server API → PostgreSQL analytics store → chart summary cache',
    },
  },
  {
    id: 'ecommerce',
    title: 'Commerce Suite',
    description: 'An end-to-end commerce platform for rapid store setup, inventory sync, and payment orchestration.',
    tech: ['React', 'Redux Toolkit', 'Zod', 'Tailwind', 'NestJS', 'Prisma'],
    category: 'backend',
    img: 'ecommerce',
    github: 'https://github.com/example/commerce-suite',
    live: 'https://commerce.example.com',
    featured: false,
    stars: 103,
    caseStudy: {
      problem: 'Modern commerce needed composable APIs and reliable checkout flows.',
      solution: 'Built robust REST endpoints and middleware for validation, authorization, and order lifecycle management.',
      challenges: [
        'Keeping validation strict but flexible for external integrations.',
        'Reducing API latency across high-traffic checkout flows.',
      ],
      architecture: 'REST API → Validation layer → Domain services → Prisma → Postgres',
    },
  },
];

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

export const apiEndpoints: ApiEndpoint[] = [
  {
    id: 'list-products',
    method: 'GET',
    path: '/api/products',
    description: 'Fetch product listings with pagination and role-based filters.',
    request: 'GET /api/products?page=1&limit=20',
    response: '{ "data": [{ "id": "p1", "name": "ERP License" }], "meta": { "page": 1 } }',
  },
  {
    id: 'auth-login',
    method: 'POST',
    path: '/api/auth/login',
    description: 'Authenticate users and return a JWT plus role metadata.',
    request: '{ "email": "admin@example.com", "password": "SecurePass123" }',
    response: '{ "token": "...", "user": { "role": "admin" } }',
  },
  {
    id: 'update-order',
    method: 'PUT',
    path: '/api/orders/:id',
    description: 'Update order status, shipment details, or payment reconciliation.',
    request: '{ "status": "shipped", "tracking": "12345" }',
    response: '{ "id": "o123", "status": "shipped" }',
  },
  {
    id: 'project-case-study',
    method: 'GET',
    path: '/api/projects/:id/case-study',
    description: 'Fetch in-depth architecture and problem/solution details for a project.',
    request: 'GET /api/projects/codex/case-study',
    response: '{ "problem": "...", "solution": "..." }',
  },
];

export const systemSteps: SystemStep[] = [
  {
    id: 'understand',
    title: 'Understand Problem',
    summary: 'Gather requirements, define user journeys, and align on business metrics.',
    badge: 'Discovery',
  },
  {
    id: 'design',
    title: 'Design Architecture',
    summary: 'Build clear layers with API contracts, domain services, and data ownership.',
    badge: 'Architecture',
  },
  {
    id: 'build',
    title: 'Build & Optimize',
    summary: 'Deliver production-quality code with validation, caching, and observability.',
    badge: 'Implementation',
  },
  {
    id: 'scale',
    title: 'Scale & Maintain',
    summary: 'Monitor usage, tune performance, and keep the platform resilient over time.',
    badge: 'Operations',
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'saas-platform',
    title: 'SaaS Platform Development',
    company: 'ScaleOps Studio',
    range: '2024 - Present',
    impact: 'Delivered enterprise-grade architecture for sales automation, subscription billing, and user onboarding.',
    highlights: [
      'Implemented RBAC and API throttling for multi-tenant SaaS flows.',
      'Designed a flexible reporting engine with PostgreSQL analytics models.',
      'Reduced page load time by 40% through server-side caching and optimized queries.',
    ],
  },
  {
    id: 'erp-integration',
    title: 'ERP Integration Engine',
    company: 'BizCore Systems',
    range: '2023 - 2024',
    impact: 'Built data synchronization middleware for warehouses, finance, and operational teams.',
    highlights: [
      'Created event-based processing for inventory and order updates.',
      'Maintained strong security with token-based API access and audit logging.',
    ],
  },
];

export function getProjectData(): Project[] {
  return projects;
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getArchitectureLayers(): ArchitectureLayer[] {
  return architectureLayers;
}

export function getApiEndpoints(): ApiEndpoint[] {
  return apiEndpoints;
}

export function getSystemSteps(): SystemStep[] {
  return systemSteps;
}

export function getExperienceEntries(): ExperienceEntry[] {
  return experienceEntries;
}
