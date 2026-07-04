"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";

const shapes = [
  { position: [-3.2, 0.8, -2], geometry: "icosahedron", scale: 1.1, color: "#d7f24a" },
  { position: [3.4, -0.6, -3], geometry: "torus", scale: 0.9, color: "#3b6fff" },
  { position: [0.6, 1.6, -4], geometry: "octahedron", scale: 0.7, color: "#d7f24a" },
] as const;

export default function FloatingGeometry() {
  return (
    <>
      {shapes.map((shape, index) => (
        <Float
          key={index}
          speed={1.2 + index * 0.3}
          rotationIntensity={0.6}
          floatIntensity={1.4}
        >
          <mesh position={shape.position as unknown as [number, number, number]} scale={shape.scale}>
            {shape.geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
            {shape.geometry === "torus" && <torusGeometry args={[0.8, 0.28, 16, 64]} />}
            {shape.geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
            <MeshDistortMaterial
              color={shape.color}
              distort={0.35}
              speed={1.5}
              roughness={0.2}
              metalness={0.6}
              transparent
              opacity={0.35}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
