import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, SectionTitle } from '../../components/ui'

export const metadata = {
  title: 'Contact — Vidhyadhara Foundation',
  description: 'Get in touch with Vidhyadhara Foundation. Contact details, bank information for donations, and FAQs.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Header */}
        <div style={{ background: '#0d2a4e', padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', 
              fontWeight: 800, 
              color: '#ffffff', 
              fontFamily: 'Inter, sans-serif', 
              marginBottom: '12px' 
            }}>
              Contact Us
            </h1>
            <p style={{ 
              color: 'rgba(255,255,255,0.65)', 
              fontSize: '0.95rem', 
              maxWidth: '500px' 
            }}>
              For registrations, volunteering, donations, or any queries, reach out to us directly.
            </p>
          </div>
        </div>

        {/* Contact + Bank Details - Stacked Layout */}
        <section style={{ background: '#ffffff', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

            {/* How to Reach Us - First */}
            <div style={{ marginBottom: '60px' }}>
              <SectionLabel>Contact Details</SectionLabel>
              <SectionTitle>How to Reach Us</SectionTitle>
              <div style={{
                border: '1px solid #dce6f0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginTop: '24px',
              }}>
                {[
                  {
                    label: 'Email',
                    value: <a href="mailto:vidhyadharafoundation@gmail.com" style={{ color: '#1a4d8f', fontWeight: 600 }}>vidhyadharafoundation@gmail.com</a>
                  },
                  {
                    label: 'Phone',
                    value: <a href="tel:+917799355803" style={{ color: '#1a4d8f', fontWeight: 600 }}>+91 9966141696</a>
                  },
                  {
                    label: 'WhatsApp',
                    value: <a href="https://wa.me/917799355803" target="_blank" rel="noopener noreferrer" style={{ color: '#1a4d8f', fontWeight: 600 }}>+91 7799355803</a>
                  },
                  {
                    label: 'Address',
                    value: 'Haliya, Nalgonda, Telangana — 508377'
                  },
                  {
                    label: 'Instagram',
                    value: <a href="https://www.instagram.com/vidhyadharafoundation" target="_blank" rel="noopener noreferrer" style={{ color: '#1a4d8f', fontWeight: 600 }}>@vidhyadharafoundation</a>
                  },
                  {
                    label: 'LinkedIn',
                    value: <a href="https://www.linkedin.com/company/vidhyadhara-foundation" target="_blank" rel="noopener noreferrer" style={{ color: '#1a4d8f', fontWeight: 600 }}>Vidhyadhara Foundation</a>
                  },
                ].map((row, i) => (
                  <div key={row.label} style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '14px 20px',
                    borderBottom: i < 5 ? '1px solid #dce6f0' : 'none',
                    background: i % 2 === 0 ? '#ffffff' : '#f8fafd',
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '100px',
                      flexShrink: 0,
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#4a5568',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontFamily: 'Inter, sans-serif',
                      paddingTop: '2px',
                    }}>
                      {row.label}
                    </div>
                    <div style={{ fontSize: '0.87rem', color: '#0d2a4e' }}>{row.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank Details - Below Contact */}
            <div>
              <SectionLabel>Support Our Work</SectionLabel>
              <SectionTitle>Bank Details for Donations</SectionTitle>
              <p style={{ 
                fontSize: '0.87rem', 
                color: '#4a5568', 
                lineHeight: 1.75, 
                marginBottom: '24px', 
                marginTop: '8px' 
              }}>
                All donations go directly towards running our free academic programs. There are no administration fees deducted. We maintain full transparency and publish expense reports for every camp.
              </p>
              <div style={{
                border: '1px solid #dce6f0',
                borderTop: '3px solid #1a4d8f',
                borderRadius: '4px',
                overflow: 'hidden',
                maxWidth: '520px',
              }}>
                {[
                  { label: 'Account Name', value: 'VIDHYADHARA FOUNDATION' },
                  { label: 'Account Number', value: '44952430841' },
                  { label: 'IFSC Code', value: 'SBIN0021245' },
                  { label: 'Bank', value: 'State Bank of India (SBI)' },
                  { label: 'Branch', value: 'ACB Halia' },
                ].map((row, i) => (
                  <div key={row.label} style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '13px 18px',
                    borderBottom: i < 4 ? '1px solid #dce6f0' : 'none',
                    background: i % 2 === 0 ? '#ffffff' : '#f8fafd',
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '130px',
                      flexShrink: 0,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#4a5568',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, sans-serif',
                      paddingTop: '2px',
                    }}>
                      {row.label}
                    </div>
                    <div style={{
                      fontSize: '0.87rem',
                      color: '#0d2a4e',
                      fontWeight: row.label === 'Account Number' || row.label === 'IFSC Code' ? 700 : 400,
                      fontFamily: row.label === 'Account Number' || row.label === 'IFSC Code' ? 'Inter, monospace' : 'Open Sans, sans-serif',
                      letterSpacing: row.label === 'Account Number' || row.label === 'IFSC Code' ? '0.05em' : 0,
                    }}>
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ 
                fontSize: '0.78rem', 
                color: '#4a5568', 
                marginTop: '12px', 
                lineHeight: 1.6 
              }}>
                After donating, please inform us via email or WhatsApp so we can acknowledge your contribution.
              </p>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section style={{ background: '#f0f5fc', padding: '64px 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>FAQs</SectionLabel>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  q: 'Are all the programs really free?',
                  a: 'Yes. Every program we run — Summer Camp, Winter Camp, Dasara Camp, Scholarship Guidance — is completely free of charge. We do not charge any fees from students or their families.',
                },
                {
                  q: 'Who can register as a student?',
                  a: 'Any student from Class 3 to Class 12 living in or around Nalgonda district, Telangana, can register. We give priority to students from rural backgrounds who lack access to coaching.',
                },
                {
                  q: 'How can I volunteer with Vidhyadhara Foundation?',
                  a: 'Fill in the Volunteer Registration form on our website. We welcome subject teachers, career mentors, documentation volunteers, and general helpers. No prior experience is required — just a genuine desire to contribute.',
                },
                {
                  q: 'How are donations used?',
                  a: 'Donations fund study materials, stationery, refreshments, and venue arrangements for our camps. We publish expense reports for every program, which are available for download on the Programs page.',
                },
                {
                  q: 'How do I know when the next camp is announced?',
                  a: 'We announce all upcoming camps on our Notice Board (on the home page) and through our WhatsApp and Instagram. You can also contact us directly at +91 7799355803.',
                },
              ].map((faq, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #dce6f0',
                  borderLeft: '4px solid #1a4d8f',
                  borderRadius: '0 4px 4px 0',
                  padding: '20px 22px',
                }}>
                  <h3 style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#0d2a4e',
                    marginBottom: '8px',
                    fontFamily: 'Inter, sans-serif',
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: '#4a5568', lineHeight: 1.8 }}>{faq.a}</p>
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