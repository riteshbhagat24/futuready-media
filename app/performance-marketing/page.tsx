import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Performance Marketing — Futuready Media',
  description: 'Performance marketing services — Meta Ads, Google Ads, programmatic, attribution, and conversion rate optimisation for ambitious brands.',
};

export default function PerformanceMarketingPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Marketing</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Performance<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Marketing.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Every rupee must earn its place. We build performance marketing systems that drive qualified demand — not just impressions — across Meta, Google, and programmatic.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Meta Ads', desc: 'Full-funnel Facebook and Instagram campaigns — awareness, consideration, and conversion — with creative testing built in.' },
            { title: 'Google Ads', desc: 'Search, Shopping, Display, and YouTube campaigns optimised for ROAS and cost-per-acquisition targets.' },
            { title: 'Programmatic', desc: 'Automated media buying across premium inventory with audience targeting and real-time optimisation.' },
            { title: 'Attribution & Tracking', desc: 'GA4, conversion API, and CRM integration for full-funnel attribution and cohort analysis.' },
            { title: 'Creative Testing', desc: 'Systematic A/B and multivariate testing across copy, visuals, and landing pages.' },
            { title: 'CRO', desc: 'Conversion rate optimisation on landing pages, checkout flows, and lead forms.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Ready to fix<br />your <em>ROAS?</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
