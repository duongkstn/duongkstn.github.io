import Link from 'next/link';
import BlogList from '@/components/BlogList';
import { getAllBlogs, getCategories } from '@/lib/blog';

export const metadata = {
  title: 'Home | Duong Nguyen',
  description: 'AI Engineer & Software Engineer - Portfolio & Blog',
};

export default function Home() {
  const allBlogs = getAllBlogs();
  const categories = getCategories();
  const featuredBlogs = allBlogs.slice(0, 5); // Show 5 latest blogs

  return (
    <div className="max-w-4xl">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">
          Welcome to my digital space
        </h1>
        <p className="text-lg text-[#6b7280] mb-6">
          I explore AI, machine learning, and software engineering. Here you'll find my thoughts on LLMs, production systems, and building things that matter.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white font-medium rounded-lg hover:bg-[#4f46e5] transition-colors"
        >
          View All Posts <span>→</span>
        </Link>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-2xl font-bold text-[#1f2937] mb-8">Latest Posts</h2>
        <BlogList blogs={featuredBlogs} categories={categories} />
      </section>
    </div>
  );
}
