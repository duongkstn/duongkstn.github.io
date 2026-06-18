'use client';

import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <>
      <style>{`
        .nav-link { color: #475569; transition: color 0.2s; }
        .nav-link:hover { color: #10b981; }
        @media (max-width: 767px) {
          .header-inner {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .header-nav {
            gap: 1rem !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
      <header style={{
        background: 'linear-gradient(135deg, #ecfeff, #cffafe, #a5f3fc)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        padding: '1rem 0'
      }}>
        <div style={{maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>
          <div className="header-inner" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            {/* Logo/Name */}
            <Link href="/" style={{textDecoration: 'none', color: 'inherit', display: "inline-flex", alignItems: "center", gap: "8px",}}>
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={24}
                height={24}
                priority
              />
              <h1 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#0f172a',
                margin: 0,
                letterSpacing: '-0.5px'
              }}>
                Dao Nguyen Duong's Blog
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="header-nav" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
              <Link href="/" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                Home
              </Link>
              <Link href="/blog" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                Blog
              </Link>
              <Link href="/resume" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                Resume
              </Link>
              <Link href="/research" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                Research
              </Link>
              <Link href="/life" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                My Life
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
