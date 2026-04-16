'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.sr,.img-reveal').forEach((el) => observer.observe(el));

    // Counter animation
    const cntObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseFloat(el.dataset.count || '0');
          const dur = 1800;
          const start = performance.now();
          const isFloat = String(target).includes('.');
          function step(now: number) {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            const val = target * ease;
            el.textContent = isFloat ? val.toFixed(1) : String(Math.round(val));
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          cntObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-count]').forEach((el) => cntObs.observe(el));

    // Fallback for reveal lines
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal-line').forEach((el) => el.classList.add('in'));
    }, 3000);

    return () => {
      observer.disconnect();
      cntObs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return null;
}
