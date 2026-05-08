import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from './mockData';
import type { BlogPost } from '../types/blog';

export function useBlogPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      return getBlogPosts();
    },
    staleTime: 1000 * 60 * 10,
  });
}
