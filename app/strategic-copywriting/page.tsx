import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Strategic Copywriting — Futuready Media',
  description: 'Strategic copywriting services — brand messaging, website copy, ad copy, email sequences, and content that drives conversions.',
};

export default function StrategicCopywritingPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Creative Services</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Strategic<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Copywriting.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Words that sell, persuade, and differentiate. From brand messaging to ad copy to long-form content — we write with strategy, not just style.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Brand Messaging', desc: 'Positioning statements, taglines, value propositions, and messaging hierarchies that define your brand voice.' },
            { title: 'Website Copy', desc: 'Conversion-optimised website copy — from hero headlines to product descriptions to CTAs that drive action.' },
            { title: 'Ad Copy', desc: 'Performance-driven copy for Meta, Google, and LinkedIn — tested, iterated, and optimised for results.' },
            { title: 'Email Sequences', desc: 'Onboarding flows, nurture sequences, and promotional emails that move subscribers to customers.' },
            { title: 'SEO Content', desc: 'Blog articles, landing pages, and pillar content engineered for search visibility and topical authority.' },
            { title: 'Social Copy', desc: 'Platform-native captions, hooks, and CTAs for Instagram, LinkedIn, and Twitter/X.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Words that<br /><em>work.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
