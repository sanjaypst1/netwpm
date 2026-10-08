"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

const nodes = [
  { label: "Advisers", x: -2.2, y: 1.1, z: 0, color: "#3a6ea5" },
  { label: "Clients", x: -2.2, y: -1.1, z: 0.4, color: "#5ca8a4" },
  { label: "Product", x: 0, y: 1.6, z: -0.3, color: "#0b1f3a" },
  { label: "Engineering", x: 1.4, y: 1.1, z: 0.6, color: "#1f7a6b" },
  { label: "Data", x: 0, y: 0, z: 0, color: "#c45c4a" },
  { label: "Operations", x: 2.2, y: -0.2, z: -0.4, color: "#6b5b95" },
  { label: "Finance", x: 1.2, y: -1.4, z: 0.2, color: "#b0893a" },
  { label: "Sales", x: -1.1, y: -1.6, z: -0.5, color: "#3a6ea5" },
  { label: "Risk", x: -0.8, y: 0.7, z: 1.1, color: "#1f7a6b" },
  { label: "Compliance", x: 0.8, y: 0.4, z: -1.2, color: "#6b5b95" },
];

function Network() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      {nodes.map((node) => (
        <mesh key={node.label} position={[node.x, node.y, node.z]}>
          <sphereGeometry args={[node.label === "Data" ? 0.28 : 0.16, 16, 16]} />
          <meshStandardMaterial color={node.color} />
        </mesh>
      ))}
    </group>
  );
}

export default function TrustedDataNetwork() {
  return (
    <div className="h-[380px] overflow-hidden rounded-2xl border border-line bg-navy">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "low-power" }}
        aria-hidden
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[4, 4, 4]} intensity={40} />
        <Network />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
