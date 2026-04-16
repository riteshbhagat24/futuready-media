import type { Metadata } from 'next';
import Link from 'next/link';
import FAQBlock from '@/components/shared/FAQBlock';

export const metadata: Metadata = {
  title: 'Website Design & Development — Futuready Media',
  description: 'Custom website design and development services. Fast, conversion-focused websites built on Next.js, React, WordPress, and Shopify by Futuready Media.',
};

const faqs = [
  { question: 'What platforms do you build on?', answer: 'Next.js and React for custom builds, WordPress for content-heavy sites, and Shopify for e-commerce. We recommend based on your specific needs, timeline, and budget.' },
  { question: 'How long does a website project take?', answer: '6-10 weeks for a standard marketing site. Complex web applications or e-commerce builds may take 12-16 weeks depending on scope.' },
  { question: 'Do you provide hosting and maintenance?', answer: 'Yes. We offer managed hosting, security updates, performance monitoring, and content support on monthly retainer plans.' },
  { question: 'Will the site be SEO-optimised?', answer: 'Every site we build is SEO-optimised from the ground up — clean semantic HTML, schema markup, Core Web Vitals optimisation, and crawlable architecture.' },
];

export default function WebsiteDesignDevelopmentPage() {
  return (
    <>
      {/* HERO */}
      <div style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="sr" style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', fontSize: '11px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid var(--rule)', padding: '.45rem 1rem', color: 'var(--warm)', marginBottom: '2rem' }}>
          Web Development
        </div>
        <h1 className="d-xl sr sr-delay-1">Website Design &amp;<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Development.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 500, marginTop: '2rem' }}>
          Your website is your hardest-working salesperson. We design and build fast, conversion-focused websites that look exceptional, load instantly, and turn visitors into customers.
        </p>
      </div>

      {/* STATS */}
      <div className="grid sr" style={{ gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid var(--rule)' }}>
        {[
          { num: '<2s', h3: 'Load Time Target', p: 'Core Web Vitals optimised from day one' },
          { num: '60+', h3: 'Sites Launched', p: 'Across D2C, B2B, real estate, and healthcare' },
          { num: '3×', h3: 'Avg. Conversion Lift', p: 'Compared to client previous sites' },
        ].map((g, i) => (
          <div key={i} style={{ padding: '2.5rem 2rem', borderRight: i < 2 ? '1px solid var(--rule)' : 'none' }}>
            <div style={{ fontSize: 'clamp(1.8rem,3vw,3.5rem)', fontWeight: 900, color: 'var(--blue)', marginBottom: '.5rem' }}>{g.num}</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.4rem' }}>{g.h3}</h3>
            <p style={{ fontSize: '.85rem', color: 'var(--warm)' }}>{g.p}</p>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 1fr', padding: '6rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">Our Approach</span><span className="line" /></div>
          <h2 className="d-md sr sr-delay-1">Built to<br />convert.</h2>
          <p className="t-base sr sr-delay-2" style={{ marginTop: '1.5rem' }}>A beautiful website that doesn&apos;t convert is a brochure. A fast website with no design is forgettable. We build sites that are both — beautiful and brutally effective.</p>
        </div>
        <div>
          <div className="section-label-row sr sr-delay-1"><span className="lbl">Technologies</span><span className="line" /></div>
          <div className="sr sr-delay-2" style={{ borderTop: '1px solid var(--rule)', marginTop: '2rem' }}>
            {['Next.js & React', 'WordPress & WooCommerce', 'Shopify & Shopify Plus', 'Headless CMS (Sanity, Contentful)', 'UI/UX Design (Figma)', 'Core Web Vitals Optimisation', 'E-Commerce & Payment Integration'].map((s) => (
              <div key={s} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 0', borderBottom: '1px solid var(--rule)', fontSize: '.9rem', fontWeight: 600 }}>
                {s} <span style={{ fontSize: '.78rem', color: 'var(--blue)', fontWeight: 700 }}>&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="grid gap-20" style={{ padding: '6rem 4vw', gridTemplateColumns: '1fr 1.5fr', borderTop: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">FAQ</span><span className="line" /></div>
          <h2 className="d-sm sr sr-delay-1">Frequently<br />asked.</h2>
        </div>
        <FAQBlock faqs={faqs} />
      </div>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Ready to build<br />a site that <em>converts?</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
