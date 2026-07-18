"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Floating particles field ── */
function StarField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.01) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

/* ── Animated orb group ── */
function AnimatedShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();

    // Mouse interaction with smooth lerp
    const targetX = (state.pointer.x * Math.PI) / 5;
    const targetY = (state.pointer.y * Math.PI) / 5;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      time * 0.08 + targetX,
      0.04
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -targetY * 0.6,
      0.04
    );
    group.current.rotation.z = Math.sin(time * 0.08) * 0.08;
  });

  return (
    <group ref={group}>
      {/* Primary large sphere – blue */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
        <Sphere args={[1, 64, 64]} position={[-3, 1.5, -4]} scale={1.6}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Secondary sphere – violet */}
      <Float speed={3} rotationIntensity={0.8} floatIntensity={1.8}>
        <Sphere args={[1, 64, 64]} position={[3, -1.5, -5]} scale={1.1}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0.05}
            metalness={1}
          />
        </Sphere>
      </Float>

      {/* Small sphere – emerald */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.5}>
        <Sphere args={[1, 64, 64]} position={[0, -2.5, -6]} scale={0.75}>
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.5}
            speed={1.5}
            roughness={0.2}
            metalness={0.7}
          />
        </Sphere>
      </Float>

      {/* Tiny sphere – pink */}
      <Float speed={4} rotationIntensity={1.2} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[1.5, 2.5, -6]} scale={0.45}>
          <MeshDistortMaterial
            color="#ec4899"
            attach="material"
            distort={0.6}
            speed={4}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Tiny sphere – cyan */}
      <Float speed={2.5} rotationIntensity={0.9} floatIntensity={1.3}>
        <Sphere args={[1, 32, 32]} position={[-1, -0.5, -7]} scale={0.35}>
          <MeshDistortMaterial
            color="#06b6d4"
            attach="material"
            distort={0.55}
            speed={2.5}
            roughness={0.05}
            metalness={1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

/* ── Scene wrapper ── */
export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, 5, 5]} intensity={0.6} color="#6366f1" />
        <pointLight position={[5, -5, -5]} intensity={0.4} color="#3b82f6" />
        <StarField />
        <AnimatedShapes />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
