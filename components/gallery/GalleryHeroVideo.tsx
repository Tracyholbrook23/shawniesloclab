"use client";

import { useEffect, useRef } from "react";

/**
 * Shared autoplaying/looping background video, reused anywhere on the site
 * a muted looping clip is used as a visual backdrop (Gallery hero + grid,
 * homepage hair video, QuickAccess, FeaturedWork).
 *
 * Two modes:
 * - `eager` (above-the-fold, e.g. page heroes): starts playing immediately
 *   and retries on `loadedmetadata`/`canplay`, since the bare `autoplay`
 *   attribute can silently fail to kick in on some mobile browsers right
 *   after hydration.
 * - default/lazy (anything below the fold, e.g. grid thumbnails): only
 *   buffers and plays while actually scrolled into view, and pauses again
 *   once it scrolls out. This keeps pages with many video tiles (the
 *   Gallery grid can have a dozen+ across categories) from downloading and
 *   decoding every clip at once on page load.
 */
export default function GalleryHeroVideo({
  src,
  poster,
  eager = false,
  className = "absolute inset-0 w-full h-full object-cover",
}: {
  src: string;
  poster?: string;
  eager?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay blocked by the browser — video just stays on its poster
        // frame, which is still a reasonable fallback.
      });
    };

    if (eager) {
      tryPlay();
      v.addEventListener("loadedmetadata", tryPlay);
      v.addEventListener("canplay", tryPlay);
      return () => {
        v.removeEventListener("loadedmetadata", tryPlay);
        v.removeEventListener("canplay", tryPlay);
      };
    }

    // Lazy mode: only load/play while visible.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.15 }
    );
    observer.observe(v);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      // iOS Safari looks for this legacy attribute in addition to playsInline
      // on some older WebKit versions.
      webkit-playsinline="true"
      preload={eager ? "auto" : "metadata"}
      className={className}
      aria-hidden="true"
    />
  );
}
