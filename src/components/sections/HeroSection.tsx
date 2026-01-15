"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="opening" className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">

            {/* Bride Side (Top/Left - Garut) */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center bg-garut-bg text-garut-primary overflow-hidden order-1"
            >
                {/* Batik-like subtle pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-garut-primary/10 to-transparent z-0" />

                <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <span className="font-serif text-sm tracking-widest uppercase mb-2">The Bride</span>
                    <h2 className="font-script text-5xl md:text-7xl mb-4">Resti</h2>
                    <p className="font-sans text-sm md:text-base opacity-80">
                        Putri Bpk. Asep & Ibu Elis
                    </p>
                </div>
            </motion.div>

            {/* Groom Side (Bottom/Right - Purworejo) */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center bg-purworejo-bg text-purworejo-primary overflow-hidden order-2"
            >
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purworejo-primary/10 to-transparent z-0" />

                <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <span className="font-serif text-sm tracking-widest uppercase mb-2">The Groom</span>
                    <h2 className="font-script text-5xl md:text-7xl mb-4">Galang</h2>
                    <p className="font-sans text-sm md:text-base opacity-80">
                        Putra Bpk. Joko & Ibu Sri
                    </p>
                </div>
            </motion.div>

            {/* Center Bridge Element */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center"
            >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/80 backdrop-blur-sm shadow-xl border-2 border-fusion-gold flex flex-col items-center justify-center">
                    <span className="font-serif text-4xl md:text-5xl text-fusion-gold">&</span>
                </div>

                <div className="mt-4 px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-fusion-gold/30 shadow-md">
                    <span className="font-serif text-fusion-dark font-semibold tracking-widest text-sm">28 . 02 . 2026</span>
                </div>
            </motion.div>

        </section>
    );
}
