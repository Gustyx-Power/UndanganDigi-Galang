"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import SectionDivider from "@/src/components/ui/SectionDivider";
import OrnamentalFrame from "@/src/components/ui/OrnamentalFrame";

const COUPLE_IMAGES = {
    bride: "/images/couple/bride.jpg",
    groom: "/images/couple/groom.jpg",
};

export default function CoupleSection() {
    return (
        <section id="couple" className="w-full py-20 pb-40 bg-fusion-light relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-purworejo bg-repeat opacity-20 pointer-events-none" />
            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="font-script text-5xl md:text-6xl text-fusion-dark mb-4">Mempelai</h2>
                    <p className="font-serif text-gray-600 italic">Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    <OrnamentalFrame>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="border border-garut-primary/20 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                            style={{
                                backgroundColor: '#F0F9FF',
                                backgroundImage: "url('/images/batik/garut-batik.png')",
                                backgroundRepeat: 'repeat',
                                backgroundSize: '150px',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            <div className="relative w-48 h-48 mb-6">
                                <div className="absolute inset-0 rounded-full border-4 border-garut-primary/30 animate-spin-slow-reverse" />
                                <div className="w-full h-full rounded-full bg-garut-primary/10 overflow-hidden border-4 border-white shadow-md relative">
                                    <Image
                                        src={COUPLE_IMAGES.bride}
                                        alt="Foto Mempelai Wanita - Resti Putri"
                                        fill
                                        className="object-cover"
                                        sizes="192px"
                                        priority
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-garut-primary/50 font-sans text-xs tracking-widest uppercase">
                                        Bride
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-script text-5xl text-fusion-dark mb-2">Resti Putri</h3>
                            <p className="font-sans text-sm text-gray-600 mb-6">
                                Putri Bpk. Asep & Ibu Elis
                            </p>

                            <a
                                href="https://instagram.com/restigalang"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-garut-primary/20 text-garut-primary text-sm font-bold shadow-sm hover:bg-garut-primary hover:text-white transition-colors duration-300"
                            >
                                <Instagram className="w-4 h-4" />
                                @restigalang
                            </a>
                        </motion.div>
                    </OrnamentalFrame>

                    <OrnamentalFrame>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="border border-purworejo-primary/20 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                            style={{
                                backgroundColor: '#FDF8F5',
                                backgroundImage: "url('/images/batik/purworejo-batik.png')",
                                backgroundRepeat: 'repeat',
                                backgroundSize: '200px',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            <div className="relative w-48 h-48 mb-6">
                                <div className="absolute inset-0 rounded-full border-4 border-purworejo-primary/30 animate-spin-slow" />
                                <div className="w-full h-full rounded-full bg-purworejo-primary/10 overflow-hidden border-4 border-white shadow-md relative">
                                    <Image
                                        src={COUPLE_IMAGES.groom}
                                        alt="Foto Mempelai Pria - Galang Rambuanarki"
                                        fill
                                        className="object-cover"
                                        sizes="192px"
                                        priority
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-purworejo-primary/50 font-sans text-xs tracking-widest uppercase">
                                        Groom
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-script text-5xl text-fusion-dark mb-2">Galang Rambuanarki</h3>
                            <p className="font-sans text-sm text-gray-600 mb-6">
                                Putra Bpk. Joko & Ibu Sri
                            </p>

                            <a
                                href="https://instagram.com/galangchoro_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-purworejo-primary/20 text-purworejo-primary text-sm font-bold shadow-sm hover:bg-purworejo-primary hover:text-white transition-colors duration-300"
                            >
                                <Instagram className="w-4 h-4" />
                                @galangchoro_
                            </a>
                        </motion.div>
                    </OrnamentalFrame>

                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <SectionDivider variant="mountain" color="#1A5F7A" />
            </div>
        </section>
    );
}
