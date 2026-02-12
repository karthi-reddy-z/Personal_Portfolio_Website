"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

function SphereParticles() {
    const { mode } = useTheme();
    const ref = useRef<THREE.Points>(null);

    const sphereData = useMemo(() => {
        const count = mode === "gamer" ? 3000 : 2000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 1.5;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    }, [mode]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * 0.1;
            ref.current.rotation.y += delta * 0.15;

            // Subtle mouse reaction
            const mouse = state.mouse;
            ref.current.rotation.x += mouse.y * 0.05;
            ref.current.rotation.y += mouse.x * 0.05;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphereData} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={mode === "gamer" ? "#c084fc" : "#60a5fa"}
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function NeuralSphere() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <SphereParticles />
            </Canvas>
        </div>
    );
}
