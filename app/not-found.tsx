import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center" style={{ minHeight: '100vh', padding: '4vw' }}>
      <div className="d-hero c-blue" style={{ marginBottom: '2rem' }}>404</div>
      <h1 className="d-md" style={{ marginBottom: '1rem' }}>Page not found.</h1>
      <p className="t-base" style={{ marginBottom: '2rem' }}>The page you&apos;re looking for doesn&apos;t exist.</p>
      <div className="flex gap-4">
        <Link href="/" className="btn btn-dark">Go Home</Link>
        <Link href="/contact" className="btn btn-outline">Contact Us</Link>
      </div>
    </div>
  );
}
