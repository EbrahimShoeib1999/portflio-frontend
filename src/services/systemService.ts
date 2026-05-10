import { systemSteps } from '../data/systemSteps';
import type { SystemStep } from '../data/systemSteps'; // Re-using type from data for now, or I can move type to types

export type { SystemStep };

export function useSystemSteps(): { data: SystemStep[]; isLoading: false } {
  return { data: systemSteps, isLoading: false };
}
