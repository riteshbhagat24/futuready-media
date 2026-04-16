'use client';

import { useEffect, useRef, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const numRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let count = 0;
    const tick = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 4;
      if (count >= 100) { count = 100; clearInterval(tick); }
      if (numRef.current) numRef.current.textContent = String(count);
      if (barRef.current) barRef.current.style.width = count + '%';
      if (count === 100) {
        setTimeout(() => setDone(true), 300);
        setTimeout(() => {
          setHidden(true);
          // Trigger reveal lines
          document.querySelectorAll('.reveal-line').forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), 120 * i);
          });
        }, 1400);
      }
    }, 55);

    return () => clearInterval(tick);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 flex flex-col items-start justify-end overflow-hidden"
      style={{
        background: 'var(--ink)',
        zIndex: 10000,
        padding: '6vw',
        transform: done ? 'translateY(-100%)' : 'translateY(0)',
        transition: done ? 'transform 1s 0.1s var(--ease)' : 'none',
      }}
    >
      <div
        ref={barRef}
        className="absolute top-0 left-0 h-[2px]"
        style={{
          width: '0%',
          background: 'var(--blue)',
          transition: 'width 2s var(--ease)',
        }}
      />
      <div className="label" style={{ color: 'var(--warm)', marginBottom: '1rem' }}>
        Loading
      </div>
      <div
        ref={numRef}
        style={{
          fontSize: 'clamp(6rem,18vw,20rem)',
          fontWeight: 900,
          color: 'var(--white)',
          lineHeight: '.85',
          userSelect: 'none',
        }}
      >
        0
      </div>
    </div>
  );
}
