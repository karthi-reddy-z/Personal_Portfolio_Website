"use client";

import { useRef, useMemo, useState, useEffect, cloneElement, isValidElement } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";
import {
    Code2, Brain, Network, Database, Layout, FileCode,
    MessageSquareText, Server, BarChart3, Puzzle, Cpu, Globe, Sparkles
} from "lucide-react";

const skills = [
    { name: "Python", x: 0, y: 0, z: 0, color: "#3776ab", icon: <Code2 size={24} />, desc: "Advanced scripting, automation, and backend development." },
    { name: "Machine Learning", x: 2.5, y: 1.5, z: 1, color: "#60a5fa", icon: <Brain size={24} />, desc: "Building predictive models and data analysis algorithms." },
    { name: "Deep Learning", x: -2.5, y: 1.5, z: 1, color: "#ff6f00", icon: <Network size={24} />, desc: "Neural networks, CNNs, and advanced AI architectures." },
    { name: "NLP", x: 0, y: 2.2, z: -1.5, color: "#c084fc", icon: <MessageSquareText size={24} />, desc: "Text processing, sentiment analysis, and language models." },
    { name: "HTML", x: 1.8, y: -1.8, z: 1.5, color: "#e34f26", icon: <Layout size={24} />, desc: "Semantic markup and modern web accessibility standards." },
    { name: "CSS", x: -1.8, y: -1.8, z: 1.5, color: "#1572b6", icon: <FileCode size={24} />, desc: "Responsive design, animations, and Tailwind styling." },
    { name: "Generative AI", x: 3.2, y: 0, z: -1, color: "#10b981", icon: <Sparkles size={24} />, desc: "LLMs, image generation, and creative AI solutions." },
    { name: "SQL", x: -3.2, y: 0, z: -1, color: "#f59e0b", icon: <Database size={24} />, desc: "Complex queries, database design, and optimization." },
    { name: "Flask", x: 0.8, y: 3, z: 0.8, color: "#ffffff", icon: <Server size={24} />, desc: "Lightweight backend API development." },
    { name: "TensorFlow", x: -0.8, y: -3, z: 0.8, color: "#ff6f00", icon: <Cpu size={24} />, desc: "Model training and deployment pipelines." },
    { name: "Data Viz", x: 2.5, y: -2.5, z: -1, color: "#8b5cf6", icon: <BarChart3 size={24} />, desc: "Visualizing insights with Matplotlib and Seaborn." },
    { name: "Problem Solving", x: -2.5, y: 2.5, z: -1, color: "#ec4899", icon: <Puzzle size={24} />, desc: "Algorithmic thinking and efficient code solutions." },
];

function SkillNode({
    skill,
    index,
    isActive,
    onActivate,
    onDeactivate
}: {
    skill: typeof skills[0];
    index: number;
    isActive: boolean;
    onActivate: () => void;
    onDeactivate: () => void;
}) {
    // Renders a single skill node with center-stage animation
    const mesh = useRef<THREE.Group>(null);

    // Store initial position
    const initialPos = new THREE.Vector3(skill.x, skill.y, skill.z);

    // Auto-return timer
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isActive) {
            timer = setTimeout(() => {
                onDeactivate();
            }, 2500); // 2.5s focus time
        }
        return () => clearTimeout(timer);
    }, [isActive, onDeactivate]);

    // Render high-quality icon
    const iconElement = useMemo(() => {
        if (isValidElement(skill.icon)) {
            return cloneElement(skill.icon as React.ReactElement<any>, {
                size: 102,
                width: 102,
                height: 102,
                strokeWidth: 1.5,
                className: "w-full h-full"
            });
        }
        return skill.icon;
    }, [skill.icon]);

    useFrame((state) => {
        if (mesh.current && mesh.current.parent) {
            let targetPos: THREE.Vector3;

            if (isActive) {
                // Transform World Center (0,0,3.5) into Local Space
                const worldCenter = new THREE.Vector3(0, 0, 3.5);
                targetPos = mesh.current.parent.worldToLocal(worldCenter.clone());

                // Rotate to face camera
                mesh.current.lookAt(state.camera.position);
            } else {
                // Original orbital position with floating
                targetPos = new THREE.Vector3(
                    initialPos.x,
                    initialPos.y + Math.sin(state.clock.elapsedTime + index) * 0.15,
                    initialPos.z
                );

                // Reset rotation gently
                mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, 0, 0.1);
                mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, 0, 0.1);
                mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.05;
            }

            // Smoothly lerp to target
            mesh.current.position.lerp(targetPos, 0.1);
        }
    });


    return (
        <group
            ref={mesh}
            position={[skill.x, skill.y, skill.z]}
            onPointerOver={(e) => { e.stopPropagation(); onActivate(); }}
        >
            {/* The sphere bubble - Smaller default size */}
            <Sphere args={[0.35, 32, 32]}>
                <MeshDistortMaterial
                    color={skill.color}
                    speed={isActive ? 0 : 2}
                    distort={isActive ? 0 : 0.3}
                    radius={1}
                    transparent
                    opacity={isActive ? 0.05 : 0.4}
                    roughness={0}
                    metalness={0.8}
                />
            </Sphere>

            {/* HTML Overlay for 3D Icon and Tooltip - Rendered as 2D Billboard (No 3D Transform) for max clarity */}
            <Html
                position={[0, 0, 0]}
                center
                className="pointer-events-none"
                zIndexRange={[100, 0]}
                style={{ zIndex: isActive ? 1000 : undefined }}
            >
                <div
                    className="relative flex items-center justify-center pointer-events-auto cursor-pointer"
                    onMouseEnter={onActivate}
                >

                    {/* 2D Icon Container - Fixed Pixel Size */}
                    {/* Size: 128px fixed (to fit 120px icon). No scaling difference between states. */}
                    <div
                        className={`
                            transition-all duration-500 ease-out z-10 p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center
                            ${isActive ? 'scale-100 bg-black/90 border-white/40' : 'scale-100 animate-pulse-slow'}
                        `}
                        style={{
                            color: skill.color,
                            boxShadow: isActive ? `0 0 30px ${skill.color}80` : 'none',
                            width: '128px',
                            height: '128px'
                        }}
                    >
                        {/* We use the original icon here, size 24 is reasonable for 2D */}
                        {skill.icon}
                    </div>

                    {/* Tooltip - 2D Layout */}
                    <div className={`
                        absolute bg-zinc-950/90 backdrop-blur-xl
                        p-4 rounded-xl border border-white/20 text-left transition-all duration-500 z-20 shadow-2xl flex flex-col gap-1
                        w-64

                        /* Responsive Position */
                        top-full mt-2 left-1/2 -translate-x-1/2 origin-top
                        md:top-1/2 md:left-full md:ml-4 md:mt-0 md:-translate-y-1/2 md:translate-x-0 md:origin-left

                        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}
                    `}>
                        <h3 className="font-bold text-sm uppercase tracking-wider text-white" style={{ color: skill.color }}>{skill.name}</h3>
                        <p className="text-gray-300 text-xs leading-relaxed font-normal tracking-wide">{skill.desc}</p>

                        {/* Timer bar */}
                        {isActive && (
                            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full rounded-b-xl overflow-hidden">
                                <div
                                    className="h-full bg-white/80 origin-left animate-[shrink_2.5s_linear_forwards]"
                                    style={{ backgroundColor: skill.color }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Html>
        </group>
    );
}

function GalaxyGroup() {
    const group = useRef<THREE.Group>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useFrame((state, delta) => {
        // Only rotate if no skill is active
        if (group.current && activeIndex === null) {
            group.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group ref={group}>
            {skills.map((skill, i) => (
                <SkillNode
                    key={skill.name}
                    skill={skill}
                    index={i}
                    isActive={activeIndex === i}
                    onActivate={() => setActiveIndex(i)}
                    onDeactivate={() => setActiveIndex(null)}
                />
            ))}
        </group>
    );
}

export default function SkillGalaxy() {
    return (
        <div className="h-[600px] w-full relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <GalaxyGroup />
            </Canvas>
        </div>
    );
}
