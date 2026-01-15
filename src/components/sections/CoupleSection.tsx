"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function CoupleSection() {
    return (
        <div className="w-full">
            {/* -------------------------------------------
          PART 1: THE BRIDE (RESTI) - GARUT THEME
      ------------------------------------------- */}
            <section className="relative w-full py-16 md:py-24 bg-garut-bg text-garut-primary overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-garut-primary to-transparent" />

                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                    {/* Photo (Left on Desktop) */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full max-w-xs md:w-80 flex-shrink-0"
                    >
                        <div className="aspect-[3/4] w-full bg-gray-300 rounded-tl-[3rem] rounded-br-[3rem] shadow-xl overflow-hidden relative group">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-sans tracking-widest text-sm uppercase">
                                Bride Photo
                            </div>
                            <div className="absolute inset-0 border-4 border-white/20 rounded-tl-[3rem] rounded-br-[3rem]" />
                        </div>
                    </motion.div>

                    {/* Content (Right on Desktop) */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h3 className="font-script text-5xl md:text-6xl mb-4">Resti Ananda</h3>
                        <p className="font-serif text-lg opacity-80 mb-6">
                            Putri dari Bpk. Asep & Ibu Elis
                        </p>

                        <a
                            href="https://instagram.com/restigalang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-garut-primary/30 hover:bg-garut-primary hover:text-white transition-all duration-300"
                        >
                            <Instagram className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">@restigalang</span>
                        </a>
                    </motion.div>

                </div>
            </section>


            {/* -------------------------------------------
          PART 2: THE GROOM (GALANG) - PURWOREJO THEME
      ------------------------------------------- */}
            <section className="relative w-full py-16 md:py-24 bg-purworejo-bg text-purworejo-primary overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purworejo-primary to-transparent" />

                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16">

                    {/* Photo (Right on Desktop) */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full max-w-xs md:w-80 flex-shrink-0"
                    >
                        <div className="aspect-[3/4] w-full bg-gray-300 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl overflow-hidden relative group">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-sans tracking-widest text-sm uppercase">
                                Groom Photo
                            </div>
                            <div className="absolute inset-0 border-4 border-white/20 rounded-tr-[3rem] rounded-bl-[3rem]" />
                        </div>
                    </motion.div>

                    {/* Content (Left on Desktop) */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center md:text-right"
                    >
                        <h3 className="font-script text-5xl md:text-6xl mb-4">Galang Rambuanarki</h3>
                        <p className="font-serif text-lg opacity-80 mb-6">
                            Putra dari Bpk. Joko & Ibu Sri
                        </p>

                        <a
                            href="https://instagram.com/galangresti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purworejo-primary/30 hover:bg-purworejo-primary hover:text-white transition-all duration-300"
                        >
                            <Instagram className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">@galangresti</span>
                        </a>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
