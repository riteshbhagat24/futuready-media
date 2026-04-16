import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Futuready Media is a 12-year-old performance-first digital marketing agency in Mumbai. 150+ brands, 35-strong team, 92% client retention.',
  alternates: { canonical: 'https://futureadymedia.com/about' },
};

const stats = [
  { count: 12, unit: '', label: 'Years in Business' },
  { count: 150, unit: '+', label: 'Brands Scaled' },
  { count: 35, unit: '', label: 'Team Members' },
  { count: 92, unit: '%', label: 'Client Retention' },
];

const milestones = [
  { year: '2012', text: 'Founded in Mumbai with a 3-person team focused on search marketing.' },
  { year: '2015', text: 'Crossed 50 active clients. Launched performance marketing vertical.' },
  { year: '2018', text: 'Expanded to enterprise B2B. Signed HCL Technologies as anchor client.' },
  { year: '2021', text: 'Built in-house AI and automation practice. Grew to 30+ team members.' },
  { year: '2024', text: '150+ brands served. Launched AEO and GEO capabilities ahead of market.' },
];

const values = [
  { title: 'Accountability Over Visibility', desc: 'We measure ourselves by outcomes, not impressions.' },
  { title: 'Strategy Before Execution', desc: 'Every campaign starts with a hypothesis, not a template.' },
  { title: 'Speed + Precision', desc: 'We move fast without cutting corners on quality.' },
  { title: 'Brutal Honesty', desc: 'We tell clients what they need to hear, not what they want to hear.' },
  { title: 'AI-First Thinking', desc: 'Automation and intelligence are embedded in everything we ship.' },
  { title: 'Long-Term Partnerships', desc: '92% retention because we treat client growth as our growth.' },
];

const team = [
  { initials: 'RM', name: 'Ritesh M.', role: 'Founder & CEO' },
  { initials: 'SA', name: 'Sneha A.', role: 'Head of Strategy' },
  { initials: 'PM', name: 'Priya M.', role: 'Performance Lead' },
  { initials: 'SE', name: 'Sameer E.', role: 'Tech & AI Lead' },
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
          We are a 12-year-old, performance-first digital marketing agency in Mumbai.
          We help ambitious brands grow through strategy, data, and relentless execution.
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
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
          }}
        >
          {/* Left — Our Story */}
          <div>
            <div className="section-label-row sr">
              <span className="lbl">Our Story</span>
              <span className="line" />
            </div>
            <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '2rem' }}>
              From three desks<br />to 150+ brands.
            </h2>
            <p className="t-base sr sr-delay-2" style={{ marginBottom: '1.5rem' }}>
              Futuready Media started in 2012 as a small search-marketing consultancy run
              from a co-working space in Andheri. The idea was simple: help brands grow by
              treating every rupee of ad spend as an investment, not an expense.
            </p>
            <p className="t-base sr sr-delay-3">
              Twelve years on, we have scaled into a 35-member, full-stack agency that serves
              enterprise, D2C, real estate, and B2B brands across India and globally. Our
              approach has not changed — performance first, strategy always, vanity never.
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
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
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
          Six principles.<br />Zero compromise.
        </h2>
        <div
          className="values-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
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
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
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
