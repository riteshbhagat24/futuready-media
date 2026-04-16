import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, blogSlugs } from '@/lib/blog-data';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://futureadymedia.com/ideas/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <div style={{ padding: '14rem 4vw 4rem', borderBottom: '1px solid var(--rule)', maxWidth: 900 }}>
        <div className="breadcrumb sr">
          <Link href="/">Home</Link><span className="sep">/</span>
          <Link href="/ideas">Ideas</Link><span className="sep">/</span>
          <span>{post.category}</span>
        </div>
        <div className="sr sr-delay-1 flex items-center gap-6 flex-wrap" style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', background: 'var(--blue)', color: 'var(--white)', padding: '.3rem .75rem' }}>{post.category}</span>
          <span style={{ fontSize: '.8rem', color: 'var(--warm)' }}>{post.date}</span>
          <span style={{ fontSize: '.8rem', color: 'var(--warm)' }}>5 min read</span>
        </div>
        <h1 className="d-lg sr sr-delay-2" style={{ maxWidth: 800 }}>{post.title}</h1>
        <p className="t-base sr sr-delay-3" style={{ marginTop: '2rem', maxWidth: 600 }}>{post.excerpt}</p>
      </div>

      {/* ARTICLE BODY */}
      <div style={{ padding: '5rem 4vw 8rem', maxWidth: 800 }}>
        <article style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
          <p style={{ color: 'var(--warm)', marginBottom: '1.5rem' }}>{post.excerpt}</p>
          <p style={{ color: 'var(--warm)', marginBottom: '1.5rem' }}>
            At Futuready Media, we&apos;ve worked with 150+ brands across industries on exactly this challenge. In this article, we break down the key strategies, frameworks, and actionable insights that drive real results.
          </p>

          <div style={{ borderLeft: '3px solid var(--blue)', padding: '1.5rem 2rem', margin: '2.5rem 0', fontSize: '1.1rem', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.4 }}>
            &ldquo;The brands that win aren&apos;t the ones with the biggest budgets — they&apos;re the ones with the clearest strategy and most disciplined execution.&rdquo;
          </div>

          <p style={{ color: 'var(--warm)', marginBottom: '1.5rem' }}>
            Whether you&apos;re a startup looking to establish your digital presence or an enterprise scaling across markets, the principles in this guide apply. The key is matching the right approach to your specific stage, budget, and growth objectives.
          </p>

          <div style={{ background: 'var(--ink)', padding: '2.5rem', margin: '3rem 0' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: 700, marginBottom: '.7rem' }}>Need help with your {post.category.toLowerCase()} strategy?</h3>
            <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.5)', marginBottom: '1.5rem' }}>Book a free 30-minute consultation with our team. We&apos;ll review your current approach and share specific recommendations.</p>
            <Link href="/contact" className="btn btn-white">Book a Free Consultation →</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', borderTop: '1px solid var(--rule)', paddingTop: '2rem', marginTop: '3rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 900, color: 'var(--white)', flexShrink: 0 }}>FM</div>
            <div>
              <div style={{ fontSize: '.88rem', fontWeight: 700 }}>Futuready Media</div>
              <div style={{ fontSize: '.78rem', color: 'var(--warm)' }}>Digital Marketing Agency, Mumbai</div>
            </div>
          </div>
        </article>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <div style={{ padding: '5rem 4vw 7rem', borderTop: '1px solid var(--rule)' }}>
          <div className="section-label-row sr"><span className="lbl">More Ideas</span><span className="line" /></div>
          <div className="grid gap-8 sr sr-delay-1" style={{ gridTemplateColumns: `repeat(${Math.min(related.length, 3)}, 1fr)`, marginTop: '2rem' }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/ideas/${r.slug}`}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '.4rem' }}>{r.category}</div>
                <div style={{ fontSize: '.92rem', fontWeight: 700, lineHeight: 1.35 }}>{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="cta-strip">
        <div className="headline sr">Performance<br />without <em>guesswork.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Start a Conversation →</Link></div>
      </div>
    </>
  );
}
