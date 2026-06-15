// app/resume/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Resume | Duong Nguyen',
  description: 'Resume and CV for Duong Nguyen',
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[#1f2937] mb-2">Duong Nguyen</h1>
        <p className="text-lg text-[#6366f1] font-semibold mb-4">
          AI Engineer · Software Engineer
        </p>
        <p className="text-[#6b7280] mb-6">
          Email:{' '}
          <a href="mailto:duongdn8@fpt.com" className="text-[#6366f1]">
            duongdn8@fpt.com
          </a>{' '}
          | GitHub:{' '}
          <a
            href="https://github.com/duongkstn"
            className="text-[#6366f1]"
            target="_blank"
            rel="noopener noreferrer"
          >
            duongkstn
          </a>
        </p>
      </header>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4">About</h2>
        <p className="text-[#6b7280] leading-relaxed">
          AI engineer passionate about building production-ready machine learning systems. Experienced in LLMs, deep learning, and full-stack software engineering. Strong foundation in Python, distributed systems, and software architecture.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-[#1f2937]">
                AI Engineer / ML Engineer
              </h3>
              <span className="text-sm text-[#6b7280]">2021 - Present</span>
            </div>
            <p className="text-[#6366f1] font-medium mb-2">Your Company</p>
            <ul className="text-[#6b7280] space-y-1 ml-4">
              <li>• Built and deployed production ML models using Python and PyTorch</li>
              <li>• Developed LLM-based applications with prompt engineering and fine-tuning</li>
              <li>• Optimized model inference performance and reduced latency by 40%</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-[#1f2937]">
                Software Engineer
              </h3>
              <span className="text-sm text-[#6b7280]">2019 - 2021</span>
            </div>
            <p className="text-[#6366f1] font-medium mb-2">Startup / Company</p>
            <ul className="text-[#6b7280] space-y-1 ml-4">
              <li>• Developed full-stack web applications using React and Node.js</li>
              <li>• Designed and implemented REST APIs with proper architecture</li>
              <li>• Mentored junior developers on best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Python',
            'PyTorch',
            'TensorFlow',
            'LLMs',
            'React',
            'Node.js',
            'TypeScript',
            'PostgreSQL',
            'Docker',
            'AWS',
            'Git',
            'Machine Learning',
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-white border border-[#e5e7eb] rounded-lg text-sm font-medium text-[#1f2937]"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Education</h2>
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-[#1f2937]">
              Bachelor of Science in Computer Science
            </h3>
            <span className="text-sm text-[#6b7280]">Graduation Year</span>
          </div>
          <p className="text-[#6366f1] font-medium">University Name</p>
        </div>
      </section>

      {/* Download Section */}
      <section className="border-t border-[#e5e7eb] pt-8">
        <p className="text-[#6b7280] mb-4">
          For a downloadable PDF version, please{' '}
          <a href="mailto:duongdn8@fpt.com" className="text-[#6366f1] font-medium">
            contact me
          </a>
          .
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6366f1] hover:gap-3 transition-all font-medium"
        >
          <span>←</span> Back home
        </Link>
      </section>
    </div>
  );
}
