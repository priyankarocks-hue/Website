"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion-preference";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Tracks 0-1 scroll progress through a section via GSAP ScrollTrigger, read
 * imperatively (via ref) inside the R3F render loop so scroll doesn't trigger
 * React re-renders. No-ops under prefers-reduced-motion. */
export function useHeroScrollProgress(
  sectionRef: RefObject<HTMLElement | null>,
  enabled: boolean
) {
  const progressRef = useRef(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!enabled || reducedMotion || !sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, [enabled, reducedMotion, sectionRef]);

  return progressRef;
}
