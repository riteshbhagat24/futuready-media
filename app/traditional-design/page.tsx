import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Traditional Design — Futuready Media',
  description: 'Print design, packaging, brochures, outdoor advertising, and traditional media design services for brands.',
};

export default function TraditionalDesignPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Design</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Traditional<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Design.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Print isn&apos;t dead — it&apos;s just held to a higher standard. We design brochures, packaging, outdoor advertising, and print collateral that commands attention in the physical world.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Print Collateral', desc: 'Business cards, letterheads, brochures, and corporate stationery designed to your brand standards.' },
            { title: 'Packaging Design', desc: 'Product packaging that stands out on shelves and communicates your brand story at the point of purchase.' },
            { title: 'Outdoor Advertising', desc: 'Hoardings, billboards, transit ads, and OOH creative designed for impact at scale.' },
            { title: 'Event Design', desc: 'Booth designs, backdrops, standees, and event collateral that create immersive brand experiences.' },
            { title: 'Publication Design', desc: 'Annual reports, magazines, catalogues, and editorial layouts with professional typography and structure.' },
            { title: 'Signage & Environmental', desc: 'Wayfinding systems, office branding, and environmental graphics that extend your brand into physical spaces.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Print that<br /><em>performs.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
