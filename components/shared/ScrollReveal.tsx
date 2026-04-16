'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the new page DOM render
    const timeout = setTimeout(() => {
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

      document.querySelectorAll('.sr:not(.in),.img-reveal:not(.in)').forEach((el) =>
        observer.observe(el)
      );

      // Counter animation
      const cntObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            if (el.dataset.counted) return;
            el.dataset.counted = '1';
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

      // Reveal lines
      document.querySelectorAll('.reveal-line:not(.in)').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 120 * i);
      });

      return () => {
        observer.disconnect();
        cntObs.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
