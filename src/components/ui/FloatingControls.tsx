"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play, Home, Heart, Calendar, Image as ImageIcon, Mail } from "lucide-react";

const AUDIO_SRC = "/audio/audio.ogg";

export default function FloatingControls() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [activeSection, setActiveSection] = useState("home");

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(err => {
                    console.log("Play failed:", err);
                });
            }
        }
    };

    const startAudio = async () => {
        if (audioRef.current && !isPlaying) {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (err) {
                console.log("Autoplay prevented:", err);
            }
        }
    };

    useEffect(() => {
        const handleInvitationOpen = () => startAudio();
        const handleFirstInteraction = () => setIsReady(true);

        window.addEventListener("invitationOpened", handleInvitationOpen);
        document.addEventListener("click", handleFirstInteraction, { once: true });
        document.addEventListener("touchstart", handleFirstInteraction, { once: true });

        return () => {
            window.removeEventListener("invitationOpened", handleInvitationOpen);
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("touchstart", handleFirstInteraction);
        };
    }, [isPlaying]);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
    };

    const navItems = [
        { id: "opening", icon: Home, label: "Home" },
        { id: "couple", icon: Heart, label: "Couple" },
        { id: "event", icon: Calendar, label: "Event" },
        { id: "gallery", icon: ImageIcon, label: "Gallery" },
        { id: "rsvp", icon: Mail, label: "RSVP" },
    ];

    return (
        <>
            <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />

            <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none flex flex-col items-center justify-end px-4 gap-4">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="pointer-events-auto bg-slate-900/80 backdrop-blur-md border border-amber-200/20 shadow-lg shadow-black/30 rounded-full px-6 py-3 flex items-center gap-6 md:gap-8"
                >
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex flex-col items-center justify-center gap-1 group transition-colors duration-300 ${activeSection === item.id ? "text-amber-300" : "text-amber-200/60 hover:text-amber-200"}`}
                        >
                            <item.icon className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
                        </button>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="fixed bottom-24 md:bottom-8 right-6 z-50"
            >
                <button
                    onClick={togglePlay}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl bg-fusion-gold text-white border-2 border-white hover:scale-105 active:scale-95 transition-all duration-300"
                    aria-label={isPlaying ? "Pause musik" : "Play musik"}
                >
                    <div className={`${isPlaying ? "animate-spin-slow" : ""}`}>
                        <Music className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white text-fusion-gold rounded-full p-1 shadow-sm text-[10px]">
                        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                    </div>
                </button>
            </motion.div>
        </>
    );
}
