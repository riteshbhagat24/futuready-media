'use client';

import { useState } from 'react';

export default function HomeCTA() {
  const [form, setForm] = useState({ name: '', company: '', email: '', service: '' });

  return (
    <section
      className="grid gap-24 items-center"
      style={{ background: 'var(--blue)', padding: '8rem 4vw', gridTemplateColumns: '1fr 1fr' }}
    >
      <div>
        <div className="label sr" style={{ color: 'rgba(255,255,255,.4)', marginBottom: '1.5rem' }}>
          Ready to grow?
        </div>
        <div
          className="sr sr-delay-1"
          style={{
            fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 900, color: 'var(--white)',
            lineHeight: '.88', letterSpacing: '-.03em',
          }}
        >
          Let&apos;s Build<br />Something<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,.35)' }}>Remarkable.</em>
        </div>
      </div>
      <div className="sr sr-delay-2">
        <form className="flex flex-col gap-0">
          {[
            { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Full name' },
            { label: 'Company', name: 'company', type: 'text', placeholder: 'Company name' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'work@company.com' },
          ].map((f) => (
            <div key={f.name} style={{ borderBottom: '1px solid rgba(255,255,255,.2)', padding: '1rem 0', display: 'flex', flexDirection: 'column' as const, gap: '.3rem' }}>
              <label style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.45)' }}>
                {f.label}
              </label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                style={{
                  background: 'transparent', border: 'none', outline: 'none',
                  fontFamily: "'Poppins', sans-serif", fontSize: '.95rem', fontWeight: 500, color: 'var(--white)',
                }}
              />
            </div>
          ))}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,.2)', padding: '1rem 0', display: 'flex', flexDirection: 'column' as const, gap: '.3rem' }}>
            <label style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.45)' }}>
              Service Needed
            </label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                fontFamily: "'Poppins', sans-serif", fontSize: '.95rem', fontWeight: 500, color: 'var(--white)',
              }}
            >
              <option value="" disabled>Select a service</option>
              <option style={{ background: 'var(--bdark)' }}>Performance Marketing</option>
              <option style={{ background: 'var(--bdark)' }}>SEO &amp; AEO</option>
              <option style={{ background: 'var(--bdark)' }}>Brand Strategy</option>
              <option style={{ background: 'var(--bdark)' }}>Web Development</option>
              <option style={{ background: 'var(--bdark)' }}>AI Integration</option>
              <option style={{ background: 'var(--bdark)' }}>Social Media</option>
              <option style={{ background: 'var(--bdark)' }}>Full-Stack Engagement</option>
            </select>
          </div>
          <button
            type="submit"
            className="self-start"
            style={{
              marginTop: '2rem', background: 'var(--white)', color: 'var(--blue)',
              fontSize: '12px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const,
              padding: '.85rem 2rem', border: 'none', fontFamily: "'Poppins', sans-serif",
              transition: 'background .25s, color .25s, transform .3s', cursor: 'pointer',
            }}
          >
            Send Enquiry →
          </button>
        </form>
      </div>
    </section>
  );
}
