"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionDivider from "@/src/components/ui/SectionDivider";

interface HeroSectionProps {
    guestName: string;
    onOpen?: () => void;
}

export default function HeroSection({ guestName, onOpen }: HeroSectionProps) {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened(true);
        onOpen?.();
        window.dispatchEvent(new CustomEvent("invitationOpened"));
        document.getElementById("opening")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

            <div
                className="absolute inset-0 z-0"
                style={{ background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f172a 40%, #3f0c15 100%)' }}
            />

            <div
                className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 3px, transparent 3.5px),
                        radial-gradient(circle at 0% 50%, rgba(255,255,255,1) 3px, transparent 3.5px),
                        radial-gradient(circle at 100% 50%, rgba(255,255,255,1) 3px, transparent 3.5px),
                        radial-gradient(circle at 50% 0%, rgba(255,255,255,1) 3px, transparent 3.5px),
                        radial-gradient(circle at 50% 100%, rgba(255,255,255,1) 3px, transparent 3.5px)
                    `,
                    backgroundSize: '35px 35px'
                }}
            />

            <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-6">

                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="tracking-[0.3em] uppercase text-sm md:text-base mb-8 text-amber-200/80"
                    style={{ fontFamily: 'var(--font-cinzel), "Cinzel Decorative", serif' }}
                >
                    The Wedding of
                </motion.span>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-12"
                >
                    <h1
                        className="text-7xl md:text-8xl lg:text-9xl text-gold-metallic leading-tight"
                        style={{ fontFamily: 'var(--font-great-vibes), "Great Vibes", cursive' }}
                    >
                        Galang
                    </h1>

                    <span
                        className="text-4xl md:text-6xl text-gold-metallic my-1 md:my-0"
                        style={{ fontFamily: 'var(--font-great-vibes), "Great Vibes", cursive' }}
                    >
                        &
                    </span>

                    <h1
                        className="text-7xl md:text-8xl lg:text-9xl text-gold-metallic leading-tight"
                        style={{ fontFamily: 'var(--font-great-vibes), "Great Vibes", cursive' }}
                    >
                        Resti
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full max-w-xs bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl mb-10"
                >
                    <p
                        className="text-amber-200/70 text-xs mb-3 tracking-widest uppercase"
                        style={{ fontFamily: 'var(--font-cinzel), "Cinzel Decorative", serif' }}
                    >
                        Kepada Yth.
                    </p>
                    <h3
                        className="text-xl md:text-2xl font-semibold text-white mb-5"
                        style={{ fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}
                    >
                        {guestName || "Tamu Undangan"}
                    </h3>

                    <button
                        onClick={handleOpen}
                        className="group relative w-full py-4 bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#DAA520] text-fusion-dark font-bold rounded-full shadow-lg hover:shadow-amber-400/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                        style={{ fontFamily: 'var(--font-cinzel), "Cinzel Decorative", serif' }}
                    >
                        <span className="relative z-10 text-sm tracking-widest uppercase">
                            Buka Undangan
                        </span>
                        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                className="absolute bottom-20 text-amber-200/50 z-10 flex flex-col items-center gap-1"
            >
                <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
                <ChevronDown className="w-4 h-4" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 z-10">
                <SectionDivider variant="clouds" color="#F0F9FF" />
            </div>

        </section>
    );
}
