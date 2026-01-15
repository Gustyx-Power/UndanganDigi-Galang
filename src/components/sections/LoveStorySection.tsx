"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Users } from "lucide-react";

const milestones = [
    {
        year: "2024",
        title: "Pertama Bertemu",
        description: "Pertemuan pertama kami di Kampus saat kegiatan organisasi. Awalnya hanya sebatas rekan kerja, namun takdir berkata lain.",
        theme: "garut",
        icon: Users,
    },
    {
        year: "2025",
        title: "Menjalin Kasih",
        description: "Kami memutuskan untuk melangkah ke jenjang yang lebih serius, saling mengenal keluarga dan menyatukan visi masa depan.",
        theme: "purworejo",
        icon: Heart,
    },
    {
        year: "2026",
        title: "Lamaran",
        description: "Pertemuan dua keluarga besar untuk mengikat janji suci menuju pernikahan yang kami impikan.",
        theme: "garut",
        icon: Star,
    },
];

export default function LoveStorySection() {
    return (
        <section className="w-full py-20 bg-fusion-light overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative">

                <div className="text-center mb-16">
                    <h2 className="font-script text-5xl md:text-6xl text-fusion-dark mb-4">Kisah Cinta Kami</h2>
                    <p className="font-serif text-gray-600">Setiap cerita adalah anugerah terindah</p>
                </div>

                <div className="relative">
                    {/* Vertical Line - LEFT on Mobile, CENTER on Desktop */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-fusion-gold/30 -translate-x-1/2 md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-0">
                        {milestones.map((item, index) => {
                            const isEven = index % 2 === 0; // 0, 2 (Garut/Left on Desktop)

                            // Mobile Animation (Always Slide from Right)
                            // Desktop Animation (Left if Even, Right if Odd)
                            const initialX = isEven ? -50 : 50;

                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between w-full ${!isEven ? 'md:flex-row-reverse' : ''} mb-8 md:mb-12 last:mb-0`}>

                                    {/* Spacer for Desktop Layout alignment */}
                                    <div className="hidden md:block w-5/12" />

                                    {/* Icon Node - Absolute Center on Desktop, Left on Mobile */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-fusion-light shadow-lg z-10">
                                        <div className={`w-3 h-3 rounded-full ${item.theme === 'garut' ? 'bg-garut-primary' : 'bg-purworejo-primary'}`} />
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }} // Mobile default: slide from right
                                        whileInView={{ opacity: 1, x: 0 }}
                                        // Override for desktop in className if needed, but framer motion handles simple responsive prop logic poorly broadly. 
                                        // We'll use a safer approach: Just generic Fade Up/In for reliability across breakpoints or conditional variants.
                                        // Let's us conditional variants for cleaner code.
                                        variants={{
                                            hidden: { opacity: 0, x: 0, y: 50 },
                                            visible: { opacity: 1, x: 0, y: 0 }
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className={`
                        text-left ml-12 md:ml-0
                        w-[calc(100%-3rem)] md:w-5/12 
                        bg-white p-6 rounded-xl shadow-md border-t-4
                        ${item.theme === 'garut' ? 'border-garut-primary' : 'border-purworejo-primary'}
                    `}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${item.theme === 'garut' ? 'bg-garut-primary' : 'bg-purworejo-primary'}`}>
                                                {item.year}
                                            </span>
                                            <item.icon className={`w-5 h-5 ${item.theme === 'garut' ? 'text-garut-primary' : 'text-purworejo-primary'}`} />
                                        </div>

                                        <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="font-sans text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    </motion.div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
