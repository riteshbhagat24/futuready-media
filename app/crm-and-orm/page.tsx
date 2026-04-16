import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CRM & ORM — Futuready Media',
  description: 'Customer relationship management and online reputation management services. CRM setup, automation, review management, and sentiment monitoring.',
};

export default function CrmAndOrmPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Marketing</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">CRM &amp;<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>ORM.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Your reputation is your most valuable asset. We set up CRM systems that nurture relationships and ORM strategies that protect and enhance your brand perception online.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'CRM Setup', desc: 'HubSpot, Salesforce, and Zoho CRM implementation with pipeline design and workflow automation.' },
            { title: 'Lead Nurturing', desc: 'Automated email sequences, lead scoring, and lifecycle stage management that move prospects to customers.' },
            { title: 'Review Management', desc: 'Google Reviews, Trustpilot, and platform-specific review monitoring, response, and growth strategies.' },
            { title: 'Sentiment Monitoring', desc: 'Real-time brand sentiment tracking across social, news, and review platforms with alert systems.' },
            { title: 'Crisis Management', desc: 'Rapid response protocols for negative press, viral complaints, and reputation threats.' },
            { title: 'Reporting & Insights', desc: 'Monthly sentiment reports, NPS tracking, and competitive reputation benchmarking.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Protect your<br /><em>reputation.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
