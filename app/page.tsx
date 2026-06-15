import Link from 'next/link';
import { resumeData, getCurrentRole, getTopExperiences, getTopExpertiseAreas } from '@/lib/resume-data';

export const metadata = {
  title: 'Home | Duong Nguyen',
  description: 'AI Engineer & Software Engineer - Portfolio',
};

export default function Home() {
  const currentRole = getCurrentRole();
  const topExperiences = getTopExperiences(3);
  const topExpertise = getTopExpertiseAreas(5);

  return (
    <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }}>
      {/* Hero Section */}
      <section style={{
        marginBottom: '4rem',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
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
            color: '#10b981',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Welcome
          </p>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            letterSpacing: '-2px'
          }}>
            I build AI systems that <span style={{ color: '#10b981' }}>work in production</span>
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#475569',
            marginBottom: '2rem',
            lineHeight: '1.8'
          }}>
            {resumeData.summary}
          </p>
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
              backgroundColor: '#10b981',
              color: '#fff',
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(16, 185, 129, 0.15)'
            }}
          >
            View Full Resume <span>→</span>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '3rem 0' }}></div>

      {/* Current Role Section */}
      {currentRole && (
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '2rem'
          }}>
            Current Role
          </h2>
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '0.75rem',
            padding: '2rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '0.5rem'
            }}>
              {currentRole.title}
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#10b981',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              {currentRole.company}
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#475569',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              {currentRole.description}
            </p>
            <div>
              <p style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#0f172a',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Key Achievements
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {currentRole.achievements.slice(0, 3).map((achievement, idx) => (
                  <li key={idx} style={{
                    fontSize: '0.95rem',
                    color: '#475569',
                    marginBottom: '0.75rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: '1.5'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      color: '#10b981',
                      fontWeight: '700'
                    }}>
                      •
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '3rem 0' }}></div>

      {/* Key Highlights Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#0f172a',
          marginBottom: '2rem'
        }}>
          Key Highlights
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {topExperiences.map((exp) => (
            <div key={exp.id} style={{
              backgroundColor: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '0.5rem'
              }}>
                {exp.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#10b981',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                {exp.company}
              </p>
              <p style={{
                fontSize: '0.75rem',
                color: '#94a3b8',
                marginBottom: '1rem'
              }}>
                {exp.startDate} – {exp.endDate}
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: '#475569',
                lineHeight: '1.6',
                flex: 1
              }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '3rem 0' }}></div>

      {/* Core Expertise Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#0f172a',
          marginBottom: '2rem'
        }}>
          Core Expertise
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {topExpertise.map((expertise) => (
            <div key={expertise.id} style={{
              backgroundColor: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '0.75rem'
              }}>
                {expertise.area}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#475569',
                marginBottom: '1.25rem',
                lineHeight: '1.6'
              }}>
                {expertise.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {expertise.relatedSkills.map((skill, idx) => (
                  <span key={idx} style={{
                    display: 'inline-block',
                    backgroundColor: '#f0fdf4',
                    color: '#10b981',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    paddingLeft: '0.75rem',
                    paddingRight: '0.75rem',
                    paddingTop: '0.35rem',
                    paddingBottom: '0.35rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #bbf7d0'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
