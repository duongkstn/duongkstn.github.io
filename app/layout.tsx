// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import '../styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Dao Nguyen Duong | AI Engineer',
  description: 'AI Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa]">
        <Header />
        <div className="min-h-screen flex flex-col lg:flex-row">
          <ProfileCard />
          <main className="flex-1 p-4 md:p-6 lg:p-12 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
