import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Videography & Photography — Futuready Media',
  description: 'Professional videography and photography services for brands. Product shoots, corporate videos, campaign visuals, and social media content.',
};

export default function VideographyPhotographyPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Creative Services</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Videography &amp;<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Photography.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Visual content that stops the scroll. We produce product photography, brand films, campaign visuals, and social-ready video — all aligned with your brand&apos;s visual language.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Product Photography', desc: 'Studio and lifestyle product shoots optimised for e-commerce, social, and print.' },
            { title: 'Brand Films', desc: 'Short-form and long-form brand videos that communicate your story and values.' },
            { title: 'Campaign Visuals', desc: 'Performance creative — reels, carousels, and ad-ready video for Meta and Google.' },
            { title: 'Corporate Video', desc: 'Company profiles, leadership interviews, event coverage, and internal communications.' },
            { title: 'Social Content', desc: 'Scroll-stopping video and photo content produced in batches for consistent posting.' },
            { title: 'Post-Production', desc: 'Editing, colour grading, motion graphics, and sound design to polish every deliverable.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Visual content<br />that <em>converts.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
