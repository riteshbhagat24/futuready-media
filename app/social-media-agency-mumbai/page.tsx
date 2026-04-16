import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Agency in Mumbai — Futuready Media',
  description: 'Social media management agency in Mumbai. Strategy, content creation, community management, and paid social for Instagram, LinkedIn, Facebook, and YouTube.',
};

export default function SocialMediaAgencyMumbaiPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Social Media</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Social Media<br />Agency in<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Mumbai.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          End-to-end social media management — strategy, content, community, and paid amplification — from Mumbai&apos;s leading digital agency.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Social Strategy', desc: 'Channel selection, content pillars, posting cadence, and KPI frameworks tailored to your brand.' },
            { title: 'Content Creation', desc: 'Reels, carousels, stories, and video content produced by our in-house creative team.' },
            { title: 'Community Management', desc: 'Active engagement, comment moderation, DM handling, and reputation management.' },
            { title: 'Paid Social', desc: 'Targeted paid campaigns on Meta, LinkedIn, and YouTube to amplify top-performing content.' },
            { title: 'Influencer Marketing', desc: 'Influencer identification, partnership management, and campaign execution across platforms.' },
            { title: 'Analytics & Reporting', desc: 'Monthly performance reports with actionable insights and data-driven optimisation recommendations.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Build an audience<br />that <em>buys.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
