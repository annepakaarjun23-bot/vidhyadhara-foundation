import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0d2a4e', color: '#ffffff' }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '56px 24px 32px',
      }}>
        {/* 4-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: '0.9rem',
              color: '#ffffff',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              borderLeft: '3px solid #5da9e9',
              paddingLeft: '10px',
              marginBottom: '16px',
            }}>
              Vidhyadhara Foundation
            </div>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '16px' }}>
              A non-profit educational foundation committed to providing free academic support, scholarships, and mentorship to rural children in Nalgonda, Telangana.
            </p>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Education Is Our Weapon
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              borderLeft: '3px solid #5da9e9',
              paddingLeft: '10px',
              marginBottom: '16px',
              fontFamily: 'Inter, sans-serif',
            }}>
              Quick Links
            </div>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/contact', label: 'Contact' },
              { href: '/student_register', label: 'Student Registration' },
              { href: '/volunteer_register', label: 'Volunteer Registration' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                display: 'block',
                fontSize: '0.83rem',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '8px',
                transition: 'color 0.15s',
              }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Programs */}
          <div>
            <div style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              borderLeft: '3px solid #5da9e9',
              paddingLeft: '10px',
              marginBottom: '16px',
              fontFamily: 'Inter, sans-serif',
            }}>
              Programs
            </div>
            {[
              'Summer Camp',
              'Winter Camp',
              'Dasara Camp',
              'Providing Scholarship',
              'Career Mentorship',
              'Alumni Network',
            ].map(p => (
              <div key={p} style={{
                fontSize: '0.83rem',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '8px',
              }}>
                {p}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              borderLeft: '3px solid #5da9e9',
              paddingLeft: '10px',
              marginBottom: '16px',
              fontFamily: 'Inter, sans-serif',
            }}>
              Contact
            </div>
            <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', marginBottom: '10px', lineHeight: 1.6 }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Address</div>
              Haliya, Nalgonda, Telangana — 508377
            </div>
            <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', marginBottom: '10px' }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</div>
              <a href="mailto:vidhyadharafoundation@gmail.com" style={{ color: '#5da9e9' }}>
                vidhyadharafoundation@gmail.com
              </a>
            </div>
            <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Phone</div>
              <a href="tel:+917799355803" style={{ color: '#5da9e9' }}>+91 7799355803</a>, 
              <a href="tel:+919966141696" style={{ color: '#5da9e9' }}>+91 9966141696</a>
            </div>

            {/* Social Links - Now with X added */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/vidhyadharafoundation/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.7)',
                  padding: '6px 10px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '4px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vidhyadhara-foundation-3a90673b9/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.7)',
                  padding: '6px 10px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '4px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>

              {/* X (newly added) */}
              <a
                href="https://x.com/VidhyadharaEdu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.7)',
                  padding: '6px 10px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '4px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.795-7.583-6.638 7.583H1.153l8.61-9.83L0 1.153h7.806l5.385 7.11z"/>
                </svg>
                X
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Vidhyadhara Foundation. All rights reserved.
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Education Is Our Weapon
          </div>
        </div>
      </div>
    </footer>
  )
}