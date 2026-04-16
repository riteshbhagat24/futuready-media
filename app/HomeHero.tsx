'use client';

import Link from 'next/link';

export default function HomeHero() {
  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '640px',
        background: 'var(--ink)',
        padding: '0 4vw 4rem',
      }}
    >
      {/* Top row */}
      <div className="flex justify-between items-start" style={{ paddingTop: '7rem', marginBottom: 'auto' }}>
        <div
          style={{
            fontSize: '11px', fontWeight: 600, letterSpacing: '.2em',
            textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.4)',
            border: '1px solid rgba(255,255,255,.12)', padding: '.5rem 1rem',
          }}
        >
          Mumbai · India · Since 2012
        </div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,.35)', textAlign: 'right' as const }}>
          Full-Stack Digital Agency
        </div>
      </div>

      {/* Headline */}
      <div style={{ marginBottom: '3rem' }}>
        <span className="reveal-wrap block" style={{ fontSize: 'clamp(2.5rem, 7vw, 7.5rem)', fontWeight: 900, lineHeight: '.88', letterSpacing: '-.03em', color: 'var(--white)' }}>
          <span className="reveal-line">We Build</span>
        </span>
        <span className="reveal-wrap block" style={{ fontSize: 'clamp(2.5rem, 7vw, 7.5rem)', fontWeight: 900, lineHeight: '.88', letterSpacing: '-.03em', color: 'var(--blue)', fontStyle: 'italic' }}>
          <span className="reveal-line" style={{ transitionDelay: '.12s' }}>Brands That</span>
        </span>
        <span className="reveal-wrap block" style={{ fontSize: 'clamp(2.5rem, 7vw, 7.5rem)', fontWeight: 900, lineHeight: '.88', letterSpacing: '-.03em', color: 'rgba(255,255,255,.2)' }}>
          <span className="reveal-line" style={{ transitionDelay: '.24s' }}>Actually</span>
        </span>
        <span className="reveal-wrap block" style={{ fontSize: 'clamp(2.5rem, 7vw, 7.5rem)', fontWeight: 900, lineHeight: '.88', letterSpacing: '-.03em', color: 'var(--white)' }}>
          <span className="reveal-line" style={{ transitionDelay: '.36s' }}>Grow.</span>
        </span>
      </div>

      {/* Bottom row */}
      <div className="flex justify-between items-end gap-12 flex-wrap">
        <p style={{ maxWidth: '420px', fontSize: '.92rem', lineHeight: 1.7, color: 'rgba(255,255,255,.45)' }}>
          A full-service creative digital agency focused on Strategy, Branding, Content, Design, Marketing, Technology &amp; AI — 500+ clients, 13+ years, offices in Mumbai, Bangalore &amp; UAE.
        </p>
        <div className="flex gap-4 shrink-0">
          <Link href="/work" className="btn btn-white">See Our Work</Link>
          <Link
            href="/contact"
            className="btn"
            style={{ border: '1.5px solid rgba(255,255,255,.25)', color: 'rgba(255,255,255,.7)' }}
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute flex items-center gap-4"
        style={{
          right: '4vw', bottom: '4rem',
          writingMode: 'vertical-rl', textOrientation: 'mixed',
          fontSize: '10px', fontWeight: 600, letterSpacing: '.2em',
          textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.3)',
        }}
      >
        Scroll
      </div>
    </section>
  );
}
