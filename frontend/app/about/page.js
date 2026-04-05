import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, SectionTitle, Btn } from '../../components/ui'

export const metadata = {
  title: 'About Us — Vidhyadhara Foundation',
  description: 'Learn about our story, mission, founders, and the team behind Vidhyadhara Foundation.',
}

function PersonCard({ name, role, photo }) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #dce6f0',
      borderTop: '3px solid #1a4d8f',
      borderRadius: '4px',
      padding: '24px 20px',
      textAlign: 'center',
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 14px',
        background: '#e8eef6',
        border: '2px solid #dce6f0',
        flexShrink: 0,
      }}>
        {photo ? (
          <img
            src={photo}
            alt={name}
            width={80}
            height={80}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#d0dcee',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8aa3c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        )}
      </div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#0d2a4e' }}>{name}</div>
      {role && <div style={{ fontSize: '0.75rem', color: '#4a5568', marginTop: '4px' }}>{role}</div>}
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Page Header */}
        <div style={{ background: '#0d2a4e', padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>About Vidhyadhara Foundation</SectionLabel>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
              Our Story &amp; Mission
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', maxWidth: '560px' }}>
              A grassroots foundation built by educators and community leaders who believe rural children deserve equal access to quality education.
            </p>
          </div>
        </div>

        {/* Story */}
        <section style={{ background: '#ffffff', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div style={{ flex: '1 1 380px' }}>
                <SectionLabel>Our Story</SectionLabel>
                <SectionTitle>Where It All Began</SectionTitle>
                <p style={{ fontSize: '0.93rem', color: '#4a5568', lineHeight: 1.85, marginBottom: '16px' }}>
                The Vidhyadhara Foundation was established with a vision to support and empower students through education, guidance, and positive values. It began as a collective effort by like-minded individuals who wanted to create better opportunities for children, especially in rural areas.</p>
                <p style={{ fontSize: '0.93rem', color: '#4a5568', lineHeight: 1.85, marginBottom: '16px' }}>
                From the beginning, the foundation focused on organizing *Summer Camps and Dasara Camps* every year, along with educational visits to universities, to provide students with exposure beyond their regular academics. Recognizing the importance of community bonding, the foundation also initiated alumni meetings to strengthen connections and share knowledge.</p>
                <p style={{ fontSize: '0.93rem', color: '#4a5568', lineHeight: 1.85 }}>
                A key objective of the foundation has been to guide students in shaping their future, helping them stay away from negative influences, and encouraging them to live with unity, discipline, and strong moral values. The foundation also aims to establish a library through the collective support of its members, promoting a culture of reading and learning.
                In addition, the foundation strives to support deserving students by providing scholarships and fellowships, ensuring that financial limitations do not hinder their education and growth.
                Through these initiatives, the Vidhyadhara Foundation continues to work towards building a brighter and more disciplined future for the younger generation.</p>
              </div>
              <div style={{ flex: '1 1 280px' }}>
                <div style={{
                  borderLeft: '4px solid #1a4d8f',
                  paddingLeft: '24px',
                  margin: '16px 0 32px',
                }}>
                  <blockquote style={{
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: '#0d2a4e',
                    lineHeight: 1.7,
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                  }}>
                    &ldquo;Education is our weapon. We don&apos;t just teach — we equip children to change the trajectory of their families and communities.&rdquo;
                  </blockquote>
                  <div style={{ fontSize: '0.8rem', color: '#4a5568', marginTop: '12px', fontWeight: 600 }}>— Vidhyadhara Foundation</div>
                </div>
                <img
                  src="/gallery/image16.jpeg"
                  alt="Foundation members and students"
                  style={{ width: '100%', borderRadius: '4px', border: '1px solid #dce6f0' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>What Drives Us</SectionLabel>
            <SectionTitle>Mission, Vision &amp; Values</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {[
                {
                  title: 'Our Mission',
                  text: 'To provide free, high-quality academic support and mentorship to rural children in Nalgonda, enabling them to access higher education and fulfilling careers.',
                },
                {
                  title: 'Our Vision',
                  text: 'A Telangana where no child is denied education due to geography, poverty, or lack of access. Every student, regardless of background, reaches their full potential.',
                },
                {
                  title: 'Our Values',
                  text: 'Accessibility — all programs are free. Integrity — transparent use of resources. Community — built by locals, for locals. Commitment — we stay with every student through their journey.',
                },
              ].map(item => (
                <div key={item.title} style={{
                  background: '#ffffff',
                  border: '1px solid #dce6f0',
                  borderTop: '3px solid #1a4d8f',
                  borderRadius: '4px',
                  padding: '28px 24px',
                }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0d2a4e', marginBottom: '12px', fontFamily: 'Inter, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.87rem', color: '#4a5568', lineHeight: 1.8 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section style={{ background: '#ffffff', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>The Challenge</SectionLabel>
            <SectionTitle>Why This Work Matters</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '32px' }}>
              {[
                {
                  title: 'Limited Access to Coaching',
                  text: 'Rural students have little access to quality coaching centers. Private tuition is often unaffordable for families in Nalgonda district.',
                },
                {
                  title: 'Dropout Risk',
                  text: 'Without academic support, many students disengage from school entirely, particularly after Class 8, due to lack of guidance and resources.',
                },
                {
                  title: 'Scholarship Barriers',
                  text: 'Eligible students frequently miss out on government and private scholarships due to lack of awareness and application support.',
                },
                {
                  title: 'No Career Guidance',
                  text: 'First-generation learners have little visibility into career pathways, competitive exams, and higher education options available to them.',
                },
              ].map(item => (
                <div key={item.title} style={{
                  background: '#f8fafd',
                  border: '1px solid #dce6f0',
                  borderLeft: '4px solid #1a4d8f',
                  borderRadius: '0 4px 4px 0',
                  padding: '24px 20px',
                }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0d2a4e', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.75 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Leadership</SectionLabel>
            <SectionTitle>Founders &amp; Directors</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', marginTop: '32px' }}>
              <PersonCard name="Dr. Baddepaka Prasad" role="Associate Professor" photo="/team/founder1.jpeg" />
              <PersonCard name="Pole Rambabu" role="Govt. Jr.Lecture" photo="/team/founder2.jpeg" />
              <PersonCard name="Katikarla Saidulu" role="TSSPDCL" photo="/team/founder3.jpeg" />
              <PersonCard name="Gopala Naresh" role="Software Engineer (Germany)" photo="/team/founder4.jpeg" />
            </div>
          </div>
        </section>

        {/* Committee Members */}
        <section style={{ background: '#ffffff', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Committee</SectionLabel>
            <SectionTitle>Committee Members</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px', marginTop: '32px' }}>
              <PersonCard name="G.Santhosh" role="Osmania University" photo="/team/santu.jpeg"/>
              <PersonCard name="B.Anil Kumar" role="P.V NARSIMHA RAO VETERINARY UNIVERSITY" photo="/team/sima.jpeg" />
              <PersonCard name="G.Thanuja" role="Bharat institute of engineering and technology" photo="/team/thanuja.jpeg" />
              <PersonCard name="B.Maheshwari" role="Nizam institute of medical science" photo="/team/maheshwari.jpeg" />
            </div>
          </div>
        </section>

        {/* Volunteers */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Our Team</SectionLabel>
            <SectionTitle>Volunteers</SectionTitle>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
              gap: '20px', 
              marginTop: '32px' 
            }}>
              {[
                { 
                  name: 'A.Jagadish', 
                  photo: "/team/jagadish.jpeg", 
                  role: "Guru Ghasidas Vishwavidyalaya, Bilaspur" 
                },
                { 
                  name: 'G.Leka', 
                  photo: "/team/lekha.jpeg", 
                  role: "Mvsr Engineering College" 
                },
                { 
                  name: 'M.Sheshu', 
                  photo: "/team/jashu.jpeg", 
                  role: "Nizam institute of medical sciences Hyderabad" 
                },
                { 
                  name: 'B.Ajay', 
                  photo: "/team/ajay.jpeg", 
                  role: "Student" 
                },
                { 
                  name: 'G.Devendar', 
                  photo: "/team/devender.jpeg", 
                  role: "Government Medical College & Hospital, Mahabubabad" 
                },
                { 
                  name: 'B.Akhil', 
                  photo: "/team/akhil.jpeg", 
                  role: "Central University of Hyderabad" 
                },
                { 
                  name: 'P.Siddhartha', 
                  photo: "/team/siddu.jpeg", 
                  role: "University College of Science, Saifabad OU" 
                },
                { 
                  name: 'B.Vijay', 
                  photo: "/team/vijay.jpeg", 
                  role: "Vardhaman college of Engineering" 
                },
                { 
                  name: 'B.Samuel', 
                  photo: "/team/samuel.jpeg", 
                  role: "TSWREIS Chandur " 
                },
                { 
                  name: 'G2Mahesh', 
                  photo: '/team/mahesh.jpeg', 
                  role: "Tswreis boys anumula" 
                },
              ].map(v => (
                <PersonCard 
                  key={v.name} 
                  name={v.name} 
                  role={v.role} 
                  photo={v.photo} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#1a4d8f', padding: '64px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
              Be Part of Our Mission
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
              Students, volunteers, and supporters are all welcome.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Btn href="/student_register" variant="white">Student Registration</Btn>
              <Btn href="/contact" variant="outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}>Contact Us</Btn>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
