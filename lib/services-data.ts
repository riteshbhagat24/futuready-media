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
};

export const servicesSlugs = Object.keys(servicesMap);
