'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="footer-logo"
            src="https://www.futureadymedia.com/images/main-logo-white.png"
            alt="Futuready Media"
          />
          <p className="footer-desc">
            Full-stack digital marketing agency helping ambitious brands grow through strategy,
            performance, and AI-led execution.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/performance-marketing">Performance Marketing</Link></li>
            <li><Link href="/services/seo-aeo-geo">SEO &amp; AEO</Link></li>
            <li><Link href="/services/brand-strategy">Brand Strategy</Link></li>
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/ai-integration">AI Integration</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/work">Our Work</Link></li>
            <li><Link href="/blog">Ideas</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/digital-marketing-agency-mumbai">Mumbai Office</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="mailto:hello@futureadymedia.com">hello@futureadymedia.com</a></li>
            <li><a href="tel:+919987348608">+91 99873 48608</a></li>
            <li>
              <span style={{ color: 'rgba(255,255,255,.3)', fontSize: '.82rem', lineHeight: 1.5 }}>
                102, Kaatyayani Business Center,<br />Andheri East, Mumbai 400093
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Futuready Media. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://linkedin.com/company/2435711/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com/futureadymedia/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/futureadymedia" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
