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

    let rafId: number;
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(loop);

    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a,button,[data-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.querySelectorAll('a,button,[data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          body { cursor: none !important; }
          a, button { cursor: none !important; }
        }
        @media (pointer: coarse) {
          #cur, #cur-ring { display: none !important; }
        }
        body.cursor-hover #cur { width: 0 !important; height: 0 !important; }
        body.cursor-hover #cur-ring { width: 72px !important; height: 72px !important; border-color: #0053CD !important; }
      `}</style>
      <div
        ref={curRef}
        id="cur"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: '#0053CD',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%,-50%)',
          transition: 'width .4s cubic-bezier(.16,1,.3,1), height .4s cubic-bezier(.16,1,.3,1)',
        }}
      />
      <div
        ref={ringRef}
        id="cur-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 42,
          height: 42,
          border: '1.5px solid rgba(10,10,10,.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%,-50%)',
          transition: 'width .5s cubic-bezier(.16,1,.3,1), height .5s cubic-bezier(.16,1,.3,1), border-color .3s',
        }}
      />
    </>
  );
}
