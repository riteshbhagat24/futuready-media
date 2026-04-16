import type { Metadata } from 'next';
import Link from 'next/link';
import FAQBlock from '@/components/shared/FAQBlock';

export const metadata: Metadata = {
  title: 'Digital Agency in Mumbai — Futuready Media',
  description: 'Futuready Media is a full-service digital agency in Mumbai. Strategy, performance marketing, SEO, web development, and brand building — based in Andheri East.',
};

const geoClients = ['Mumbai', 'Andheri', 'Bandra', 'Lower Parel', 'BKC', 'Powai', 'Worli', 'Thane', 'Navi Mumbai'];
const geoDouble = [...geoClients, ...geoClients];

const geoFaqs = [
  { question: 'What makes you different from other Mumbai agencies?', answer: 'We combine brand strategy with performance execution. Most agencies do one or the other. We build brands that perform and performance systems that are brand-safe.' },
  { question: 'Do you work with startups or only large brands?', answer: 'Both. Our engagement models scale — from focused project work for early-stage startups to full-service retainers for enterprise clients.' },
  { question: 'What is your office location?', answer: 'We are based in Andheri East, Mumbai — easily accessible from across the city. We welcome in-person meetings and client visits.' },
  { question: 'Which industries do you specialise in?', answer: 'Real estate, D2C, BFSI, pharma, technology, education, hospitality, and B2B services. Our cross-industry experience is a strength.' },
];

export default function DigitalAgencyMumbaiPage() {
  return (
    <>
      {/* HERO */}
      <div style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="sr" style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', fontSize: '11px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid var(--rule)', padding: '.45rem 1rem', color: 'var(--warm)', marginBottom: '2rem' }}>
          📍 Mumbai, Maharashtra
        </div>
        <h1 className="d-xl sr sr-delay-1">Digital Agency<br />in<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Mumbai.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 500, marginTop: '2rem' }}>
          Full-service digital agency based in Andheri East. Strategy, creative, performance, and technology — under one roof, for brands that demand results.
        </p>
      </div>

      {/* STATS */}
      <div className="grid sr" style={{ gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid var(--rule)' }}>
        {[
          { num: '12+', h3: 'Years in Mumbai', p: 'Operating from Andheri East since 2012' },
          { num: '150+', h3: 'Clients Served', p: 'From D2C startups to Fortune 500 enterprises' },
          { num: '4×', h3: 'Average ROAS', p: 'Across performance marketing campaigns' },
        ].map((g, i) => (
          <div key={i} style={{ padding: '2.5rem 2rem', borderRight: i < 2 ? '1px solid var(--rule)' : 'none' }}>
            <div style={{ fontSize: 'clamp(1.8rem,3vw,3.5rem)', fontWeight: 900, color: 'var(--blue)', marginBottom: '.5rem' }}>{g.num}</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.4rem' }}>{g.h3}</h3>
            <p style={{ fontSize: '.85rem', color: 'var(--warm)' }}>{g.p}</p>
          </div>
        ))}
      </div>

      {/* MARQUEE */}
      <div className="marquee-track">
        <div className="marquee-inner" style={{ animationDuration: '24s' }}>
          {geoDouble.map((c, i) => <span key={i} className="marquee-item">{c}</span>)}
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 1fr', padding: '6rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">Why Choose Us</span><span className="line" /></div>
          <h2 className="d-md sr sr-delay-1">Mumbai-born.<br />India-ready.</h2>
          <p className="t-base sr sr-delay-2" style={{ marginTop: '1.5rem' }}>12 years in Mumbai means we understand the market like no remote agency can. The competitive dynamics, the cultural nuances, and the business relationships that matter.</p>
        </div>
        <div>
          <div className="section-label-row sr sr-delay-1"><span className="lbl">Services</span><span className="line" /></div>
          <div className="sr sr-delay-2" style={{ borderTop: '1px solid var(--rule)', marginTop: '2rem' }}>
            {['Performance Marketing (Meta & Google)', 'SEO, AEO & GEO', 'Brand Strategy & Identity', 'Web Design & Development', 'Social Media Management', 'AI Integration & Automation', 'Content Marketing'].map((s) => (
              <div key={s} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 0', borderBottom: '1px solid var(--rule)', fontSize: '.9rem', fontWeight: 600 }}>
                {s} <span style={{ fontSize: '.78rem', color: 'var(--blue)', fontWeight: 700 }}>&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="grid gap-20" style={{ padding: '6rem 4vw', gridTemplateColumns: '1fr 1.5fr', borderTop: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">FAQ</span><span className="line" /></div>
          <h2 className="d-sm sr sr-delay-1">Frequently<br />asked.</h2>
        </div>
        <FAQBlock faqs={geoFaqs} />
      </div>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Mumbai&apos;s <em>full-service</em><br />digital agency.</div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
