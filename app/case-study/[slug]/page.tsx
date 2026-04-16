import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies, caseStudySlugs } from '@/lib/case-study-data';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — Case Study | Futuready Media`,
    description: `How Futuready Media helped ${cs.client} with ${cs.tagline.toLowerCase()}.`,
    alternates: { canonical: `https://futureadymedia.com/case-study/${cs.slug}` },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  return (
    <>
      {/* HERO */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ background: '#060e1e', minHeight: '90vh', padding: '14rem 4vw 0' }}>
        <div className="relative z-10">
          <div className="flex gap-4 items-center" style={{ marginBottom: '2rem' }}>
            <Link href="/work" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}>&larr; All Work</Link>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}>{cs.sector}</span>
          </div>
          <h1 className="d-xl" style={{ color: 'var(--white)' }}>
            <span className="reveal-wrap"><span className="reveal-line">{cs.client}</span></span>
            <span className="reveal-wrap"><span className="reveal-line" style={{ transitionDelay: '.12s', color: 'var(--blue)', fontStyle: 'italic' }}>{cs.tagline.split(' ').slice(0, 2).join(' ')}</span></span>
            <span className="reveal-wrap"><span className="reveal-line" style={{ transitionDelay: '.24s' }}>{cs.tagline.split(' ').slice(2).join(' ') || ''}</span></span>
          </h1>
        </div>
        {/* Metrics */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4,1fr)', background: 'rgba(255,255,255,.06)' }}>
          {cs.metrics.map((m, i) => (
            <div key={i} style={{ padding: '2.5rem 2rem', borderRight: i < 3 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
              <div style={{ fontSize: 'clamp(2rem,3.5vw,3.5rem)', fontWeight: 900, color: 'var(--white)', lineHeight: 1, letterSpacing: '-.03em' }}>
                {m.val}<span style={{ fontSize: '.5em', color: 'var(--blue)' }}>{m.unit}</span>
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
            { lbl: 'Client', val: cs.client },
            { lbl: 'Sector', val: cs.sector },
            { lbl: 'Scope', val: cs.scope },
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
          <p className="t-base sr sr-delay-2" style={{ marginBottom: '1.2rem' }}>{cs.overview}</p>
          <p className="t-base sr sr-delay-3">{cs.overviewExtra}</p>
        </div>
      </div>

      {/* STRATEGY */}
      <div style={{ background: 'var(--ink)', padding: '7rem 4vw' }}>
        <div className="section-label-row sr" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
          <span className="lbl" style={{ color: 'rgba(255,255,255,.3)' }}>Strategy</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <h2 className="d-md sr sr-delay-1" style={{ color: 'var(--white)', marginBottom: '4rem' }}>How we<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>solved it.</em></h2>
        {cs.steps.map((s, i) => (
          <div key={s.num} className={`process-step sr ${i > 0 ? `sr-delay-${Math.min(i, 3)}` : ''}`}>
            <div className="step-num">{s.num}</div>
            <div><div className="step-title">{s.title}</div><div className="step-desc">{s.desc}</div></div>
          </div>
        ))}
      </div>

      {/* RESULTS */}
      <div style={{ padding: '7rem 4vw' }}>
        <div className="section-label-row sr"><span className="lbl">Results</span><span className="line" /></div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '3rem' }}>The numbers<br />don&apos;t lie.</h2>
        <div className="result-grid sr sr-delay-2">
          {cs.results.map((r, i) => (
            <div key={i} className="result-cell">
              <div className="result-val">{r.val}<span className="unit">{r.unit}</span></div>
              <div className="result-key">{r.key}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">{cs.ctaHeadline}<br /><em>{cs.ctaEm}</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Talk to Us &rarr;</Link></div>
      </div>
    </>
  );
}
