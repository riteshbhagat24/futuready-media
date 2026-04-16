import type { Metadata } from 'next';
import Link from 'next/link';
import FAQBlock from '@/components/shared/FAQBlock';

export const metadata: Metadata = {
  title: 'Shopify Development in Bangalore — Futuready Media',
  description: 'Shopify development services for Bangalore brands. Custom themes, migrations, app integrations, and Shopify Plus builds by Futuready Media.',
};

const geoClients = ['Bangalore', 'Koramangala', 'Indiranagar', 'Whitefield', 'HSR Layout', 'Electronic City', 'Jayanagar', 'MG Road', 'Hebbal'];
const geoDouble = [...geoClients, ...geoClients];

const geoFaqs = [
  { question: 'Do you have an office in Bangalore?', answer: 'Our primary office is in Mumbai (Andheri East), but we work with Bangalore-based brands remotely and through regular in-person visits. Many of our D2C and tech clients are Bangalore-based.' },
  { question: 'What Shopify services do you offer?', answer: 'Custom theme development, Magento/WooCommerce migration, Shopify Plus enterprise builds, app integrations, performance optimisation, and ongoing support.' },
  { question: 'Can you migrate our existing store to Shopify?', answer: 'Yes. We have migrated stores from Magento, WooCommerce, and custom platforms to Shopify with zero data loss and full SEO preservation.' },
  { question: 'What industries do you serve in Bangalore?', answer: 'D2C, fashion, health & wellness, food & beverage, tech accessories, home decor, and B2B e-commerce.' },
];

export default function ShopifyDevelopmentBangalorePage() {
  return (
    <>
      {/* HERO */}
      <div style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="sr" style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', fontSize: '11px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid var(--rule)', padding: '.45rem 1rem', color: 'var(--warm)', marginBottom: '2rem' }}>
          📍 Bangalore, Karnataka
        </div>
        <h1 className="d-xl sr sr-delay-1">Shopify Development<br />in<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>Bangalore.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 500, marginTop: '2rem' }}>
          Custom Shopify stores for Bangalore&apos;s thriving D2C ecosystem. From ground-up builds to platform migrations — we develop stores that convert.
        </p>
      </div>

      {/* STATS */}
      <div className="grid sr" style={{ gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid var(--rule)' }}>
        {[
          { num: '25+', h3: 'Shopify Stores Built', p: 'For D2C brands across India and internationally' },
          { num: '3×', h3: 'Avg. Conversion Lift', p: 'Post-migration from legacy platforms' },
          { num: '<2s', h3: 'Load Time', p: 'Optimised for speed and Core Web Vitals' },
        ].map((g, i) => (
          <div key={i} style={{ padding: '2.5rem 2rem', borderRight: i < 2 ? '1px solid var(--rule)' : 'none' }}>
            <div style={{ fontSize: 'clamp(1.8rem,3vw,3.5rem)', fontWeight: 900, color: 'var(--blue)', marginBottom: '.5rem' }}>{g.num}</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '.4rem' }}>{g.h3}</h3>
            <p style={{ fontSize: '.85rem', color: 'var(--warm)' }}>{g.p}</p>
          </div>
        ))}
      </div>

      {/* MARQUEE */}
      <div className="marquee-track">
        <div className="marquee-inner" style={{ animationDuration: '24s' }}>
          {geoDouble.map((c, i) => <span key={i} className="marquee-item">{c}</span>)}
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 1fr', padding: '6rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">Why Choose Us</span><span className="line" /></div>
          <h2 className="d-md sr sr-delay-1">Bangalore&apos;s D2C<br />growth partner.</h2>
          <p className="t-base sr sr-delay-2" style={{ marginTop: '1.5rem' }}>Bangalore is India&apos;s D2C capital. We understand the ecosystem — the speed, the competition, and the standards that Bangalore-based brands demand from their Shopify partners.</p>
        </div>
        <div>
          <div className="section-label-row sr sr-delay-1"><span className="lbl">Shopify Services</span><span className="line" /></div>
          <div className="sr sr-delay-2" style={{ borderTop: '1px solid var(--rule)', marginTop: '2rem' }}>
            {['Custom Shopify Theme Development', 'Magento to Shopify Migration', 'Shopify Plus Enterprise Builds', 'App Integration & Custom Development', 'Performance & Speed Optimisation', 'Ongoing Support & Maintenance'].map((s) => (
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
        <FAQBlock faqs={geoFaqs} />
      </div>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Bangalore&apos;s <em>Shopify</em><br />partner.</div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
