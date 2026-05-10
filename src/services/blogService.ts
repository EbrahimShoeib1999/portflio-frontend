import { blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../types/blog';

export function useBlogPosts(): { data: BlogPost[]; isLoading: false } {
  return { data: blogPosts, isLoading: false };
}
