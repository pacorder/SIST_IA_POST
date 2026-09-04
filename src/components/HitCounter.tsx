import React, { useEffect, useRef } from 'react';

interface HitCounterProps {
  className?: string;
  showLabel?: boolean;
}

export const HitCounter: React.FC<HitCounterProps> = ({
  className = '',
  showLabel = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prevent duplicate scripts on re-renders
    if (
      container.querySelector('script[src*="feed-pulse.com"]') ||
      container.querySelector('[data-ltf-hits]')
    ) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://feed-pulse.com/api/embed/hit-counter.js?site_id=6ddf9973-9457-40a7-9860-21206c4fa33d&theme=obsidian&style=led&base=0&reset_at=0&reset_to=0&digits=7';

    container.appendChild(script);

    return () => {
      // Optional: keep clean if unmounted
    };
  }, []);

  return (
    <div
      className={`inline-flex flex-col items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity select-none ${className}`}
    >
      {showLabel && (
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate-500 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Visitas al sitio</span>
        </div>
      )}
      <div
        ref={containerRef}
        className="flex items-center justify-center transform scale-[0.72] sm:scale-75 origin-center -my-2.5 min-h-[44px]"
      />
    </div>
  );
};
