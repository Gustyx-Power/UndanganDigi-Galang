"use client";

import React from "react";

interface CulturalDividerProps {
    color?: string;
    className?: string;
}

export default function CulturalDivider({
    color = "#F8F6F4",
    className = ""
}: CulturalDividerProps) {
    return (
        <div className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] ${className}`}>
            <svg
                viewBox="0 0 1440 150"
                preserveAspectRatio="none"
                className="w-full h-20 md:h-28 lg:h-36"
                fill={color}
            >
                {/* Left Megamendung Clouds */}
                <path
                    d="M0,150 L0,100 
                       Q50,85 100,95 Q150,105 200,90 Q250,75 300,88 
                       Q350,100 400,85 Q450,70 500,80"
                    opacity="0.4"
                />
                <path
                    d="M0,150 L0,110 
                       Q60,100 120,108 Q180,116 240,105 
                       Q300,94 360,102 Q420,110 480,98"
                    opacity="0.6"
                />

                {/* Right Megamendung Clouds */}
                <path
                    d="M1440,150 L1440,100 
                       Q1390,85 1340,95 Q1290,105 1240,90 Q1190,75 1140,88 
                       Q1090,100 1040,85 Q990,70 940,80"
                    opacity="0.4"
                />
                <path
                    d="M1440,150 L1440,110 
                       Q1380,100 1320,108 Q1260,116 1200,105 
                       Q1140,94 1080,102 Q1020,110 960,98"
                    opacity="0.6"
                />

                {/* Central Gunungan (Stylized Mountain/Cosmic Tree) */}
                <path
                    d="M480,150 
                       L500,120 
                       Q550,100 600,85 
                       Q650,70 680,55 
                       Q700,45 720,30 
                       L720,25 
                       Q720,20 720,25 
                       L720,30 
                       Q740,45 760,55 
                       Q790,70 840,85 
                       Q890,100 940,120 
                       L960,150 Z"
                    opacity="0.5"
                />

                {/* Main Gunungan Peak */}
                <path
                    d="M520,150 
                       L560,115 
                       Q610,90 660,70 
                       Q690,55 710,40 
                       Q720,32 720,28 
                       Q720,32 730,40 
                       Q750,55 780,70 
                       Q830,90 880,115 
                       L920,150 Z"
                    opacity="0.75"
                />

                {/* Innermost Gunungan Silhouette */}
                <path
                    d="M560,150 
                       L600,120 
                       Q650,95 690,70 
                       Q710,55 720,42 
                       Q730,55 750,70 
                       Q790,95 840,120 
                       L880,150 Z"
                />

                {/* Gunungan Finial (Top Ornament) */}
                <ellipse cx="720" cy="22" rx="8" ry="6" />
                <circle cx="720" cy="14" r="4" />

                {/* Bottom fill connecting clouds to gunungan */}
                <path
                    d="M0,150 L0,120 
                       Q100,110 200,115 Q300,120 400,112 
                       Q480,105 560,120 L560,150 Z"
                />
                <path
                    d="M880,150 L880,120 
                       Q960,105 1040,112 Q1140,120 1240,115 
                       Q1340,110 1440,120 L1440,150 Z"
                />
            </svg>
        </div>
    );
}
