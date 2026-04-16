import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website & Application Development — Futuready Media',
  description: 'Full-stack website and application development. Next.js, React, Node.js, WordPress, and Shopify — built for performance, scalability, and conversions.',
};

export default function WebsiteApplicationDevelopmentPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Technology</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Website &amp; Application<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Development.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Fast, secure, and scalable web experiences. We build custom websites and web applications using modern frameworks — engineered for performance and conversion.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Custom Websites', desc: 'Bespoke websites built on Next.js, React, or WordPress — fast, responsive, and SEO-optimised.' },
            { title: 'Web Applications', desc: 'Full-stack web apps with authentication, databases, APIs, and real-time features.' },
            { title: 'E-Commerce', desc: 'Shopify, WooCommerce, and custom e-commerce builds with payment integration and inventory management.' },
            { title: 'API Development', desc: 'RESTful and GraphQL APIs, third-party integrations, and microservices architecture.' },
            { title: 'Performance Optimisation', desc: 'Core Web Vitals, load time, server response, and Lighthouse score optimisation.' },
            { title: 'Maintenance & Support', desc: 'Ongoing hosting, security updates, bug fixes, and feature iteration on monthly retainers.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Ready to build<br />something <em>fast?</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
