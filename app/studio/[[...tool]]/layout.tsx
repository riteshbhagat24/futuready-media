export const metadata = {
  title: 'Sanity Studio — Futuready Media CMS',
  robots: 'noindex',
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="sanity-studio"
      style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        #sanity-studio ~ footer,
        body > nav,
        #cur, #cur-ring,
        .preloader { display: none !important; }
        body { overflow: hidden !important; background: #101112 !important; }
      `}} />
      {children}
    </div>
  );
}
