import type { Metadata } from 'next';
import Link from 'next/link';
import { careers } from '@/lib/careers-data';

export const metadata: Metadata = {
  title: 'Careers — Futuready Media',
  description: 'Join Futuready Media. Explore open positions in marketing, design, technology, and business development at Mumbai\'s leading digital agency.',
};

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Careers</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Build what&apos;s<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>next.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          We are always looking for smart, driven people who want to do meaningful work. No politics, no bureaucracy — just results, craft, and growth.
        </p>
      </section>

      {/* POSITIONS */}
      <section style={{ padding: '5rem 4vw 7rem' }}>
        <div className="section-label-row sr"><span className="lbl">Open Positions</span><span className="line" /></div>
        <div style={{ borderTop: '1px solid var(--rule)', marginTop: '1rem' }}>
          {careers.map((c, i) => (
            <Link key={c.slug} href={`/careers/${c.slug}`} className={`sr ${i > 0 ? `sr-delay-${Math.min(i % 4, 3)}` : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', alignItems: 'center', gap: '2rem', padding: '1.5rem 0', borderBottom: '1px solid var(--rule)', transition: 'padding-left .4s var(--ease)' }}>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>{c.title}</div>
                <div style={{ fontSize: '.8rem', color: 'var(--warm)', marginTop: '.2rem' }}>{c.department}</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--warm)' }}>{c.location}</span>
                <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', border: '1px solid var(--rule)', padding: '.25rem .6rem', color: 'var(--warm)' }}>{c.type}</span>
              </div>
              <span style={{ fontSize: '.78rem', color: 'var(--blue)', fontWeight: 700 }}>&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Ready to do<br />your best <em>work?</em></div>
        <div className="sr sr-delay-2"><Link href="mailto:careers@futureadymedia.com" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Apply Now &rarr;</Link></div>
      </div>
    </>
  );
}
