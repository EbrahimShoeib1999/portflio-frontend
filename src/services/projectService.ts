import { projects } from '../data/projects';
import type { Project } from '../types/project';

/**
 * Returns all static projects.
 * Drop-in replacement for the former useProjects() hook (no network call needed).
 */
export function useProjects(): { data: Project[]; isLoading: false } {
  return { data: projects, isLoading: false };
}

/**
 * Returns a single project by id from static data.
 */
export function useProjectById(id?: string): { data: Project | undefined } {
  const found = id ? projects.find((p) => p.id === id) : undefined;
  return { data: found };
}
