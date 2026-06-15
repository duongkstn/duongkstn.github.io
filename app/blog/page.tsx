import BlogList from '@/components/BlogList';
import { getAllBlogs, getCategories } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Dao Nguyen Duong',
  description: 'Articles on AI, machine learning, and software engineering',
};

export default function BlogPage() {
  const blogs = getAllBlogs();
  const categories = getCategories();

  return (
    <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }}>
      <header style={{
        marginBottom: '3rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
        borderRadius: '1rem',
        padding: '3rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0f172a',
          marginBottom: '1rem',
          lineHeight: '1.1'
        }}>
          Blog
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#475569',
          lineHeight: '1.6',
          maxWidth: '600px'
        }}>
          Thoughts and insights on AI, machine learning, and software engineering. Exploring production systems, LLMs, and clean architecture.
        </p>
      </header>

      <BlogList blogs={blogs} categories={categories} />
    </div>
  );
}
