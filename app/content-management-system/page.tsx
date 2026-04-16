import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Management System — Futuready Media',
  description: 'CMS development and integration — WordPress, Shopify, headless CMS, and custom content management solutions for scalable content operations.',
};

export default function ContentManagementSystemPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Technology</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Content Management<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>System.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          The right CMS gives your team speed, control, and scalability. We implement WordPress, Shopify, and headless CMS solutions that make content operations effortless.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'WordPress', desc: 'Custom WordPress themes, plugin development, and performance optimisation for content-heavy websites.' },
            { title: 'Shopify', desc: 'Shopify store setup, custom theme development, and app integrations for e-commerce operations.' },
            { title: 'Headless CMS', desc: 'Contentful, Sanity, and Strapi implementations with frontend frameworks for maximum flexibility.' },
            { title: 'CMS Migration', desc: 'Data migration from legacy systems with zero content loss, redirect mapping, and SEO preservation.' },
            { title: 'Custom Development', desc: 'Custom post types, taxonomies, workflows, and admin interfaces tailored to your content operations.' },
            { title: 'Training & Support', desc: 'Team training, documentation, and ongoing support to ensure your team can manage content independently.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Content ops<br />made <em>simple.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
