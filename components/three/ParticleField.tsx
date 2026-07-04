"use client";

import { Sparkles } from "@react-three/drei";

export default function ParticleField({ density = 1 }: { density?: number }) {
  return (
    <>
      <Sparkles
        count={Math.round(140 * density)}
        scale={[16, 10, 8]}
        size={2.5}
        speed={0.25}
        opacity={0.6}
        color="#d7f24a"
      />
      <Sparkles
        count={Math.round(90 * density)}
        scale={[14, 8, 8]}
        size={1.5}
        speed={0.15}
        opacity={0.45}
        color="#3b6fff"
      />
    </>
  );
}
