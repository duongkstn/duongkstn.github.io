import Link from 'next/link';

export default function ProfileCard() {
  return (
    <aside className="hidden md:flex flex-col w-80 bg-white border-r border-[#e5e7eb] p-8 sticky top-0 h-screen overflow-y-auto">
      {/* Profile Photo */}
      <div className="mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center overflow-hidden text-white font-bold text-2xl">
          DN
        </div>
      </div>

      {/* Name and Title */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-[#1f2937] mb-1">Duong Nguyen</h1>
        <p className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider">
          AI Engineer · Software Engineer
        </p>
      </div>

      {/* Bio */}
      <p className="text-sm text-[#6b7280] leading-relaxed mb-6">
        Building AI systems that work in production. Passionate about LLMs, machine learning, and clean code.
      </p>

      {/* Divider */}
      <div className="h-px bg-[#e5e7eb] mb-6"></div>

      {/* Links */}
      <nav className="space-y-3 flex-1">
        <Link
          href="/"
          className="block text-sm font-medium text-[#1f2937] hover:text-[#6366f1] transition-colors"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="block text-sm font-medium text-[#1f2937] hover:text-[#6366f1] transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/resume"
          className="block text-sm font-medium text-[#1f2937] hover:text-[#6366f1] transition-colors"
        >
          Resume
        </Link>
      </nav>

      {/* Social Links */}
      <div className="space-y-3 pt-6 border-t border-[#e5e7eb]">
        <a
          href="https://github.com/duongkstn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#6366f1] transition-colors"
        >
          <span>→</span> GitHub
        </a>
        <a
          href="https://linkedin.com/in/duong"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#6366f1] transition-colors"
        >
          <span>→</span> LinkedIn
        </a>
        <a
          href="mailto:duongdn8@fpt.com"
          className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#6366f1] transition-colors"
        >
          <span>→</span> Email
        </a>
      </div>
    </aside>
  );
}
