import { notFound } from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import { getBlogBySlug, getAllBlogs } from '@/lib/blog';

export const metadata = {
  title: 'Blog Post | Duong Nguyen',
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  if (blogs.length === 0) {
    return [{ slug: '__empty__' }];
  }
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <BlogPost blog={blog} />

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-[#e5e7eb]">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-[#6366f1] hover:gap-3 transition-all font-medium"
        >
          <span>←</span> Back to all posts
        </a>
      </nav>
    </div>
  );
}
