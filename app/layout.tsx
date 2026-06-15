// app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Duong Nguyen | AI Engineer',
  description: 'AI Engineer & Software Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col md:flex-row bg-[#fafafa]">
          {/* Sidebar will be added in Task 5 */}
          <main className="flex-1 p-6 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
