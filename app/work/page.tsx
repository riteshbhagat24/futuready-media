'use client';

import Link from 'next/link';
import { useState } from 'react';

const filters = [
  'All Work',
  'Performance Marketing',
  'SEO & AEO',
  'Brand Strategy',
  'Web Development',
  'D2C',
  'B2B Enterprise',
  'Real Estate',
];

const featuredWork = [
  {
    client: 'HCL Technologies',
    title: 'Enterprise Demand Generation — 12 Global Markets',
    tag: 'B2B Enterprise',
    image: 'https://www.futureadymedia.com/images/case-studies/hcl-thumbnail-new.webp',
    span: true,
  },
  {
    client: 'Razorpay',
    title: '2.4x ROAS — Performance Campaign',
    tag: 'Performance Marketing',
    image: 'https://www.futureadymedia.com/images/case-studies/razorpay-thumbnail-new.webp',
    span: false,
  },
  {
    client: 'Rebel Foods',
    title: '10M+ Reach — Social-First Growth',
    tag: 'D2C',
    image: 'https://www.futureadymedia.com/images/case-studies/rebel-thumbnail-new.webp',
    span: false,
  },
];

const moreWork = [
  {
    client: 'ICICI Bank',
    title: 'Digital Banking Acquisition — 3x Lead Volume',
    tag: 'Performance Marketing',
    image: 'https://www.futureadymedia.com/images/case-studies/icici-prudential-thumbnail-new.webp',
  },
  {
    client: "L'Oreal",
    title: 'Beauty D2C Launch — Zero to 50K Orders',
    tag: 'D2C',
    image: 'https://www.futureadymedia.com/images/case-studies/xyst-thumbnail.webp',
  },
  {
    client: 'Mhoir',
    title: 'Brand Identity & Web — Luxury Real Estate',
    tag: 'Real Estate',
    image: 'https://www.futureadymedia.com/images/case-studies/reliance-thumbnail.webp',
  },
  {
    client: 'JP Infra',
    title: '₹40Cr Revenue — Real Estate Performance',
    tag: 'Real Estate',
    image: 'https://www.futureadymedia.com/images/case-studies/hero-housing-finance-thumbnail.webp',
  },
  {
    client: 'DBS Bank',
    title: 'SEO Overhaul — 180% Organic Growth',
    tag: 'SEO & AEO',
    image: 'https://www.futureadymedia.com/images/case-studies/DBS-thumbnail.webp',
  },
  {
    client: 'Sun Pharma',
    title: 'HCP Engagement — Enterprise Digital',
    tag: 'B2B Enterprise',
    image: 'https://www.futureadymedia.com/images/case-studies/sun-pharma-thumbnail.webp',
  },
];

export default function WorkPage() {
  const [active, setActive] = useState('All Work');

  return (
    <>
      <style jsx global>{`
        body { background: var(--ink) !important; }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ padding: '12rem 4vw 5rem' }}>
        <div className="section-label-row sr">
          <span className="lbl" style={{ color: 'rgba(255,255,255,.35)' }}>Our Work</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <h1 className="d-xl sr sr-delay-1" style={{ color: 'var(--white)', marginBottom: '2rem' }}>
          <span style={{ display: 'block' }}>Work That</span>
          <span style={{ display: 'block' }}>
            <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Proves</em>
          </span>
          <span style={{ display: 'block' }}>the Point.</span>
        </h1>
        <p
          className="t-base sr sr-delay-2"
          style={{ maxWidth: '520px', color: 'rgba(255,255,255,.45)' }}
        >
          150+ brands have trusted us to deliver measurable growth.
          Here is a selection of work that moved the needle.
        </p>
      </section>

      {/* ─── FILTER BAR ─── */}
      <div
        className="sr"
        style={{
          position: 'sticky',
          top: '80px',
          zIndex: 100,
          padding: '1rem 4vw',
          background: 'rgba(10,10,10,.92)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,.06)',
          borderBottom: '1px solid rgba(255,255,255,.06)',
          display: 'flex',
          gap: '.6rem',
          flexWrap: 'wrap' as const,
          overflow: 'auto',
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '.5rem 1.2rem',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '.1em',
              textTransform: 'uppercase' as const,
              fontFamily: "'Poppins', sans-serif",
              border: '1px solid',
              borderColor: active === f ? 'var(--blue)' : 'rgba(255,255,255,.12)',
              background: active === f ? 'var(--blue)' : 'transparent',
              color: active === f ? 'var(--white)' : 'rgba(255,255,255,.5)',
              cursor: 'pointer',
              transition: 'all .25s',
              whiteSpace: 'nowrap' as const,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ─── FEATURED GRID ─── */}
      <section style={{ padding: '4rem 4vw 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gridTemplateRows: '340px 340px',
            gap: '3px',
          }}
        >
          {/* HCL — spans 2 rows */}
          <div className="work-cell" style={{ gridRow: 'span 2' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featuredWork[0].image} alt={featuredWork[0].client} />
            <div className="work-info">
              <div className="client">{featuredWork[0].client}</div>
              <div className="title">{featuredWork[0].title}</div>
              <div
                style={{
                  marginTop: '.5rem',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--blue)',
                }}
              >
                {featuredWork[0].tag}
              </div>
            </div>
          </div>
          {/* Razorpay */}
          <div className="work-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featuredWork[1].image} alt={featuredWork[1].client} />
            <div className="work-info">
              <div className="client">{featuredWork[1].client}</div>
              <div className="title">{featuredWork[1].title}</div>
              <div
                style={{
                  marginTop: '.5rem',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--blue)',
                }}
              >
                {featuredWork[1].tag}
              </div>
            </div>
          </div>
          {/* Rebel Foods */}
          <div className="work-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featuredWork[2].image} alt={featuredWork[2].client} />
            <div className="work-info">
              <div className="client">{featuredWork[2].client}</div>
              <div className="title">{featuredWork[2].title}</div>
              <div
                style={{
                  marginTop: '.5rem',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--blue)',
                }}
              >
                {featuredWork[2].tag}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MORE WORK GRID ─── */}
      <section style={{ padding: '2rem 4vw 5rem' }}>
        <div className="section-label-row sr">
          <span className="lbl" style={{ color: 'rgba(255,255,255,.35)' }}>More Work</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
            marginTop: '2rem',
          }}
        >
          {moreWork.map((w) => (
            <div key={w.client} className="work-cell sr" style={{ height: '320px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={w.image} alt={w.client} />
              <div className="work-info">
                <div className="client">{w.client}</div>
                <div className="title">{w.title}</div>
                <div
                  style={{
                    marginTop: '.5rem',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--blue)',
                  }}
                >
                  {w.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            className="btn"
            style={{
              border: '1.5px solid rgba(255,255,255,.2)',
              color: 'rgba(255,255,255,.6)',
              background: 'transparent',
              fontFamily: "'Poppins', sans-serif",
              cursor: 'pointer',
            }}
          >
            Load More Work
          </button>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <div className="cta-strip" style={{ background: 'var(--blue)' }}>
        <div className="headline">
          Your brand could be <em>next.</em>
        </div>
        <Link href="/contact" className="btn btn-white">
          Start a Project →
        </Link>
      </div>
    </>
  );
}
