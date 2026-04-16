import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shopify Development — Futuready Media',
  description: 'Shopify development services — custom themes, app integrations, migration, and performance optimisation for D2C and e-commerce brands.',
};

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Technology</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Shopify<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Development.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          From ground-up builds to Magento migrations — we develop Shopify stores that look premium, load fast, and convert visitors into customers.
        </p>
      </section>

      <section style={{ padding: '5rem 4vw 7rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">What We Deliver</span><span className="line" /></div>
        <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '2rem' }}>
          {[
            { title: 'Custom Themes', desc: 'Bespoke Shopify themes built from scratch — not cloned templates — with your brand identity at the core.' },
            { title: 'App Integrations', desc: 'Klaviyo, Yotpo, ShipStation, and custom app integrations to power your operations.' },
            { title: 'Platform Migration', desc: 'Seamless migration from Magento, WooCommerce, or legacy platforms with full data preservation.' },
            { title: 'Shopify Plus', desc: 'Enterprise Shopify Plus builds with custom checkout, B2B features, and multi-store architecture.' },
            { title: 'Performance Optimisation', desc: 'Speed audits, image optimisation, and code refactoring for sub-2-second load times.' },
            { title: 'Ongoing Support', desc: 'Monthly retainers for feature updates, bug fixes, and continuous conversion optimisation.' },
          ].map((f) => (
            <div key={f.title} style={{ borderTop: '2px solid var(--blue)', paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-strip">
        <div className="headline sr">Ready to launch<br />on <em>Shopify?</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
