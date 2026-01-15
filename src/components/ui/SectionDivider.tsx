"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
    variant: "clouds" | "mountain";
    color: string;
    flip?: boolean;
}

// Megamendung-style cloud waves (Garut/Cirebon batik) - Single unit for tiling
const CloudsSVG = ({ color }: { color: string }) => (
    <svg
        viewBox="0 0 1800 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24 lg:h-32 flex-shrink-0"
        style={{ color, minWidth: "100%" }}
    >
        {/* Multiple layered wave curves for depth */}
        <path
            d="M0,60 C150,90 300,30 450,60 C600,90 750,30 900,60 C1050,90 1200,30 1350,60 C1500,90 1650,30 1800,60 L1800,120 L0,120 Z"
            fill="currentColor"
            opacity="0.3"
        />
        <path
            d="M0,70 C100,95 250,45 400,70 C550,95 700,45 850,70 C1000,95 1150,45 1300,70 C1450,95 1600,45 1800,70 L1800,120 L0,120 Z"
            fill="currentColor"
            opacity="0.5"
        />
        <path
            d="M0,80 C120,100 280,60 450,80 C620,100 780,60 950,80 C1120,100 1280,60 1450,80 C1620,100 1750,70 1800,85 L1800,120 L0,120 Z"
            fill="currentColor"
            opacity="0.7"
        />
        <path
            d="M0,90 C100,105 200,75 350,90 C500,105 650,75 800,90 C950,105 1100,75 1250,90 C1400,105 1550,80 1800,95 L1800,120 L0,120 Z"
            fill="currentColor"
        />
    </svg>
);

// Gunungan Wayang / Stylized mountain peaks (Purworejo/Javanese style)
const MountainPath = () => (
    <>
        {/* Background hills - softer */}
        <path
            d="M0,100 L200,40 L400,80 L600,20 L800,70 L1000,30 L1200,60 L1400,25 L1600,55 L1800,35 L1800,120 L0,120 Z"
            fill="currentColor"
            opacity="0.3"
        />
        {/* Mid-ground hills */}
        <path
            d="M0,100 L150,55 L350,85 L550,35 L750,75 L950,45 L1150,70 L1350,40 L1550,65 L1750,50 L1800,55 L1800,120 L0,120 Z"
            fill="currentColor"
            opacity="0.5"
        />
        {/* Foreground Gunungan peaks */}
        <path
            d="M0,100 L100,70 L250,95 L400,50 L550,85 L700,55 L900,80 L1100,45 L1300,75 L1500,55 L1700,80 L1800,65 L1800,120 L0,120 Z"
            fill="currentColor"
            opacity="0.7"
        />
        {/* Main peak line */}
        <path
            d="M0,100 L180,75 L360,95 L540,60 L720,88 L900,65 L1080,90 L1260,58 L1440,82 L1620,70 L1800,85 L1800,120 L0,120 Z"
            fill="currentColor"
        />
    </>
);

// Clouds variant with horizontal scrolling animation ("Awan Berjalan")
const ScrollingClouds = ({ color, flip }: { color: string; flip: boolean }) => (
    <div
        className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
        style={{ marginTop: flip ? 0 : "-1px", marginBottom: flip ? "-1px" : 0 }}
    >
        <motion.div
            className="flex w-[200%]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                x: {
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25,
                },
            }}
        >
            {/* Two copies for seamless loop */}
            <CloudsSVG color={color} />
            <CloudsSVG color={color} />
        </motion.div>
    </div>
);

// Mountains variant with subtle breathing animation
const BreathingMountains = ({ color, flip }: { color: string; flip: boolean }) => (
    <div
        className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
        style={{ marginTop: flip ? 0 : "-1px", marginBottom: flip ? "-1px" : 0 }}
    >
        <motion.svg
            viewBox="0 0 1800 120"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-24 lg:h-32"
            style={{ color }}
            initial={{ y: 0 }}
            animate={{ y: [0, -3, 0] }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <MountainPath />
        </motion.svg>
    </div>
);

export default function SectionDivider({ variant, color, flip = false }: SectionDividerProps) {
    if (variant === "clouds") {
        return <ScrollingClouds color={color} flip={flip} />;
    }
    return <BreathingMountains color={color} flip={flip} />;
}
