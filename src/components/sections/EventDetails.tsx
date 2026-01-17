"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, PenTool, Utensils } from "lucide-react";
import OrnamentalFrame from "@/src/components/ui/OrnamentalFrame";

export default function EventDetails() {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Galang+%26+Resti&dates=20260228T010000Z/20260228T070000Z&details=Kami+mengundang+Anda+untuk+hadir+dalam+acara+pernikahan+kami.+Mohon+doa+restu.&location=Masjid+Agung+Garut+%26+Gedung+Pendopo+Garut`;
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.19395240417!2d107.90095856977539!3d-7.218554900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b1c4c1e4a199%3A0x401e8f1fc2974b0!2sMasjid%20Agung%20Garut!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid";

    return (
        <section id="event" className="w-full py-20 bg-fusion-light relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-garut bg-repeat opacity-20 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <h2 className="font-script text-5xl md:text-6xl text-fusion-dark mb-4 drop-shadow-sm">Rangkaian Acara</h2>
                    <p className="font-serif text-gray-600">Dengan memohon ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan kami sbb:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                    <OrnamentalFrame>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-xl overflow-hidden border border-fusion-gold/30 p-8 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-garut-bg flex items-center justify-center mb-6 text-garut-primary border border-garut-primary/20 group-hover:scale-110 transition-transform duration-300">
                                <PenTool className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-3xl text-fusion-dark mb-4">Akad Nikah</h3>

                            <div className="space-y-3 font-sans text-gray-600">
                                <div className="flex items-center justify-center gap-2">
                                    <Calendar className="w-4 h-4 text-fusion-gold" />
                                    <span>Sabtu, 28 Februari 2026</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4 text-fusion-gold" />
                                    <span>Pukul 08.00 WIB - Selesai</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <MapPin className="w-4 h-4 text-fusion-gold" />
                                    <span>Masjid Agung Garut</span>
                                </div>
                            </div>
                        </motion.div>
                    </OrnamentalFrame>

                    <OrnamentalFrame>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-xl overflow-hidden border border-fusion-gold/30 p-8 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-purworejo-bg flex items-center justify-center mb-6 text-purworejo-primary border border-purworejo-primary/20 group-hover:scale-110 transition-transform duration-300">
                                <Utensils className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-3xl text-fusion-dark mb-4">Resepsi Pernikahan</h3>

                            <div className="space-y-3 font-sans text-gray-600">
                                <div className="flex items-center justify-center gap-2">
                                    <Calendar className="w-4 h-4 text-fusion-gold" />
                                    <span>Sabtu, 28 Februari 2026</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4 text-fusion-gold" />
                                    <span>Pukul 11.00 WIB - 14.00 WIB</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <MapPin className="w-4 h-4 text-fusion-gold" />
                                    <span>Gedung Pendopo Garut</span>
                                </div>
                            </div>
                        </motion.div>
                    </OrnamentalFrame>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
                >
                    <a
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-transparent border-2 border-fusion-gold text-fusion-dark font-bold rounded-full shadow-sm hover:bg-fusion-gold hover:text-white hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                    >
                        <Calendar className="w-5 h-5" />
                        Simpan Tanggal
                    </a>
                    <a
                        href="https://maps.google.com/?q=Masjid+Agung+Garut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-transparent border-2 border-fusion-gold text-fusion-dark font-bold rounded-full shadow-sm hover:bg-fusion-gold hover:text-white hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                    >
                        <MapPin className="w-5 h-5" />
                        Lihat Lokasi
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full h-80 md:h-96 rounded-2xl shadow-xl overflow-hidden border border-fusion-gold/20"
                >
                    <iframe
                        src={googleMapsUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map Location"
                    />
                </motion.div>

            </div>
        </section>
    );
}
