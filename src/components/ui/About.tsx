"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { GraduationCap, Target, Globe } from "lucide-react";

const aboutData = [
    {
        id: 1,
        title: "Education",
        icon: <GraduationCap size={24} />,
        content: "B.Tech CSE - Kalasalingam Academy (CGPA: 7.64) • Pre-University - Sri Chaitanya Jr College (90.5%)",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        title: "Objective",
        icon: <Target size={24} />,
        content: "Ambitious AI practitioner with Python skills and interests in data visualization, machine learning, and AI-driven problem-solving innovation. Eager to utilize technology to design creative solutions and work on actual projects.",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: 3,
        title: "Skills & Languages",
        icon: <Globe size={24} />,
        content: "Python, HTML, CSS, ML, Deep Learning • English, Telugu, Tamil • Communication, Problem-Solving, Leadership",
        color: "from-green-500 to-emerald-500",
    },
];

export default function About() {
    const { mode } = useTheme();

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-2xl relative group cursor-default"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit text-accent group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground/90">
                                {item.title}
                            </h3>

                            <div className="text-foreground/60 leading-relaxed font-inter space-y-2">
                                {item.title === "Education" ? (
                                    <ul className="space-y-2">
                                        <li>• B.Tech CSE - Kalasalingam Academy (CGPA: 7.64)</li>
                                        <li>• Pre-University - Sri Chaitanya Jr College (90.5%)</li>
                                    </ul>
                                ) : item.title === "Skills & Languages" ? (
                                    <ul className="space-y-2">
                                        <li>• Python, HTML, CSS, ML, Deep Learning</li>
                                        <li>• English, Telugu, Tamil</li>
                                        <li>• Communication, Problem-Solving, Leadership</li>
                                    </ul>
                                ) : (
                                    <p>{item.content}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender/10 blur-[120px] -z-10 rounded-full" />
        </section>
    );
}
