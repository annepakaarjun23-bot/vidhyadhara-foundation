import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, SectionTitle, Btn, ProgramCard } from '../../components/ui'

export const metadata = {
  title: 'Programs — Vidhyadhara Foundation',
  description: 'Free academic programs including Summer Camp, Winter Camp, Scholarship Guidance, and more for children in Nalgonda.',
}

function PastProgramCard({ title, description, photo, year }) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #dce6f0',
      borderTop: '3px solid #1a4d8f',
      borderRadius: '4px',
      overflow: 'hidden',
    }}>
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#e8eef6' }}>
        <img
          src={photo}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ 
          fontSize: '0.7rem', 
          fontWeight: 700, 
          color: '#1a4d8f', 
          textTransform: 'uppercase', 
          letterSpacing: '0.08em', 
          marginBottom: '6px', 
          fontFamily: 'Inter, sans-serif' 
        }}>
          {year}
        </div>
        <h3 style={{ 
          fontSize: '0.95rem', 
          fontWeight: 700, 
          color: '#0d2a4e', 
          marginBottom: '8px', 
          fontFamily: 'Inter, sans-serif', 
          lineHeight: 1.3 
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '0.84rem', 
          color: '#4a5568', 
          lineHeight: 1.75 
        }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Page Header */}
        <div style={{ background: '#0d2a4e', padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>What We Offer</SectionLabel>
            <h1 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', 
              fontWeight: 800, 
              color: '#ffffff', 
              fontFamily: 'Inter, sans-serif', 
              marginBottom: '12px' 
            }}>
              Our Programs
            </h1>
            <p style={{ 
              color: 'rgba(255,255,255,0.65)', 
              fontSize: '0.95rem', 
              maxWidth: '540px' 
            }}>
              Every program we run is free of charge. From summer camps to scholarship coaching, we cover it all — so that cost is never a barrier.
            </p>
          </div>
        </div>

        {/* Our Work So Far */}
        <section style={{ background: '#ffffff', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Past Programs</SectionLabel>
            <SectionTitle>Our Work So Far</SectionTitle>

            {/* 2024 */}
            <h3 style={{ 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              color: '#1a4d8f', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              borderBottom: '1px solid #dce6f0', 
              paddingBottom: '8px', 
              marginTop: '36px', 
              marginBottom: '20px', 
              fontFamily: 'Inter, sans-serif' 
            }}>
              2024
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <PastProgramCard
                year="2024"
                title="Summer Camp 2024"
                description="Our inaugural summer camp brought together students from Classes 3–10 for intensive academic sessions in Maths, Science, and English. Volunteers from local colleges taught and mentored students over three weeks."
                photo="/gallery/image6.jpeg"
              />
              <PastProgramCard
                year="2024"
                title="Dasara Camp 2024"
                description="A focused revision camp held during Dasara holidays, paired with our first Alumni Meet where past participants shared their progress. A milestone in building long-term community bonds."
                photo="/gallery/image12.jpeg"
              />
            </div>

            {/* 2025 */}
            <h3 style={{ 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              color: '#1a4d8f', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em', 
              borderBottom: '1px solid #dce6f0', 
              paddingBottom: '8px', 
              marginBottom: '20px', 
              fontFamily: 'Inter, sans-serif' 
            }}>
              2025
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <PastProgramCard
                year="2025"
                title="Summer Camp 2025"
                description="Expanded to Class 3–12 with additional faculty volunteers and a structured daily schedule including doubt-clearing sessions. Participation grew significantly from the previous year."
                photo="/gallery/image4.jpeg"
              />
              <PastProgramCard
                year="2025"
                title="Dasara Camp 2025"
                description="Holiday revision camp focused on Class 10 and 12 board preparation. Students worked through practice papers and received personalised feedback from volunteer teachers."
                photo="/gallery/image17.jpeg"
              />
              <PastProgramCard
                year="2025"
                title="Winter Camp 2025"
                description="Our first dedicated winter camp, focused on exam preparation for secondary and higher secondary students. Covered key subjects with model paper practice and answer-writing workshops."
                photo="/gallery/image3.jpeg"
              />
            </div>

            {/* 2026 coming soon */}
            <div style={{
              background: '#f0f5fc',
              border: '1px dashed #b0c8e8',
              borderRadius: '4px',
              padding: '32px',
              textAlign: 'center',
            }}>
              <div style={{ 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                color: '#1a4d8f', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em', 
                marginBottom: '8px', 
                fontFamily: 'Inter, sans-serif' 
              }}>
                2026
              </div>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: 700, 
                color: '#0d2a4e', 
                marginBottom: '8px', 
                fontFamily: 'Inter, sans-serif' 
              }}>
                Summer Camp 2026 — Coming Soon
              </h3>
              <p style={{ 
                fontSize: '0.85rem', 
                color: '#4a5568', 
                marginBottom: '20px' 
              }}>
                Summer Camp 2026 registration is now open. Be among the first to register.
              </p>
              <Btn href="/student_register" variant="solid">Register Now — Free</Btn>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Current Offerings</SectionLabel>
            <SectionTitle>What We Provide</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '32px' }}>
              <ProgramCard
                title="Summer Academic Camp"
                description="Three-week intensive academic program held every May–June. Subjects include Maths, Science, English, and Telugu for Classes 3–12."
                outcome="Outcome: Improved grades and stronger subject foundations"
              />
              <ProgramCard
                title="Winter Coaching Camp"
                description="Short-duration focused sessions held in December–January. Revision-focused, covering past papers and exam strategies for board classes."
                outcome="Outcome: Better board exam performance"
              />
              <ProgramCard
                title="Dasara Holiday Camp"
                description="Productive use of Dasara school holiday break. Subject revision sessions for all secondary classes with doubt-clearing workshops."
                outcome="Outcome: No learning loss during holidays"
              />
              <ProgramCard
                title="Scholarship Guidance"
                description="End-to-end assistance with government scholarship applications — SC/ST/BC/EBC/minority schemes, Vidya Deevena, and more. Includes document prep and follow-up."
                outcome="Outcome: Deserving students receive financial support"
              />
              <ProgramCard
                title="Career Mentorship"
                description="One-on-one and group sessions with working professionals. Covers career paths, competitive exams (EAMCET, JEE, NEET), and college admissions guidance."
                outcome="Outcome: Students make informed career decisions"
              />
              <ProgramCard
                title="Alumni Network"
                description="A growing network of past program participants who return to mentor younger students, share resources, and build community."
                outcome="Outcome: Sustainable peer-to-peer support system"
              />
            </div>
          </div>
        </section>

        {/* How to Enroll */}
        <section style={{ background: '#ffffff', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Enrolment</SectionLabel>
            <SectionTitle>How to Join a Program</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {[
                { step: '01', title: 'Fill the Form', text: 'Complete the Student Registration form on this website. It takes less than 5 minutes and is completely free.' },
                { step: '02', title: 'We Contact You', text: 'Our team will reach out to confirm your registration and share the schedule for the upcoming camp.' },
                { step: '03', title: 'Attend the Camp', text: 'Arrive at the venue on the scheduled date. All study materials are provided free of charge.' },
                { step: '04', title: 'Continue Learning', text: 'Stay connected with our alumni network and return for future programs to keep growing.' },
              ].map(item => (
                <div key={item.step} style={{
                  background: '#f8fafd',
                  border: '1px solid #dce6f0',
                  borderRadius: '4px',
                  padding: '24px 20px',
                }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'rgba(26,77,143,0.15)',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}>{item.step}</div>
                  <h3 style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: 700, 
                    color: '#0d2a4e', 
                    marginBottom: '8px', 
                    fontFamily: 'Inter, sans-serif' 
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#4a5568', lineHeight: 1.75 }}>{item.text}</p>
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
              marginBottom: '12px' 
            }}>
              Ready to Register?
            </h2>
            <p style={{ 
              fontSize: '0.95rem', 
              color: 'rgba(255,255,255,0.8)', 
              marginBottom: '32px' 
            }}>
              All our programs are free. No fees, no conditions.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Btn href="/student_register" variant="white">Register as Student</Btn>
              <Btn href="/volunteer_register" variant="outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}>Volunteer With Us</Btn>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}