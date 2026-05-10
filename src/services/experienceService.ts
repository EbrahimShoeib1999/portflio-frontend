import { experienceEntries } from '../data/experienceEntries';
import type { ExperienceEntry } from '../data/experienceEntries';

export type { ExperienceEntry };

export function useExperienceEntries(): { data: ExperienceEntry[]; isLoading: false } {
  return { data: experienceEntries, isLoading: false };
}