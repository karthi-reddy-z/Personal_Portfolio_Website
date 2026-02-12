"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { User, Gamepad2, Briefcase } from "lucide-react";
import NeuralSphere from "../3d/NeuralSphere";
import Typewriter from "typewriter-effect";

export default function Hero() {
    const { mode, toggleMode } = useTheme();


    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
            <NeuralSphere />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10"
            >
                <h1 className="text-6xl md:text-8xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-lavender to-cyan-glow mb-4">
                    Seelam Malakonda
                </h1>

                <div className="font-orbitron tracking-widest text-lg md:text-xl text-foreground/80 min-h-[1.5em] mb-8 flex items-center justify-center gap-2">
                    <Typewriter
                        options={{
                            strings: [
                                "Aspirant AI Developer",
                                "Python Enthusiast",
                                "Code Explorer"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                            delay: 80,
                            wrapperClassName: "text-foreground/80",
                            cursorClassName: "text-accent animate-pulse",
                        }}
                    />
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-sm font-inter text-foreground/60 uppercase tracking-widest">
                        Scroll to Explore
                    </span>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
                        <div className="w-1.5 h-1.5 rounded-full bg-accent blur-[1px]" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
