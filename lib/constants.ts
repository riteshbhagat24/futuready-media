export const COMPANY = {
  name: 'Futuready Media',
  tagline: 'A Full Service Creative Digital Agency',
  description: 'We are a full-service creative digital agency focused on Strategy, Branding, Content, Design, Marketing, and Technology — creating campaigns that connect brands with audiences globally.',
  phone: '+91 99873 48608',
  email: 'hello@futureadymedia.com',
  careersEmail: 'careers@futureadymedia.com',
  website: 'https://futureadymedia.com',
  founded: 2013,
  experience: '13+',
} as const;

export const OFFICES = [
  {
    city: 'Mumbai',
    label: 'HQ',
    address: '102, Kaatyayani Business Center, Off Mahakali Caves Road, MIDC, Andheri East, Mumbai - 400093',
    mapUrl: 'https://maps.app.goo.gl/VkwRb9An74MC8JFj7',
  },
  {
    city: 'Bangalore',
    label: '',
    address: 'Om Chambers, 648/A-9, Binnamangala 1st Stage, Indiranagar, Bangalore – 560038',
    mapUrl: 'https://maps.app.goo.gl/foie4Ro6gZNh3xTA7',
  },
  {
    city: 'UAE',
    label: '',
    address: 'Shams Business Center, Sharjah Media City Free Zone, Al Messaned, Sharjah, UAE',
    mapUrl: '',
  },
] as const;

export const SOCIALS = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/2435711/', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/futureadymedia/', icon: 'instagram' },
  { name: 'YouTube', url: 'https://youtube.com/channel/UCR1TQKy7RZyJV1vahEuiDQw', icon: 'youtube' },
  { name: 'Facebook', url: 'https://facebook.com/futureadymedia/', icon: 'facebook' },
  { name: 'Twitter', url: 'https://twitter.com/futureadymedia', icon: 'twitter' },
] as const;

export const STATS = [
  { value: '500+', label: 'Happy Clients' },
  { value: '13+', label: 'Years Experience' },
  { value: '750+', label: 'Projects Delivered' },
  { value: '70+', label: 'In-house Experts' },
] as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Digital Strategy', href: '/services/digital-strategy' },
      { label: 'Branding', href: '/services/branding' },
      { label: 'Content', href: '/services/content' },
      { label: 'Design', href: '/services/design' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Development', href: '/services/development' },
      { label: 'AI', href: '/services/ai' },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact-us' },
] as const;

export const SERVICES = [
  {
    slug: 'digital-strategy',
    title: 'Digital Strategy',
    shortDesc: 'Data-driven strategies that align with your business goals and drive measurable growth.',
    icon: 'Target',
    color: '#F26522',
    pillars: ['Research', 'Analysis', 'Positioning', 'Purpose', 'Market Strategy'],
  },
  {
    slug: 'branding',
    title: 'Branding',
    shortDesc: 'Strategic brand solutions that differentiate your business in competitive markets.',
    icon: 'Palette',
    color: '#FF8A50',
    pillars: ['Identity', 'Voice', 'Positioning', 'Audience & Competitor Analysis', 'Consumer Journeys', 'Brand Guidelines'],
  },
  {
    slug: 'content',
    title: 'Content',
    shortDesc: 'Compelling content that connects brands with audiences and drives engagement.',
    icon: 'Film',
    color: '#E85D26',
    pillars: ['Video', 'Photography', 'Animations', 'Copywriting', 'Social Content'],
  },
  {
    slug: 'design',
    title: 'Design',
    shortDesc: 'Visually striking designs that create meaningful digital experiences.',
    icon: 'Layers',
    color: '#F26522',
    pillars: ['App Design', 'Website Design', 'Traditional Design', 'Experience Design'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDesc: 'Performance-focused campaigns that increase visibility and drive qualified leads.',
    icon: 'TrendingUp',
    color: '#FF8A50',
    pillars: ['SEO', 'Social Media', 'Media Planning', 'Banner Ads', 'CRM & ORM', 'Email Campaigns', 'Influencer Marketing'],
  },
  {
    slug: 'development',
    title: 'Development',
    shortDesc: 'High-performance websites and applications built for scale and security.',
    icon: 'Code',
    color: '#E85D26',
    pillars: ['CMS', 'Web & App Development', 'E-Commerce'],
  },
  {
    slug: 'ai',
    title: 'AI Solutions',
    shortDesc: 'AI-powered automation, chatbots, and generative engine optimization for next-gen growth.',
    icon: 'Brain',
    color: '#F26522',
    pillars: ['AI Chatbots & Voicebots', 'Workflow Automation', 'AI Content Generation', 'GEO & AEO'],
  },
] as const;

export const CLIENTS = [
  'BookMyShow', 'Tata Trusts', 'TATA Sons', 'Tata AIG', 'Reliance',
  'ICICI Prudential', 'L\'Oreal', 'Godrej', 'Mahindra', 'HCL',
  'Razorpay', 'Angel One', 'DBS Bank', 'Glenmark', 'Sun Pharma',
  'Schindler', 'TotalEnergies', 'UPL', 'Hafele', 'Hero Housing',
  'Sharekhan', 'Rustomjee', 'Hiranandani', 'Jubilant Biosys',
  'SUD Life', 'Rebel Foods', 'PrintStop', 'Noida Power', 'BSES',
  'Sun Petro', 'Charak Pharma', 'BNK Group', 'Xyst', 'Govardhan',
  'CMS', 'Baring Private Equity', 'JP Infra', 'Amrut',
] as const;

export const PORTFOLIO = [
  { name: 'Angel One', category: 'Stockbroking', tagline: 'Elevating the Investment Journey' },
  { name: 'Baring Private Equity', category: 'Private Equity', tagline: 'Story Told, Impact Made' },
  { name: 'BookMyShow Live', category: 'Entertainment', tagline: 'Concert Campaign turned into a Lead Engine' },
  { name: 'BSES', category: 'Power Utility', tagline: 'Powering Relationships, Digitally' },
  { name: 'Charak Pharma', category: 'Pharma', tagline: 'Ancient Roots, Modern Solutions' },
  { name: 'CMS', category: 'BFSI', tagline: 'Connecting is Now Easy!' },
  { name: 'DBS Bank', category: 'BFSI', tagline: 'Banking Smarter, One Click At A Time' },
  { name: 'Glenmark', category: 'Pharma', tagline: 'Empowering Health, Digitally' },
  { name: 'Godrej Korber', category: 'Logistics', tagline: 'Click. Convert. Deliver' },
  { name: 'Govardhan Ecovillage', category: 'Philanthropy', tagline: 'Data Drives Action, Greener Future in Motion' },
  { name: 'Hafele', category: 'Consumer Durables', tagline: 'Quality Products, Compelling Stories' },
  { name: 'HCL', category: 'Conglomerate', tagline: 'Reach Amplified, Potential Unlocked' },
  { name: 'Hero Housing Finance', category: 'BFSI', tagline: 'Stories Built, Dreams Financed' },
  { name: 'ICICI Prudential', category: 'Insurance', tagline: 'Content that Cares, Futures Well-Prepared!' },
  { name: 'Jubilant Biosys', category: 'Pharma', tagline: 'Innovation in Action' },
  { name: 'L\'Oreal', category: 'Beauty', tagline: 'Adding Beauty to the Cart' },
  { name: 'Noida Power', category: 'Power Utility', tagline: 'Bringing Power at your Fingertips, Digitally!' },
  { name: 'PrintStop', category: 'Novelty', tagline: 'Clicks Convert, Supplies Delivered' },
  { name: 'Razorpay', category: 'Payments', tagline: 'Content Clicks, Payments that don\'t Glitch' },
  { name: 'Rebel Foods', category: 'QSR', tagline: 'Vivid Visuals, Irresistible Rebel Bites' },
  { name: 'Reliance Group', category: 'Conglomerate', tagline: 'Strategic Clarity, Business Certainty' },
  { name: 'Schindler', category: 'Manufacturing', tagline: 'Boosting the Future of Mobility, Visually!' },
  { name: 'Sharekhan', category: 'Stockbroking', tagline: 'Content Simplified, Investing Demystified' },
  { name: 'SUD Life', category: 'Insurance', tagline: 'Digital Shield for Life' },
  { name: 'Sun Pharma', category: 'Pharma', tagline: 'Care Simplified, Connection Amplified!' },
  { name: 'Sun Petro', category: 'Oil & Gas', tagline: 'Reimagined Energy, Evolved Brand' },
  { name: 'Tata AIG', category: 'Insurance', tagline: 'Building Trust, One Frame At A Time' },
  { name: 'The BNK Group', category: 'Interior Design', tagline: 'Design Excellence Amplified Through Digital Innovation' },
  { name: 'Total Energies', category: 'Oil & Gas', tagline: 'Fueling Vision On Screen' },
  { name: 'UPL', category: 'Agribusiness', tagline: 'New URL, New UPL' },
  { name: 'Xyst', category: 'Beauty', tagline: 'Brand Transformed. Beauty for Every You' },
] as const;
