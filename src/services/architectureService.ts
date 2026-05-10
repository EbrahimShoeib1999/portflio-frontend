import { architectureLayers } from '../data/architectureLayers';
import type { ArchitectureLayer } from '../types/architecture';

export function useArchitectureLayers(): { data: ArchitectureLayer[]; isLoading: false } {
  return { data: architectureLayers, isLoading: false };
}
