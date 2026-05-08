import { motion } from 'framer-motion';
import type { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/20 transition-all"
    >
      <div className="flex items-center justify-between gap-3 text-white/60 mb-4">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em]">{post.readTime}</span>
        <span className="text-xs uppercase tracking-[0.28em] text-primary">{post.publishedAt}</span>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{post.title}</h3>
      <p className="text-white/70 leading-relaxed mb-6">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
