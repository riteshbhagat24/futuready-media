'use client';

import Link from 'next/link';
import { useState } from 'react';
import { workData } from '@/lib/work-data';

const categories = ['All', ...Array.from(new Set(workData.map((w) => w.category)))].sort();

export default function WorkPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? workData : workData.filter((w) => w.category === active);

  return (
    <>
      <style jsx global>{`
        body { background: var(--ink) !important; }
      `}</style>

      {/* HERO */}
      <section style={{ padding: '10rem 4vw 5rem' }}>
        <div className="section-label-row sr">
          <span className="lbl" style={{ color: 'rgba(255,255,255,.35)' }}>Our Work</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <h1 className="d-xl sr sr-delay-1" style={{ color: 'var(--white)', marginBottom: '2rem' }}>
          <span style={{ display: 'block' }}>Work That</span>
          <span style={{ display: 'block' }}><em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Proves</em></span>
          <span style={{ display: 'block' }}>the Point.</span>
        </h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, color: 'rgba(255,255,255,.45)' }}>
          500+ brands have trusted us to deliver measurable growth. Here is a selection of work that moved the needle.
        </p>
      </section>

      {/* FILTER BAR */}
      <div
        style={{
          position: 'sticky', top: '60px', zIndex: 100,
          padding: '1rem 4vw',
          background: 'rgba(10,10,10,.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,.06)',
          borderBottom: '1px solid rgba(255,255,255,.06)',
          display: 'flex', gap: '.5rem', flexWrap: 'wrap', overflow: 'auto',
        }}
      >
        {categories.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '.5rem 1.2rem', fontSize: '11px', fontWeight: 600,
              letterSpacing: '.1em', textTransform: 'uppercase',
              fontFamily: "'Poppins', sans-serif",
              border: '1px solid',
              borderColor: active === f ? 'var(--blue)' : 'rgba(255,255,255,.12)',
              background: active === f ? 'var(--blue)' : 'transparent',
              color: active === f ? '#fff' : 'rgba(255,255,255,.5)',
              cursor: 'pointer', transition: 'all .25s', whiteSpace: 'nowrap',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* WORK GRID */}
      <section style={{ padding: '3rem 4vw 5rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
          {filtered.map((w) => (
            <Link key={w.slug} href={`/work/${w.slug}`} style={{ display: 'block' }}>
              <div className="work-cell" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', minHeight: '240px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt={w.client}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.8)', transition: 'transform 1.2s cubic-bezier(.16,1,.3,1), filter .6s' }}
                />
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                  padding: '2rem 2.5rem',
                  background: 'linear-gradient(to top, rgba(10,10,10,.8) 0%, transparent 55%)',
                }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '.35rem' }}>{w.client}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '.4rem' }}>{w.tagline}</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)' }}>{w.category}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip" style={{ background: 'var(--blue)' }}>
        <div className="headline">Your brand could be <em>next.</em></div>
        <Link href="/contact" className="btn btn-white">Start a Project →</Link>
      </div>
    </>
  );
}
