import type { Metadata } from 'next';
import Link from 'next/link';
import FAQBlock from '@/components/shared/FAQBlock';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Mumbai',
  description: "Futuready Media is Mumbai's leading full-stack digital marketing agency. Performance marketing, SEO, brand strategy, and web development — based in Andheri East.",
};

const geoClients = ['Mumbai', 'Andheri', 'Bandra', 'Lower Parel', 'Powai', 'BKC', 'Worli', 'Thane', 'Navi Mumbai'];
const geoDouble = [...geoClients, ...geoClients];

const geoFaqs = [
  { question: 'Do you only work with Mumbai-based brands?', answer: "No — we work with brands across India and internationally. But we have a particularly deep understanding of the Mumbai market." },
  { question: 'Can we meet in person?', answer: "Yes. Our office is in Andheri East, easily accessible from BKC, Lower Parel, and across the Western Line." },
  { question: 'Do you work with real estate developers in Mumbai?', answer: "Yes. Real estate is one of our strongest verticals — from luxury residential to commercial development." },
  { question: 'What industries do you serve in Mumbai?', answer: "Real estate, D2C, fintech, banking, healthcare, education, hospitality, retail, and B2B technology." },
];

export default function GeoMumbaiPage() {
  return (
    <>
      {/* HERO */}
      <div style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="sr" style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', fontSize: '11px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid var(--rule)', padding: '.45rem 1rem', color: 'var(--warm)', marginBottom: '2rem' }}>
          📍 Mumbai, Maharashtra
        </div>
        <h1 className="d-xl sr sr-delay-1">Digital Marketing<br />Agency in<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Mumbai.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 500, marginTop: '2rem' }}>
          Based in Andheri East. Serving brands across Mumbai, Maharashtra, and beyond — from D2C startups to enterprise clients with global mandates.
        </p>
      </div>

      {/* LOCAL STATS */}
      <div className="grid sr" style={{ gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid var(--rule)' }}>
        {[
          { num: '12+', h3: 'Years in Mumbai', p: 'Operating from Andheri East since 2012' },
          { num: '80+', h3: 'Mumbai-Based Clients', p: 'Brands across finance, real estate, D2C, and tech' },
          { num: '4×', h3: 'Average ROAS', p: 'Delivered across Mumbai-market campaigns' },
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
          <h2 className="d-md sr sr-delay-1">Mumbai-first.<br />India-ready.</h2>
          <p className="t-base sr sr-delay-2" style={{ marginTop: '1.5rem' }}>We understand Mumbai&apos;s market like no remote agency can. The competitive dynamics in real estate, the nuances of D2C in a city of 20M+.</p>
        </div>
        <div>
          <div className="section-label-row sr sr-delay-1"><span className="lbl">Services in Mumbai</span><span className="line" /></div>
          <div className="sr sr-delay-2" style={{ borderTop: '1px solid var(--rule)', marginTop: '2rem' }}>
            {['Performance Marketing (Meta & Google)', 'SEO & Answer Engine Optimisation', 'Brand Strategy & Positioning', 'Web Design & Development', 'AI Integration & Automation', 'Social Media Management', 'Content Marketing'].map((s) => (
              <div key={s} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 0', borderBottom: '1px solid var(--rule)', fontSize: '.9rem', fontWeight: 600 }}>
                {s} <span style={{ fontSize: '.78rem', color: 'var(--blue)', fontWeight: 700 }}>→</span>
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
        <div className="headline sr">Mumbai&apos;s <em>growth</em><br />partner.</div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us →</Link></div>
      </div>
    </>
  );
}
