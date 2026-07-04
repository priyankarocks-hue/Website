"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";

const shapes = [
  { position: [-3.6, 0.9, -1.5], geometry: "icosahedron", scale: 1.4, color: "#d7f24a", wireframe: true },
  { position: [3.8, -0.7, -2.5], geometry: "torus", scale: 1.15, color: "#3b6fff", wireframe: false },
  { position: [0.8, 1.9, -3.5], geometry: "octahedron", scale: 0.95, color: "#d7f24a", wireframe: true },
  { position: [-2, -1.8, -3], geometry: "torus", scale: 0.7, color: "#3b6fff", wireframe: true },
  { position: [4.4, 1.8, -4.5], geometry: "icosahedron", scale: 0.6, color: "#ffffff", wireframe: false },
] as const;

export default function FloatingGeometry({ compact = false }: { compact?: boolean }) {
  const visibleShapes = compact ? shapes.slice(0, 3) : shapes;

  return (
    <>
      {visibleShapes.map((shape, index) => (
        <Float
          key={index}
          speed={1.1 + index * 0.25}
          rotationIntensity={0.8}
          floatIntensity={1.8}
        >
          <mesh position={shape.position as unknown as [number, number, number]} scale={shape.scale}>
            {shape.geometry === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
            {shape.geometry === "torus" && <torusGeometry args={[0.8, 0.28, 16, 64]} />}
            {shape.geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
            <MeshDistortMaterial
              color={shape.color}
              distort={0.4}
              speed={1.8}
              roughness={0.15}
              metalness={0.7}
              transparent
              opacity={shape.wireframe ? 0.55 : 0.4}
              wireframe={shape.wireframe}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}
