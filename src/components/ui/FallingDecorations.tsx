"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Melati (Jasmine) flower SVG - white/yellowish petals
const MelatiFlower = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 40 40"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* 5 petals arranged in a circle */}
        <ellipse cx="20" cy="10" rx="6" ry="10" fill="#FFF9E6" opacity="0.9" />
        <ellipse
            cx="20"
            cy="10"
            rx="6"
            ry="10"
            fill="#FFF9E6"
            opacity="0.9"
            transform="rotate(72 20 20)"
        />
        <ellipse
            cx="20"
            cy="10"
            rx="6"
            ry="10"
            fill="#FFF9E6"
            opacity="0.9"
            transform="rotate(144 20 20)"
        />
        <ellipse
            cx="20"
            cy="10"
            rx="6"
            ry="10"
            fill="#FFF9E6"
            opacity="0.9"
            transform="rotate(216 20 20)"
        />
        <ellipse
            cx="20"
            cy="10"
            rx="6"
            ry="10"
            fill="#FFF9E6"
            opacity="0.9"
            transform="rotate(288 20 20)"
        />
        {/* Center */}
        <circle cx="20" cy="20" r="5" fill="#D4AF37" opacity="0.8" />
    </svg>
);

// Kawung motif - diamond/circle pattern (traditional Javanese batik)
const KawungMotif = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 40 40"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* 4 ellipses forming the kawung pattern */}
        <ellipse cx="20" cy="12" rx="8" ry="10" fill="#D0B8A8" opacity="0.7" />
        <ellipse cx="28" cy="20" rx="10" ry="8" fill="#D0B8A8" opacity="0.7" />
        <ellipse cx="20" cy="28" rx="8" ry="10" fill="#D0B8A8" opacity="0.7" />
        <ellipse cx="12" cy="20" rx="10" ry="8" fill="#D0B8A8" opacity="0.7" />
        {/* Center circle */}
        <circle cx="20" cy="20" r="4" fill="#8D493A" opacity="0.6" />
    </svg>
);

// Megamendung cloud curve (Cirebon batik motif)
const MegamendungCloud = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 60 30"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Layered cloud curves - characteristic of Megamendung */}
        <path
            d="M5 25 Q15 10, 30 15 Q45 8, 55 20"
            stroke="#1A5F7A"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
        />
        <path
            d="M8 22 Q18 8, 30 12 Q42 5, 52 18"
            stroke="#57C5B6"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
        />
        <path
            d="M10 19 Q20 6, 30 10 Q40 3, 50 16"
            stroke="#1A5F7A"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
        />
    </svg>
);

// Generate random number in range
const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

// Types for decoration elements
type DecorationType = "melati" | "kawung" | "megamendung";

interface DecorationElement {
    id: number;
    type: DecorationType;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
    swayAmplitude: number;
}

// Generate decoration elements
const generateDecorations = (count: number): DecorationElement[] => {
    const types: DecorationType[] = ["melati", "kawung", "megamendung"];

    return Array.from({ length: count }, (_, i) => ({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: randomInRange(0, 100), // percentage
        y: randomInRange(-10, 100), // start position percentage
        size: randomInRange(20, 45), // pixel size
        duration: randomInRange(10, 20), // animation duration
        delay: randomInRange(0, 10), // animation delay
        opacity: randomInRange(0.3, 0.7),
        swayAmplitude: randomInRange(20, 60), // horizontal sway
    }));
};

// Decoration component
const DecorationItem = ({ decoration }: { decoration: DecorationElement }) => {
    const sizeClass = `w-[${decoration.size}px] h-[${decoration.size}px]`;

    const renderShape = () => {
        const style = { width: decoration.size, height: decoration.size };

        switch (decoration.type) {
            case "melati":
                return <MelatiFlower className="w-full h-full" />;
            case "kawung":
                return <KawungMotif className="w-full h-full" />;
            case "megamendung":
                return <MegamendungCloud className="w-full h-full" />;
            default:
                return null;
        }
    };

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                left: `${decoration.x}%`,
                top: `${decoration.y}%`,
                width: decoration.size,
                height: decoration.type === "megamendung" ? decoration.size / 2 : decoration.size,
                opacity: decoration.opacity,
            }}
            initial={{
                y: -100,
                x: 0,
                rotate: 0,
            }}
            animate={{
                y: ["0vh", "110vh"],
                x: [0, decoration.swayAmplitude, 0, -decoration.swayAmplitude, 0],
                rotate: [0, 15, -15, 10, 0],
            }}
            transition={{
                y: {
                    duration: decoration.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: decoration.delay,
                },
                x: {
                    duration: decoration.duration / 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: decoration.delay,
                },
                rotate: {
                    duration: decoration.duration / 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: decoration.delay,
                },
            }}
        >
            {renderShape()}
        </motion.div>
    );
};

export default function FallingDecorations() {
    // Generate decorations only on the client side to prevent hydration mismatch
    const [decorations, setDecorations] = useState<DecorationElement[]>([]);

    useEffect(() => {
        setDecorations(generateDecorations(18));
    }, []);

    // Don't render anything until client-side generation is complete
    if (decorations.length === 0) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            {decorations.map((decoration) => (
                <DecorationItem key={decoration.id} decoration={decoration} />
            ))}
        </div>
    );
}
