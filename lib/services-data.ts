export interface ServiceData {
  slug: string;
  title: string;
  titleBlue: string;
  metaTitle: string;
  metaDesc: string;
  heroDesc: string;
  stats: { val: string; key: string }[];
  badges: string[];
  marqueeItems: string[];
  approachTitle: string;
  approachDesc: string[];
  industries: string;
  engagement: string;
  steps: { num: string; title: string; desc: string }[];
  caseStudy: { title: string; results: { val: string; unit: string; key: string }[] };
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  ctaEm: string;
}

export const servicesMap: Record<string, ServiceData> = {
  'performance-marketing': {
    slug: 'performance-marketing',
    title: 'Performance',
    titleBlue: 'Marketing.',
    metaTitle: 'Performance Marketing — Futuready Media',
    metaDesc: "Futuready Media's performance marketing service: Meta Ads, Google Ads, programmatic, attribution, and conversion rate optimisation for ambitious brands.",
    heroDesc: 'Every rupee must earn its place. We build performance marketing systems that drive qualified demand — not just impressions — across Meta, Google, and programmatic channels.',
    stats: [
      { val: '4.2×', key: 'Average ROAS' },
      { val: '−38%', key: 'Avg. Cost-Per-Lead' },
      { val: '150+', key: 'Campaigns Managed' },
    ],
    badges: ['Meta Ads', 'Google Ads', 'Programmatic', 'YouTube', 'LinkedIn Ads', 'CRO', 'Attribution', 'GA4'],
    marqueeItems: ['Meta Ads', 'Google Ads', 'Conversion Tracking', 'Creative Testing', 'Attribution Modelling', 'Landing Page CRO', 'Remarketing', 'Audience Research', 'Budget Allocation', 'YouTube Ads', 'LinkedIn Ads', 'Programmatic'],
    approachTitle: 'Built to perform.',
    approachDesc: [
      "Most agencies focus on ad spend. We focus on unit economics. Our performance marketing engagements are built around a single question: what does it cost to acquire a customer, and how do we make that number go down?",
      "From funnel design to creative iteration to attribution modelling — we own the full loop. Not just the ad account.",
    ],
    industries: 'D2C · B2B SaaS · Real Estate · Health · Education · Finance',
    engagement: 'Monthly retainer · Project-based',
    steps: [
      { num: '01', title: 'Audit & Baseline', desc: 'We start with a full account audit — pixel setup, conversion tracking, audience structure, creative fatigue, and ROAS by segment. No assumptions, only data.' },
      { num: '02', title: 'Funnel Architecture', desc: 'Map the customer journey from awareness to conversion. Design top-of-funnel, MOF, and BOF strategies for each channel — with budget allocation tied to revenue targets.' },
      { num: '03', title: 'Creative & Copy Sprint', desc: 'Brief, produce, and launch 3–5 creative variants per campaign. UGC, static, carousel, video — optimised for each placement and audience stage.' },
      { num: '04', title: 'Launch & Weekly Iteration', desc: "Campaigns go live. Every week: performance review, budget shift, creative rotation, bid adjustments. We move fast and kill what isn't working." },
      { num: '05', title: 'Attribution & Reporting', desc: 'GA4 + platform data + CRM integration. Monthly performance deck with full-funnel attribution, cohort analysis, and forward projections.' },
    ],
    caseStudy: {
      title: 'Enterprise demand generation at scale.',
      results: [
        { val: '45', unit: '%', key: 'Increase in qualified leads' },
        { val: '4', unit: '.2×', key: 'ROAS across Google + LinkedIn' },
        { val: '38', unit: '%', key: 'Reduction in cost per MQL' },
        { val: '12', unit: '', key: 'Global markets covered' },
      ],
    },
    faqs: [
      { q: 'What is the minimum budget you work with?', a: "We work with clients from ₹1L/month ad spend upward. The engagement model adapts — smaller budgets get a tighter, more focused funnel strategy; larger budgets unlock multi-channel architecture and more creative testing." },
      { q: 'Do you provide creative for ads?', a: 'Yes. We handle briefs, copywriting, and production coordination. For video-heavy campaigns, we partner with specialist production teams. Creative testing is built into every engagement.' },
      { q: 'How soon can we expect results?', a: 'Initial optimisation takes 2–4 weeks as we establish baseline performance. Meaningful ROAS improvements typically show within 6–8 weeks. Full funnel maturity is a 90-day horizon.' },
      { q: 'Do you work on a retainer or project basis?', a: 'Both. Most performance clients are on monthly retainers (ad management + reporting). We also run one-time audits and campaign buildouts for teams with in-house execution capability.' },
    ],
    ctaHeadline: 'Ready to fix your',
    ctaEm: 'ROAS?',
  },
  'seo-aeo-geo': {
    slug: 'seo-aeo-geo',
    title: 'SEO, AEO',
    titleBlue: '& GEO.',
    metaTitle: 'SEO, AEO & GEO — Futuready Media',
    metaDesc: 'Futuready Media delivers SEO, Answer Engine Optimisation (AEO), and Generative Engine Optimisation (GEO) to ensure your brand ranks on Google, ChatGPT, Gemini, and Perplexity.',
    heroDesc: 'Search has evolved beyond Google. We optimise your brand for traditional search engines, AI answer engines, and generative platforms — so you show up wherever your customers are looking.',
    stats: [
      { val: '180%', key: 'Avg. Organic Growth' },
      { val: 'Page 1', key: 'Ranking Target' },
      { val: '50+', key: 'SEO Campaigns' },
    ],
    badges: ['Technical SEO', 'On-Page SEO', 'Link Building', 'Local SEO', 'AEO', 'GEO', 'Content Strategy', 'GA4'],
    marqueeItems: ['Technical SEO', 'Keyword Research', 'On-Page Optimisation', 'Link Building', 'Local SEO', 'AEO', 'GEO', 'Schema Markup', 'Core Web Vitals', 'Content Strategy'],
    approachTitle: 'Beyond rankings.',
    approachDesc: [
      "SEO isn't about gaming algorithms. It's about building a content and technical foundation that earns visibility — on Google, on AI answer engines, and on generative platforms like ChatGPT and Perplexity.",
      "We combine technical excellence with strategic content to build sustainable organic growth that compounds over time.",
    ],
    industries: 'B2B SaaS · Finance · Healthcare · Real Estate · D2C · Education',
    engagement: 'Monthly retainer · SEO audit',
    steps: [
      { num: '01', title: 'Technical Audit & Baseline', desc: 'Full crawl analysis, Core Web Vitals, indexation issues, schema markup, and site architecture review. We find what\'s broken before we build.' },
      { num: '02', title: 'Keyword & Intent Mapping', desc: 'Research target keywords, map search intent, identify content gaps, and build a prioritised keyword strategy tied to revenue potential.' },
      { num: '03', title: 'On-Page & Content Optimisation', desc: 'Optimise existing pages, create new content assets, implement schema markup, and build topic clusters that establish authority.' },
      { num: '04', title: 'Off-Page & Authority Building', desc: 'Strategic link building, digital PR, and brand mentions that build domain authority and referral traffic.' },
      { num: '05', title: 'AEO & GEO Optimisation', desc: 'Structure content for AI answer engines and generative platforms. Ensure your brand is cited by ChatGPT, Gemini, and Perplexity.' },
    ],
    caseStudy: { title: 'Enterprise demand generation at scale.', results: [
      { val: '180', unit: '%', key: 'Organic traffic growth' },
      { val: '45', unit: '%', key: 'Increase in qualified leads' },
      { val: '12', unit: '', key: 'Global markets covered' },
      { val: '38', unit: '%', key: 'Reduction in cost per MQL' },
    ]},
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Initial improvements appear within 4-8 weeks. Significant ranking gains typically take 3-6 months. SEO is a compounding investment — results accelerate over time.' },
      { q: 'What is AEO (Answer Engine Optimisation)?', a: 'AEO optimises your content to appear as direct answers in Google featured snippets, voice search results, and AI-powered answer boxes. It focuses on structured Q&A content and schema markup.' },
      { q: 'What is GEO (Generative Engine Optimisation)?', a: 'GEO ensures your brand appears in AI-generated responses from ChatGPT, Gemini, Perplexity, and similar platforms. As more users search via AI, GEO is becoming essential.' },
      { q: 'Do you guarantee rankings?', a: 'No ethical SEO agency guarantees specific rankings. We guarantee rigorous process, transparent reporting, and a track record of 180%+ average organic growth across our client base.' },
    ],
    ctaHeadline: 'Ready to own',
    ctaEm: 'search?',
  },
  'brand-strategy': {
    slug: 'brand-strategy',
    title: 'Brand',
    titleBlue: 'Strategy.',
    metaTitle: 'Brand Strategy — Futuready Media',
    metaDesc: 'Futuready Media builds brand strategies that differentiate. Positioning, identity, messaging, and go-to-market frameworks for ambitious brands.',
    heroDesc: 'A brand without strategy is just a logo. We build strategic brand foundations — positioning, identity, messaging, and go-to-market frameworks — that differentiate you in crowded markets.',
    stats: [
      { val: '100+', key: 'Brands Positioned' },
      { val: '92%', key: 'Client Retention' },
      { val: '12', key: 'Years Experience' },
    ],
    badges: ['Brand Positioning', 'Identity Design', 'Messaging', 'Go-to-Market', 'Brand Audit', 'Competitor Analysis', 'Brand Guidelines'],
    marqueeItems: ['Brand Positioning', 'Identity Design', 'Messaging Framework', 'Go-to-Market', 'Brand Audit', 'Competitor Analysis', 'Visual Identity', 'Tone of Voice'],
    approachTitle: 'Strategy first.',
    approachDesc: [
      "Most agencies start with design. We start with strategy. What makes you different? Who are you for? Why should anyone care? These questions get answered before a single pixel is designed.",
      "The result is a brand that doesn't just look good — it performs, differentiates, and compounds in value over time.",
    ],
    industries: 'D2C · B2B SaaS · Real Estate · Finance · Healthcare · Luxury',
    engagement: 'Project-based · Retainer',
    steps: [
      { num: '01', title: 'Discovery & Audit', desc: 'Deep dive into your business, market, competitors, and audience. We identify what\'s working, what\'s not, and where the opportunity is.' },
      { num: '02', title: 'Positioning & Messaging', desc: 'Define your unique value proposition, brand positioning, and messaging hierarchy. The strategic foundation everything else builds on.' },
      { num: '03', title: 'Visual Identity', desc: 'Logo, typography, colour system, and design language that expresses your positioning visually. Every element has a strategic reason.' },
      { num: '04', title: 'Brand Guidelines', desc: 'Comprehensive documentation ensuring consistency across every touchpoint — digital, print, internal, and external.' },
    ],
    caseStudy: { title: 'Enterprise demand generation at scale.', results: [
      { val: '100', unit: '+', key: 'Brands positioned' },
      { val: '92', unit: '%', key: 'Client retention YoY' },
      { val: '12', unit: '', key: 'Years of brand strategy' },
      { val: '4', unit: '.2×', key: 'Average ROAS' },
    ]},
    faqs: [
      { q: 'What\'s included in a brand strategy engagement?', a: 'Discovery workshops, competitive analysis, audience research, positioning framework, messaging hierarchy, visual identity system, and brand guidelines document.' },
      { q: 'How long does a brand strategy project take?', a: 'Typically 6-10 weeks from discovery to final delivery. Complex multi-brand architectures may take longer.' },
      { q: 'Do you handle implementation after strategy?', a: 'Yes. We can execute across website design, marketing collateral, social media, and campaign creative — ensuring the strategy is consistently applied.' },
      { q: 'Is brand strategy relevant for B2B companies?', a: 'Absolutely. B2B buying decisions are increasingly influenced by brand perception. A strong brand strategy shortens sales cycles and commands premium pricing.' },
    ],
    ctaHeadline: 'Ready to build a brand that',
    ctaEm: 'matters?',
  },
  'web-development': {
    slug: 'web-development',
    title: 'Web Design &',
    titleBlue: 'Development.',
    metaTitle: 'Web Design & Development — Futuready Media',
    metaDesc: 'Futuready Media builds fast, conversion-focused websites and web applications. Next.js, React, WordPress, Shopify — designed to perform.',
    heroDesc: 'Your website is your hardest-working salesperson. We design and build fast, conversion-focused websites that look exceptional, load instantly, and turn visitors into customers.',
    stats: [
      { val: '<2s', key: 'Load Time Target' },
      { val: '60+', key: 'Sites Launched' },
      { val: '3×', key: 'Avg. Conversion Lift' },
    ],
    badges: ['Next.js', 'React', 'WordPress', 'Shopify', 'UI/UX', 'CRO', 'Responsive', 'Core Web Vitals'],
    marqueeItems: ['Next.js', 'React', 'WordPress', 'Shopify', 'UI/UX Design', 'Responsive Design', 'CRO', 'Core Web Vitals', 'E-Commerce', 'CMS'],
    approachTitle: 'Built to convert.',
    approachDesc: [
      "A beautiful website that doesn't convert is a brochure. A fast website with no design is forgettable. We build sites that are both — beautiful and brutally effective.",
      "Every design decision is backed by data. Every line of code is optimised for performance. The result: sites that rank, convert, and scale.",
    ],
    industries: 'D2C · B2B SaaS · Real Estate · Healthcare · Education · Finance',
    engagement: 'Project-based · Maintenance retainer',
    steps: [
      { num: '01', title: 'Discovery & Wireframing', desc: 'Understand your goals, map user journeys, and create wireframes that prioritise conversion paths and information architecture.' },
      { num: '02', title: 'UI Design', desc: 'High-fidelity designs in Figma — responsive, accessible, and aligned with your brand identity. Every screen, every state, every breakpoint.' },
      { num: '03', title: 'Development & CMS', desc: 'Clean, performant code built on the right stack for your needs. CMS integration for easy content management. Core Web Vitals optimised.' },
      { num: '04', title: 'QA, Launch & Support', desc: 'Rigorous cross-browser testing, performance auditing, and launch. Ongoing support and iteration based on real user data.' },
    ],
    caseStudy: { title: 'Enterprise demand generation at scale.', results: [
      { val: '60', unit: '+', key: 'Websites launched' },
      { val: '3', unit: '×', key: 'Average conversion lift' },
      { val: '95', unit: '+', key: 'Lighthouse performance score' },
      { val: '2', unit: 's', key: 'Average load time' },
    ]},
    faqs: [
      { q: 'What platforms do you build on?', a: 'Next.js and React for custom builds, WordPress for content-heavy sites, and Shopify for e-commerce. We recommend based on your specific needs.' },
      { q: 'How long does a website project take?', a: '6-10 weeks for a standard site. Complex web applications or e-commerce builds may take 12-16 weeks.' },
      { q: 'Do you provide hosting and maintenance?', a: 'Yes. We offer managed hosting, security updates, performance monitoring, and content support on monthly retainer plans.' },
      { q: 'Will the site be SEO-friendly?', a: 'Every site we build is SEO-optimised from the ground up — clean code, semantic HTML, schema markup, Core Web Vitals, and crawlable architecture.' },
    ],
    ctaHeadline: 'Ready to build a site that',
    ctaEm: 'converts?',
  },
  'ai-integration': {
    slug: 'ai-integration',
    title: 'AI Integration &',
    titleBlue: 'Automation.',
    metaTitle: 'AI Integration & Automation — Futuready Media',
    metaDesc: 'Futuready Media integrates AI into your marketing and operations. Chatbots, workflow automation, AI content generation, and predictive analytics.',
    heroDesc: 'AI isn\'t a buzzword — it\'s a lever. We integrate AI into your marketing, sales, and operations to automate the repetitive, amplify the creative, and predict what\'s next.',
    stats: [
      { val: '40%', key: 'Avg. Cost Reduction' },
      { val: '24/7', key: 'AI Support' },
      { val: '30+', key: 'AI Deployments' },
    ],
    badges: ['AI Chatbots', 'Workflow Automation', 'AI Content', 'Predictive Analytics', 'CRM Integration', 'WhatsApp Bots', 'Voice Bots'],
    marqueeItems: ['AI Chatbots', 'Workflow Automation', 'Content Generation', 'Predictive Analytics', 'CRM Integration', 'WhatsApp Bots', 'Voice AI', 'Lead Scoring'],
    approachTitle: 'AI that works.',
    approachDesc: [
      "Most AI implementations fail because they solve for technology, not for business outcomes. We start with the problem — what's costing you time, money, or missed opportunities — and build AI solutions backwards from there.",
      "The result: AI that actually gets adopted, delivers ROI, and scales with your business.",
    ],
    industries: 'D2C · B2B SaaS · Healthcare · Finance · Real Estate · Education',
    engagement: 'Project-based · Monthly retainer',
    steps: [
      { num: '01', title: 'Opportunity Audit', desc: 'Identify the highest-impact AI opportunities in your marketing, sales, and operations. Not everything needs AI — we find where it actually matters.' },
      { num: '02', title: 'Solution Design', desc: 'Design the AI solution architecture — integrations, data flows, user experience, and success metrics. Clear scope, clear outcomes.' },
      { num: '03', title: 'Build & Train', desc: 'Build, train, and test the AI solution. Chatbots learn your brand voice. Automation workflows are stress-tested. Content models are fine-tuned.' },
      { num: '04', title: 'Deploy & Optimise', desc: 'Go live with monitoring. Continuous optimisation based on real usage data. Monthly performance reviews and iteration.' },
    ],
    caseStudy: { title: 'Enterprise demand generation at scale.', results: [
      { val: '40', unit: '%', key: 'Average cost reduction' },
      { val: '24', unit: '/7', key: 'AI-powered support' },
      { val: '30', unit: '+', key: 'AI deployments' },
      { val: '3', unit: '×', key: 'Lead qualification speed' },
    ]},
    faqs: [
      { q: 'What kind of AI chatbots do you build?', a: 'Customer support bots, lead qualification bots, appointment booking bots, and FAQ bots — deployed on web, WhatsApp, and voice channels. All trained on your specific business context.' },
      { q: 'Can AI really replace manual marketing tasks?', a: 'Not replace — augment. AI handles the repetitive (data entry, report generation, initial responses) so your team focuses on strategy and creative. Typical time savings: 40-60%.' },
      { q: 'How do you ensure AI outputs maintain brand voice?', a: 'We fine-tune AI models on your existing content, brand guidelines, and tone of voice. Every deployment includes human review workflows until quality thresholds are consistently met.' },
      { q: 'What\'s the ROI timeline for AI integration?', a: 'Most AI solutions show positive ROI within 2-3 months. Chatbots see impact within weeks. Workflow automation pays back within the first month of operation.' },
    ],
    ctaHeadline: 'Ready to put AI',
    ctaEm: 'to work?',
  },
  'social-media': {
    slug: 'social-media',
    title: 'Social Media',
    titleBlue: 'Management.',
    metaTitle: 'Social Media Management — Futuready Media',
    metaDesc: 'Futuready Media manages social media for ambitious brands. Strategy, content creation, community management, and paid social across Instagram, LinkedIn, Facebook, and YouTube.',
    heroDesc: 'Social media isn\'t about posting — it\'s about building an audience that buys. We manage end-to-end social presence with strategy, content, community management, and paid amplification.',
    stats: [
      { val: '300%', key: 'Avg. Engagement Growth' },
      { val: '50+', key: 'Brands Managed' },
      { val: '10M+', key: 'Monthly Reach' },
    ],
    badges: ['Instagram', 'LinkedIn', 'Facebook', 'YouTube', 'Twitter/X', 'Content Creation', 'Community Management', 'Paid Social'],
    marqueeItems: ['Instagram', 'LinkedIn', 'Facebook', 'YouTube', 'Twitter/X', 'Reels', 'Carousels', 'Stories', 'Community Management', 'Influencer Marketing'],
    approachTitle: 'Built to engage.',
    approachDesc: [
      "Vanity metrics are easy. Revenue from social is hard. We build social media strategies that go beyond likes and followers — driving real business outcomes through audience building, content that converts, and paid amplification.",
      "Every post, every campaign, every interaction is tied back to your business goals.",
    ],
    industries: 'D2C · Lifestyle · Real Estate · Finance · Healthcare · B2B',
    engagement: 'Monthly retainer',
    steps: [
      { num: '01', title: 'Audit & Strategy', desc: 'Audit your current social presence, competitors, and audience. Build a channel strategy with content pillars, posting cadence, and KPIs.' },
      { num: '02', title: 'Content Production', desc: 'Create platform-native content — reels, carousels, stories, videos, and copy. Monthly content calendars with approval workflows.' },
      { num: '03', title: 'Community & Engagement', desc: 'Active community management, comment responses, DM handling, and audience engagement. We build relationships, not just reach.' },
      { num: '04', title: 'Paid Social & Reporting', desc: 'Amplify top-performing content with targeted paid campaigns. Monthly performance reports with insights and optimisations.' },
    ],
    caseStudy: { title: 'Enterprise demand generation at scale.', results: [
      { val: '300', unit: '%', key: 'Average engagement growth' },
      { val: '10', unit: 'M+', key: 'Monthly reach' },
      { val: '50', unit: '+', key: 'Brands managed' },
      { val: '4', unit: '×', key: 'Follower growth rate' },
    ]},
    faqs: [
      { q: 'Which platforms do you manage?', a: 'Instagram, LinkedIn, Facebook, YouTube, and Twitter/X. We recommend platforms based on where your audience actually is — not every brand needs every platform.' },
      { q: 'Do you create all the content?', a: 'Yes. Our in-house team handles strategy, copywriting, graphic design, video editing, and photography coordination. You approve — we execute.' },
      { q: 'How do you measure social media ROI?', a: 'We track engagement, reach, follower growth, website traffic from social, lead generation, and revenue attribution. Monthly reports tie social performance to business outcomes.' },
      { q: 'What\'s the minimum engagement period?', a: 'We recommend a 3-month minimum to establish baseline, test content strategies, and build momentum. Most clients stay 12+ months as results compound.' },
    ],
    ctaHeadline: 'Ready to build an audience that',
    ctaEm: 'buys?',
  },
  'content-marketing': {
    slug: 'content-marketing',
    title: 'Content',
    titleBlue: 'Marketing.',
    metaTitle: 'Content Marketing — Futuready Media',
    metaDesc: 'Futuready Media creates content strategies and assets that drive organic growth. Blog content, video, email, and thought leadership for ambitious brands.',
    heroDesc: 'Content is the engine of organic growth. We build content strategies and produce assets — blogs, video, email, thought leadership — that attract, educate, and convert your ideal customers.',
    stats: [
      { val: '180%', key: 'Avg. Traffic Growth' },
      { val: '500+', key: 'Content Assets/Year' },
      { val: '60%', key: 'Lead Quality Improvement' },
    ],
    badges: ['Blog Content', 'Video Production', 'Email Marketing', 'Thought Leadership', 'Whitepapers', 'Case Studies', 'Newsletters', 'SEO Content'],
    marqueeItems: ['Blog Content', 'Video Production', 'Email Marketing', 'Thought Leadership', 'Case Studies', 'Whitepapers', 'Newsletters', 'Infographics', 'Podcasts'],
    approachTitle: 'Content that compounds.',
    approachDesc: [
      "Most content is noise. Ours is signal. Every piece we create is built on keyword research, audience intent data, and a clear conversion goal. No filler, no vanity content.",
      "The result: a content library that drives organic traffic, builds authority, and generates leads — month after month, compounding over time.",
    ],
    industries: 'B2B SaaS · Healthcare · Finance · D2C · Education · Technology',
    engagement: 'Monthly retainer · Project-based',
    steps: [
      { num: '01', title: 'Content Audit & Strategy', desc: 'Audit existing content performance. Build a strategy with content pillars, topic clusters, editorial calendar, and distribution plan.' },
      { num: '02', title: 'Content Production', desc: 'Write, design, film, and produce content assets — blog posts, videos, emails, case studies, whitepapers. All SEO-optimised and brand-aligned.' },
      { num: '03', title: 'Distribution & Amplification', desc: 'Publish across owned channels, distribute via email and social, and amplify top performers with paid promotion.' },
      { num: '04', title: 'Measurement & Iteration', desc: 'Track performance by asset, channel, and conversion stage. Double down on what works, retire what doesn\'t.' },
    ],
    caseStudy: { title: 'Enterprise demand generation at scale.', results: [
      { val: '180', unit: '%', key: 'Average traffic growth' },
      { val: '500', unit: '+', key: 'Content assets per year' },
      { val: '60', unit: '%', key: 'Lead quality improvement' },
      { val: '45', unit: '%', key: 'Increase in qualified leads' },
    ]},
    faqs: [
      { q: 'What types of content do you produce?', a: 'Blog articles, video scripts and production, email sequences, case studies, whitepapers, newsletters, social content, infographics, and thought leadership pieces.' },
      { q: 'How do you ensure content ranks on Google?', a: 'Every piece is built on keyword research, optimised for search intent, structured with proper headings and schema, and integrated into topic clusters that build topical authority.' },
      { q: 'Do you handle content distribution?', a: 'Yes. We publish, distribute via email and social channels, and amplify top performers with paid promotion. Content without distribution is a waste.' },
      { q: 'How do you measure content ROI?', a: 'We track organic traffic, keyword rankings, engagement, lead generation, pipeline contribution, and revenue attribution. Monthly reports tie every content piece to business outcomes.' },
    ],
    ctaHeadline: 'Ready to build a content engine that',
    ctaEm: 'compounds?',
  },
  'demand-generation': {
    slug: 'demand-generation',
    title: 'Enterprise Demand',
    titleBlue: 'Generation.',
    metaTitle: 'Enterprise Demand Generation — Futuready Media',
    metaDesc: 'Futuready Media builds enterprise demand generation systems. ABM, LinkedIn Ads, multi-channel attribution, and full-funnel B2B marketing for global brands.',
    heroDesc: 'Enterprise sales cycles are long, complex, and multi-stakeholder. We build demand generation systems that fill your pipeline with qualified opportunities — across markets, channels, and buying stages.',
    stats: [
      { val: '45%', key: 'Avg. MQL Growth' },
      { val: '12', key: 'Global Markets' },
      { val: '4.2×', key: 'ROAS' },
    ],
    badges: ['ABM', 'LinkedIn Ads', 'Google Ads', 'Programmatic', 'CRM Integration', 'Lead Scoring', 'Attribution', 'Multi-Market'],
    marqueeItems: ['ABM', 'LinkedIn Ads', 'Demand Gen', 'Lead Scoring', 'CRM Integration', 'Attribution', 'Programmatic', 'Multi-Market', 'Content Syndication'],
    approachTitle: 'Pipeline, not impressions.',
    approachDesc: [
      "Enterprise marketing isn't about reach — it's about reaching the right 500 people with the right message at the right buying stage. We build demand generation systems engineered for pipeline, not vanity metrics.",
      "From ABM strategy to multi-channel execution to CRM attribution — we own the full funnel.",
    ],
    industries: 'B2B Technology · IT Services · SaaS · Manufacturing · Professional Services',
    engagement: 'Monthly retainer · Quarterly engagement',
    steps: [
      { num: '01', title: 'ICP & Market Segmentation', desc: 'Define ideal customer profiles, segment target markets, and build account lists. Every campaign starts with the right audience.' },
      { num: '02', title: 'Funnel & Attribution Design', desc: 'Design the full-funnel architecture — from awareness to MQL to SQL to closed-won. Build attribution models that show true contribution.' },
      { num: '03', title: 'Multi-Channel Execution', desc: 'Launch campaigns across LinkedIn, Google, programmatic, content syndication, and email. Coordinated messaging across every touchpoint.' },
      { num: '04', title: 'CRM Integration & Optimisation', desc: 'Integrate campaign data with CRM. Build lead scoring models. Optimise weekly based on pipeline data, not just marketing metrics.' },
    ],
    caseStudy: { title: 'Enterprise demand generation at scale.', results: [
      { val: '45', unit: '%', key: 'Qualified lead growth' },
      { val: '4', unit: '.2×', key: 'ROAS across channels' },
      { val: '12', unit: '', key: 'Global markets covered' },
      { val: '38', unit: '%', key: 'Cost per MQL reduction' },
    ]},
    faqs: [
      { q: 'What makes enterprise demand gen different from performance marketing?', a: 'Enterprise deals involve longer sales cycles, multiple stakeholders, and higher ACVs. Demand gen focuses on pipeline quality over lead volume — it\'s about generating qualified opportunities, not just form fills.' },
      { q: 'Do you work with our CRM?', a: 'Yes. We integrate with Salesforce, HubSpot, and other enterprise CRMs. Attribution, lead scoring, and pipeline reporting are built directly into your existing systems.' },
      { q: 'Can you run campaigns across multiple geographies?', a: 'Yes. We\'ve managed campaigns across 12+ global markets with localised messaging, market-specific funnel strategies, and unified attribution.' },
      { q: 'What\'s the typical engagement length?', a: 'Enterprise demand gen is a 6-12 month commitment minimum. Building pipeline takes time — quick wins come from optimisation, but real compounding takes quarters.' },
    ],
    ctaHeadline: 'Ready to build a pipeline that',
    ctaEm: 'compounds?',
  },
};

export const servicesSlugs = Object.keys(servicesMap);
