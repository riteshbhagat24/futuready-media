import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/shared/CustomCursor';
import Preloader from '@/components/shared/Preloader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  metadataBase: new URL('https://futureadymedia.com'),
  title: {
    default: 'Futuready Media — Full-Stack Digital Marketing Agency, Mumbai',
    template: '%s — Futuready Media',
  },
  description:
    "Futuready Media is Mumbai's performance-first digital marketing agency. Strategy, performance marketing, SEO, AI integration — everything an ambitious brand needs under one roof.",
  keywords: ['digital marketing agency Mumbai', 'performance marketing India', 'SEO agency', 'AI marketing', 'Futuready Media'],
  authors: [{ name: 'Futuready Media' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://futureadymedia.com',
    siteName: 'Futuready Media',
    title: 'Futuready Media — Full-Stack Digital Marketing Agency, Mumbai',
    description: "Mumbai's performance-first digital marketing agency. Strategy, performance marketing, SEO, and AI integration.",
  },
  twitter: { card: 'summary_large_image', site: '@futureadymedia' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://futureadymedia.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Futuready Media',
              url: 'https://futureadymedia.com',
              logo: 'https://futureadymedia.com/logo.png',
              description: 'Full-stack digital marketing agency, Mumbai.',
              foundingDate: '2012',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '102, Kaatyayani Business Center, Andheri East',
                addressLocality: 'Mumbai',
                postalCode: '400093',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-99873-48608',
                contactType: 'sales',
                email: 'hello@futureadymedia.com',
              },
              sameAs: [
                'https://linkedin.com/company/2435711/',
                'https://instagram.com/futureadymedia/',
                'https://twitter.com/futureadymedia',
              ],
            }),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <Preloader />
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
