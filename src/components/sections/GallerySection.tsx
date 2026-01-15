"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
    { id: 1, src: "/images/gallery/gallery-1.jpg", alt: "Foto Prewedding 1" },
    { id: 2, src: "/images/gallery/gallery-2.jpg", alt: "Foto Prewedding 2" },
    { id: 3, src: "/images/gallery/gallery-3.jpg", alt: "Foto Prewedding 3" },
    { id: 4, src: "/images/gallery/gallery-4.jpg", alt: "Foto Prewedding 4" },
    { id: 5, src: "/images/gallery/gallery-5.jpg", alt: "Foto Prewedding 5" },
    { id: 6, src: "/images/gallery/gallery-6.jpg", alt: "Foto Prewedding 6" },
];

export default function GallerySection() {
    return (
        <section id="gallery" className="w-full py-20 bg-fusion-light overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="font-script text-5xl md:text-6xl text-fusion-dark mb-4">Galeri Bahagia</h2>
                    <p className="font-serif text-gray-600">Momen indah yang kami abadikan bersama</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {GALLERY_IMAGES.map((photo, index) => {
                        const isGarutTheme = index % 2 === 0;
                        const borderColor = isGarutTheme ? "border-garut-primary" : "border-purworejo-primary";
                        const bgColor = isGarutTheme ? "bg-garut-primary/10" : "bg-purworejo-primary/10";
                        const rotation = index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]";

                        return (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="flex justify-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 0 }}
                                    className={`relative p-4 bg-white shadow-xl border-t-4 ${borderColor} transform ${rotation} transition-all duration-300 cursor-pointer w-full max-w-sm`}
                                >
                                    <div className={`relative aspect-[3/4] w-full overflow-hidden ${bgColor}`}>
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-sans text-sm tracking-widest uppercase">
                                            Gallery {photo.id}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
