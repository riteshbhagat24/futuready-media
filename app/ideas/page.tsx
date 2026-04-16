import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Ideas — Futuready Media',
  description: 'Insights, frameworks, and strategies from Futuready Media — covering performance marketing, SEO, brand strategy, web development, and AI.',
};

export default function IdeasPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Ideas</span><span className="line" /></div>
        <h1 className="d-xl sr sr-delay-1">Insights that<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>compound.</em></h1>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 520, marginTop: '2rem' }}>
          Strategies, frameworks, and honest takes on digital marketing — from the team at Futuready Media.
        </p>
      </section>

      {/* GRID */}
      <section style={{ padding: '5rem 4vw 7rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/ideas/${post.slug}`} style={{ display: 'block' }}>
              <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.85)', transition: 'transform 1s cubic-bezier(.16,1,.3,1)' }} />
                </div>
                <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '.6rem' }}>
                  {post.category} · {post.date}
                </span>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '.6rem' }}>{post.title}</h2>
                <p style={{ fontSize: '.85rem', color: 'var(--warm)', lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Performance<br />without <em>guesswork.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Start a Conversation &rarr;</Link></div>
      </div>
    </>
  );
}
