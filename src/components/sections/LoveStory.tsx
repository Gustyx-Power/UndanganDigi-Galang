"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Star } from "lucide-react";

const milestones = [
    {
        title: "Pertama Bertemu",
        description: "Pertemuan pertama kami yang tak terduga, membawa cerita manis yang menjadi awal segalanya.",
        year: "2024",
        icon: Users,
        theme: "garut"
    },
    {
        title: "Menjalin Kasih",
        description: "Kami memutuskan untuk melangkah bersama, menyatukan hati dan tujuan dalam ikatan kasih sayang.",
        year: "2025",
        icon: Heart,
        theme: "purworejo"
    },
    {
        title: "Lamaran",
        description: "Momen sakral dimana keseriusan kami teruji dan restu keluarga menyertai langkah kami.",
        year: "2026",
        icon: Star,
        theme: "garut"
    }
];

export default function LoveStorySection() {
    return (
        <section className="w-full py-20 bg-fusion-light overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="font-script text-5xl md:text-6xl text-fusion-dark mb-4">Kisah Cinta</h2>
                    <p className="font-serif text-gray-600 italic">Perjalanan hati kami menuju ikatan suci</p>
                </div>

                <div className="relative">
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-fusion-gold/30 -translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {milestones.map((item, index) => {
                            const isRight = index % 2 !== 0;
                            const themeColor = item.theme === 'garut' ? 'text-garut-primary' : 'text-purworejo-primary';
                            const borderColor = item.theme === 'garut' ? 'border-garut-secondary' : 'border-purworejo-secondary';
                            const bgColor = item.theme === 'garut' ? 'bg-garut-primary' : 'bg-purworejo-primary';

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col md:flex-row ${isRight ? 'md:flex-row-reverse' : ''} items-center w-full`}
                                >
                                    <div className="hidden md:block w-1/2" />

                                    <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${bgColor} border-4 border-white shadow-lg flex items-center justify-center z-10`}>
                                        <item.icon className="w-5 h-5 text-white" />
                                    </div>

                                    <div className={`ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-md border-t-4 ${borderColor} ${isRight ? 'md:mr-8' : 'md:ml-8'} text-left`}>
                                        <span className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full ${bgColor} mb-3`}>
                                            {item.year}
                                        </span>
                                        <h3 className={`font-serif text-xl font-bold mb-2 ${themeColor}`}>
                                            {item.title}
                                        </h3>
                                        <p className="font-sans text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
