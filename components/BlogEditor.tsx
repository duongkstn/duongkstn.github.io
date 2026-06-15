'use client';

import { useState, useEffect } from 'react';
import { markdownToHtml } from '@/lib/markdown';

interface EditorState {
  title: string;
  date: string;
  category: string;
  description: string;
  tags: string;
  content: string;
}

export default function BlogEditor() {
  const [state, setState] = useState<EditorState>({
    title: 'New Post',
    date: new Date().toISOString().split('T')[0],
    category: 'General',
    description: '',
    tags: '',
    content: '# Hello\n\nStart typing...',
  });

  const [htmlPreview, setHtmlPreview] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setHtmlPreview(markdownToHtml(state.content));
  }, [state.content]);

  const handleSave = async () => {
    const slug = state.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

    const filename = `${state.date}-${slug}`;

    const frontmatter = `---
title: ${state.title}
date: ${state.date}
category: ${state.category}
description: ${state.description}
tags:
${state.tags
  .split(',')
  .map((tag) => `  - ${tag.trim()}`)
  .join('\n')}
---

${state.content}`;

    try {
      const response = await fetch('/api/save-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename,
          content: frontmatter,
        }),
      });

      if (response.ok) {
        setStatus(`✓ Saved as ${filename}.md`);
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('✗ Failed to save');
      }
    } catch (error) {
      setStatus('✗ Error saving');
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Metadata Form */}
      <div className="bg-white border border-[#e5e7eb] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-[#1f2937] mb-4">Metadata</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={state.title}
            onChange={(e) => setState({ ...state, title: e.target.value })}
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1]"
          />
          <input
            type="date"
            value={state.date}
            onChange={(e) => setState({ ...state, date: e.target.value })}
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1]"
          />
          <input
            type="text"
            placeholder="Category"
            value={state.category}
            onChange={(e) =>
              setState({ ...state, category: e.target.value })
            }
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1]"
          />
          <textarea
            placeholder="Short description"
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1] resize-none"
            rows={3}
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={state.tags}
            onChange={(e) => setState({ ...state, tags: e.target.value })}
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1]"
          />
        </div>
      </div>

      {/* Editor and Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="bg-white border border-[#e5e7eb] rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#1f2937] mb-4">
            Markdown Content
          </h2>
          <textarea
            value={state.content}
            onChange={(e) => setState({ ...state, content: e.target.value })}
            className="w-full h-96 px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1] resize-none font-mono text-sm"
          />
        </div>

        {/* Preview */}
        <div className="bg-white border border-[#e5e7eb] rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#1f2937] mb-4">Preview</h2>
          <div
            className="prose prose-invert max-w-none h-96 overflow-y-auto text-[#1f2937]"
            dangerouslySetInnerHTML={{ __html: htmlPreview }}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-[#6366f1] text-white font-medium rounded-lg hover:bg-[#4f46e5] transition-colors"
        >
          Save Blog Post
        </button>
        {status && <span className="text-sm text-[#6b7280]">{status}</span>}
      </div>
    </div>
  );
}
