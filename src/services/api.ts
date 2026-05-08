import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetcher<T>(path: string): Promise<T> {
  const response = await apiClient.get<T>(path);
  return response.data;
}
