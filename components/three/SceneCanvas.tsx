"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { useState, type RefObject } from "react";
import ParticleField from "@/components/three/ParticleField";
import FloatingGeometry from "@/components/three/FloatingGeometry";

function ScrollCamera({ progressRef }: { progressRef: RefObject<number> }) {
  useFrame(({ camera }) => {
    const progress = progressRef.current;
    camera.position.z = 8 - progress * 2.5;
    camera.position.y = progress * 0.6;
    camera.lookAt(0, 0, -2);
  });
  return null;
}

// The actual WebGL scene. Always mounted through BackgroundLayer, never
// imported directly by a page — that keeps every ssr:false / reduced-motion
// / intersection-observer guard in one place.
export default function SceneCanvas({
  variant = "hero",
  scrollProgressRef,
}: {
  variant?: "hero" | "ambient";
  scrollProgressRef?: RefObject<number>;
}) {
  const [dpr, setDpr] = useState(1.5);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
      {scrollProgressRef ? <ScrollCamera progressRef={scrollProgressRef} /> : null}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b6fff" />
      <ParticleField density={variant === "hero" ? 1 : 0.5} />
      {variant === "hero" ? <FloatingGeometry /> : null}
    </Canvas>
  );
}
