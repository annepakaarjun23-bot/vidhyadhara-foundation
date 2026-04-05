'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, SectionTitle, Btn } from '../../components/ui'

const roles = [
  {
    title: 'Subject Teacher or Tutor',
    description: 'Teach or assist in teaching core academic subjects such as Maths, Science, or English during our camps. No formal training required — just subject knowledge and patience.',
  },
  {
    title: 'Scholarship Coordinator',
    description: 'Help students identify and apply for government and private scholarship schemes. Knowledge of Telangana scholarship portals is a plus.',
  },
  {
    title: 'Career Mentor',
    description: 'Share your professional journey, guide students through career options, competitive exams, and college admissions. Any background is welcome.',
  },
  {
    title: 'Administrative Support',
    description: 'Help with camp logistics, registration, coordination, and communication. Strong organisational skills and reliability are all that is needed.',
  },
  {
    title: 'Digital Skills Facilitator',
    description: 'Teach basic computer literacy and digital skills to rural students. Help them access online resources, scholarships, and career tools.',
  },
  {
    title: 'Photography and Documentation',
    description: 'Document our programs through photos and videos. Help us build a visual record of our work for transparency and community outreach.',
  },
]

export default function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main>

        {/* Header */}
        <div style={{ background: '#0d2a4e', padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Contribute</SectionLabel>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
              Get Involved
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', maxWidth: '520px' }}>
              Vidhyadhara Foundation is built entirely on the commitment of volunteers. Find out how you can contribute.
            </p>
          </div>
        </div>

        {/* Volunteer Roles */}
        <section style={{ background: '#ffffff', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Volunteer Roles</SectionLabel>
            <SectionTitle>How You Can Help</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {roles.map(role => (
                <div key={role.title} style={{
                  background: '#f8fafd',
                  border: '1px solid #dce6f0',
                  borderLeft: '4px solid #1a4d8f',
                  borderRadius: '0 4px 4px 0',
                  padding: '22px 20px',
                }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0d2a4e', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                    {role.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#4a5568', lineHeight: 1.75 }}>{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Interest Form */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Express Interest</SectionLabel>
            <SectionTitle>Quick Application</SectionTitle>
            <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.75, marginTop: '8px', marginBottom: '32px' }}>
              Leave your details below and we will reach out to you. For a full application, use the{' '}
              <a href="/volunteer_register" style={{ color: '#1a4d8f', fontWeight: 600 }}>Volunteer Registration</a> page.
            </p>

            {submitted ? (
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderTop: '3px solid #2d6a4f',
                borderRadius: '4px',
                padding: '32px',
                textAlign: 'center',
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0d2a4e', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                  Interest Registered
                </h3>
                <p style={{ fontSize: '0.87rem', color: '#4a5568', lineHeight: 1.75 }}>
                  We have received your message and will be in touch soon.
                </p>
              </div>
            ) : (
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderTop: '3px solid #1a4d8f',
                borderRadius: '4px',
                padding: '32px',
              }}>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 20px' }}>
                    <div style={{ marginBottom: '18px' }}>
                      <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: '#0d2a4e', marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>
                        Full Name <span style={{ color: '#c0392b' }}>*</span>
                      </label>
                      <input type="text" required placeholder="Your name" style={{ width: '100%', padding: '10px 14px', fontSize: '0.88rem', border: '1px solid #dce6f0', borderRadius: '4px', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                    <div style={{ marginBottom: '18px' }}>
                      <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: '#0d2a4e', marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>
                        Phone / Email <span style={{ color: '#c0392b' }}>*</span>
                      </label>
                      <input type="text" required placeholder="Contact details" style={{ width: '100%', padding: '10px 14px', fontSize: '0.88rem', border: '1px solid #dce6f0', borderRadius: '4px', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: '#0d2a4e', marginBottom: '6px', fontFamily: 'Inter, sans-serif' }}>
                      How would you like to help?
                    </label>
                    <textarea rows={3} placeholder="Briefly describe your skills or interest..." style={{ width: '100%', padding: '10px 14px', fontSize: '0.88rem', border: '1px solid #dce6f0', borderRadius: '4px', fontFamily: 'Open Sans, sans-serif', resize: 'vertical' }} />
                  </div>
                  <Btn type="submit" variant="solid">Send Interest</Btn>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* What to Expect */}
        <section style={{ background: '#ffffff', padding: '64px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Process</SectionLabel>
            <SectionTitle>What to Expect</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {[
                { step: '01', title: 'Application', text: 'Fill in the volunteer form. We review all applications personally.' },
                { step: '02', title: 'Introduction Call', text: 'We will reach out for a brief conversation to understand your background and availability.' },
                { step: '03', title: 'Assignment', text: 'We assign you a role for the next upcoming camp based on your skills and preference.' },
                { step: '04', title: 'Contribution', text: 'Attend the camp and contribute. Your time and knowledge directly helps rural children.' },
              ].map(item => (
                <div key={item.step} style={{
                  background: '#f8fafd',
                  border: '1px solid #dce6f0',
                  borderRadius: '4px',
                  padding: '24px 20px',
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'rgba(26,77,143,0.15)', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0d2a4e', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: '#4a5568', lineHeight: 1.75 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
