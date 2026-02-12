"use client";

import { motion } from "framer-motion";
import SkillGalaxy from "../3d/SkillGalaxy";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden bg-midnight/50">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        Technical Universe
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto font-inter">
                        An interactive 3D map of my technical skills and tools. Hover to explore the nodes of my expertise.
                    </p>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-6" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full relative glass rounded-3xl overflow-hidden shadow-2xl"
                >
                    <SkillGalaxy />
                </motion.div>
            </div>
        </section>
    );
}
