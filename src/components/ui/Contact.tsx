"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSent, setIsSent] = useState(false);

    const handleSend = () => {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
    };

    return (
        <section id="contact" className="py-24 px-6 relative bg-midnight/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                        Connect
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-poppins font-semibold">Let&apos;s build the future together.</h3>
                        <p className="text-foreground/60 leading-relaxed font-inter">
                            Whether you have a question, a project idea, or just want to say hi, feel free to reach out. I&apos;m always open to new opportunities and collaborations.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:malakondaseelam11@gmail.com" className="flex items-center gap-4 group cursor-pointer w-fit">
                                <div className="p-4 rounded-2xl glass group-hover:bg-accent/10 transition-colors">
                                    <Mail className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">Email</p>
                                    <p className="text-lg font-inter">malakondaseelam11@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/mala-konda-seelam-7490242b1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer w-fit">
                                <div className="p-4 rounded-2xl glass group-hover:bg-accent/10 transition-colors">
                                    <Linkedin className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">LinkedIn</p>
                                    <p className="text-lg font-inter">Mala Konda Seelam</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group w-fit">
                                <div className="p-4 rounded-2xl glass">
                                    <Phone className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">Call</p>
                                    <p className="text-lg font-inter">+91 6304969181</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl relative overflow-hidden min-h-[400px] flex flex-col justify-center items-center">
                        <motion.div
                            animate={isSent ? { x: 500, y: -500, opacity: 0 } : { x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="relative"
                        >
                            <Send size={100} className="text-accent/20 rotate-12" />
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <Send size={60} className="text-accent -rotate-12" />
                            </motion.div>
                        </motion.div>

                        <motion.button
                            onClick={handleSend}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 px-10 py-4 rounded-full bg-accent text-white font-bold text-lg shadow-xl shadow-accent/20"
                        >
                            {isSent ? "Message Sent!" : "Send a Quick Hi"}
                        </motion.button>

                        {isSent && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 text-green-400 font-bold"
                            >
                                Soft confirmation glow active! ✨
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>

            <footer className="mt-24 text-center border-t border-white/5 pt-12">
                <p className="text-foreground/30 text-sm font-inter">
                    &copy; {new Date().getFullYear()} Malakonda Portfolio • Powered by Creativity & AI
                </p>
            </footer>
        </section>
    );
}
