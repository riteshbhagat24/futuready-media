import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Full Service Creative Digital Agency',
  description:
    'Futuready Media is a full-service creative digital agency focused on Strategy, Branding, Content, Design, Marketing and Technology. 13+ years, 500+ clients, offices in Mumbai, Bangalore & UAE.',
  alternates: { canonical: 'https://futureadymedia.com/about' },
};

const stats = [
  { count: 13, unit: '+', label: 'Years of Experience' },
  { count: 500, unit: '+', label: 'Happy Clients' },
  { count: 750, unit: '+', label: 'Projects Delivered' },
  { count: 70, unit: '+', label: 'In-house Experts' },
];

const milestones = [
  { year: '2012', text: 'Founded in Mumbai as a creative digital consultancy with a vision to create business value through efficient communication solutions.' },
  { year: '2015', text: 'Expanded service offerings to include branding, content, and design. Crossed 100 active clients across multiple industries.' },
  { year: '2018', text: 'Full-stack expansion — added web development, social media management, and enterprise digital marketing verticals.' },
  { year: '2021', text: 'Opened Bangalore office. Launched AI integration and marketing automation as formal service lines.' },
  { year: '2024', text: '500+ clients served. UAE office opened. Launched GEO and AEO capabilities for next-gen search visibility.' },
];

const values = [
  { title: 'Small Teams, Big Results', desc: 'Small, interdisciplinary teams work in true collaboration with clients, helping to find new opportunities and solve existing business problems.' },
  { title: 'Collaboration', desc: 'Our collaborative approach fosters better communication, more efficient use of project resources, and ultimately allows us to add maximum value to your business.' },
  { title: 'True Partnership', desc: 'We take the time to understand your business inside out so we can drive real value. We become a true partner, working across brand, marketing and technology initiatives.' },
  { title: 'Stories That Connect', desc: 'In the digital age, brands need to tell powerful stories that use technology to engage customers and drive results. We deliver brand success through data, insights, and creativity.' },
  { title: 'AI-First Thinking', desc: 'We integrate AI into strategy, execution, and reporting — not as a buzzword, but as a genuine lever for scale, efficiency, and competitive advantage.' },
  { title: 'Long-Term Partnerships', desc: 'We build lasting relationships based on integrity and trust. Our client retention speaks for itself — we grow when our clients grow.' },
];

const team = [
  { initials: 'RB', name: 'Ritesh Bhagat', role: 'Digital Operations Head' },
  { initials: 'SA', name: 'Karthik PS', role: 'Brand & Growth Strategy' },
  { initials: 'PM', name: 'Parth Mehta', role: 'Business Lead' },
  { initials: 'SE', name: 'Zeeshan Thakur', role: 'Client Success Lead' },
];

const clients = [
  'HCL Technologies', 'Razorpay', "L'Oreal", 'ICICI Bank', 'DBS Bank',
  'Rebel Foods', 'Tata AIG', 'Glenmark', 'Sun Pharma', 'Godrej',
  'Schindler', 'Reliance Group',
];
const clientsDouble = [...clients, ...clients];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ padding: '12rem 4vw 6rem' }}>
        <div className="section-label-row sr">
          <span className="lbl">About Futuready Media</span>
          <span className="line" />
        </div>
        <h1 className="d-hero sr sr-delay-1" style={{ marginBottom: '2.5rem' }}>
          <span className="reveal-wrap" style={{ display: 'block' }}>
            <span className="reveal-line">Growth Is</span>
          </span>
          <span className="reveal-wrap" style={{ display: 'block' }}>
            <span className="reveal-line" style={{ transitionDelay: '.12s' }}>
              Not an <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Accident.</em>
            </span>
          </span>
        </h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: '560px' }}>
          We are a full-service creative digital agency focused on Strategy, Branding, Content, Design, Marketing, and Technology. Creating business value through the most efficient and effective communication solutions since 2012.
        </p>
      </section>

      {/* ─── STATS ─── */}
      <div style={{ padding: '0 4vw' }}>
        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-item sr sr-delay-${i}`}>
              <div className="stat-num">
                <span data-count={s.count}>0</span>
                {s.unit && <span className="unit">{s.unit}</span>}
              </div>
              <div className="stat-desc">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── STORY + TIMELINE ─── */}
      <section style={{ padding: '7rem 4vw' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: '3rem',
          }}
        >
          {/* Left — Our Story */}
          <div>
            <div className="section-label-row sr">
              <span className="lbl">Our Story</span>
              <span className="line" />
            </div>
            <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '2rem' }}>
              13+ years.<br />One vision.
            </h2>
            <p className="t-base sr sr-delay-2" style={{ marginBottom: '1.5rem' }}>
              Our passionate team works with clients to create real value. We deliver this value by providing the most efficient and effective communication solutions. We strive to build lasting relationships with our clients, employees and vendors based on integrity and trust.
            </p>
            <p className="t-base sr sr-delay-3">
              From our Mumbai headquarters to offices in Bangalore and the UAE, our team of 70+ in-house experts spans strategy, branding, content, design, marketing, development, and AI — serving 500+ clients across India, the Middle East, and globally.
            </p>
          </div>

          {/* Right — Milestones */}
          <div>
            <div className="section-label-row sr">
              <span className="lbl">Milestones</span>
              <span className="line" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`sr sr-delay-${Math.min(i, 4)}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '5rem 1fr',
                    gap: '1.5rem',
                    padding: '1.8rem 0',
                    borderBottom: '1px solid var(--rule)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '.15em',
                      color: 'var(--blue)',
                      paddingTop: '.15rem',
                    }}
                  >
                    {m.year}
                  </span>
                  <span className="t-base" style={{ color: 'var(--ink)' }}>{m.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMAGE BANNER ─── */}
      <div style={{ overflow: 'hidden', height: '480px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.futureadymedia.com/images/office-new-v1.webp"
          alt="Futuready Media Team"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(.7)',
          }}
        />
      </div>

      {/* ─── VALUES ─── */}
      <section style={{ background: 'var(--ink)', padding: '7rem 4vw' }}>
        <div className="section-label-row sr">
          <span className="lbl" style={{ color: 'rgba(255,255,255,.35)' }}>What We Stand For</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <h2
          className="d-md sr sr-delay-1"
          style={{ color: 'var(--white)', marginBottom: '3.5rem' }}
        >
          Our values.<br />Our promise.
        </h2>
        <div
          className="values-grid grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: '1px',
            background: 'rgba(255,255,255,.08)',
          }}
        >
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`sr sr-delay-${Math.min(i % 3, 3)}`}
              style={{
                background: 'var(--ink)',
                padding: '2.5rem',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '.15em',
                  color: 'var(--blue)',
                  marginBottom: '.8rem',
                }}
              >
                0{i + 1}
              </div>
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  marginBottom: '.6rem',
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.65 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section style={{ padding: '7rem 4vw' }}>
        <div className="section-label-row sr">
          <span className="lbl">Leadership</span>
          <span className="line" />
        </div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '3.5rem' }}>
          The people behind<br />the performance.
        </h2>
        <div
          className="team-grid grid grid-cols-2 md:grid-cols-4"
          style={{
            gap: '2rem',
          }}
        >
          {team.map((t, i) => (
            <div key={t.initials} className={`sr sr-delay-${i}`}>
              <div
                style={{
                  aspectRatio: '1',
                  background: 'var(--ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(2rem,3.5vw,3.5rem)',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,.12)',
                    letterSpacing: '-.02em',
                  }}
                >
                  {t.initials}
                </span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700 }}>{t.name}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--warm)', marginTop: '.2rem' }}>
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CLIENT MARQUEE ─── */}
      <div className="marquee-track">
        <div className="marquee-inner">
          {clientsDouble.map((c, i) => (
            <span key={i} className="marquee-item">{c}</span>
          ))}
        </div>
      </div>

      {/* ─── CTA STRIP ─── */}
      <div className="cta-strip">
        <div className="headline">
          Work with a team that <em>delivers.</em>
        </div>
        <Link href="/contact" className="btn btn-white">
          Get in Touch →
        </Link>
      </div>
    </>
  );
}
