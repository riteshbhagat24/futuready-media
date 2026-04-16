import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Services — Futuready Media',
  description: 'SEO services that drive organic growth. Technical SEO, on-page optimisation, link building, local SEO, and content strategy for sustainable search visibility.',
};

export default function SeoServicesPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Marketing</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">SEO<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Services.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Sustainable organic growth that compounds over time. We build SEO foundations — technical, content, and authority — that earn visibility on Google and AI answer engines.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Technical SEO', desc: 'Site architecture, crawlability, indexation, Core Web Vitals, and structured data implementation.' },
            { title: 'On-Page Optimisation', desc: 'Keyword research, content optimisation, meta tags, internal linking, and topic cluster strategy.' },
            { title: 'Link Building', desc: 'Strategic off-page authority building through digital PR, guest content, and high-quality backlinks.' },
            { title: 'Local SEO', desc: 'Google Business Profile, local citations, review management, and geo-targeted content strategy.' },
            { title: 'Content Strategy', desc: 'SEO content calendars, pillar pages, blog content, and FAQ pages that build topical authority.' },
            { title: 'SEO Audits', desc: 'Comprehensive technical and content audits with prioritised action plans and competitive gap analysis.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Ready to own<br /><em>search?</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
