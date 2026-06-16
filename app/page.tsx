import Link from 'next/link';
import { resumeData } from '@/lib/resume-data';

export const metadata = {
  title: 'Home | Dao Nguyen Duong',
  description: 'AI Engineer - Portfolio',
};

// Color palette
const colors = {
  primary: '#10b981',
  dark: '#0f172a',
  muted: '#475569',
  border: '#e2e8f0',
  lightGray: '#f8fafc',
  lightBlue: '#f0f9ff',
  lightGreen: '#f0fdf4',
  lightBorder: '#bbf7d0',
  secondaryMuted: '#94a3b8',
  white: '#fff',
};

// Reusable card styles
const cardStyle = {
  backgroundColor: colors.white,
  border: `1px solid ${colors.border}`,
  borderRadius: '0.75rem',
  padding: '1.5rem',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
};


export default function Home() {
  return (
    <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }}>
      {/* Hero Section */}
      <section style={{
        marginBottom: '4rem',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.lightBlue} 100%)`,
        borderRadius: '1rem',
        padding: '3rem',
        marginLeft: '-1.5rem',
        marginRight: '-1.5rem',
        paddingLeft: '2rem',
        paddingRight: '2rem'
      }}>
        <div style={{ maxWidth: '700px' }}>
          <p style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: colors.primary,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Welcome
          </p>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: colors.dark,
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            letterSpacing: '-2px'
          }}>
            I build AI systems that <span style={{ color: colors.primary }}>work in production</span>
          </h1>
          <Link
            href="/resume"
            className="cta-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              backgroundColor: colors.primary,
              color: colors.white,
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: `0 4px 6px rgba(16, 185, 129, 0.15)`
            }}
          >
            View Full Resume <span>→</span>
          </Link>
        </div>
      </section>



    </div>
  );
}
