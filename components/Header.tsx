'use client';

import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <>
      <style>{`
        .nav-link { color: #475569; transition: color 0.2s; }
        .nav-link:hover { color: #10b981; }
      `}</style>
      <header style={{
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        padding: '1rem 0'
      }}>
        <div style={{maxWidth: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
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
            <nav style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
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
              {/* <a
                href="https://github.com/duongkstn"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                GitHub
              </a> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
