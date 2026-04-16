import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HCL Technologies — Enterprise Demand Generation',
  description: 'How Futuready Media generated +45% qualified leads and 4.2× ROAS for HCL Technologies across 12 global markets.',
};

export default function HCLCaseStudy() {
  return (
    <>
      {/* HERO */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ background: '#060e1e', minHeight: '90vh', padding: '14rem 4vw 0' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: .12, filter: 'grayscale(1)' }} />
        <div className="relative z-10">
          <div className="flex gap-4 items-center" style={{ marginBottom: '2rem' }}>
            <Link href="/work" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}>← All Work</Link>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}>B2B · Enterprise</span>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}>2023 – 2024</span>
          </div>
          <h1 className="d-xl" style={{ color: 'var(--white)' }}>
            <span className="reveal-wrap"><span className="reveal-line">HCL Technologies</span></span>
            <span className="reveal-wrap"><span className="reveal-line" style={{ transitionDelay: '.12s', color: 'var(--blue)', fontStyle: 'italic' }}>Global Demand</span></span>
            <span className="reveal-wrap"><span className="reveal-line" style={{ transitionDelay: '.24s' }}>Generation.</span></span>
          </h1>
        </div>
        {/* Metrics */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(255,255,255,.06)' }}>
          {[
            { val: '45', unit: '%', key: 'Qualified Leads ↑' },
            { val: '4', unit: '.2×', key: 'ROAS' },
            { val: '12', unit: '', key: 'Global Markets' },
            { val: '38', unit: '%', key: 'Cost Per MQL ↓' },
          ].map((m, i) => (
            <div key={i} style={{ padding: '2.5rem 2rem', borderRight: i < 3 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
              <div style={{ fontSize: 'clamp(2rem,3.5vw,3.5rem)', fontWeight: 900, color: 'var(--white)', lineHeight: 1, letterSpacing: '-.03em' }}>
                {i === 3 && '−'}<span data-count={m.val}>0</span><span style={{ fontSize: '.5em', color: 'var(--blue)' }}>{m.unit}</span>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginTop: '.5rem' }}>{m.key}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="grid gap-20 items-start" style={{ gridTemplateColumns: '280px 1fr', padding: '5rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div className="flex flex-col gap-6 sr">
          {[
            { lbl: 'Client', val: 'HCL Technologies' },
            { lbl: 'Sector', val: 'B2B Technology / IT Services' },
            { lbl: 'Scope', val: 'Performance Marketing, SEO, LinkedIn Ads, Demand Generation' },
            { lbl: 'Duration', val: '18 Months' },
            { lbl: 'Markets', val: 'India, US, UK, EU, Southeast Asia' },
          ].map((m) => (
            <div key={m.lbl}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: '.3rem' }}>{m.lbl}</div>
              <div style={{ fontSize: '.88rem', fontWeight: 600 }}>{m.val}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="section-label-row sr"><span className="lbl">Overview</span><span className="line" /></div>
          <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '1.5rem' }}>The Brief</h2>
          <p className="t-base sr sr-delay-2" style={{ marginBottom: '1.2rem' }}>HCL Technologies — one of India&apos;s largest IT services companies — needed to scale qualified enterprise leads across 12 global markets.</p>
          <p className="t-base sr sr-delay-3">Futuready Media was brought in to rebuild their full-funnel demand generation architecture — from ad strategy and creative to landing pages, CRM integration, and attribution modelling.</p>
        </div>
      </div>

      {/* STRATEGY */}
      <div style={{ background: 'var(--ink)', padding: '7rem 4vw' }}>
        <div className="section-label-row sr" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
          <span className="lbl" style={{ color: 'rgba(255,255,255,.3)' }}>Strategy</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <h2 className="d-md sr sr-delay-1" style={{ color: 'var(--white)', marginBottom: '4rem' }}>How we<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>solved it.</em></h2>
        {[
          { num: '01', title: 'Unified Attribution Infrastructure', desc: 'Built a GA4 + Salesforce CRM integration with cross-channel UTM taxonomy.' },
          { num: '02', title: 'Market-Specific Funnel Design', desc: 'Segmented 12 markets into three clusters and designed distinct funnel strategies.' },
          { num: '03', title: 'MQL Qualification Layer', desc: 'Introduced progressive profiling + lead scoring. MQL-to-SQL rate improved by 62%.' },
          { num: '04', title: 'Creative Sprint Programme', desc: 'Ran quarterly creative sprints — 12 fresh assets per market cluster per quarter.' },
        ].map((s, i) => (
          <div key={s.num} className={`process-step sr ${i > 0 ? `sr-delay-${Math.min(i, 3)}` : ''}`}>
            <div className="step-num">{s.num}</div>
            <div><div className="step-title">{s.title}</div><div className="step-desc">{s.desc}</div></div>
          </div>
        ))}
      </div>

      {/* RESULTS */}
      <div style={{ padding: '7rem 4vw' }}>
        <div className="section-label-row sr"><span className="lbl">Results — 18 Months</span><span className="line" /></div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '3rem' }}>The numbers<br />don&apos;t lie.</h2>
        <div className="result-grid sr sr-delay-2">
          {[
            { val: '45', unit: '%', key: 'Qualified lead volume — YoY' },
            { val: '4', unit: '.2×', key: 'ROAS — Google + LinkedIn combined' },
            { val: '38', unit: '%', key: 'Cost per MQL — Q1 to Q6' },
            { val: '62', unit: '%', key: 'MQL-to-SQL conversion rate' },
          ].map((r, i) => (
            <div key={i} className="result-cell">
              <div className="result-val">{i === 2 ? '−' : '+'}<span data-count={r.val}>0</span><span className="unit">{r.unit}</span></div>
              <div className="result-key">{r.key}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-strip">
        <div className="headline sr">Start your<br />growth <em>story.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us →</Link></div>
      </div>
    </>
  );
}
