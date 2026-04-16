'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  'Performance Marketing',
  'SEO & AEO',
  'Brand Strategy',
  'Web Development',
  'AI Integration',
  'Social Media',
  'Full-Stack Engagement',
];

const budgets = [
  'Under ₹1 Lakh / month',
  '₹1–3 Lakhs / month',
  '₹3–5 Lakhs / month',
  '₹5–10 Lakhs / month',
  '₹10 Lakhs+ / month',
];

const trustPoints = [
  '150+ brands scaled across India & globally',
  '92% client retention year over year',
  'AI-first performance marketing since 2021',
  'Enterprise, D2C, Real Estate, B2B expertise',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    goal: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <style jsx global>{`
        body { background: var(--ink) !important; }
      `}</style>

      {/* ─── MAIN SPLIT ─── */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          gap: '3rem',
          padding: '8rem 4vw 5rem',
          minHeight: 'auto',
        }}
      >
        {/* ─── LEFT COLUMN ─── */}
        <div>
          <div className="section-label-row sr">
            <span className="lbl" style={{ color: 'rgba(255,255,255,.35)' }}>Contact</span>
            <span className="line" style={{ background: 'rgba(255,255,255,.08)' }} />
          </div>

          <h1 className="d-xl sr sr-delay-1" style={{ color: 'var(--white)', marginBottom: '2rem' }}>
            <span style={{ display: 'block' }}>Let&apos;s Talk</span>
            <span style={{ display: 'block', color: 'var(--blue)' }}>Growth.</span>
          </h1>

          <p
            className="t-base sr sr-delay-2"
            style={{ color: 'rgba(255,255,255,.45)', maxWidth: '440px', marginBottom: '3rem' }}
          >
            Whether you are scaling a D2C brand, launching an enterprise campaign,
            or rethinking your digital strategy — we would love to hear from you.
          </p>

          {/* Contact Details */}
          <div className="sr sr-delay-3" style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,.3)',
                  marginBottom: '.4rem',
                }}
              >
                Email
              </div>
              <a
                href="mailto:hello@futureadymedia.com"
                style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--white)' }}
              >
                hello@futureadymedia.com
              </a>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,.3)',
                  marginBottom: '.4rem',
                }}
              >
                Phone
              </div>
              <a
                href="tel:+919987348608"
                style={{ fontSize: '.95rem', fontWeight: 600, color: 'var(--white)' }}
              >
                +91 99873 48608
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,.3)',
                  marginBottom: '.4rem',
                }}
              >
                Office
              </div>
              <div style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.6 }}>
                102, Kaatyayani Business Center,<br />
                Andheri East, Mumbai 400093
              </div>
            </div>
          </div>

          {/* Trust Points */}
          <div className="sr sr-delay-4">
            {trustPoints.map((t) => (
              <div
                key={t}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.8rem',
                  padding: '.6rem 0',
                  fontSize: '.85rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,.55)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--blue)',
                    flexShrink: 0,
                  }}
                />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT COLUMN — FORM ─── */}
        <div className="sr sr-delay-2">
          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company name"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="work@company.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="service">Service Interest</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                <option value="" disabled>Select a service</option>
                {services.map((s) => (
                  <option key={s} style={{ background: 'var(--bdark)' }}>{s}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="budget">Monthly Budget</label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
              >
                <option value="" disabled>Select a range</option>
                {budgets.map((b) => (
                  <option key={b} style={{ background: 'var(--bdark)' }}>{b}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="goal">Goal</label>
              <textarea
                id="goal"
                name="goal"
                rows={3}
                placeholder="Tell us what you want to achieve..."
                value={form.goal}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              style={{
                marginTop: '2rem',
                background: 'var(--blue)',
                color: 'var(--white)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase' as const,
                padding: '1rem 2.5rem',
                border: 'none',
                fontFamily: "'Poppins', sans-serif",
                cursor: 'pointer',
                transition: 'background .25s, transform .3s',
                alignSelf: 'flex-start',
              }}
            >
              Send Enquiry →
            </button>
          </form>
        </div>
      </section>

      {/* ─── OFFICES ROW ─── */}
      <section
        style={{
          padding: '5rem 4vw',
          borderTop: '1px solid rgba(255,255,255,.06)',
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: '2.5rem',
          }}
        >
          {/* Mumbai Office */}
          <div className="sr">
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '.2em',
                textTransform: 'uppercase' as const,
                color: 'rgba(255,255,255,.3)',
                marginBottom: '1rem',
              }}
            >
              Mumbai — HQ
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--white)', marginBottom: '.5rem' }}>
              Futuready Media Pvt. Ltd.
            </div>
            <div style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>
              102, Kaatyayani Business Center,<br />
              Andheri East, Mumbai 400093<br />
              Maharashtra, India
            </div>
            <div style={{ marginTop: '1rem' }}>
              <a
                href="tel:+919987348608"
                style={{ fontSize: '.85rem', fontWeight: 500, color: 'rgba(255,255,255,.55)' }}
              >
                +91 99873 48608
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="sr sr-delay-1">
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '.2em',
                textTransform: 'uppercase' as const,
                color: 'rgba(255,255,255,.3)',
                marginBottom: '1rem',
              }}
            >
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/company/2435711/' },
                { label: 'Instagram', href: 'https://instagram.com/futureadymedia/' },
                { label: 'Twitter / X', href: 'https://twitter.com/futureadymedia' },
                { label: 'hello@futureadymedia.com', href: 'mailto:hello@futureadymedia.com' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    fontSize: '.9rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,.55)',
                    transition: 'color .2s',
                  }}
                >
                  {link.label} <span style={{ color: 'var(--blue)', marginLeft: '.3rem' }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
