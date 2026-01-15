"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Placeholder values as date is undetermined
        setTimeLeft({ days: 99, hours: 99, minutes: 99, seconds: 99 });
    }, []);

    if (!isMounted) {
        return null; // Or a loading skeleton if preferred, preventing hydration mismatch
    }

    const timeUnits = [
        { label: "Hari", value: timeLeft.days },
        { label: "Jam", value: timeLeft.hours },
        { label: "Menit", value: timeLeft.minutes },
        { label: "Detik", value: timeLeft.seconds },
    ];

    return (
        <section className="relative w-full py-24 bg-gradient-fusion text-white overflow-hidden flex flex-col items-center justify-center">

            {/* Container */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-4xl px-6 text-center z-10"
            >
                <h2 className="font-script text-5xl md:text-6xl mb-12 drop-shadow-md">
                    Menuju Hari Bahagia
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {timeUnits.map((unit, index) => (
                        <div
                            key={index}
                            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg"
                        >
                            <span className="font-serif text-4xl md:text-5xl font-bold mb-2">
                                {String(unit.value).padStart(2, "0")}
                            </span>
                            <span className="font-sans text-xs md:text-sm tracking-widest uppercase opacity-80">
                                {unit.label}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

        </section>
    );
}
