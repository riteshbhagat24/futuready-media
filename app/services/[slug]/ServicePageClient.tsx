'use client';

import Link from 'next/link';
import FAQBlock from '@/components/shared/FAQBlock';
import type { ServiceData } from '@/lib/services-data';

/* ------------------------------------------------------------------ */
/*  Content generation helpers                                        */
/* ------------------------------------------------------------------ */

interface WhyMattersContent {
  heading: string;
  paragraphs: string[];
}

function getWhyMattersContent(slug: string, title: string, titleBlue: string): WhyMattersContent {
  const serviceLabel = `${title} ${titleBlue.replace('.', '')}`.trim();

  const contentMap: Record<string, WhyMattersContent> = {
    'performance-marketing': {
      heading: 'Why Performance Marketing Matters for Your Business',
      paragraphs: [
        'In a landscape where marketing budgets face increasing scrutiny, performance marketing offers something traditional advertising cannot: measurable accountability. Every rupee spent is tracked, attributed, and optimised against tangible business outcomes — leads generated, customers acquired, revenue driven. This accountability transforms marketing from a cost centre into a growth engine with a quantifiable return on investment.',
        'The shift toward performance-driven marketing has accelerated as digital platforms provide unprecedented targeting precision. You can reach decision-makers at specific companies, parents in particular income brackets, or professionals with defined interests — and pay only when they take a meaningful action. This precision eliminates the waste inherent in broad-reach advertising and concentrates your budget on the audiences most likely to convert.',
        'For growing businesses, performance marketing is particularly powerful because it scales predictably. Once you identify a campaign configuration that delivers profitable customer acquisition — the right audience, creative, and offer combination — you can increase budget with confidence that returns will scale proportionally. This predictability allows founders and CMOs to model growth, forecast revenue, and make investment decisions based on data rather than intuition.',
        'However, performance marketing done poorly is just expensive advertising. Without proper attribution modelling, conversion tracking, creative testing frameworks, and unit economics analysis, brands end up optimising for vanity metrics while their actual customer acquisition cost spirals upward. The difference between good and great performance marketing lies in the rigour of the system behind the campaigns.',
      ],
    },
    'seo-aeo-geo': {
      heading: 'Why SEO, AEO, and GEO Matter More Than Ever',
      paragraphs: [
        'Search behaviour is fragmenting across traditional search engines, AI answer engines, and generative platforms. Your customers no longer rely solely on Google — they ask ChatGPT for recommendations, seek answers from Perplexity, and expect instant responses from voice assistants. Brands that optimise only for traditional search are invisible in an growing share of discovery moments.',
        'Organic search remains the single largest source of website traffic for most businesses, delivering visitors with high purchase intent at zero marginal cost per click. Unlike paid advertising, which stops generating traffic the moment you pause spend, SEO compounds over time. A page that ranks well today continues generating qualified traffic for months or years, making organic visibility one of the highest-ROI marketing investments available.',
        'Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) represent the next frontier. As AI platforms become primary research tools for consumers and professionals alike, brands that structure their content to be cited by these systems gain a massive competitive advantage. Early movers in AEO and GEO are establishing brand authority in AI-generated responses that will be increasingly difficult for competitors to displace.',
        'The convergence of SEO, AEO, and GEO demands a unified approach. Content that is technically sound, semantically structured, and genuinely authoritative performs well across all three domains. Brands that treat these as separate silos create redundant work and miss the compounding benefits of a cohesive organic visibility strategy.',
      ],
    },
    'brand-strategy': {
      heading: 'Why Brand Strategy Is the Foundation of Sustainable Growth',
      paragraphs: [
        'Brand strategy is the invisible infrastructure that makes every other marketing investment work harder. When your positioning is clear, messaging is consistent, and identity is distinctive, every campaign, every sales conversation, and every customer interaction reinforces a coherent narrative. Without this foundation, marketing efforts fragment — each channel tells a slightly different story, and the cumulative impact is diluted.',
        'Companies with strong brand strategies command premium pricing because customers perceive differentiated value. Research from McKinsey consistently shows that strong brands grow revenue 2-3 times faster than their category peers and deliver significantly higher shareholder returns. The premium is not about marketing spend — it is about the clarity and consistency of the brand promise.',
        'In crowded markets, brand strategy is what makes the difference between being chosen and being compared. When a prospect evaluates multiple options that appear functionally similar, the brand that has established clearer positioning, stronger trust signals, and more memorable identity wins the decision. Strategy creates that differentiation — design merely expresses it.',
        'For companies preparing for investment, expansion, or acquisition, brand strategy is also a valuation driver. Investors and acquirers pay more for businesses with strong, well-documented brand assets because those assets reduce customer acquisition costs, increase retention, and create defensible market position. A well-executed brand strategy is quite literally an appreciating asset on your balance sheet.',
      ],
    },
    'web-development': {
      heading: 'Why Your Website Is Your Most Important Business Asset',
      paragraphs: [
        'Your website is the only digital asset you fully own and control. Social media profiles exist on rented land — algorithm changes can decimate your reach overnight. But your website is your territory, your brand experience, and your conversion engine. It works for you around the clock, across time zones, and at a scale that no sales team can match.',
        'For B2B companies, 70-80% of the buyer journey happens digitally before a prospect ever contacts sales. Your website is where that research happens. If it fails to communicate your value proposition clearly, answer common questions, and build trust through proof points, you lose deals before your sales team knows the prospect existed.',
        'Website performance directly impacts revenue. Research consistently shows that each additional second of load time reduces conversions by 7-12%. On mobile, where the majority of Indian web traffic originates, performance expectations are even higher. A slow, poorly structured website is not just a bad experience — it is a quantifiable revenue leak.',
        'A strategically built website also reduces operational costs. Self-service features, comprehensive FAQ sections, knowledge bases, and automated workflows handle inquiries that would otherwise require human intervention. The most effective websites are not just marketing assets — they are operational infrastructure that scales your team\'s impact.',
      ],
    },
    'social-media': {
      heading: 'Why Social Media Is Essential for Brand Growth',
      paragraphs: [
        'Social media has evolved from a brand awareness channel into a full-funnel growth engine. Discovery, research, engagement, purchase consideration, and post-purchase advocacy all happen on social platforms. Brands that treat social media as an afterthought or a checkbox activity miss the most dynamic channel available for building relationships with customers at scale.',
        'The average Indian internet user spends over two hours per day on social media platforms. This is not passive browsing — it is active discovery, community participation, and purchase research. Brands that show up consistently with relevant, valuable content become part of their audience\'s daily information diet. Those that do not are forgotten between campaigns.',
        'Social media provides real-time market intelligence that no survey or focus group can match. Comments, shares, saves, and direct messages reveal what your audience cares about, what language resonates, what objections they have, and what your competitors are doing well or poorly. This feedback loop, when systematically captured and analysed, informs product development, messaging, and customer experience improvements.',
        'For B2B companies, LinkedIn alone accounts for 80% of social media-generated B2B leads. For D2C brands, Instagram and Facebook remain the most cost-effective channels for driving product discovery and remarketing. The platform mix varies by industry, but the strategic importance of social media for business growth is universal.',
      ],
    },
    'content-marketing': {
      heading: 'Why Content Marketing Drives Sustainable Business Growth',
      paragraphs: [
        'Content marketing is the only marketing channel that builds an appreciating asset. Every article, guide, video, and case study you publish adds to a library that attracts organic traffic, nurtures prospects, and supports sales conversations indefinitely. Unlike paid advertising, which requires continuous spend to maintain visibility, content marketing compounds — the traffic and leads from a well-optimised piece of content grow over time.',
        'Buyers across both B2B and B2C categories increasingly prefer to educate themselves before engaging with sales teams. Content marketing meets this expectation by providing the information prospects need at each stage of their decision journey. Businesses that publish authoritative, helpful content build trust before the first sales conversation, shortening sales cycles and increasing close rates.',
        'Content also fuels every other marketing channel. SEO requires content to rank. Social media needs content to post. Email marketing needs content to deliver. Paid advertising performs better when it drives to content that educates before it sells. Without a content engine, every other channel operates at a fraction of its potential.',
        'The compounding economics of content marketing become most apparent over time. A B2B company that publishes consistently for twelve months builds an organic traffic asset worth the equivalent of thousands of rupees in monthly paid advertising. After twenty-four months, that asset is worth multiples more — and it continues growing without proportional increases in spend.',
      ],
    },
  };

  const content = contentMap[slug];
  if (content) return content;

  return {
    heading: `Why ${serviceLabel} Matters for Your Business`,
    paragraphs: [
      `${serviceLabel} is not a tactical checkbox — it is a strategic capability that directly impacts revenue, market position, and competitive advantage. Businesses that invest deliberately in ${serviceLabel.toLowerCase()} consistently outperform those that approach it reactively or treat it as a side project.`,
      `The market dynamics driving the importance of ${serviceLabel.toLowerCase()} continue to intensify. Customer expectations are higher, competition is fiercer, and the pace of change is accelerating. Organisations that build strong ${serviceLabel.toLowerCase()} capabilities now are establishing advantages that will compound over the coming years.`,
      `For founders and marketing leaders, the question is not whether to invest in ${serviceLabel.toLowerCase()} — it is how to invest efficiently. The difference between mediocre results and exceptional outcomes often comes down to the quality of strategy, the rigour of execution, and the discipline of measurement. Getting these fundamentals right before scaling spend prevents the common pattern of increasing budgets without improving results.`,
      `At Futuready Media, we have seen first-hand how the right ${serviceLabel.toLowerCase()} strategy transforms business trajectories. Companies that were struggling with stagnant growth or unpredictable pipelines have achieved sustainable, measurable improvement by applying the structured approach we bring to every engagement.`,
    ],
  };
}

interface Differentiator {
  title: string;
  description: string;
}

function getDifferentiators(slug: string): Differentiator[] {
  const diffMap: Record<string, Differentiator[]> = {
    'performance-marketing': [
      { title: 'Unit Economics Focus', description: 'We optimise for customer acquisition cost and lifetime value, not just ROAS. This ensures your campaigns are profitable at the business level, not just the campaign level.' },
      { title: 'Full-Funnel Ownership', description: 'We manage the entire conversion path — from ad creative and landing page to lead nurturing and attribution. No gaps between teams, no misaligned incentives.' },
      { title: 'Weekly Iteration Cycles', description: 'We review, adjust, and optimise campaigns every week. Underperforming creatives are killed, winning audiences are scaled, and budgets are reallocated in real time.' },
      { title: 'Creative Testing at Scale', description: 'We launch 3-5 creative variants per campaign and use performance data to identify winners. No guesswork — every design decision is validated by conversion data.' },
      { title: 'Transparent Attribution', description: 'GA4, platform data, and CRM integration provide a clear view of how every channel contributes to pipeline and revenue. No black boxes, no hidden metrics.' },
      { title: 'Cross-Channel Expertise', description: 'Meta, Google, LinkedIn, YouTube, and programmatic — we manage all major platforms with in-house expertise. Your campaigns benefit from cross-channel insights and unified strategy.' },
    ],
    'seo-aeo-geo': [
      { title: 'Triple-Engine Optimisation', description: 'We optimise for Google, AI answer engines, and generative platforms simultaneously. Most agencies still focus only on traditional search, leaving you invisible on emerging platforms.' },
      { title: 'Technical Excellence', description: 'Our technical SEO audits go deeper than surface-level tools. We analyse crawl efficiency, rendering issues, JavaScript SEO, and Core Web Vitals at the code level.' },
      { title: 'Content-Led Authority', description: 'We build topical authority through strategic content clusters, not keyword stuffing. This approach earns sustainable rankings that survive algorithm updates.' },
      { title: 'Data-Driven Link Building', description: 'Our link-building strategy focuses on high-authority, topically relevant domains. Every link is earned through genuine value — never bought or exchanged.' },
      { title: 'Revenue-Tied Reporting', description: 'Our reports connect ranking improvements to organic traffic growth, lead generation, and revenue impact. Rankings are a means to an end, not the end itself.' },
      { title: 'Future-Proof Approach', description: 'As search evolves toward AI-generated answers and voice-first interfaces, our strategies ensure your brand remains visible wherever customers are looking for solutions.' },
    ],
    'brand-strategy': [
      { title: 'Research-First Methodology', description: 'Every brand strategy engagement starts with deep customer research, competitor analysis, and market assessment. We never design before we understand — strategy precedes every creative decision.' },
      { title: 'Cross-Functional Expertise', description: 'Our team combines strategists, designers, copywriters, and marketing specialists. Brand strategy requires all these perspectives to create something that is both strategically sound and creatively compelling.' },
      { title: 'Measurable Brand Metrics', description: 'We establish baseline brand health metrics and track improvement over time. Share of search, brand awareness, NPS, and pricing power are all measured and reported.' },
      { title: 'Actionable Deliverables', description: 'Our brand strategy documents are operational tools, not coffee-table books. Messaging frameworks, voice guidelines, and visual systems are designed to be used daily by your team.' },
      { title: 'Implementation Support', description: 'Strategy without implementation is a document on a shelf. We support the rollout of brand strategy across all touchpoints — website, social media, sales materials, and internal communications.' },
      { title: 'Long-Term Partnership', description: 'Brands evolve as businesses grow. We design brand systems that are flexible enough to adapt to new markets, products, and audiences without requiring a complete overhaul.' },
    ],
  };

  const diffs = diffMap[slug];
  if (diffs) return diffs;

  const serviceTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  return [
    { title: 'Strategy-Led Execution', description: 'Every engagement begins with a clear strategy tied to your business objectives. We never jump straight to tactics — the plan comes first, and every action serves a defined purpose.' },
    { title: 'Transparent Reporting', description: 'Monthly performance reports connect every activity to business outcomes. No vanity metrics, no hidden data — you see exactly what is working and why.' },
    { title: 'Cross-Disciplinary Team', description: `Our ${serviceTitle.toLowerCase()} team includes strategists, creatives, analysts, and specialists who collaborate to deliver integrated solutions, not siloed outputs.` },
    { title: 'Proven Process', description: 'Our methodology has been refined across 150+ client engagements. It is structured enough to ensure consistency and flexible enough to adapt to your specific context.' },
    { title: 'Revenue-Focused Metrics', description: 'We measure success by business impact — customer acquisition cost, conversion rates, and revenue attributed — not just activity metrics like traffic and impressions.' },
    { title: 'Ongoing Optimisation', description: 'We treat every engagement as a continuous improvement cycle. Weekly reviews, monthly strategy adjustments, and quarterly deep-dives ensure results compound over time.' },
  ];
}

interface Industry {
  name: string;
  description: string;
}

function getIndustries(slug: string): Industry[] {
  return [
    { name: 'D2C & E-Commerce', description: 'Scaling customer acquisition and repeat purchase rates for direct-to-consumer brands across fashion, beauty, wellness, and consumer electronics.' },
    { name: 'B2B & SaaS', description: 'Building demand generation engines, improving lead quality, and shortening sales cycles for technology companies and professional services firms.' },
    { name: 'Real Estate', description: 'Generating qualified enquiries and building developer brand authority through targeted digital campaigns and content strategies.' },
    { name: 'Healthcare & Wellness', description: 'Building trust, driving patient acquisition, and establishing thought leadership while maintaining compliance with healthcare advertising regulations.' },
    { name: 'Education & EdTech', description: 'Increasing enrolments, building institutional brand reputation, and engaging parents and students through multi-channel digital strategies.' },
    { name: 'Finance & Fintech', description: 'Acquiring customers at scale while navigating regulatory requirements and building the trust essential for financial services brands.' },
  ];
}

function getExpandedFaqs(existingFaqs: { q: string; a: string }[], slug: string): { q: string; a: string }[] {
  const additionalFaqMap: Record<string, { q: string; a: string }[]> = {
    'performance-marketing': [
      { q: 'Which platforms do you manage campaigns on?', a: 'We manage campaigns across Meta (Facebook and Instagram), Google (Search, Display, Shopping, YouTube), LinkedIn, and programmatic platforms. The channel mix is determined by your target audience, industry, and business objectives — not by platform preference.' },
      { q: 'How do you handle creative production for ads?', a: 'Our team handles the full creative process — from strategic briefs and copywriting to design production. We produce static, carousel, video, and UGC-style creatives. For large-scale video production, we coordinate with specialist production partners while maintaining creative direction.' },
      { q: 'Can you work alongside our in-house team?', a: 'Absolutely. Many of our clients have in-house marketing teams. We integrate as an extension of your team, handling the performance marketing execution while collaborating on strategy, creative direction, and reporting. We adapt to your communication tools and workflows.' },
      { q: 'What reporting do you provide?', a: 'Monthly performance decks with full-funnel metrics, channel breakdowns, creative performance analysis, cohort data, and forward projections. We also provide a real-time dashboard for day-to-day campaign monitoring and share weekly update summaries.' },
    ],
    'seo-aeo-geo': [
      { q: 'How do you approach local SEO for multi-location businesses?', a: 'We optimise Google Business Profiles, build location-specific landing pages, manage citations across directories, and create localised content strategies. For multi-location businesses, we develop a scalable template system that ensures consistency while allowing local customisation.' },
      { q: 'Do you provide content creation as part of SEO services?', a: 'Yes. Content creation is integral to our SEO methodology. We produce optimised blog posts, pillar pages, FAQ content, and schema-rich pages based on keyword research and content gap analysis. All content is written by human writers with subject matter expertise.' },
      { q: 'What tools do you use for SEO analysis?', a: 'We use a comprehensive toolkit including Ahrefs, SEMrush, Screaming Frog, Google Search Console, GA4, and proprietary analysis scripts. For AEO and GEO monitoring, we use additional tools that track brand mentions and citations across AI platforms.' },
      { q: 'How do you track GEO performance?', a: 'We monitor brand mentions and citations across ChatGPT, Gemini, Perplexity, and other generative platforms using a combination of manual tracking and emerging monitoring tools. Monthly reports include visibility trends across AI platforms alongside traditional search metrics.' },
    ],
    'brand-strategy': [
      { q: 'How long does a brand strategy engagement take?', a: 'A comprehensive brand strategy engagement typically takes 8-12 weeks from research kickoff to final deliverables. This includes discovery and research (2-3 weeks), strategy development (3-4 weeks), visual identity design (2-3 weeks), and guidelines documentation (1-2 weeks).' },
      { q: 'Do you work with startups or only established companies?', a: 'We work with both. Startups benefit from getting brand foundations right from the start, avoiding costly rebrands later. Established companies benefit from strategic repositioning that reflects their current capabilities and ambitions. The engagement scope adapts to your stage and budget.' },
      { q: 'What deliverables are included?', a: 'Typical deliverables include brand positioning statement, messaging architecture, visual identity system (logo, colour palette, typography, imagery guidelines), brand guidelines document, and go-to-market recommendations. The specific deliverables are defined during the scoping process based on your needs.' },
      { q: 'Can you help with implementation after the strategy is complete?', a: 'Yes. Many clients engage us for ongoing implementation support including website design and development, social media template creation, marketing collateral design, and team training. We also offer quarterly brand health reviews to track the impact of the new strategy.' },
    ],
  };

  const additionalFaqs = additionalFaqMap[slug] ?? [
    { q: 'What industries do you work with?', a: 'We work across D2C, B2B SaaS, real estate, healthcare, education, finance, and manufacturing. Our methodology adapts to different industries while maintaining the strategic rigour and measurement discipline that drives results.' },
    { q: 'How do you measure success?', a: 'We establish clear KPIs at the start of every engagement tied to business outcomes — not vanity metrics. Monthly reports connect every activity to measurable impact. We track leading indicators for early course-correction and lagging indicators for strategic validation.' },
    { q: 'Can you integrate with our existing tools and processes?', a: 'Yes. We integrate with your existing CRM, analytics, and project management tools. Our team adapts to your communication workflows and reporting cadence to ensure seamless collaboration.' },
    { q: 'What is the typical engagement duration?', a: 'Most clients start with a 3-month engagement to establish strategy, build systems, and achieve initial results. Ongoing retainers then focus on optimisation and scaling. We also offer project-based engagements for audits, strategy development, and specific campaign launches.' },
  ];

  return [...existingFaqs, ...additionalFaqs];
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function ServicePageClient({ service: s }: { service: ServiceData }) {
  const marqueeDouble = [...s.marqueeItems, ...s.marqueeItems];
  const whyMatters = getWhyMattersContent(s.slug, s.title, s.titleBlue);
  const differentiators = getDifferentiators(s.slug);
  const industries = getIndustries(s.slug);
  const expandedFaqs = getExpandedFaqs(s.faqs, s.slug);

  const serviceLabel = `${s.title} ${s.titleBlue.replace('.', '')}`.trim();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${serviceLabel} Services — Futuready Media`,
    description: s.metaDesc,
    author: {
      '@type': 'Organization',
      name: 'Futuready Media',
      url: 'https://futureadymedia.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Futuready Media',
      logo: { '@type': 'ImageObject', url: 'https://futureadymedia.com/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://futureadymedia.com/services/${s.slug}`,
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceLabel,
    description: s.metaDesc,
    provider: {
      '@type': 'Organization',
      name: 'Futuready Media',
      url: 'https://futureadymedia.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
    },
    areaServed: { '@type': 'Country', name: 'India' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: expandedFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
        <div className="grid gap-8 md:gap-16 items-end grid-cols-1 md:grid-cols-2" style={{ marginTop: '2.5rem' }}>
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

      {/* INTRO / THE APPROACH */}
      <div className="grid gap-8 md:gap-20 items-start grid-cols-1 md:grid-cols-[1fr_1.6fr]" style={{ padding: '4rem 4vw', borderBottom: '1px solid var(--rule)' }}>
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

      {/* WHY THIS MATTERS */}
      <div style={{ padding: '7rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">Why It Matters</span><span className="line" /></div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '3rem', maxWidth: 700 }}>
          {whyMatters.heading.split(' ').slice(0, 3).join(' ')}<br />
          <em className="c-blue" style={{ fontStyle: 'italic' }}>{whyMatters.heading.split(' ').slice(3).join(' ')}</em>
        </h2>
        <div style={{ maxWidth: 780 }}>
          {whyMatters.paragraphs.map((p, i) => (
            <p key={i} className={`t-base sr sr-delay-${Math.min(i + 1, 4)}`} style={{ marginBottom: '2rem' }}>{p}</p>
          ))}
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

      {/* WHAT SETS US APART */}
      <div style={{ padding: '7rem 4vw', borderBottom: '1px solid var(--rule)' }}>
        <div className="section-label-row sr"><span className="lbl">The Difference</span><span className="line" /></div>
        <h2 className="d-md sr sr-delay-1" style={{ marginBottom: '3.5rem' }}>
          What sets<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>us apart.</em>
        </h2>
        <div className="grid gap-10 sr sr-delay-2 grid-cols-1 md:grid-cols-2">
          {differentiators.map((diff, i) => (
            <div key={i} style={{ padding: '2rem 0', borderTop: '1px solid var(--rule)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '.8rem', marginBottom: '.8rem' }}>
                <span style={{ fontSize: '.7rem', fontWeight: 800, color: 'var(--blue)', letterSpacing: '.05em' }}>0{i + 1}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>{diff.title}</h3>
              </div>
              <p style={{ fontSize: '.88rem', color: 'var(--warm)', lineHeight: 1.65 }}>{diff.description}</p>
            </div>
          ))}
        </div>
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

      {/* INDUSTRIES WE SERVE */}
      <div style={{ background: 'var(--ink)', padding: '7rem 4vw' }}>
        <div className="section-label-row sr" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
          <span className="lbl" style={{ color: 'rgba(255,255,255,.3)' }}>Industries</span>
          <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
        </div>
        <h2 className="d-md sr sr-delay-1" style={{ color: 'var(--white)', marginBottom: '3.5rem' }}>
          Industries<br /><em className="c-blue" style={{ fontStyle: 'italic' }}>we serve.</em>
        </h2>
        <div className="grid gap-8 sr sr-delay-2 grid-cols-1 md:grid-cols-3">
          {industries.map((ind, i) => (
            <div key={i} style={{ padding: '2rem', border: '1px solid rgba(255,255,255,.08)' }}>
              <h3 style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '.6rem' }}>{ind.name}</h3>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.6 }}>{ind.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="grid gap-8 md:gap-20 grid-cols-1 md:grid-cols-[1fr_1.5fr]" style={{ padding: '5rem 4vw', borderTop: '1px solid var(--rule)' }}>
        <div>
          <div className="section-label-row sr"><span className="lbl">FAQ</span><span className="line" /></div>
          <h2 className="d-sm sr sr-delay-1">Common<br />questions.</h2>
          <p className="t-base sr sr-delay-2" style={{ marginTop: '1.5rem', maxWidth: 300, fontSize: '.88rem', color: 'var(--warm)' }}>
            Have a question that is not answered here? <Link href="/contact" style={{ color: 'var(--blue)', fontWeight: 600 }}>Get in touch</Link> and we will respond within 24 hours.
          </p>
        </div>
        <FAQBlock faqs={expandedFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
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
