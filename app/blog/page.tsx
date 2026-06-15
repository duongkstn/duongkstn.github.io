import BlogList from '@/components/BlogList';
import { getAllBlogs, getCategories } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Duong Nguyen',
  description: 'Articles on AI, machine learning, and software engineering',
};

export default function BlogPage() {
  const blogs = getAllBlogs();
  const categories = getCategories();

  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">
          Blog
        </h1>
        <p className="text-lg text-[#6b7280]">
          Thoughts on AI, machine learning, and software engineering.
        </p>
      </header>

      <BlogList blogs={blogs} categories={categories} />
    </div>
  );
}
