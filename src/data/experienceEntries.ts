export interface ExperienceEntry {
  id: string;
  title: string;
  period: string;
  location: string;
  teamSize: string;
  type: string;
  description: string;
  technologies: string[];
  achievements: string[];
  challenges: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'erp-system-lead',
    title: 'Senior Full-Stack Engineer - ERP System',
    period: '2023 - Present',
    location: 'Remote',
    teamSize: '8 developers',
    type: 'ERP',
    description: 'Led development of a comprehensive ERP system serving 500+ users across manufacturing and logistics operations. Built scalable backend with Node.js/Express, PostgreSQL, and real-time dashboard with React.',
    technologies: ['Node.js', 'PostgreSQL', 'React', 'Prisma', 'Redis', 'Docker'],
    achievements: [
      'Reduced inventory processing time by 60% through optimized database queries',
      'Implemented real-time inventory tracking with WebSocket connections',
      'Built automated reporting system handling 10k+ daily transactions'
    ],
    challenges: [
      'Complex multi-tenant data isolation requirements',
      'High-volume transaction processing without performance degradation',
      'Integration with legacy manufacturing systems'
    ],
  },
  {
    id: 'saas-platform-architect',
    title: 'Full-Stack Architect - SaaS Platform',
    period: '2022 - 2023',
    location: 'New York, NY',
    teamSize: '12 developers',
    type: 'SaaS',
    description: 'Architected and developed a B2B SaaS platform for project management with subscription billing, multi-tenant architecture, and advanced analytics. Handled 1000+ concurrent users.',
    technologies: ['NestJS', 'PostgreSQL', 'React', 'TypeScript', 'Stripe API', 'AWS'],
    achievements: [
      'Designed microservices architecture scaling to 10k+ users',
      'Implemented subscription billing with automated tier management',
      'Built real-time collaboration features with conflict resolution'
    ],
    challenges: [
      'Complex billing logic with prorated subscriptions and add-ons',
      'Real-time synchronization across distributed teams',
      'Data migration from monolithic to microservices architecture'
    ],
  },
  {
    id: 'ecommerce-backend-dev',
    title: 'Backend Engineer - E-commerce Platform',
    period: '2021 - 2022',
    location: 'San Francisco, CA',
    teamSize: '15 developers',
    type: 'E-commerce',
    description: 'Developed high-performance backend for an e-commerce platform processing $2M+ monthly transactions. Implemented inventory management, payment processing, and order fulfillment systems.',
    technologies: ['Express.js', 'MongoDB', 'React', 'Redis', 'Stripe', 'Kubernetes'],
    achievements: [
      'Built order processing system handling 50k+ daily transactions',
      'Implemented fraud detection reducing chargebacks by 40%',
      'Created inventory forecasting system with 95% accuracy'
    ],
    challenges: [
      'High availability requirements with 99.9% uptime SLA',
      'Complex inventory allocation across multiple warehouses',
      'Real-time price optimization based on demand patterns'
    ],
  },
];
