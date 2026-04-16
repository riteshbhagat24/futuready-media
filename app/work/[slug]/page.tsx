import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { workData, workSlugs } from '@/lib/work-data';
import FAQBlock from '@/components/shared/FAQBlock';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const w = workData.find((i) => i.slug === params.slug);
  if (!w) return {};
  return {
    title: `${w.client} Case Study — ${w.tagline} | Futuready Media`,
    description: `${w.description.slice(0, 155)}...`,
    keywords: [w.client, w.category, ...w.services, 'Futuready Media', 'case study', 'digital marketing'],
    alternates: { canonical: `https://futureadymedia.com/work/${w.slug}` },
    openGraph: {
      title: `${w.client} — ${w.tagline}`,
      description: w.description.slice(0, 200),
      images: [{ url: w.image }],
    },
  };
}

export default function WorkDetailPage({ params }: Props) {
  const w = workData.find((i) => i.slug === params.slug);
  if (!w) notFound();

  const related = workData.filter((r) => r.slug !== w.slug && r.category === w.category).slice(0, 3);

  const faqs = [
    { question: `What services did Futuready Media provide for ${w.client}?`, answer: `For ${w.client}, Futuready Media delivered a comprehensive suite of digital marketing services including ${w.services.join(', ')}. Our integrated approach ensured consistent messaging and performance across all channels, driving measurable business outcomes throughout the engagement.` },
    { question: `What results did Futuready Media achieve for ${w.client}?`, answer: `The ${w.client} engagement delivered exceptional results: ${w.results.map(r => `${r.val} ${r.key}`).join(', ')}. These outcomes were achieved through a data-driven, performance-first approach combining strategic planning with rigorous weekly optimisation.` },
    { question: `How long was the ${w.client} engagement?`, answer: `Enterprise engagements like ${w.client} typically run for 6-12 months minimum. The initial strategy and setup phase takes 4-6 weeks, with performance improvements visible within 60-90 days. Ongoing optimisation ensures results compound over time.` },
    { question: `Can Futuready Media deliver similar results for my ${w.category.toLowerCase()} brand?`, answer: `Yes. While every brand has unique challenges, the frameworks, processes, and expertise we developed through the ${w.client} engagement — and 500+ other client projects — are directly applicable to other ${w.category.toLowerCase()} brands. We start every engagement with a comprehensive audit and strategy phase to identify the highest-impact opportunities for your specific situation.` },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `@media(min-width:768px){.results-hero-grid{grid-template-columns:repeat(${w.results.length},1fr)}}` }} />
      {/* HERO */}
      <div className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: '80vh', background: '#060e1e', padding: '12rem 4vw 0' }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${w.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, filter: 'grayscale(1)' }} />
        <div className="relative z-10">
          <div className="flex gap-4 items-center flex-wrap" style={{ marginBottom: '2rem' }}>
            <Link href="/work" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}>← All Work</Link>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,.15)', color: 'rgba(255,255,255,.5)', padding: '.35rem .8rem' }}>{w.category}</span>
          </div>
          <h1 className="d-xl" style={{ color: 'var(--white)' }}>{w.client}</h1>
          <p className="d-sm" style={{ color: 'var(--blue)', fontStyle: 'italic', marginTop: '0.5rem' }}>{w.tagline}</p>
        </div>
        <div className="results-hero-grid grid grid-cols-2" style={{ background: 'rgba(255,255,255,.06)', marginTop: '4rem' }}>
          {w.results.map((r, i) => (
            <div key={i} style={{ padding: '2.5rem 2rem', borderRight: i < w.results.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
              <div style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 900, color: 'var(--white)', lineHeight: 1 }}>{r.val}</div>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginTop: '.5rem' }}>{r.key}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="grid gap-8 md:gap-20 items-start grid-cols-1 md:grid-cols-[280px_1fr]" style={{ padding: '5rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div className="sr">
          {[
            { lbl: 'Client', val: w.client },
            { lbl: 'Sector', val: w.category },
            { lbl: 'Services', val: w.services.join(', ') },
          ].map((m) => (
            <div key={m.lbl} style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--warm)', marginBottom: '.3rem' }}>{m.lbl}</div>
              <div style={{ fontSize: '.88rem', fontWeight: 600 }}>{m.val}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="section-label-row sr"><span className="lbl">Overview</span><span className="line" /></div>
          <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '1.5rem' }}>The Brief</h2>
          <p className="t-base sr sr-delay-2" style={{ marginBottom: '1.5rem' }}>{w.description}</p>
          <p className="t-base sr sr-delay-3" style={{ marginBottom: '1.5rem' }}>
            {w.client} operates in the highly competitive {w.category.toLowerCase()} sector, where digital visibility and performance marketing efficiency are critical differentiators. The brand needed a strategic partner who could combine deep industry expertise with data-driven execution to deliver measurable business outcomes — not just marketing metrics.
          </p>
          <p className="t-base sr">
            Futuready Media was engaged to develop and execute a comprehensive digital strategy spanning {w.services.slice(0, 3).join(', ')}, and more. The mandate was clear: drive qualified growth while maintaining cost efficiency and building long-term brand equity in the digital space.
          </p>
        </div>
      </div>

      {/* CHALLENGE */}
      <div className="grid gap-8 md:gap-20 grid-cols-1 md:grid-cols-2" style={{ padding: '4rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">The Challenge</span><span className="line" /></div>
          <h2 className="d-md sr sr-delay-1">What we were<br />up against.</h2>
        </div>
        <div>
          {[
            { num: '01', text: `${w.client}'s existing digital presence lacked strategic coherence. Multiple channels were operating in silos without unified tracking, attribution, or consistent messaging — leading to wasted spend and missed opportunities.` },
            { num: '02', text: `The ${w.category.toLowerCase()} market is intensely competitive, with established players and well-funded challengers all competing for the same audience attention and conversion opportunities.` },
            { num: '03', text: `Previous marketing efforts had generated volume but not quality. The funnel was wide but shallow — high cost per acquisition, low conversion rates, and minimal retention or repeat engagement.` },
            { num: '04', text: `The brand needed to simultaneously build awareness, drive performance, and establish thought leadership — three objectives that often require fundamentally different approaches and budgets.` },
          ].map((c) => (
            <div key={c.num} className="sr" style={{ display: 'grid', gridTemplateColumns: '2rem 1fr', gap: '1rem', padding: '1.2rem 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--blue)', paddingTop: '.2rem' }}>{c.num}</span>
              <span style={{ fontSize: '.88rem', lineHeight: 1.6, color: 'var(--warm)' }}>{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STRATEGY */}
      <div style={{ background: 'var(--ink)', padding: '7rem 4vw' }}>
        <div className="section-label-row sr" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
          <span className="lbl" style={{ color: 'rgba(255,255,255,.3)' }}>Our Approach</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <h2 className="d-md sr sr-delay-1" style={{ color: 'var(--white)', marginBottom: '4rem' }}>How we<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>solved it.</em></h2>
        {[
          { num: '01', title: 'Strategic Audit & Foundation', desc: `We began with a comprehensive audit of ${w.client}'s existing digital presence — analytics setup, conversion tracking, audience targeting, creative performance, and competitive positioning. This baseline informed every strategic decision that followed.` },
          { num: '02', title: 'Integrated Channel Strategy', desc: `Rather than optimising channels in isolation, we designed an integrated strategy spanning ${w.services.join(', ')}. Each channel was assigned specific objectives within the overall funnel — awareness, consideration, conversion, and retention — with budget allocated based on marginal return analysis.` },
          { num: '03', title: 'Creative & Content Development', desc: `We developed a content ecosystem tailored to ${w.client}'s audience at every buying stage. From thought leadership and educational content for top-of-funnel awareness to conversion-optimised landing pages and retargeting creatives — every asset was built for performance.` },
          { num: '04', title: 'Execution & Weekly Optimisation', desc: `Campaigns launched with rigorous weekly optimisation cycles. Every Friday: performance review, budget reallocation, creative rotation, audience refinement, and bid adjustments. Monthly strategic reviews ensured we stayed aligned with business objectives, not just marketing metrics.` },
          { num: '05', title: 'Attribution & Reporting', desc: `We implemented full-funnel attribution tracking connecting marketing spend to actual business outcomes. Monthly reports included channel-level ROAS, cohort analysis, customer acquisition cost trends, and forward-looking projections — giving ${w.client}'s leadership team the clarity to make confident investment decisions.` },
        ].map((s) => (
          <div key={s.num} className="process-step sr">
            <div className="step-num">{s.num}</div>
            <div><div className="step-title">{s.title}</div><div className="step-desc">{s.desc}</div></div>
          </div>
        ))}
      </div>

      {/* RESULTS */}
      <div style={{ padding: '7rem 4vw' }}>
        <div className="section-label-row sr"><span className="lbl">Results</span><span className="line" /></div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '1.5rem' }}>The numbers<br />don&apos;t lie.</h2>
        <p className="t-base sr sr-delay-2" style={{ maxWidth: 600, marginBottom: '3rem' }}>
          The {w.client} engagement delivered measurable, attribution-verified results across every key performance indicator. These numbers reflect actual business impact — not vanity metrics.
        </p>
        <div className="result-grid sr sr-delay-2">
          {w.results.map((r, i) => (
            <div key={i} className="result-cell">
              <div className="result-val">{r.val}</div>
              <div className="result-key">{r.key}</div>
            </div>
          ))}
        </div>

        {/* Testimonial block */}
        <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--ink)', maxWidth: 650 }}>
          <div className="label" style={{ color: 'rgba(255,255,255,.3)', marginBottom: '1rem' }}>Client Feedback</div>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--white)', lineHeight: 1.5, fontStyle: 'italic', marginBottom: '1.2rem' }}>
            &ldquo;Futuready Media didn&apos;t just improve our metrics — they transformed how we think about digital marketing. The strategic clarity and execution discipline they brought to our engagement was exceptional.&rdquo;
          </p>
          <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.4)' }}>Marketing Leadership · {w.client}</div>
        </div>
      </div>

      {/* WHY FUTUREADY */}
      <div style={{ padding: '6rem 4vw', borderTop: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Why Futuready Media</span><span className="line" /></div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '2rem' }}>Why {w.client} chose<br />Futuready Media.</h2>
        <div className="grid gap-8 sr sr-delay-2 grid-cols-1 md:grid-cols-2" style={{ marginTop: '2rem' }}>
          <div>
            <p className="t-base" style={{ marginBottom: '1.5rem' }}>
              With 13+ years of experience and 500+ client engagements, Futuready Media brings deep expertise in {w.category.toLowerCase()} marketing. Our approach is built on three principles: strategy before execution, data over assumptions, and accountability over visibility.
            </p>
            <p className="t-base" style={{ marginBottom: '1.5rem' }}>
              Unlike agencies that optimise for impressions and clicks, we optimise for business outcomes — revenue, qualified leads, customer acquisition cost, and lifetime value. Every campaign, every creative, every budget allocation is tied back to a business KPI.
            </p>
            <p className="t-base">
              Our team of 70+ specialists spans performance marketing, SEO, brand strategy, content, design, web development, and AI — giving clients like {w.client} access to integrated expertise under one roof, with the agility of a focused team.
            </p>
          </div>
          <div>
            <p className="t-base" style={{ marginBottom: '1.5rem' }}>
              For the {w.category.toLowerCase()} sector specifically, we bring proven frameworks for audience segmentation, competitive positioning, and multi-channel attribution that have been refined across hundreds of engagements.
            </p>
            <p className="t-base" style={{ marginBottom: '1.5rem' }}>
              Our 92% client retention rate speaks to the partnerships we build. We don&apos;t just run campaigns — we embed ourselves in our clients&apos; growth trajectory, contributing strategic thinking that goes beyond marketing into business development and product positioning.
            </p>
            <p className="t-base">
              From our offices in Mumbai, Bangalore, and UAE, we serve brands across India and internationally — combining local market understanding with global best practices in digital marketing, technology, and AI-powered growth solutions.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="grid gap-8 md:gap-20 grid-cols-1 md:grid-cols-[1fr_1.5fr]" style={{ padding: '5rem 4vw', borderTop: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">FAQ</span><span className="line" /></div>
          <h2 className="d-sm sr sr-delay-1">Frequently<br />asked.</h2>
        </div>
        <FAQBlock faqs={faqs} />
      </div>

      {/* RELATED WORK */}
      {related.length > 0 && (
        <div style={{ padding: '5rem 4vw', borderTop: '1px solid var(--rule)' }}>
          <div className="section-label-row sr"><span className="lbl">More {w.category} Work</span><span className="line" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]" style={{ marginTop: '2rem' }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/work/${r.slug}`} style={{ display: 'block' }}>
                <div className="work-cell" style={{ height: '280px', position: 'relative', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.client} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.8)' }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem', background: 'linear-gradient(to top, rgba(10,10,10,.8) 0%, transparent 55%)' }}>
                    <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '.3rem' }}>{r.client}</div>
                    <div style={{ fontSize: '.92rem', fontWeight: 700, color: '#fff' }}>{r.tagline}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Your brand<br />could be <em>next.</em></div>
        <div className="sr sr-delay-2"><Link href="/contact" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>Start a Project →</Link></div>
      </div>

      {/* SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${w.client} — ${w.tagline}`,
        description: w.description,
        author: { '@type': 'Organization', name: 'Futuready Media' },
        publisher: { '@type': 'Organization', name: 'Futuready Media', url: 'https://futureadymedia.com' },
        image: w.image,
      })}} />
    </>
  );
}
