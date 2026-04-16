import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { workData, workSlugs } from '@/lib/work-data';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const w = workData.find((i) => i.slug === params.slug);
  if (!w) return {};
  return {
    title: `${w.client} — ${w.tagline}`,
    description: w.description.slice(0, 160),
    alternates: { canonical: `https://futureadymedia.com/work/${w.slug}` },
  };
}

export default function WorkDetailPage({ params }: Props) {
  const w = workData.find((i) => i.slug === params.slug);
  if (!w) notFound();

  return (
    <>
      {/* HERO */}
      <div
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: '80vh', background: '#060e1e', padding: '14rem 4vw 0' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${w.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            filter: 'grayscale(1)',
          }}
        />
        <div className="relative z-10">
          <div className="flex gap-4 items-center flex-wrap" style={{ marginBottom: '2rem' }}>
            <Link
              href="/work"
              style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}
            >
              ← All Work
            </Link>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}>
              {w.category}
            </span>
          </div>
          <h1 className="d-xl" style={{ color: 'var(--white)' }}>
            <span className="reveal-wrap"><span className="reveal-line">{w.client}</span></span>
          </h1>
          <p className="d-sm" style={{ color: 'var(--blue)', fontStyle: 'italic', marginTop: '0.5rem' }}>
            {w.tagline}
          </p>
        </div>

        {/* Metrics */}
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${w.results.length}, 1fr)`, background: 'rgba(255,255,255,.06)', marginTop: '4rem' }}
        >
          {w.results.map((r, i) => (
            <div
              key={i}
              style={{
                padding: '2.5rem 2rem',
                borderRight: i < w.results.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none',
              }}
            >
              <div style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 900, color: 'var(--white)', lineHeight: 1 }}>
                {r.val}
              </div>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginTop: '.5rem' }}>
                {r.key}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <div
        className="grid gap-20 items-start"
        style={{ gridTemplateColumns: '280px 1fr', padding: '5rem 4vw', borderBottom: '1px solid var(--rule)' }}
      >
        <div className="sr">
          <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: '.3rem' }}>Client</div>
          <div style={{ fontSize: '.88rem', fontWeight: 600, marginBottom: '1.5rem' }}>{w.client}</div>
          <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: '.3rem' }}>Sector</div>
          <div style={{ fontSize: '.88rem', fontWeight: 600, marginBottom: '1.5rem' }}>{w.category}</div>
          <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: '.3rem' }}>Services</div>
          <div style={{ fontSize: '.88rem', fontWeight: 600 }}>{w.services.join(', ')}</div>
        </div>
        <div>
          <div className="section-label-row sr">
            <span className="lbl">Overview</span><span className="line" />
          </div>
          <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '1.5rem' }}>The Brief</h2>
          <p className="t-base sr sr-delay-2">{w.description}</p>
        </div>
      </div>

      {/* RESULTS */}
      <div style={{ padding: '7rem 4vw' }}>
        <div className="section-label-row sr">
          <span className="lbl">Results</span><span className="line" />
        </div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '3rem' }}>The numbers.</h2>
        <div className="result-grid sr sr-delay-2">
          {w.results.map((r, i) => (
            <div key={i} className="result-cell">
              <div className="result-val">{r.val}</div>
              <div className="result-key">{r.key}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Your brand<br />could be <em>next.</em></div>
        <div className="sr sr-delay-2">
          <Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Start a Project →</Link>
        </div>
      </div>
    </>
  );
}
