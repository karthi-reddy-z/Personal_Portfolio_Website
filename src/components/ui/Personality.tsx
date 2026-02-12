"use client";

import { motion } from "framer-motion";
import { Gamepad, Users, HeartHandshake, ShieldCheck } from "lucide-react";

const personalityItems = [
    {
        title: "Gamer Heart",
        desc: "Strategic thinking & teamwork. I enjoy immersive RPGs and competitive strategy games.",
        icon: <Gamepad size={24} />,
        color: "bg-purple-500",
    },
    {
        title: "Helping Mindset",
        desc: "Always ready to assist. I believe technical knowledge is best when shared with others.",
        icon: <Users size={24} />,
        color: "bg-blue-500",
    },
    {
        title: "Social Value",
        desc: "Deeply value friendships and community. Collaborative by nature, even if I start shy.",
        icon: <HeartHandshake size={24} />,
        color: "bg-pink-500",
    },
    {
        title: "Respect & Ethics",
        desc: "Committed to ethical AI and respectful communication in all professional and personal spaces.",
        icon: <ShieldCheck size={24} />,
        color: "bg-cyan-500",
    },
];

export default function Personality() {
    return (
        <section id="personality" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        The Human Side
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto font-inter">
                        Beyond the code, here&apos;s a look at the personality traits and values that drive my work and life.
                    </p>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {personalityItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ rotate: index % 2 === 0 ? 3 : -3, y: -5 }}
                            className="glass p-8 rounded-3xl relative overflow-hidden group border-white/5"
                        >
                            <div className={`p-3 rounded-2xl ${item.color} w-fit text-white mb-6 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-poppins font-bold mb-3">{item.title}</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
