import BlogEditor from '@/components/BlogEditor';

export const metadata = {
  title: 'Blog Editor | Dao Nguyen Duong',
};

export default function EditorPage() {
  return (
    <div className="max-w-6xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[#1f2937] mb-2">Blog Editor</h1>
        <p className="text-[#6b7280]">
          Create and edit blog posts. New posts are saved to{' '}
          <code className="bg-[#f3f4f6] px-2 py-1 rounded">public/blogs/</code>
        </p>
      </header>

      <BlogEditor />
    </div>
  );
}
