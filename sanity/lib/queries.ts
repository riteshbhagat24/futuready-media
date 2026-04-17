import { groq } from 'next-sanity';

// Work / Portfolio
export const allWorkQuery = groq`*[_type == "work"] | order(order asc) {
  client, "slug": slug.current, tagline, category,
  "image": image.asset->url, description, services, results, featured
}`;

export const workBySlugQuery = groq`*[_type == "work" && slug.current == $slug][0] {
  client, "slug": slug.current, tagline, category,
  "image": image.asset->url, description, services, results
}`;

// Blog / Ideas
export const allBlogQuery = groq`*[_type == "blog"] | order(date desc) {
  title, "slug": slug.current, date, category,
  "image": image.asset->url, excerpt, author
}`;

export const blogBySlugQuery = groq`*[_type == "blog" && slug.current == $slug][0] {
  title, "slug": slug.current, date, category,
  "image": image.asset->url, excerpt, body, author
}`;

// Case Studies
export const allCaseStudiesQuery = groq`*[_type == "caseStudy"] | order(_createdAt desc) {
  client, "slug": slug.current, industry,
  "image": image.asset->url, description, metrics, steps,
  testimonialQuote, testimonialName, testimonialRole
}`;

export const caseStudyBySlugQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  client, "slug": slug.current, industry,
  "image": image.asset->url, description, metrics, steps, body,
  testimonialQuote, testimonialName, testimonialRole
}`;

// Services
export const allServicesQuery = groq`*[_type == "service"] | order(order asc) {
  title, "slug": slug.current, titleBlue, metaTitle, metaDesc, heroDesc,
  stats, badges, approachTitle, approachDesc, industries, engagement,
  steps, faqs, ctaHeadline, ctaEm
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  title, "slug": slug.current, titleBlue, metaTitle, metaDesc, heroDesc,
  stats, badges, approachTitle, approachDesc, industries, engagement,
  steps, faqs, ctaHeadline, ctaEm
}`;

// Careers
export const allCareersQuery = groq`*[_type == "career" && active == true] | order(_createdAt desc) {
  title, "slug": slug.current, department, type, location, description, requirements
}`;

export const careerBySlugQuery = groq`*[_type == "career" && slug.current == $slug][0] {
  title, "slug": slug.current, department, type, location, description, requirements
}`;

// Pages
export const pageQuery = groq`*[_type == "page" && pageId == $pageId][0] {
  title, pageId, heroHeadline, heroDescription, metaTitle, metaDescription,
  sections, testimonialQuote, testimonialName, testimonialRole
}`;
