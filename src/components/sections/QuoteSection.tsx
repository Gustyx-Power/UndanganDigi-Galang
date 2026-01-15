"use client";

import React from "react";
import { motion } from "framer-motion";

export default function QuoteSection() {
    return (
        <section className="relative w-full py-20 bg-fusion-light flex items-center justify-center overflow-hidden">

            {/* Decorative Borders */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fusion-gold/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fusion-gold/50 to-transparent" />

            <div className="max-w-2xl px-6 text-center relative z-10">

                {/* Basmalah */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <div className="font-arabic text-3xl md:text-4xl text-fusion-dark" dir="rtl">
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                    </div>
                </motion.div>

                {/* Quran Verse */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <p className="font-arabic text-2xl md:text-3xl leading-loose md:leading-loose text-fusion-dark" dir="rtl">
                        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                    </p>
                </motion.div>

                {/* Translation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <p className="font-serif italic text-gray-600 text-sm md:text-base leading-relaxed">
                        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                    </p>
                </motion.div>

                {/* Source */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="font-sans font-bold text-fusion-gold tracking-widest text-sm uppercase">
                        QS. Ar-Rum: 21
                    </span>
                </motion.div>

            </div>
        </section>
    );
}
