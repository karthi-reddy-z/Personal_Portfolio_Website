"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "Keyword Extraction System",
        description: "Designed and implemented keyword extraction algorithms to identify essential terms from academic text and YouTube video transcripts. Improved content discoverability and academic review efficiency by building custom filters to extract contextually relevant keywords.",
        tech: ["Python", "NLP", "TF-IDF", "RAKE"],
        github: "https://github.com/malakonda1214",
        demo: "#",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Diet Recommendation System",
        description: "Developed an AI-powered diet recommendation system integrated with a personal health assistant chatbot. Includes BMI calculation, personalized diet recommendations based on health metrics, and Firebase integration for secure user data management.",
        tech: ["Python", "Firebase", "AI Chatbot", "Health Analytics"],
        github: "https://github.com/malakonda1214",
        demo: "#",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-full rounded-2xl glass p-1 cursor-pointer group"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-midnight/30 shadow-lg overflow-hidden"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="z-10 text-center p-6">
                    <Code2 size={40} className="mx-auto mb-4 text-accent" />
                    <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                        {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/90">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 justify-center">
                        <a href={project.github} className="p-2 rounded-full glass hover:text-accent transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={project.demo} className="p-2 rounded-full glass hover:text-accent transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
