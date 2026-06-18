'use client';

export default function ProfileCard() {
  return (
    <>
      <style>{`
        @media (max-width: 1023px) {
          .profile-card {
            width: 100% !important;
            position: static !important;
            height: auto !important;
            overflow-y: visible !important;
            border-right: none !important;
            border-bottom: 1px solid #e2e8f0 !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
            padding: 1.5rem 2rem !important;
          }
          .profile-card img {
            width: 110px !important;
            height: 110px !important;
          }
          .profile-card-image-wrapper {
            margin-bottom: 0.5rem !important;
          }
          .profile-card-identity {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
          }
          .profile-card-name {
            margin-bottom: 0 !important;
          }
          .profile-card-name span:first-child {
            font-size: 1.25rem !important;
          }
          .profile-card-divider {
            display: none !important;
          }
          .profile-card-info {
            margin-bottom: 0 !important;
          }
          .profile-card-social {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem 1.5rem !important;
            justify-content: center !important;
            width: 100% !important;
            max-width: 320px !important;
          }
        }
      `}</style>
      <aside className="profile-card" style={{
        display: 'flex',
        flexDirection: 'column',
        width: '280px',
        backgroundColor: '#f8fafc',
        borderRight: '1px solid #e2e8f0',
        padding: '2rem',
        position: 'sticky',
        top: '65px',
        height: 'calc(100vh - 65px)',
        overflowY: 'auto'
      }}>

      {/* Profile Image */}
      <div className="profile-card-image-wrapper" style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1.5rem'
      }}>
        <img
          src="/images/profile.jpg"
          alt="Dao Nguyen Duong"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      {/* Identity block */}
      <div className="profile-card-identity" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem',
        marginBottom: '0.5rem',
      }}>
        <h2 className="profile-card-name"
          style={{
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            alignItems: 'center',
          }}
        >
        <span
          style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Đào Nguyên Dương
        </span>

        <span
          style={{
            fontSize: '0.95rem',
            fontWeight: 500,
            color: '#64748b',
            letterSpacing: '0.02em',
          }}
        >
          @duongkstn
        </span>
        </h2>

        <div className="profile-card-info" style={{ fontSize: '0.875rem', color: '#64748b' }}>
          <p style={{ margin: 0 }}>📍 Vietnam</p>
        </div>
      </div>

      {/* Divider */}
      <div className="profile-card-divider" style={{ height: '1px', backgroundColor: '#e2e8f0', marginBottom: '0.5rem' }}></div>

      {/* Social Links */}
      <div className="profile-card-social" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <a href="https://github.com/duongkstn" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          gap: '0.75rem',
          fontSize: '0.875rem',
          color: '#64748b',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.2s'
        }} onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>
          <svg style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/duongkstn/" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          gap: '0.75rem',
          fontSize: '0.875rem',
          color: '#64748b',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.2s'
        }} onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>
          <svg style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
        <a href="mailto:nguyenduongyht@gmail.com" style={{
          display: 'flex',
          gap: '0.75rem',
          fontSize: '0.875rem',
          color: '#64748b',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.2s'
        }} onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>
          <svg style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Email
        </a>
        <a href="https://scholar.google.com/citations?user=GWdDtWYAAAAJ" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          gap: '0.75rem',
          fontSize: '0.875rem',
          color: '#64748b',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.2s'
        }} onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>
          <svg style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C16.254 13.769 14 17 14 17v3a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-3c0-.227-1.745-3.231-2.758-3.231zm5.758.231v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3h1.77L12 10.433 8.23 14z"/>
          </svg>
          Google Scholar
        </a>
      </div>
    </aside>
    </>
  );
}
