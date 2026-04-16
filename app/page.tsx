import Link from 'next/link';
import HomeHero from './HomeHero';
import HomeCTA from './HomeCTA';

const clients = [
  'HCL Technologies', 'Razorpay', "L'Oréal", 'ICICI Bank', 'DBS Bank',
  'Rebel Foods', 'Tata AIG', 'Glenmark', 'Sun Pharma', 'Godrej',
  'Schindler', 'Reliance Group',
];
const clientsDouble = [...clients, ...clients];

const services = [
  { num: '01', name: 'Performance Marketing' },
  { num: '02', name: 'SEO, AEO & GEO' },
  { num: '03', name: 'Brand Strategy' },
  { num: '04', name: 'Web Design & Development' },
  { num: '05', name: 'AI Integration & Automation' },
  { num: '06', name: 'Social Media Management' },
  { num: '07', name: 'Content Marketing' },
  { num: '08', name: 'Enterprise Demand Generation' },
];

const bigMarqueeItems = [
  'Performance Marketing', 'SEO & AEO', 'Brand Strategy',
  'Web Development', 'AI Integration', 'Social Media', 'Content Marketing',
];
const bigDouble = [...bigMarqueeItems, ...bigMarqueeItems];

const arrowSvg = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* CLIENTS TICKER */}
      <div
        className="marquee-track"
        style={{ background: 'var(--ink)', borderColor: 'rgba(255,255,255,.06)' }}
      >
        <div className="marquee-inner" style={{ animationDuration: '32s' }}>
          {clientsDouble.map((c, i) => (
            <span key={i} className="marquee-item" style={{ color: 'rgba(255,255,255,.3)' }}>
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* WORK INTRO */}
      <div className="flex justify-between items-end flex-wrap gap-4" style={{ padding: '5rem 4vw 2rem' }}>
        <div>
          <div className="section-label-row sr">
            <span className="lbl">Selected Work</span>
            <span className="line" />
          </div>
          <h2 className="d-md sr">Results that<br />speak louder.</h2>
        </div>
        <Link
          href="/work"
          className="sr sr-delay-2"
          style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' as const, display: 'flex', alignItems: 'center', gap: '.6rem' }}
        >
          View All Work <span style={{ color: 'var(--blue)' }}>→</span>
        </Link>
      </div>

      {/* WORK GRID */}
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: '58fr 42fr', gridTemplateRows: '520px 320px', background: 'var(--ink)' }}
      >
        <div className="work-cell" style={{ gridRow: 'span 2' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="HCL Technologies" />
          <div className="work-info">
            <div className="client">HCL Technologies</div>
            <div className="title">Enterprise Demand Generation — 12 Global Markets</div>
          </div>
        </div>
        <div className="work-cell">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80" alt="Razorpay" />
          <div className="work-info">
            <div className="client">Razorpay</div>
            <div className="title">2.4× ROAS — Performance Campaign</div>
          </div>
        </div>
        <div className="work-cell">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80" alt="Rebel Foods" />
          <div className="work-info">
            <div className="client">Rebel Foods</div>
            <div className="title">10M+ Reach — Social-First Growth</div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ background: 'var(--white)' }}>
        <div className="stats-row" style={{ borderTop: 'none', padding: '0 4vw', maxWidth: '100%' }}>
          <div className="stat-item sr">
            <div className="stat-num"><span data-count="4">0</span><span className="unit">×</span></div>
            <div className="stat-desc">Average ROAS across performance campaigns</div>
          </div>
          <div className="stat-item sr sr-delay-1">
            <div className="stat-num"><span data-count="150">0</span><span className="unit">+</span></div>
            <div className="stat-desc">Brands scaled across India and globally</div>
          </div>
          <div className="stat-item sr sr-delay-2">
            <div className="stat-num"><span data-count="12">0</span></div>
            <div className="stat-desc">Years of performance-first marketing</div>
          </div>
          <div className="stat-item sr sr-delay-3">
            <div className="stat-num"><span data-count="92">0</span><span className="unit">%</span></div>
            <div className="stat-desc">Client retention year over year</div>
          </div>
        </div>
      </div>

      {/* BIG MARQUEE */}
      <div style={{ padding: '3rem 0', overflow: 'hidden', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="marquee-track marquee-big" style={{ border: 'none' }}>
          <div className="marquee-inner" style={{ animationDuration: '38s' }}>
            {bigDouble.map((item, i) => (
              <span key={i} className="marquee-item">
                {item} <span className="sep">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ padding: '7rem 4vw' }}>
        <div className="section-label-row sr">
          <span className="lbl">What We Do</span>
          <span className="line" />
        </div>
        <h2 className="d-md sr" style={{ marginBottom: '3.5rem' }}>Eight disciplines.<br />One obsession.</h2>
        <div className="services-list">
          {services.map((svc) => (
            <Link key={svc.num} href="/services/performance-marketing">
              <div className="svc-item">
                <span className="svc-num">{svc.num}</span>
                <span className="svc-name">{svc.name}</span>
                <span className="svc-arrow">{arrowSvg}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <div style={{ background: 'var(--ink)' }}>
        <div
          className="grid gap-16 items-start"
          style={{ gridTemplateColumns: '1fr 2fr', padding: '7rem 4vw' }}
        >
          <div>
            <div className="label sr" style={{ color: 'rgba(255,255,255,.3)', marginBottom: '1rem' }}>
              Client Perspective
            </div>
            <div className="sr sr-delay-1" style={{ fontSize: 'clamp(1.4rem,2.5vw,2.6rem)', fontWeight: 700, lineHeight: 1.3, color: 'var(--white)' }}>
              &ldquo;Futuready doesn&apos;t just run campaigns — they build growth engines. Our qualified leads went up 45% in eight months.&rdquo;
            </div>
            <div className="sr sr-delay-2" style={{ marginTop: '2rem' }}>
              <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'rgba(255,255,255,.8)' }}>Rajiv Menon</div>
              <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.4)' }}>VP Marketing, HCL Technologies</div>
            </div>
          </div>
          <div className="sr sr-delay-1">
            <div className="img-reveal" style={{ height: '360px', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="HCL Campaign"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <HomeCTA />
    </>
  );
}
