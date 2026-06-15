import { markdownToHtml } from '@/lib/markdown';
import { Blog } from '@/lib/types';

interface BlogPostProps {
  blog: Blog;
}

export default function BlogPost({ blog }: BlogPostProps) {
  const htmlContent = markdownToHtml(blog.content);

  return (
    <article className="max-w-3xl">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-[#6366f1] uppercase tracking-wider">
            {blog.category}
          </span>
          <time className="text-xs text-[#6b7280]">
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <h1 className="text-4xl font-bold text-[#1f2937] mb-4">
          {blog.title}
        </h1>
        <p className="text-lg text-[#6b7280]">{blog.description}</p>
      </header>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-[#6366f1] bg-[#f3f4f6] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-invert max-w-none text-[#1f2937]"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}
