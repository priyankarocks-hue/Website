"use client";

import { Sparkles } from "@react-three/drei";

export default function ParticleField({ density = 1 }: { density?: number }) {
  return (
    <>
      <Sparkles
        count={Math.round(220 * density)}
        scale={[18, 11, 10]}
        size={3}
        speed={0.3}
        opacity={0.8}
        color="#d7f24a"
      />
      <Sparkles
        count={Math.round(160 * density)}
        scale={[16, 9, 9]}
        size={2}
        speed={0.2}
        opacity={0.65}
        color="#3b6fff"
      />
      <Sparkles
        count={Math.round(60 * density)}
        scale={[10, 6, 6]}
        size={4}
        speed={0.12}
        opacity={0.5}
        color="#ffffff"
      />
    </>
  );
}
