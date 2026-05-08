import { useQuery } from '@tanstack/react-query';

export interface SystemStep {
  id: string;
  badge: string;
  title: string;
  summary: string;
}

const systemSteps: SystemStep[] = [
  {
    id: 'analyze',
    badge: '1',
    title: 'Domain-Driven Discovery',
    summary: 'Analyze business boundaries for Multi-warehouse Inventory Sync and Real-time Stock Reconciliation. Map complex domain workflows to distinct microservice bounded contexts.',
  },
  {
    id: 'design',
    badge: '2',
    title: 'Distributed System Architecture',
    summary: 'Design high-throughput Distributed Order Processing Pipelines using event-driven communication (Kafka/RabbitMQ) and robust transactional outbox patterns.',
  },
  {
    id: 'build',
    badge: '3',
    title: 'Modular Business Engines',
    summary: 'Implement isolated services such as Modular Billing & Invoicing and Role-Based Access Control (RBAC) Systems with fine-grained authorization policies.',
  },
  {
    id: 'optimize',
    badge: '4',
    title: 'Data Layer Optimization',
    summary: 'Scale relational data using intelligent partitioning, read-replicas, and multi-tier caching (Redis) for intense analytical query workloads.',
  },
  {
    id: 'scale',
    badge: '5',
    title: 'Production Resilience',
    summary: 'Ensure zero-downtime deployments via CI/CD, backed by comprehensive telemetry, distributed tracing, and automated failover mechanisms.',
  },
];

export function useSystemSteps() {
  return useQuery({
    queryKey: ['system-steps'],
    queryFn: () => Promise.resolve(systemSteps),
    staleTime: Infinity,
  });
}

