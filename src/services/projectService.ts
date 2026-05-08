import { useQuery } from '@tanstack/react-query';
// import { getProjectData } from './mockData';
import type { Project } from '../types/project';

// Fetch real projects from the API
const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch('http://localhost:5000/api/projects');
  if (!res.ok) throw new Error('Failed to fetch projects');
  const data = await res.json();
  // Map MongoDB _id to id if needed for frontend consistency
  return data.map((p: any) => ({
    ...p,
    id: p._id || p.id
  }));
};

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60, // 1 minute
  });
}

export function useProjectById(id?: string) {
  return useQuery<Project | undefined>({
    queryKey: ['projects', id],
    queryFn: async () => {
      const data = await fetchProjects();
      return data.find((project) => project.id === id);
    },
    enabled: Boolean(id),
  });
}
