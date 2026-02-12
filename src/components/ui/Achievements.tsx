"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Zap } from "lucide-react";

const achievements = [
    {
        title: "Oracle Cloud Certified",
        issuer: "Oracle Cloud Infrastructure 2023 Architect Associate",
        icon: <Award size={32} className="text-blue-400" />,
        date: "2023",
        unlocked: true,
    },
    {
        title: "Healthcare Chatbot Internship",
        issuer: "Ruddo Education Solutions",
        icon: <Zap size={32} className="text-cyan-400" />,
        date: "2 Months",
        unlocked: true,
    },
    {
        title: "Hackathon Participant",
        issuer: "Kalasalingam University",
        icon: <Star size={32} className="text-purple-400" />,
        date: "2024",
        unlocked: true,
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 px-6 relative bg-midnight/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        Achievements
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {achievements.map((ach, index) => (
                        <motion.div
                            key={ach.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-6 rounded-3xl flex flex-col items-center text-center group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="mb-4 z-10 p-4 rounded-2xl bg-white/5 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                                {ach.icon}
                            </div>
                            <h3 className="font-poppins font-bold text-lg mb-1">{ach.title}</h3>
                            <p className="text-foreground/60 text-sm mb-4">{ach.issuer}</p>
                            <div className="mt-auto px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest">
                                {ach.date}
                            </div>
                            {ach.unlocked && (
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
