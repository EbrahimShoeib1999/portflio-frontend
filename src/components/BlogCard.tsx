import { motion } from 'framer-motion';
import type { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group rounded-[2rem] border border-border bg-card p-8 shadow-elegant transition-all"
    >
      <div className="flex items-center justify-between gap-3 text-muted-foreground mb-4">
        <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs uppercase tracking-[0.25em]">{post.readTime}</span>
        <span className="text-xs uppercase tracking-[0.28em] text-primary">{post.publishedAt}</span>
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">{post.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
