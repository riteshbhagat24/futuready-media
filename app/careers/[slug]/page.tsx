import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { careers, careerSlugs } from '@/lib/careers-data';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return careerSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const job = careers.find((c) => c.slug === params.slug);
  if (!job) return {};
  return {
    title: `${job.title} — Careers | Futuready Media`,
    description: `Apply for the ${job.title} position at Futuready Media. ${job.type} role based in ${job.location}.`,
    alternates: { canonical: `https://futureadymedia.com/careers/${job.slug}` },
  };
}

export default function CareerDetailPage({ params }: Props) {
  const job = careers.find((c) => c.slug === params.slug);
  if (!job) notFound();

  return (
    <>
      {/* HERO */}
      <section style={{ padding: '14rem 4vw 5rem', borderBottom: '1px solid var(--rule)' }}>
        <div className="breadcrumb sr">
          <Link href="/">Home</Link><span className="sep">/</span>
          <Link href="/careers">Careers</Link><span className="sep">/</span>
          <span>{job.title}</span>
        </div>
        <div className="sr sr-delay-1" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', background: 'var(--blue)', color: 'var(--white)', padding: '.25rem .65rem' }}>{job.department}</span>
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', border: '1px solid var(--rule)', padding: '.25rem .6rem', color: 'var(--warm)' }}>{job.type}</span>
          <span style={{ fontSize: '.8rem', color: 'var(--warm)' }}>{job.location}</span>
        </div>
        <h1 className="d-xl sr sr-delay-2">{job.title}</h1>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '5rem 4vw', borderBottom: '1px solid var(--rule)', maxWidth: 800 }}>
        <div className="section-label-row sr"><span className="lbl">About the Role</span><span className="line" /></div>
        <p className="t-base sr sr-delay-1" style={{ marginTop: '1rem' }}>{job.about}</p>
      </section>

      {/* REQUIREMENTS */}
      <section style={{ padding: '5rem 4vw', borderBottom: '1px solid var(--rule)', maxWidth: 800 }}>
        <div className="section-label-row sr"><span className="lbl">Requirements</span><span className="line" /></div>
        <ul className="sr sr-delay-1" style={{ marginTop: '1.5rem' }}>
          {job.requirements.map((req) => (
            <li key={req} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', padding: '.65rem 0', borderBottom: '1px solid var(--rule)', fontSize: '.92rem', fontWeight: 500 }}>
              <span style={{ color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>&bull;</span>
              {req}
            </li>
          ))}
        </ul>
      </section>

      {/* APPLY */}
      <section style={{ padding: '5rem 4vw 7rem', maxWidth: 800 }}>
        <div className="section-label-row sr"><span className="lbl">Apply</span><span className="line" /></div>
        <p className="t-base sr sr-delay-1" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          Send your resume, portfolio (if applicable), and a brief note about why you&apos;re interested to{' '}
          <a href="mailto:careers@futureadymedia.com" style={{ color: 'var(--blue)', fontWeight: 600 }}>careers@futureadymedia.com</a>.
        </p>
        <div className="sr sr-delay-2">
          <a href="mailto:careers@futureadymedia.com" className="btn btn-dark">Apply via Email &rarr;</a>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-strip">
        <div className="headline sr">Ready to do<br />your best <em>work?</em></div>
        <div className="sr sr-delay-2"><Link href="/careers" className="btn btn-white" style={{ padding: '1rem 2.5rem' }}>View All Positions &rarr;</Link></div>
      </div>
    </>
  );
}
