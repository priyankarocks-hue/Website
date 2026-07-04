"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useReducedMotion } from "@/lib/motion-preference";
import { isWebglAvailable } from "@/lib/webgl-detect";
import { useHeroScrollProgress } from "@/lib/use-hero-scroll-progress";
import StaticFallbackBackground from "@/components/three/StaticFallbackBackground";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
  loading: () => null,
});

// WebGL support never changes after load, so there's nothing to subscribe to —
// this no-op subscribe just satisfies useSyncExternalStore's signature.
function subscribeNever() {
  return () => {};
}

function getServerSnapshot() {
  return false;
}

/**
 * Decorative WebGL layer, isolated behind real content.
 * - `eager`: mount immediately (use only for the above-the-fold Home hero).
 * - otherwise: lazy-mounts once the section scrolls into view.
 * Always falls back to a static gradient under prefers-reduced-motion or
 * when WebGL isn't available, so no page ever depends on the canvas for content.
 */
export default function BackgroundLayer({
  variant = "ambient",
  eager = false,
}: {
  variant?: "hero" | "ambient";
  eager?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const webglOk = useSyncExternalStore(subscribeNever, isWebglAvailable, getServerSnapshot);
  const [inView, setInView] = useState(eager);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useHeroScrollProgress(wrapperRef, variant === "hero");

  useEffect(() => {
    if (eager || inView) return;
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, inView]);

  const canRenderScene = webglOk && !reducedMotion && inView;

  return (
    <div ref={wrapperRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <StaticFallbackBackground />
      {canRenderScene ? (
        <div className="absolute inset-0">
          <SceneCanvas
            variant={variant}
            scrollProgressRef={variant === "hero" ? scrollProgressRef : undefined}
          />
        </div>
      ) : null}
    </div>
  );
}
