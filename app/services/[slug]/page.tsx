import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesMap, servicesSlugs } from '@/lib/services-data';
import ServicePageClient from './ServicePageClient';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return servicesSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = servicesMap[params.slug];
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    alternates: { canonical: `https://futureadymedia.com/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: Props) {
  const s = servicesMap[params.slug];
  if (!s) notFound();
  return <ServicePageClient service={s} />;
}
