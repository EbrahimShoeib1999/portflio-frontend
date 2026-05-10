import { apiEndpoints } from '../data/apiEndpoints';
import type { ApiEndpoint } from '../types/api';

export function useApiEndpoints(): { data: ApiEndpoint[]; isLoading: false } {
  return { data: apiEndpoints, isLoading: false };
}
