"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useState, type RefObject } from "react";
import ParticleField from "@/components/three/ParticleField";
import FloatingGeometry from "@/components/three/FloatingGeometry";

function CameraRig({
  progressRef,
  parallax,
}: {
  progressRef?: RefObject<number>;
  parallax: boolean;
}) {
  useFrame(({ camera, pointer }) => {
    const progress = progressRef?.current ?? 0;
    const targetX = parallax ? pointer.x * 0.7 : 0;
    const targetY = progress * 0.6 + (parallax ? pointer.y * 0.35 : 0);
    const targetZ = 8 - progress * 2.5;

    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.position.z += (targetZ - camera.position.z) * 0.04;
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
  const isHero = variant === "hero";

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
      <fog attach="fog" args={["#05060a", 6, 17]} />
      <CameraRig progressRef={scrollProgressRef} parallax={isHero} />
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b6fff" />
      <pointLight position={[-6, -2, -3]} intensity={0.6} color="#d7f24a" />
      <ParticleField density={isHero ? 1 : 0.55} />
      <FloatingGeometry compact={!isHero} />
      <EffectComposer>
        <Bloom
          intensity={isHero ? 1.4 : 0.8}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
