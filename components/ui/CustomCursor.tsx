"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/motion-preference";

// Desktop-only glowing cursor that trails the pointer and grows over
// interactive elements. Hidden entirely on touch devices via CSS, and
// skipped under prefers-reduced-motion.
export default function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    function handleMove(event: MouseEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement;
      setHovering(!!target.closest("a, button"));
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reducedMotion, x, y]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="cursor-dot"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 2.2 : 1 }}
      transition={{ scale: { duration: 0.2 } }}
      aria-hidden="true"
    />
  );
}
