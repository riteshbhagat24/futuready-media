'use client';

import Link from 'next/link';
import FAQBlock from '@/components/shared/FAQBlock';
import type { ServiceData } from '@/lib/services-data';

export default function ServicePageClient({ service: s }: { service: ServiceData }) {
  const marqueeDouble = [...s.marqueeItems, ...s.marqueeItems];

  return (
    <>
      {/* HERO */}
      <div style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="breadcrumb sr">
          <Link href="/">Home</Link><span className="sep">/</span>
          <Link href={`/services/${s.slug}`}>Services</Link><span className="sep">/</span>
          <span>{s.title} {s.titleBlue.replace('.', '')}</span>
        </div>
        <h1 className="d-xl sr sr-delay-1" style={{ marginTop: '1.5rem' }}>
          {s.title}<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>{s.titleBlue}</em>
        </h1>
        <div className="grid gap-16 items-end" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '4rem' }}>
          <div className="t-base sr sr-delay-2" style={{ maxWidth: 440 }}>{s.heroDesc}</div>
          <div className="flex gap-12 flex-wrap sr sr-delay-3">
            {s.stats.map((st) => (
              <div key={st.key}>
                <div style={{ fontSize: 'clamp(2rem,3.5vw,3.5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-.03em', color: 'var(--blue)' }}>{st.val}</div>
                <div style={{ fontSize: '.78rem', fontWeight: 500, color: 'var(--warm)', marginTop: '.4rem' }}>{st.key}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sr sr-delay-2" style={{ marginTop: '3rem' }}>
          {s.badges.map((b) => (
            <span key={b} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', border: '1px solid var(--rule)', color: 'var(--warm)', padding: '.35rem .8rem' }}>{b}</span>
          ))}
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-track">
        <div className="marquee-inner" style={{ animationDuration: '22s' }}>
          {marqueeDouble.map((m, i) => (
            <span key={i} className="marquee-item">{m}</span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <div className="grid gap-20 items-start" style={{ gridTemplateColumns: '1fr 1.6fr', padding: '6rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">The Approach</span><span className="line" /></div>
          <h2 className="d-md sr sr-delay-1">{s.approachTitle.split(' ').slice(0, 2).join(' ')}<br />{s.approachTitle.split(' ').slice(2).join(' ')}</h2>
        </div>
        <div>
          {s.approachDesc.map((p, i) => (
            <p key={i} className={`t-base sr sr-delay-${i + 1}`} style={{ marginBottom: i < s.approachDesc.length - 1 ? '2rem' : '3rem' }}>{p}</p>
          ))}
          <div className="sr sr-delay-3" style={{ borderTop: '1px solid var(--rule)', paddingTop: '1.5rem', display: 'flex', gap: '4rem', flexWrap: 'wrap' as const }}>
            <div>
              <div style={{ fontSize: '.78rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'var(--warm)', marginBottom: '.4rem' }}>Industries</div>
              <div style={{ fontSize: '.88rem', fontWeight: 500 }}>{s.industries}</div>
            </div>
            <div>
              <div style={{ fontSize: '.78rem', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase' as const, color: 'var(--warm)', marginBottom: '.4rem' }}>Engagement</div>
              <div style={{ fontSize: '.88rem', fontWeight: 500 }}>{s.engagement}</div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div style={{ background: 'var(--ink)', padding: '7rem 4vw' }}>
        <div className="section-label-row sr" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
          <span className="lbl" style={{ color: 'rgba(255,255,255,.3)' }}>How We Work</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <h2 className="d-md sr sr-delay-1" style={{ color: 'var(--white)', marginBottom: '4rem' }}>
          Our process.<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>No fluff.</em>
        </h2>
        {s.steps.map((step, i) => (
          <div key={step.num} className={`process-step sr ${i > 0 ? `sr-delay-${Math.min(i, 4)}` : ''}`}>
            <div className="step-num">{step.num}</div>
            <div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* RESULTS */}
      <div style={{ padding: '7rem 4vw' }}>
        <div className="section-label-row sr"><span className="lbl">Case Study — HCL Technologies</span><span className="line" /></div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '3rem' }}>{s.caseStudy.title.split(' — ')[0]}<br />{s.caseStudy.title.includes(' — ') ? s.caseStudy.title.split(' — ')[1] : ''}</h2>
        <div className="result-grid sr sr-delay-2">
          {s.caseStudy.results.map((r) => (
            <div key={r.key} className="result-cell">
              <div className="result-val"><span data-count={r.val}>0</span><span className="unit">{r.unit}</span></div>
              <div className="result-key">{r.key}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/case-study/hcl" className="btn btn-dark">Read Full Case Study</Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="grid gap-20" style={{ padding: '7rem 4vw', gridTemplateColumns: '1fr 1.5fr', borderTop: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">FAQ</span><span className="line" /></div>
          <h2 className="d-sm sr sr-delay-1">Common<br />questions.</h2>
        </div>
        <FAQBlock faqs={s.faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      </div>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">{s.ctaHeadline}<br /><em>{s.ctaEm}</em></div>
        <div className="sr sr-delay-2">
          <Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem', fontSize: '13px' }}>Start a Conversation →</Link>
        </div>
      </div>
    </>
  );
}
