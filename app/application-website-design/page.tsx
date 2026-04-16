import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Application & Website Design — Futuready Media',
  description: 'UI/UX design for websites and applications. User research, wireframing, prototyping, and high-fidelity design that drives conversions.',
};

export default function ApplicationWebsiteDesignPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Design</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Application &amp;<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Website Design.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Interfaces that look exceptional and convert relentlessly. We design websites and applications grounded in user research, brand strategy, and conversion science.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'User Research', desc: 'Audience analysis, competitor audits, and user journey mapping to inform every design decision.' },
            { title: 'Wireframing', desc: 'Low-fidelity wireframes that validate information architecture and conversion flow before visual design.' },
            { title: 'UI Design', desc: 'High-fidelity screens in Figma — every breakpoint, every state, every interaction designed and documented.' },
            { title: 'Prototyping', desc: 'Interactive prototypes for stakeholder review and user testing before a single line of code is written.' },
            { title: 'Design Systems', desc: 'Component libraries and design tokens that ensure consistency across pages and future iterations.' },
            { title: 'Mobile App Design', desc: 'Native and cross-platform app design with platform-appropriate patterns and gestures.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Design that<br /><em>converts.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
