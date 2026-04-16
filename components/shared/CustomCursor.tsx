'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    const raf = requestAnimationFrame(loop);

    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    const els = document.querySelectorAll('a,button,[data-hover]');
    els.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      els.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={curRef}
        id="cur"
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          background: 'var(--blue)',
          transform: 'translate(-50%,-50%)',
          transition: 'transform .1s, width .4s var(--ease), height .4s var(--ease)',
        }}
      />
      <div
        ref={ringRef}
        id="cur-ring"
        className="fixed w-[42px] h-[42px] rounded-full pointer-events-none z-[9998]"
        style={{
          border: '1.5px solid rgba(10,10,10,.5)',
          transform: 'translate(-50%,-50%)',
          transition: 'width .5s var(--ease), height .5s var(--ease), border-color .3s, opacity .3s',
        }}
      />
      <style jsx global>{`
        @media (pointer: fine) {
          body { cursor: none; }
          a, button { cursor: none; }
        }
        @media (pointer: coarse) {
          #cur, #cur-ring { display: none; }
        }
        body.cursor-hover #cur { width: 0; height: 0; }
        body.cursor-hover #cur-ring { width: 72px; height: 72px; border-color: var(--blue); }
        body.cursor-dark #cur-ring { border-color: rgba(255,255,255,.5); }
      `}</style>
    </>
  );
}
