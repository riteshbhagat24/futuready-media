import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Email Marketing — Futuready Media',
  description: 'Email marketing services — strategy, automation, template design, copywriting, and analytics for newsletters, drip campaigns, and transactional emails.',
};

export default function EmailMarketingPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Marketing</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Email<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Marketing.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          The highest-ROI channel in digital marketing. We build email programmes — from strategy and automation to design and copywriting — that drive revenue, not just opens.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Email Strategy', desc: 'Audience segmentation, lifecycle mapping, and campaign calendars designed to maximise revenue per subscriber.' },
            { title: 'Automation Flows', desc: 'Welcome sequences, abandoned cart recovery, post-purchase nurture, and re-engagement campaigns.' },
            { title: 'Template Design', desc: 'Responsive, on-brand email templates that render beautifully across clients and devices.' },
            { title: 'Copywriting', desc: 'Subject lines, preview text, and body copy optimised for opens, clicks, and conversions.' },
            { title: 'List Management', desc: 'Hygiene, segmentation, preference centres, and deliverability optimisation to protect your sender reputation.' },
            { title: 'Analytics & Testing', desc: 'A/B testing, cohort analysis, and revenue attribution to continuously improve performance.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Email that<br /><em>earns.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
