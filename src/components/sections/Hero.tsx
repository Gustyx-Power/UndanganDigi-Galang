"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroBottomDivider from "@/src/components/ui/HeroBottomDivider";

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
        <section className="relative h-screen w-full">

            {/* LAYER 1: The Dark Luxury Base Gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f172a 40%, #3f0c15 100%)'
                }}
            ></div>

            {/* LAYER 2: The Batik Pattern Overlay */}
            <div
                className="absolute inset-0 z-0 mix-blend-multiply"
                style={{
                    backgroundImage: "url('/images/batik/garut-batik.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "300px",
                    opacity: 0.15
                }}
            ></div>

            {/* LAYER 3: Bottom Mountain Divider */}
            <HeroBottomDivider />

            {/* LAYER 4: Content - Fine-Tuned Layout */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full px-4 pb-24">

                {/* GROUP 1: Header & Names */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center justify-center mb-6"
                >
                    <p
                        className="tracking-[0.2em] text-xs md:text-sm text-amber-200/90 uppercase mb-2"
                        style={{ fontFamily: 'var(--font-cinzel), "Cinzel Decorative", serif' }}
                    >
                        The Wedding of
                    </p>

                    {/* Names Wrapper - Optimized Alignment */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4">
                        <h1
                            className="text-7xl md:text-8xl lg:text-9xl text-gold-metallic leading-[1.1] drop-shadow-lg p-2"
                            style={{ fontFamily: 'var(--font-great-vibes), "Great Vibes", cursive' }}
                        >
                            Galang
                        </h1>

                        {/* Ampersand: Larger & Lifted */}
                        <span
                            className="text-4xl md:text-6xl text-gold-metallic italic my-[-5px] md:mt-[-10px]"
                            style={{ fontFamily: 'var(--font-great-vibes), "Great Vibes", cursive' }}
                        >
                            &
                        </span>

                        <h1
                            className="text-7xl md:text-8xl lg:text-9xl text-gold-metallic leading-[1.1] drop-shadow-lg p-2"
                            style={{ fontFamily: 'var(--font-great-vibes), "Great Vibes", cursive' }}
                        >
                            Resti
                        </h1>
                    </div>
                </motion.div>

                {/* GROUP 2: Invitation Card (Closer to names) */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full max-w-xs bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl mb-8"
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

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    className="text-amber-200/50 flex flex-col items-center gap-1"
                >
                    <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
                    <ChevronDown className="w-4 h-4" />
                </motion.div>

            </div>

        </section>
    );
}
