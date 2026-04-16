export interface CaseStudy {
  slug: string;
  client: string;
  tagline: string;
  sector: string;
  scope: string;
  overview: string;
  overviewExtra: string;
  metrics: { val: string; unit: string; key: string }[];
  steps: { num: string; title: string; desc: string }[];
  results: { val: string; unit: string; key: string; prefix?: string }[];
  ctaHeadline: string;
  ctaEm: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sapana-carpet-mats',
    client: 'Sapana Carpet-Mats',
    tagline: 'Shopify Migration from Magento',
    sector: 'Home Furnishing · E-Commerce',
    scope: 'Shopify Migration, Data Architecture, Shipping Integration',
    overview: 'Sapana Carpet-Mats was running on an ageing Magento setup that slowed down operations, hampered product management, and frustrated customers with slow load times.',
    overviewExtra: 'Futuready Media migrated their entire catalogue to Shopify, rebuilt their product data architecture for speed, and integrated logistics partners — delivering a modern storefront that performs.',
    metrics: [
      { val: '75', unit: '%', key: 'Faster Data Sync' },
      { val: '40', unit: '%', key: 'Efficient Management' },
      { val: '25', unit: '%', key: 'Faster Shipping' },
      { val: '3', unit: '×', key: 'Page Speed Improvement' },
    ],
    steps: [
      { num: '01', title: 'Magento Audit & Data Mapping', desc: 'Full catalogue and order history audit. Mapped every product, variant, and customer record for seamless migration.' },
      { num: '02', title: 'Shopify Store Architecture', desc: 'Rebuilt the store with optimised product taxonomy, filtered navigation, and a conversion-focused checkout flow.' },
      { num: '03', title: 'Data Migration & QA', desc: 'Migrated 2,000+ SKUs with zero data loss. Rigorous QA on every product page, variant, and price point.' },
      { num: '04', title: 'Shipping & Logistics Integration', desc: 'Integrated shipping partners for automated tracking, label generation, and 25% faster dispatch times.' },
    ],
    results: [
      { val: '75', unit: '%', key: 'Faster product data synchronisation' },
      { val: '40', unit: '%', key: 'More efficient catalogue management' },
      { val: '25', unit: '%', key: 'Faster order-to-ship time' },
      { val: '3', unit: '×', key: 'Page load speed improvement' },
    ],
    ctaHeadline: 'Ready to migrate to',
    ctaEm: 'Shopify?',
  },
  {
    slug: 'fab-habitat',
    client: 'Fab Habitat',
    tagline: 'Australian Eco-Furniture Shopify Build',
    sector: 'Eco-Furniture · E-Commerce · Australia',
    scope: 'Shopify Development, Performance Optimisation, Data Migration',
    overview: 'Fab Habitat, an Australian eco-furniture brand, needed a Shopify store that matched their premium positioning while handling a complex product catalogue with multiple material variants and international shipping.',
    overviewExtra: 'Futuready Media built a ground-up Shopify experience with custom product pages, lightning-fast performance, and a seamless checkout — all optimised for the Australian market.',
    metrics: [
      { val: '300', unit: '%', key: 'Site Performance' },
      { val: '87', unit: '%', key: 'Faster Data Sync' },
      { val: '35', unit: '%', key: 'Faster Shipping' },
      { val: '2', unit: '×', key: 'Conversion Rate' },
    ],
    steps: [
      { num: '01', title: 'Discovery & Brand Alignment', desc: 'Deep dive into Fab Habitat\'s brand, product range, and Australian market requirements. Defined the Shopify store architecture.' },
      { num: '02', title: 'Custom Theme Development', desc: 'Built a bespoke Shopify theme with rich product pages, material swatches, and eco-certification badges that reinforced brand values.' },
      { num: '03', title: 'Performance Optimisation', desc: 'Achieved 300% site performance improvement through image optimisation, lazy loading, and code splitting.' },
      { num: '04', title: 'Shipping & Fulfilment Setup', desc: 'Configured Australian shipping zones, real-time carrier rates, and automated fulfilment workflows.' },
    ],
    results: [
      { val: '300', unit: '%', key: 'Site performance improvement' },
      { val: '87', unit: '%', key: 'Faster data synchronisation' },
      { val: '35', unit: '%', key: 'Faster order fulfilment' },
      { val: '2', unit: '×', key: 'Conversion rate improvement' },
    ],
    ctaHeadline: 'Ready for a Shopify store that',
    ctaEm: 'performs?',
  },
  {
    slug: 'iwuman',
    client: 'iWuman',
    tagline: 'Shopify E-Commerce for Women\'s Wellness',
    sector: 'Women\'s Wellness · D2C',
    scope: 'Shopify Development, Brand Integration, E-Commerce Launch',
    overview: 'iWuman, a women\'s wellness brand, needed a Shopify e-commerce platform that communicated trust, empowerment, and product efficacy from the first click.',
    overviewExtra: 'Futuready Media designed and developed a Shopify store with a warm, empowering visual identity, subscription-ready product architecture, and conversion-optimised product pages.',
    metrics: [
      { val: '100', unit: '%', key: 'On-Time Launch' },
      { val: '4', unit: '.5', key: 'Star Avg. Review' },
      { val: '60', unit: '%', key: 'Repeat Purchase Rate' },
      { val: '2', unit: '×', key: 'AOV Growth' },
    ],
    steps: [
      { num: '01', title: 'Brand Discovery & UX Strategy', desc: 'Mapped the customer journey for wellness-conscious women. Defined content hierarchy and trust signals.' },
      { num: '02', title: 'Shopify Design & Development', desc: 'Built a custom theme with soft, empowering aesthetics, subscription integration, and educational product pages.' },
      { num: '03', title: 'Product & Content Setup', desc: 'Uploaded full catalogue with ingredient transparency, usage guides, and customer review integration.' },
      { num: '04', title: 'Launch & Growth Setup', desc: 'Configured email flows, abandoned cart recovery, and post-purchase upsell sequences.' },
    ],
    results: [
      { val: '100', unit: '%', key: 'Launched on schedule' },
      { val: '60', unit: '%', key: 'Repeat purchase rate in 90 days' },
      { val: '2', unit: '×', key: 'Average order value growth' },
      { val: '4.5', unit: '★', key: 'Average customer rating' },
    ],
    ctaHeadline: 'Ready to launch your',
    ctaEm: 'D2C brand?',
  },
  {
    slug: 'military-marvels',
    client: 'Military Marvels',
    tagline: 'Custom Shopify Theme for Military Memorabilia',
    sector: 'Military Memorabilia · E-Commerce',
    scope: 'Custom Shopify Theme, Product Photography, Brand Identity',
    overview: 'Military Marvels, a niche military memorabilia brand, needed a Shopify store that conveyed heritage, authenticity, and collector-grade quality.',
    overviewExtra: 'Futuready Media crafted a custom Shopify theme with a bold, heritage-inspired design language, detailed product pages with provenance information, and collector-focused features.',
    metrics: [
      { val: '100', unit: '%', key: 'Custom Theme' },
      { val: '3', unit: '×', key: 'Engagement Rate' },
      { val: '45', unit: '%', key: 'Conversion Uplift' },
      { val: '200', unit: '+', key: 'Products Catalogued' },
    ],
    steps: [
      { num: '01', title: 'Brand & Audience Research', desc: 'Studied the military memorabilia market, collector behaviour, and competitive landscape.' },
      { num: '02', title: 'Custom Theme Design', desc: 'Designed a heritage-inspired Shopify theme with dark tones, serif typography, and detailed provenance sections.' },
      { num: '03', title: 'Product Cataloguing', desc: 'Photographed and catalogued 200+ items with detailed descriptions, historical context, and certification badges.' },
      { num: '04', title: 'Launch & Collector Engagement', desc: 'Launched with email campaigns targeting collector communities and military history enthusiasts.' },
    ],
    results: [
      { val: '45', unit: '%', key: 'Conversion rate uplift' },
      { val: '3', unit: '×', key: 'User engagement improvement' },
      { val: '200', unit: '+', key: 'Products catalogued' },
      { val: '80', unit: '%', key: 'Returning visitor rate' },
    ],
    ctaHeadline: 'Need a Shopify store with',
    ctaEm: 'character?',
  },
  {
    slug: 'ruhkaari',
    client: 'Ruhkaari',
    tagline: 'Brand Identity & Shopify Store for Artisanal Fashion',
    sector: 'Artisanal Fashion · D2C',
    scope: 'Brand Identity, Shopify Development, Content Strategy',
    overview: 'Ruhkaari, an artisanal fashion brand, needed a cohesive brand identity and an e-commerce presence that honoured traditional craftsmanship while appealing to modern, conscious consumers.',
    overviewExtra: 'Futuready Media developed a complete brand identity — from logo and colour palette to tone of voice — and built a Shopify store that tells the story of each handcrafted piece.',
    metrics: [
      { val: '100', unit: '%', key: 'Brand Identity Built' },
      { val: '2', unit: '×', key: 'Traffic Growth' },
      { val: '55', unit: '%', key: 'Engagement Rate' },
      { val: '4', unit: '.8★', key: 'Customer Rating' },
    ],
    steps: [
      { num: '01', title: 'Brand Discovery & Identity', desc: 'Deep dive into Ruhkaari\'s artisanal heritage. Created logo, colour system, typography, and brand guidelines.' },
      { num: '02', title: 'Shopify Store Design', desc: 'Built an editorial-style Shopify theme with storytelling product pages, artisan profiles, and craft process imagery.' },
      { num: '03', title: 'Content Strategy', desc: 'Developed a content calendar blending artisan stories, styling guides, and behind-the-scenes craft documentation.' },
      { num: '04', title: 'Launch & Community Building', desc: 'Launched with Instagram-first awareness campaigns and influencer partnerships in the conscious fashion space.' },
    ],
    results: [
      { val: '2', unit: '×', key: 'Website traffic in first quarter' },
      { val: '55', unit: '%', key: 'Social engagement rate' },
      { val: '4.8', unit: '★', key: 'Average customer satisfaction' },
      { val: '30', unit: '%', key: 'Organic traffic share' },
    ],
    ctaHeadline: 'Ready to build your',
    ctaEm: 'brand story?',
  },
  {
    slug: 'adf-soul-foods',
    client: 'ADF Soul Foods',
    tagline: 'E-Commerce & Social Media for Food Brand',
    sector: 'Food & Beverage · D2C',
    scope: 'E-Commerce Development, Social Media Management, Brand Content',
    overview: 'ADF Soul Foods, an artisanal food brand, needed a digital presence that conveyed the soul and quality behind their products — from e-commerce to social storytelling.',
    overviewExtra: 'Futuready Media built a Shopify store optimised for food e-commerce, developed a social media strategy centred on recipe content and behind-the-kitchen stories, and drove growth through performance campaigns.',
    metrics: [
      { val: '3', unit: '×', key: 'Online Revenue' },
      { val: '200', unit: '%', key: 'Social Growth' },
      { val: '45', unit: '%', key: 'Repeat Customers' },
      { val: '4', unit: '.2×', key: 'ROAS' },
    ],
    steps: [
      { num: '01', title: 'Brand & Market Analysis', desc: 'Researched the artisanal food D2C space, identified positioning opportunities, and defined the digital strategy.' },
      { num: '02', title: 'Shopify Store Development', desc: 'Built a food-optimised Shopify store with recipe integrations, subscription boxes, and gift-ready packaging options.' },
      { num: '03', title: 'Social Media & Content', desc: 'Created a content engine of recipe videos, ingredient stories, and customer unboxing content across Instagram and YouTube.' },
      { num: '04', title: 'Performance Marketing', desc: 'Launched Meta and Google campaigns with food photography creative. Optimised for repeat purchase and subscription conversion.' },
    ],
    results: [
      { val: '3', unit: '×', key: 'Online revenue growth in 6 months' },
      { val: '200', unit: '%', key: 'Social media following growth' },
      { val: '45', unit: '%', key: 'Repeat customer rate' },
      { val: '4.2', unit: '×', key: 'ROAS on paid campaigns' },
    ],
    ctaHeadline: 'Ready to grow your',
    ctaEm: 'food brand?',
  },
];

export const caseStudySlugs = caseStudies.map((c) => c.slug);
