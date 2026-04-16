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

const links: { label: string; href: string; hasDropdown?: boolean }[] = [
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
  const pathname = usePathname();

  const isDark = ['/', '/work', '/contact'].some(
    (p) => pathname === p
  ) || pathname.startsWith('/case-study');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkColor = isDark ? '#ffffff' : '#0a0a0a';
  const linkDimColor = isDark ? 'rgba(255,255,255,.65)' : 'rgba(10,10,10,.55)';

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '1rem 4vw' : '1.8rem 4vw',
        background: isDark
          ? 'rgba(18,18,24,.92)'
          : scrolled ? 'rgba(240,237,232,.95)' : 'rgba(240,237,232,.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isDark
          ? '1px solid rgba(255,255,255,.06)'
          : scrolled ? '1px solid rgba(10,10,10,.1)' : '1px solid transparent',
        transition: 'padding .4s cubic-bezier(.16,1,.3,1), background .4s, border-color .4s',
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', height: 32 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.futureadymedia.com/images/main-logo-white.png"
          alt="Futuready Media"
          style={{ height: 24, width: 'auto', objectFit: 'contain', filter: isDark ? 'none' : 'brightness(0)' }}
        />
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
        {links.map((link) => {
          const isActive = link.href === '/'
            ? pathname === '/'
            : pathname === link.href || pathname.startsWith(link.href + '/');

          if (link.hasDropdown) {
            return (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  style={{
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '.04em',
                    color: isActive ? linkColor : linkDimColor,
                    background: 'none',
                    border: 'none',
                    fontFamily: "'Poppins', sans-serif",
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color .2s',
                    padding: 0,
                  }}
                >
                  {link.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                    style={{ transition: 'transform .3s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Bridge + Dropdown */}
                <div style={{ position: 'absolute', top: '100%', left: '-2rem', right: '-2rem', height: '1rem' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 0.75rem)',
                    left: '50%',
                    transform: `translateX(-50%) translateY(${dropdownOpen ? '0' : '-4px'})`,
                    opacity: dropdownOpen ? 1 : 0,
                    pointerEvents: dropdownOpen ? 'auto' : 'none',
                    transition: 'opacity .2s, transform .2s',
                    width: '280px',
                    background: isDark ? '#111111' : '#eae7e2',
                    border: isDark ? '1px solid rgba(255,255,255,.1)' : '1px solid rgba(10,10,10,.1)',
                    padding: '.5rem 0',
                  }}
                >
                  {serviceLinks.map((svc, i) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '.65rem 1.5rem',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: isDark ? 'rgba(255,255,255,.55)' : 'rgba(10,10,10,.5)',
                        borderBottom: i < serviceLinks.length - 1
                          ? isDark ? '1px solid rgba(255,255,255,.05)' : '1px solid rgba(10,10,10,.06)'
                          : 'none',
                        transition: 'color .15s, padding-left .25s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = isDark ? '#ffffff' : '#0a0a0a';
                        e.currentTarget.style.paddingLeft = '1.8rem';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isDark ? 'rgba(255,255,255,.55)' : 'rgba(10,10,10,.5)';
                        e.currentTarget.style.paddingLeft = '1.5rem';
                      }}
                    >
                      {svc.label}
                      <span style={{ fontSize: '10px', color: '#0053CD' }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '13px',
                fontWeight: isActive ? 700 : 500,
                letterSpacing: '.04em',
                color: isActive ? linkColor : linkDimColor,
                transition: 'color .2s',
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <Link
        href="/contact"
        style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '.08em',
          textTransform: 'uppercase',
          padding: '.6rem 1.3rem',
          border: isDark ? '1.5px solid rgba(255,255,255,.4)' : '1.5px solid #0a0a0a',
          color: isDark ? '#ffffff' : '#0a0a0a',
          background: 'transparent',
          transition: 'background .2s, color .2s',
        }}
      >
        Let&apos;s Talk
      </Link>
    </nav>
  );
}
