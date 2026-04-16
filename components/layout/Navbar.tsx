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

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Ideas', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isDark = ['/', '/work', '/contact'].some(
    (p) => pathname === p || pathname.startsWith('/case-study')
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 ${
        isDark ? 'dark' : ''
      } ${scrolled ? 'scrolled' : ''}`}
      style={{
        padding: scrolled ? '1.2rem 4vw' : '2rem 4vw',
        background: isDark
          ? 'rgba(10,10,10,.85)'
          : scrolled
            ? 'rgba(240,237,232,.92)'
            : 'transparent',
        backdropFilter: isDark || scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isDark || scrolled ? 'blur(12px)' : 'none',
        borderBottom: isDark
          ? '1px solid rgba(255,255,255,.06)'
          : scrolled
            ? '1px solid var(--rule)'
            : '1px solid transparent',
      }}
    >
      <Link href="/" className="nav-logo h-8 flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.futureadymedia.com/images/main-logo-white.png"
          alt="Futuready Media"
          className="h-7 w-auto object-contain"
          style={{ filter: isDark ? 'none' : 'brightness(0)' }}
        />
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => {
          const isActive =
            link.href === '/'
              ? pathname === '/'
              : pathname === link.href || pathname.startsWith(link.href + '/');

          if (link.hasDropdown) {
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="relative text-[13px] tracking-[.04em] transition-opacity flex items-center gap-1"
                  style={{
                    opacity: isActive ? 1 : 0.7,
                    fontWeight: isActive ? 700 : 500,
                    color: isDark ? 'var(--white)' : 'var(--ink)',
                    background: 'none',
                    border: 'none',
                    fontFamily: "'Poppins', sans-serif",
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transition: 'transform .3s var(--ease)',
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Invisible bridge to prevent hover gap */}
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-2rem',
                    right: '-2rem',
                    height: '1rem',
                  }}
                />

                {/* Dropdown */}
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 0.75rem)',
                    left: '50%',
                    transform: `translateX(-50%) translateY(${dropdownOpen ? '0' : '-0.25rem'})`,
                    opacity: dropdownOpen ? 1 : 0,
                    pointerEvents: dropdownOpen ? 'auto' : 'none',
                    transition: 'opacity .25s, transform .25s cubic-bezier(.16,1,.3,1)',
                    width: '280px',
                    background: isDark ? 'rgba(10,10,10,.95)' : 'rgba(240,237,232,.98)',
                    backdropFilter: 'blur(16px)',
                    border: isDark
                      ? '1px solid rgba(255,255,255,.08)'
                      : '1px solid var(--rule)',
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
                        padding: '.7rem 1.5rem',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: isDark ? 'rgba(255,255,255,.6)' : 'var(--warm)',
                        borderBottom:
                          i < serviceLinks.length - 1
                            ? isDark
                              ? '1px solid rgba(255,255,255,.04)'
                              : '1px solid var(--rule)'
                            : 'none',
                        transition: 'color .2s, padding-left .3s var(--ease)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = isDark ? 'var(--white)' : 'var(--ink)';
                        e.currentTarget.style.paddingLeft = '1.8rem';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isDark ? 'rgba(255,255,255,.6)' : 'var(--warm)';
                        e.currentTarget.style.paddingLeft = '1.5rem';
                      }}
                    >
                      {svc.label}
                      <span style={{ fontSize: '10px', color: 'var(--blue)' }}>→</span>
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
              className="relative text-[13px] font-medium tracking-[.04em] transition-opacity"
              style={{
                opacity: isActive ? 1 : 0.7,
                fontWeight: isActive ? 700 : 500,
                color: isDark ? 'var(--white)' : 'var(--ink)',
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <Link
        href="/contact"
        className="btn text-xs"
        style={{
          padding: '.65rem 1.4rem',
          border: isDark ? '1.5px solid rgba(255,255,255,.3)' : '1.5px solid var(--ink)',
          color: isDark ? 'var(--white)' : 'var(--ink)',
          background: 'transparent',
        }}
      >
        Let&apos;s Talk
      </Link>
    </nav>
  );
}
