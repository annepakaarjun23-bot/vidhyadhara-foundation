import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SectionLabel, SectionTitle, Btn, ProgramCard, StatBlock } from '../components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Vidhyadhara Foundation — Empowering Children Through Education',
  description: 'Free academic support, scholarships, and mentorship for rural children in Nalgonda, Telangana.',
}

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: '#ffffff', padding: '72px 0 64px', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 420px' }}>
                <SectionLabel>Non-Profit Educational Foundation</SectionLabel>
                <h1 style={{
                  fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  color: '#0d2a4e',
                  lineHeight: 1.15,
                  marginBottom: '20px',
                  fontFamily: 'Inter, sans-serif',
                }}>
                  Empowering Children Through Quality Education
                </h1>
                <p style={{ fontSize: '0.97rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '32px', maxWidth: '520px' }}>
                  Vidhyadhara Foundation provides free academic support, scholarships, and mentorship to rural children across Nalgonda, Telangana. Every child deserves quality education — and we make it happen, at no cost.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Btn href="/student_register" variant="solid">Register as a Student</Btn>
                  <Btn href="/programs" variant="outline">View Our Programs</Btn>
                </div>
              </div>

              {/* Logo + Registration Details */}
              <div style={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid #dce6f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f0f5fc',
                }} className="hero-logo">
                  <img
                    src="/logo.jpeg"
                    alt="Vidhyadhara Foundation"
                    width={200}
                    height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="eager"
                  />
                </div>

                {/* Registration Information Box */}
                <div style={{
                  textAlign: 'center',
                  background: '#f8fafd',
                  border: '1px solid #dce6f0',
                  borderRadius: '6px',
                  padding: '16px 20px',
                  maxWidth: '240px',
                  fontSize: '0.82rem',
                  lineHeight: 1.6,
                  color: '#2c3e50'
                }}>
                  <div style={{ 
                    fontWeight: 700, 
                    color: '#0d2a4e',
                    marginBottom: '8px',
                    fontSize: '0.85rem'
                  }}>
                    Registered & Recognized
                  </div>
                  <div>Registration Number: <strong>532/2025</strong></div>
                  <div>Darpan ID: <strong>TS/2026/0995241</strong></div>
                  <div>NGO ID: <strong>TG/00053084</strong></div>
                </div>

                {/* New Tax Exemption Text - Outside the box */}
                <div style={{
                  textAlign: 'center',
                  maxWidth: '240px',
                  fontSize: '0.78rem',
                  lineHeight: 1.5,
                  color: '#334155',
                  fontStyle: 'italic',
                  padding: '0 8px'
                }}>
                  The Income Tax Department has granted tax exemption to the Vidhyadhara Foundation under Sections 12A and 80G for a period of 3 years.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 360px' }}>
                <SectionLabel>About Us</SectionLabel>
                <SectionTitle>Our Story</SectionTitle>
                <p style={{ fontSize: '0.93rem', color: '#4a5568', lineHeight: 1.85, marginBottom: '16px' }}>
                  Founded by a group of educators and community members from Nalgonda, Vidhyadhara Foundation was born from a simple belief: that where a child is born should never determine how far they go.
                </p>
                <p style={{ fontSize: '0.93rem', color: '#4a5568', lineHeight: 1.85, marginBottom: '28px' }}>
                  We run free academic camps, provide scholarship guidance, and mentor students through the challenges of rural education — one child at a time.
                </p>
                <Btn href="/about" variant="outline">Read Our Full Story</Btn>
              </div>
              <div style={{
                flex: '1 1 280px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2px',
              }}>
                {[
                  { number: '50+', label: 'Children Supported' },
                  { number: '10+', label: 'Scholarships Awarded' },
                  { number: '6', label: 'Active Programs' },
                  { number: '100%', label: 'Free of Cost' },
                ].map(s => (
                  <div key={s.label} style={{
                    background: '#ffffff',
                    border: '1px solid #dce6f0',
                    borderTop: '3px solid #1a4d8f',
                    padding: '24px 16px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1a4d8f', fontFamily: 'Inter, sans-serif', lineHeight: 1 }}>
                      {s.number}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#4a5568', marginTop: '6px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS PREVIEW */}
        <section style={{ background: '#ffffff', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <SectionLabel>What We Do</SectionLabel>
                <SectionTitle>Our Programs</SectionTitle>
              </div>
              <Btn href="/programs" variant="outline">All Programs</Btn>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <ProgramCard
                title="Summer Camp"
                description="Intensive academic sessions held every May–June for students in Classes 3–12. Covers core subjects with expert guidance and doubt-clearing workshops."
                outcome="Outcome: Stronger academic foundation for upcoming school year"
              />
              <ProgramCard
                title="Winter & Dasara Coaching"
                description="Short-duration focused camps during school holidays. Students get structured study time, revision materials, and peer learning opportunities."
                outcome="Outcome: Improved exam performance and study habits"
              />
              <ProgramCard
                title="Scholarship Guidance"
                description="End-to-end support for students applying for government and private scholarships — from identification of schemes to application assistance."
                outcome="Outcome: Financial support secured for deserving students"
              />
            </div>
          </div>
        </section>

        {/* NOTICE BOARD - Three Vertical Rectangular Cards */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <SectionLabel>Notice Board</SectionLabel>
                  <span style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#c0392b',
                    display: 'inline-block',
                    animation: 'noticePulse 1.8s ease-in-out infinite',
                  }} />
                </div>
                <SectionTitle>Official Announcements</SectionTitle>
              </div>
            </div>
        
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
              {/* Notice 1: Summer Camp 2026 with PDF Download */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderRadius: '4px',
                overflow: 'hidden',
              }}>
                <div style={{
                  background: '#1a4d8f',
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.8)',
                    fontFamily: 'Inter, sans-serif',
                  }}>
                    Official Notice
                  </span>
                  <span style={{
                    background: '#c0392b',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '3px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>NEW</span>
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0d2a4e',
                    marginBottom: '12px',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.3,
                  }}>
                    Summer Camp 2026 — Registration Open
                  </h3>
                  <p style={{ fontSize: '0.87rem', color: '#4a5568', lineHeight: 1.75, marginBottom: '24px' }}>
                    Free academic sessions for students in Classes 3–12 in Nalgonda district. Expert faculty, structured timetable, and subject-wise coaching at no cost.
                  </p>
        
                  {/* Smaller Download Link */}
                  <a
                    href="/notices/summer-camp-2026.pdf"
                    download="Vidhyadhara-Summer-Camp-2026-Notice.pdf"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#f8fafd',
                      border: '1px solid #dce6f0',
                      padding: '10px 16px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      color: '#0d2a4e',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      marginBottom: '18px',
                    }}
                  >
                    <DownloadIcon />
                    Download Official Notice (PDF)
                  </a>
        
                  {/* Smaller Register Button */}
                  <Btn 
                    href="/student_register" 
                    variant="solid" 
                    style={{ 
                      width: 'auto', 
                      padding: '10px 24px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Register Now — Free
                  </Btn>
                </div>
              </div>
        
              {/* Notice 2: Selected Students List */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderRadius: '4px',
                overflow: 'hidden',
              }}>
                <div style={{ background: '#0d2a4e', padding: '14px 20px' }}>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase', 
                    color: 'rgba(255,255,255,0.85)', 
                    fontFamily: 'Inter, sans-serif' 
                  }}>
                    Summer Camp 2026
                  </span>
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 700, 
                    color: '#0d2a4e', 
                    marginBottom: '16px', 
                    fontFamily: 'Inter, sans-serif' 
                  }}>
                    Selected Students List – Summer Camp 2026
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#4a5568', marginBottom: '20px' }}>
                    The following students have been selected for the Summer Camp 2026.
                  </p>
        
                  {/* Smaller Download Link */}
                  <a
                    href="/notices/student_list_2026.pdf"
                    download="Selected-Students-Summer-Camp-2026.pdf"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#f8fafd',
                      border: '1px solid #dce6f0',
                      padding: '10px 16px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      color: '#0d2a4e',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                    }}
                  >
                    <DownloadIcon />
                    Download Selected Students List (PDF)
                  </a>
                </div>
              </div>
        
              {/* Notice 3: Winter Camp 2026 */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderRadius: '4px',
                overflow: 'hidden',
              }}>
                <div style={{ background: '#0d2a4e', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase', 
                    color: 'rgba(255,255,255,0.7)', 
                    fontFamily: 'Inter, sans-serif' 
                  }}>
                    Upcoming
                  </span>
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 700, 
                    color: '#0d2a4e', 
                    marginBottom: '12px', 
                    fontFamily: 'Inter, sans-serif' 
                  }}>
                    Winter Camp 2026 — Details Coming Soon
                  </h3>
                  <p style={{ fontSize: '0.87rem', color: '#4a5568', lineHeight: 1.75, marginBottom: '24px' }}>
                    Our Winter Camp 2026 is currently being planned. Dates, subjects, and registration details will be published soon.
                  </p>
                  <Btn 
                    href="/contact" 
                    variant="outline" 
                    style={{ 
                      width: 'auto', 
                      padding: '10px 24px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Register Your Interest
                  </Btn>
                </div>
              </div>
        
            </div>
          </div>
        </section>

        {/* INSPIRATION: Ambedkar & Phule */}
        <section style={{ background: '#ffffff', padding: '80px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Inspiration</SectionLabel>
            <SectionTitle>Our Guiding Lights</SectionTitle>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '48px' }}>
              {/* Dr. B.R. Ambedkar */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '180px',
                  height: '180px',
                  margin: '0 auto 20px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '6px solid #1a4d8f',
                  boxShadow: '0 10px 30px rgba(26, 77, 143, 0.15)',
                }}>
                  <img
                    src="gallery/brAmbedkar.jpeg"
                    alt="Dr. B.R. Ambedkar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0d2a4e', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                  Dr. Bhimrao Ramji Ambedkar
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#1a4d8f', fontWeight: 600 }}>Architect of the Indian Constitution • Champion of Education &amp; Equality</p>
              </div>

              {/* Jyotirao Phule */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '180px',
                  height: '180px',
                  margin: '0 auto 20px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '6px solid #1a4d8f',
                  boxShadow: '0 10px 30px rgba(26, 77, 143, 0.15)',
                }}>
                  <img
                    src="gallery/JyotiraoPhule.jpeg"
                    alt="Jyotirao Phule"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0d2a4e', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                  Jyotirao Phule
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#1a4d8f', fontWeight: 600 }}>Social Reformer • Pioneer of Education for All</p>
              </div>
            </div>

            <p style={{ 
              textAlign: 'center', 
              maxWidth: '720px', 
              margin: '50px auto 0', 
              fontSize: '0.95rem', 
              color: '#4a5568', 
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              “Education is the most powerful weapon which you can use to change the world.” 
              <br />— Dr. B.R. Ambedkar
            </p>
          </div>
        </section>

        {/* IMPACT */}
        <section style={{ background: '#0d2a4e', padding: '64px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{
                display: 'inline-block',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#5da9e9',
                borderLeft: '3px solid #5da9e9',
                paddingLeft: '10px',
                marginBottom: '12px',
                fontFamily: 'Inter, sans-serif',
              }}>
                Our Impact
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
                Every Number Is a Child We Served
              </h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '8px',
            }}>
              <StatBlock number="50+" label="Children Supported" light />
              <StatBlock number="10+" label="Scholarships Awarded" light />
              <StatBlock number="5" label="Camps Completed" light />
              <StatBlock number="100%" label="Free of Charge" light />
            </div>
          </div>
        </section>

        {/* GALLERY PREVIEW */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <SectionLabel>Gallery</SectionLabel>
                <SectionTitle>From Our Camps</SectionTitle>
              </div>
              <Btn href="/gallery" variant="outline">View All Photos</Btn>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '12px',
            }}>
              {[
                { src: '/gallery/image7.jpeg', alt: 'Students at Summer Camp 2024' },
                { src: '/gallery/image4.jpeg', alt: 'Summer Camp 2025' },
                { src: '/gallery/image9.jpeg', alt: 'Dasara Camp 2025' },
                { src: '/gallery/image12.jpeg', alt: 'Foundation group photo' },
              ].map((img, i) => (
                <div key={i} style={{
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  border: '1px solid #dce6f0',
                  borderRadius: '4px',
                  background: '#e8eef6',
                }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#1a4d8f', padding: '64px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#ffffff',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '12px',
            }}>
              Join the Vidhyadhara Community
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
              Whether you are a student seeking support or a volunteer wanting to contribute — there is a place for you here.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Btn href="/student_register" variant="white">Register as Student</Btn>
              <Btn href="/contact" variant="outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}>Contact Us</Btn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}