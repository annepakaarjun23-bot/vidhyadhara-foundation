'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, Btn, Field } from '../../components/ui'

const ROLES = [
  'Subject Teacher or Tutor',
  'Scholarship Coordinator',
  'Career Mentor',
  'Administrative Support',
  'Digital Skills Facilitator',
  'Photography and Documentation',
  'Other',
]

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  role: '',
  message: '',
}

export default function VolunteerRegisterPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/register-volunteer`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            message: form.message.trim(),
          }),
          signal: controller.signal,
        }
      )
      clearTimeout(timeoutId)

      const contentType = res.headers.get('content-type') || ''
      if (!contentType.includes('application/json')) {
        throw new Error('Server returned an unexpected response. Please try again.')
      }

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.message || 'Registration failed. Please try again.')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      clearTimeout(timeoutId)
      if (err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please check your connection and try again.')
      } else if (err.message === 'Failed to fetch') {
        setErrorMsg('Could not connect to the server. Please check your internet connection.')
      } else {
        setErrorMsg(err.message)
      }
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main>

        {/* Header */}
        <div style={{ background: '#0d2a4e', padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Join Our Team</SectionLabel>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
              Volunteer Registration
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', maxWidth: '520px' }}>
              Join our team of volunteers and help change the lives of children across Nalgonda. Every skill is welcome.
            </p>
          </div>
        </div>

        <section style={{ background: '#f0f5fc', padding: '64px 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>

            {status === 'success' ? (
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderTop: '3px solid #2d6a4f',
                borderRadius: '4px',
                padding: '40px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#f0faf5',
                  border: '2px solid #2d6a4f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d2a4e', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
                  Volunteer Application Received
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.75, marginBottom: '28px' }}>
                  Thank you for your willingness to contribute to Vidhyadhara Foundation. We will review your application and contact you ahead of our next program. We appreciate your support.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    background: 'none',
                    border: '1px solid #dce6f0',
                    borderRadius: '4px',
                    padding: '9px 20px',
                    fontSize: '0.83rem',
                    color: '#4a5568',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderTop: '3px solid #1a4d8f',
                borderRadius: '4px',
                padding: '36px 32px',
              }}>
                <div style={{ marginBottom: '28px' }}>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0d2a4e', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
                    Volunteer Application Form
                  </h2>
                  <p style={{ fontSize: '0.84rem', color: '#4a5568', lineHeight: 1.7 }}>
                    Fields marked with <span style={{ color: '#c0392b' }}>*</span> are required.
                  </p>
                </div>

                {status === 'error' && (
                  <div style={{
                    background: '#fef5f5',
                    border: '1px solid #fbc8c8',
                    borderLeft: '3px solid #c0392b',
                    borderRadius: '0 4px 4px 0',
                    padding: '12px 16px',
                    marginBottom: '24px',
                    fontSize: '0.85rem',
                    color: '#7f1d1d',
                  }}>
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0 20px' }}>
                    <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange}/>
                    <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange}/>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0 20px' }}>
                    <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                    <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange}/>
                  </div>

                  {/* Role Dropdown */}
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.83rem',
                      fontWeight: 600,
                      color: '#0d2a4e',
                      marginBottom: '6px',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      Area of Contribution <span style={{ color: '#c0392b' }}>*</span>
                    </label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        fontSize: '0.88rem',
                        border: '1px solid #dce6f0',
                        borderRadius: '4px',
                        fontFamily: 'Open Sans, sans-serif',
                        color: form.role ? '#1a1a1a' : '#9ca3af',
                        background: '#ffffff',
                        outline: 'none',
                      }}
                    >
                      <option value="">Select a role</option>
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <Field
                    label="Background and Motivation"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us about your background, skills, and why you'd like to volunteer with us..."
                  />

                  <div style={{ marginTop: '8px' }}>
                    <Btn type="submit" variant="solid" disabled={status === 'loading'} style={{ minWidth: '180px' }}>
                      {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                    </Btn>
                  </div>
                </form>
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
