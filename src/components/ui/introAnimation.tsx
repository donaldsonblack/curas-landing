import { useState, useEffect, useRef } from 'react';

const IntroAnimation = ({ children }: { children: React.ReactNode }) => {
  const [isAnimationDone, setAnimationDone] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) return;

        const handleScroll = () => {
          if (iframe.contentWindow) {
            const { scrollY, innerHeight } = iframe.contentWindow;
            const scrollHeight = iframeDoc.body.scrollHeight;
            if (scrollY + innerHeight >= scrollHeight - 10) { // 10px buffer
              setIsFading(true);
              setTimeout(() => {
                setAnimationDone(true);
              }, 1000); // Match CSS transition duration
              iframe.contentWindow.removeEventListener('scroll', handleScroll);
            }
          }
        };

        iframe.contentWindow?.addEventListener('scroll', handleScroll);

        return () => {
          iframe.contentWindow?.removeEventListener('scroll', handleScroll);
        };
      } catch (e) {
        console.error('Could not access iframe content:', e);
        setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
                setAnimationDone(true);
            }, 1000);
        }, 3000);
      }
    };

    iframe.addEventListener('load', handleLoad);

    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, []);

  if (isAnimationDone) {
    return <>{children}</>;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999 }}>
      <iframe
        ref={iframeRef}
        src="/ascii_scroll.html"
        title="Intro Animation"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          opacity: isFading ? 0 : 1,
          transition: 'opacity 1s ease-out',
          backgroundColor: 'black'
        }}
      />
    </div>
  );
};

export default IntroAnimation;
