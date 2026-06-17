import Link from 'next/link';
import { papersData } from '@/lib/papers-data';
import { resumeData } from '@/lib/resume-data';

export const metadata = {
  title: 'Resume | Dao Nguyen Duong',
  description: 'Resume and CV for Dao Nguyen Duong - AI Engineer & Software Engineer',
};

// Color constants
const colors = {
  darkBlue: '#0f172a',
  slateGray: '#475569',
  emerald: '#10b981',
  lightSlate: '#64748b',
  border: '#e2e8f0',
  lightCyan: '#e0f2fe',
  darkCyan: '#7dd3fc',
  darkBlueText: '#0c4a6e',
  lightGreen: '#f0fdf4',
  greenBorder: '#bbf7d0',
  amberBg: '#fef3c7',
  amberBorder: '#fde68a',
  amberAccent: '#f59e0b',
  amberText: '#92400e',
  amberDark: '#78350f',
  lightBg: '#f8fafc',
  lightBlueBg: '#dbeafe',
  lightBlueBorder: '#93c5fd',
  darkBlueAlt: '#1e40af',
};

// Style constants
const styles = {
  container: {
    maxWidth: '900px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  header: {
    marginBottom: '3rem',
    paddingTop: '2rem',
  },
  h1: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: colors.darkBlue,
    marginBottom: '0.5rem',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: colors.darkBlue,
    marginBottom: '1.5rem',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: colors.darkBlue,
  },
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: colors.darkBlue,
    marginBottom: '0.75rem',
  },
  body: {
    color: colors.slateGray,
    fontSize: '0.9rem',
    lineHeight: '1.8',
  },
  bodySmall: {
    color: colors.slateGray,
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
  date: {
    fontSize: '0.875rem',
    color: colors.lightSlate,
    whiteSpace: 'nowrap',
  },
  paperBox: {
    padding: '1rem',
    backgroundColor: colors.lightCyan,
    border: `1px solid ${colors.amberBorder}`,
    borderLeft: `4px solid ${colors.amberAccent}`,
    borderRadius: '0.375rem',
  },
  
};

export default function ResearchPage() {
  return (
    <div style={styles.container}>
        <header style={styles.header}>
                <h1 style={styles.h1}>
                  {resumeData.name}
                </h1>
                <p style={{
                  fontSize: '1rem',
                  color: colors.emerald,
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {resumeData.title}
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: colors.lightSlate, fontSize: '0.875rem' }}>
                  <a href={`mailto:${resumeData.contact.email}`} style={{ color: colors.emerald, textDecoration: 'none', fontWeight: '500' }}>
                    {resumeData.contact.email}
                  </a>
                  {resumeData.contact.location && (
                    <span style={{ color: colors.slateGray, fontWeight: '500' }}>
                      {resumeData.contact.location}
                    </span>
                  )}
                  {resumeData.contact.github && (
                    <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: colors.emerald, textDecoration: 'none', fontWeight: '500' }}>
                      GitHub
                    </a>
                  )}
                  {resumeData.contact.linkedin && (
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: colors.emerald, textDecoration: 'none', fontWeight: '500' }}>
                      LinkedIn
                    </a>
                  )}
                </div>
        </header>
        {/* Research Papers */}
        <section style={{ marginBottom: '3rem' }}>
        <h2 style={styles.h2}>Research Papers</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {papersData.papers.map((paper) => (
            <div
                key={paper.id}
                style={styles.paperBox}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={styles.sectionTitle}>
                    {paper.title}
                </h3>
                <span style={styles.date}>
                    {paper.year}
                </span>
                
                </div>
                <p style={{ color: colors.amberText, fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {paper.authors  }
                </p>
                <p style={{ color: "blue", fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {paper.conference}
                </p>
                {/* <p style={{ color: colors.amberDark, fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {paper.link}
                </p>
                 */}
                <p style={{ color: colors.amberDark, fontSize: '0.9rem', lineHeight: '1.6' }}>
                <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: colors.amberDark }}
                >
                    {paper.link}
                </a>
                </p>
            </div>
            ))}
        </div>
        </section>

        {/* Footer */}
      <section style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '2rem', marginBottom: '2rem' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: colors.emerald,
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9rem'
          }}
        >
          <span>←</span> Back to home
        </Link>
      </section>
    </div>
  );
}