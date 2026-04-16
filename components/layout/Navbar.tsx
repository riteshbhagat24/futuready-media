'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const serviceLinks = [
  { label: 'Performance Marketing', href: '/services/performance-marketing' },
  { label: 'SEO, AEO & GEO', href: '/services/seo-aeo-geo' },
  { label: 'Brand Strategy', href: '/services/brand-strategy' },
  { label: 'Web Design & Development', href: '/services/web-development' },
  { label: 'AI Integration & Automation', href: '/services/ai-integration' },
  { label: 'Social Media Management', href: '/services/social-media' },
  { label: 'Content Marketing', href: '/services/content-marketing' },
  { label: 'Enterprise Demand Generation', href: '/services/demand-generation' },
];

const navLinks: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Ideas', href: '/ideas' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const isDark = ['/', '/work', '/contact'].some((p) => pathname === p) || pathname.startsWith('/case-study');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const linkColor = isDark ? '#ffffff' : '#0a0a0a';
  const linkDimColor = isDark ? 'rgba(255,255,255,.65)' : 'rgba(10,10,10,.55)';

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: scrolled ? '1rem 5vw' : '1.5rem 5vw',
          background: isDark ? 'rgba(18,18,24,.92)' : scrolled ? 'rgba(240,237,232,.95)' : 'rgba(240,237,232,.5)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isDark ? '1px solid rgba(255,255,255,.06)' : scrolled ? '1px solid rgba(10,10,10,.1)' : '1px solid transparent',
          transition: 'padding .4s cubic-bezier(.16,1,.3,1), background .4s',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', height: 32 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www.futureadymedia.com/images/main-logo-white.png" alt="Futuready Media"
            style={{ height: 22, width: 'auto', objectFit: 'contain', filter: isDark ? 'none' : 'brightness(0)' }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2.2rem' }}>
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(link.href + '/');
            if (link.hasDropdown) {
              return (
                <div key={link.label} style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <button style={{
                    fontSize: '13px', fontWeight: isActive ? 700 : 500, letterSpacing: '.04em',
                    color: isActive ? linkColor : linkDimColor, background: 'none', border: 'none',
                    fontFamily: "'Poppins',sans-serif", cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0,
                  }}>
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .3s' }}>
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div style={{ position: 'absolute', top: '100%', left: '-2rem', right: '-2rem', height: '1rem' }} />
                  <div style={{
                    position: 'absolute', top: 'calc(100% + .75rem)', left: '50%',
                    transform: `translateX(-50%) translateY(${dropdownOpen ? '0' : '-4px'})`,
                    opacity: dropdownOpen ? 1 : 0, pointerEvents: dropdownOpen ? 'auto' : 'none',
                    transition: 'opacity .2s, transform .2s', width: '280px',
                    background: isDark ? '#111' : '#eae7e2', border: isDark ? '1px solid rgba(255,255,255,.1)' : '1px solid rgba(10,10,10,.1)', padding: '.5rem 0',
                  }}>
                    {serviceLinks.map((svc, i) => (
                      <Link key={svc.href} href={svc.href} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.65rem 1.5rem',
                        fontSize: '12px', fontWeight: 500, color: isDark ? 'rgba(255,255,255,.55)' : 'rgba(10,10,10,.5)',
                        borderBottom: i < serviceLinks.length - 1 ? isDark ? '1px solid rgba(255,255,255,.05)' : '1px solid rgba(10,10,10,.06)' : 'none',
                      }}>{svc.label}<span style={{ fontSize: '10px', color: '#0053CD' }}>→</span></Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link key={link.href} href={link.href} style={{
                fontSize: '13px', fontWeight: isActive ? 700 : 500, letterSpacing: '.04em',
                color: isActive ? linkColor : linkDimColor,
              }}>{link.label}</Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:inline-flex" style={{
          fontSize: '11px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase',
          padding: '.6rem 1.3rem', border: isDark ? '1.5px solid rgba(255,255,255,.4)' : '1.5px solid #0a0a0a',
          color: isDark ? '#fff' : '#0a0a0a', background: 'transparent',
        }}>Let&apos;s Talk</Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
            display: 'flex', flexDirection: 'column', gap: mobileOpen ? '0' : '5px',
            width: '28px', height: '28px', justifyContent: 'center', alignItems: 'center', position: 'relative',
          }}
        >
          <span style={{
            width: '20px', height: '1.5px', background: isDark ? '#fff' : '#0a0a0a',
            transition: 'transform .3s, opacity .3s',
            transform: mobileOpen ? 'rotate(45deg) translate(0, 0)' : 'rotate(0)',
            position: mobileOpen ? 'absolute' : 'relative',
          }} />
          <span style={{
            width: '20px', height: '1.5px', background: isDark ? '#fff' : '#0a0a0a',
            opacity: mobileOpen ? 0 : 1, transition: 'opacity .2s',
          }} />
          <span style={{
            width: '20px', height: '1.5px', background: isDark ? '#fff' : '#0a0a0a',
            transition: 'transform .3s, opacity .3s',
            transform: mobileOpen ? 'rotate(-45deg) translate(0, 0)' : 'rotate(0)',
            position: mobileOpen ? 'absolute' : 'relative',
          }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999,
            background: isDark ? '#0a0a0a' : '#f0ede8',
            paddingTop: '5rem', paddingBottom: '2rem', overflowY: 'auto',
          }}
        >
          <div style={{ padding: '2rem 5vw', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      style={{
                        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '1.2rem 0', borderBottom: isDark ? '1px solid rgba(255,255,255,.06)' : '1px solid rgba(10,10,10,.08)',
                        fontSize: '1.1rem', fontWeight: 600, color: isDark ? '#fff' : '#0a0a0a',
                        background: 'none', border: 'none', borderBottomStyle: 'solid',
                        fontFamily: "'Poppins',sans-serif", cursor: 'pointer', textAlign: 'left',
                      }}
                    >
                      Services
                      <svg width="12" height="7" viewBox="0 0 10 6" fill="none" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .3s' }}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div style={{ paddingLeft: '1rem' }}>
                        {serviceLinks.map((svc) => (
                          <Link key={svc.href} href={svc.href} style={{
                            display: 'block', padding: '.8rem 0', fontSize: '.9rem', fontWeight: 500,
                            color: isDark ? 'rgba(255,255,255,.5)' : 'rgba(10,10,10,.5)',
                            borderBottom: isDark ? '1px solid rgba(255,255,255,.04)' : '1px solid rgba(10,10,10,.04)',
                          }}>{svc.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={link.href} href={link.href} style={{
                  display: 'block', padding: '1.2rem 0',
                  borderBottom: isDark ? '1px solid rgba(255,255,255,.06)' : '1px solid rgba(10,10,10,.08)',
                  fontSize: '1.1rem', fontWeight: 600, color: isDark ? '#fff' : '#0a0a0a',
                }}>{link.label}</Link>
              );
            })}

            <Link href="/contact" style={{
              display: 'block', marginTop: '2rem', padding: '1rem', textAlign: 'center',
              fontSize: '12px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
              background: isDark ? '#0053CD' : '#0a0a0a', color: '#fff',
            }}>Let&apos;s Talk →</Link>
          </div>
        </div>
      )}
    </>
  );
}
