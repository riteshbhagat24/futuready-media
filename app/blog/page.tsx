import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why ROAS Is Lying to You',
  description: "Most brands treat ROAS as their north star metric. Here's why that's dangerous — and what to track instead.",
};

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <div style={{ padding: '14rem 4vw 4rem', borderBottom: '1px solid var(--rule)', maxWidth: 900 }}>
        <div className="breadcrumb sr">
          <Link href="/">Home</Link><span className="sep">/</span>
          <Link href="/blog">Ideas</Link><span className="sep">/</span>
          <span>Performance Marketing</span>
        </div>
        <div className="sr sr-delay-1 flex items-center gap-6 flex-wrap" style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', background: 'var(--blue)', color: 'var(--white)', padding: '.3rem .75rem' }}>Performance Marketing</span>
          <span style={{ fontSize: '.8rem', color: 'var(--warm)' }}>March 2025</span>
          <span style={{ fontSize: '.8rem', color: 'var(--warm)' }}>8 min read</span>
        </div>
        <h1 className="d-lg sr sr-delay-2">Why ROAS<br />Is Lying<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>to You.</em></h1>
        <p className="t-base sr sr-delay-3" style={{ marginTop: '2rem', maxWidth: 600 }}>
          Most brands treat ROAS as their north star metric. Here&apos;s why that&apos;s dangerous — and what to track instead.
        </p>
      </div>

      {/* FEATURED IMAGE */}
      <div className="sr" style={{ width: '100%', height: 480, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://www.futureadymedia.com/images/Ideas/blog-12-thumbnail.webp" alt="Performance Marketing Data" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.8)' }} />
      </div>

      {/* ARTICLE */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '5rem', padding: '5rem 4vw 8rem', alignItems: 'start' }}>
        <article style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
          <h2 style={{ fontSize: 'clamp(1.2rem,2vw,1.8rem)', fontWeight: 800, margin: '3rem 0 1rem' }}>The ROAS Trap</h2>
          <p style={{ color: 'var(--warm)', marginBottom: '1.4rem' }}>Return on Ad Spend is the metric every performance marketer talks about. It&apos;s clean, it&apos;s simple, and it fits on a slide. But over 12 years and 150+ client engagements, we&apos;ve seen ROAS mislead brands into bad decisions more often than almost any other metric.</p>
          <p style={{ color: 'var(--warm)', marginBottom: '1.4rem' }}>Here&apos;s the problem: <strong style={{ color: 'var(--ink)' }}>ROAS measures platform-attributed revenue, not actual business revenue.</strong> And in a multi-channel world — the last click gets all the credit.</p>

          <div style={{ borderLeft: '3px solid var(--blue)', padding: '1.5rem 2rem', margin: '2.5rem 0', fontSize: '1.2rem', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.4 }}>
            &ldquo;A 4× ROAS means nothing if your margins can&apos;t support it — and a 2× ROAS might be phenomenal if your LTV is high enough.&rdquo;
          </div>

          <h2 style={{ fontSize: 'clamp(1.2rem,2vw,1.8rem)', fontWeight: 800, margin: '3rem 0 1rem' }}>The Metrics That Actually Matter</h2>
          <p style={{ color: 'var(--warm)', marginBottom: '1.4rem' }}><strong style={{ color: 'var(--ink)' }}>MER (Marketing Efficiency Ratio):</strong> Total revenue ÷ total marketing spend. Blended across all channels. No attribution games.</p>
          <p style={{ color: 'var(--warm)', marginBottom: '1.4rem' }}><strong style={{ color: 'var(--ink)' }}>CAC Payback Period:</strong> How many months does it take to recoup customer acquisition cost through margin?</p>
          <p style={{ color: 'var(--warm)', marginBottom: '1.4rem' }}><strong style={{ color: 'var(--ink)' }}>LTV:CAC Ratio:</strong> The real measure of whether your marketing machine is sustainable. Below 3:1? You have a problem. Above 5:1? You&apos;re probably underinvesting.</p>

          <div style={{ background: 'var(--ink)', padding: '2.5rem', margin: '3rem 0' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: 700, marginBottom: '.7rem' }}>Is your ROAS hiding a real problem?</h3>
            <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.5)', marginBottom: '1.5rem' }}>We do free attribution audits for brands running ₹1L+ in monthly ad spend.</p>
            <Link href="/contact" className="btn btn-white">Book a Free Audit →</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', borderTop: '1px solid var(--rule)', paddingTop: '2rem', marginTop: '3rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 900, color: 'var(--white)', flexShrink: 0 }}>RB</div>
            <div>
              <div style={{ fontSize: '.88rem', fontWeight: 700 }}>Ritesh Bhagat</div>
              <div style={{ fontSize: '.78rem', color: 'var(--warm)' }}>Digital Operations Head, Futuready Media</div>
            </div>
          </div>
        </article>

        <aside style={{ position: 'sticky', top: '6rem' }}>
          <div style={{ border: '1px solid var(--rule)', padding: '2rem', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: '1.2rem' }}>In This Article</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.2rem' }}>
              {['The ROAS Trap', 'Metrics That Matter'].map((t) => (
                <span key={t} style={{ display: 'block', fontSize: '.82rem', fontWeight: 500, color: 'var(--warm)', padding: '.45rem 0', borderLeft: '2px solid var(--rule)', paddingLeft: '1rem' }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--ink)', padding: '2rem', border: 'none' }}>
            <h4 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '1.2rem' }}>Free Audit</h4>
            <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.45)', marginBottom: '1.2rem', lineHeight: 1.6 }}>Is your attribution lying to you? Let us check.</p>
            <Link href="/contact" className="btn btn-blue" style={{ width: '100%', justifyContent: 'center' }}>Book Your Audit</Link>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Performance<br />without <em>guesswork.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Start a Conversation →</Link></div>
      </div>
    </>
  );
}
