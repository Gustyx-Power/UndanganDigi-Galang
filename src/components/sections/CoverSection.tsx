"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DoorOpen } from "lucide-react";

interface CoverSectionProps {
    guestName: string;
    onOpen?: () => void;
}

export default function CoverSection({ guestName, onOpen }: CoverSectionProps) {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened(true);
        if (onOpen) {
            onOpen();
        }

        // Smooth scroll to the next section
        const nextSection = document.getElementById("hero");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Gradient - Brightened */}
            <div className="absolute inset-0 bg-gradient-to-br from-garut-primary to-purworejo-primary opacity-90 z-0" />

            {/* Overlay Pattern/Texture (Optional subtle overlay for readability) */}
            <div className="absolute inset-0 bg-black/20 z-0" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-md mx-auto h-full p-6 flex flex-col items-center justify-center text-center">

                {/* Decorative Border */}
                <div className="absolute inset-4 border-2 border-fusion-gold/50 rounded-3xl pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Bilingual Opening */}
                    <h2 className="font-serif text-fusion-light/80 text-sm tracking-widest uppercase">
                        The Wedding of
                    </h2>

                    {/* Couple Names - Solid Color for Visibility */}
                    <h1 className="font-script text-6xl md:text-8xl text-fusion-gold drop-shadow-md">
                        Galang & Resti
                    </h1>

                    {/* Guest Name Card */}
                    <div className="mt-8 w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl">
                        <p className="text-fusion-light/80 text-xs mb-2 font-serif">
                            Kepada Yth. Bapak/Ibu/Saudara/i:
                        </p>
                        <h3 className="text-xl font-bold text-white tracking-wide">
                            {guestName}
                        </h3>
                    </div>

                    {/* Open Invitation Button */}
                    <motion.button
                        onClick={handleOpen}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 group relative px-8 py-3 bg-fusion-gold text-fusion-dark font-bold rounded-full flex items-center gap-2 shadow-lg hover:shadow-fusion-gold/50 transition-all"
                    >
                        <span className="relative z-10">Buka Undangan</span>
                        <DoorOpen className="w-5 h-5 relative z-10" />

                        {/* Pulse Animation */}
                        <span className="absolute inset-0 rounded-full bg-fusion-gold opacity-75 animate-ping group-hover:animate-none" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
