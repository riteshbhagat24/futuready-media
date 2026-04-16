import type { MetadataRoute } from 'next';
import { workSlugs } from '@/lib/work-data';
import { blogSlugs } from '@/lib/blog-data';
import { caseStudySlugs } from '@/lib/case-study-data';
import { servicesSlugs } from '@/lib/services-data';
import { careerSlugs } from '@/lib/careers-data';

const BASE = 'https://futureadymedia.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainPages = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/ideas`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE}/careers`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  const servicePages = servicesSlugs.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const workPages = workSlugs.map((slug) => ({
    url: `${BASE}/work/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE}/ideas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const caseStudyPages = caseStudySlugs.map((slug) => ({
    url: `${BASE}/case-study/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const careerPages = careerSlugs.map((slug) => ({
    url: `${BASE}/careers/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const subServicePages = [
    'videography-photography', 'strategic-copywriting', 'application-website-design',
    'traditional-design', 'seo-services', 'social-media-agency-mumbai',
    'performance-marketing', 'crm-and-orm', 'email-marketing',
    'content-management-system', 'website-and-application-development', 'shopify-development',
  ].map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const geoPages = [
    'digital-marketing-agency-mumbai', 'digital-agency-mumbai',
    'website-design-development', 'shopify-development-bangalore',
  ].map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...mainPages,
    ...servicePages,
    ...workPages,
    ...blogPages,
    ...caseStudyPages,
    ...careerPages,
    ...subServicePages,
    ...geoPages,
  ];
}
