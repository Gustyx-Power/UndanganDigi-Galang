"use client";

import React from "react";

interface OrnamentProps {
    className?: string;
}

/**
 * Gunungan Divider - Javanese stylized mountain/cosmic tree shape
 * Used at the bottom of sections (e.g., Groom's section)
 */
export function GununganDivider({ className = "" }: OrnamentProps) {
    return (
        <svg
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            className={`w-full h-24 md:h-32 lg:h-40 ${className}`}
            fill="currentColor"
        >
            {/* Base layer - wide foundation */}
            <path
                d="M0,200 L0,180 Q150,160 300,150 Q450,140 600,100 Q750,140 900,150 Q1050,160 1200,180 L1200,200 Z"
                opacity="0.3"
            />
            {/* Mid layer - body of gunungan */}
            <path
                d="M0,200 L150,170 Q350,140 450,110 Q550,80 600,50 Q650,80 750,110 Q850,140 1050,170 L1200,200 Z"
                opacity="0.5"
            />
            {/* Inner decorative layer */}
            <path
                d="M200,200 L300,160 Q450,120 550,80 Q580,60 600,40 Q620,60 650,80 Q750,120 900,160 L1000,200 Z"
                opacity="0.7"
            />
            {/* Peak with ornamental top */}
            <path
                d="M350,200 L400,150 Q500,100 560,60 Q580,40 600,20 Q620,40 640,60 Q700,100 800,150 L850,200 Z"
            />
            {/* Ornamental finial at the peak */}
            <ellipse cx="600" cy="15" rx="15" ry="12" />
            <path
                d="M595,28 Q600,35 605,28"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
            />
            {/* Left wing decorations */}
            <path
                d="M300,175 Q350,160 380,170 Q360,160 370,145 Q400,155 420,145"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.6"
            />
            {/* Right wing decorations (mirrored) */}
            <path
                d="M900,175 Q850,160 820,170 Q840,160 830,145 Q800,155 780,145"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.6"
            />
        </svg>
    );
}

/**
 * Cloud Divider - Megamendung-style layered clouds (Cirebon batik)
 * Used at the bottom of sections (e.g., Bride's section)
 */
export function CloudDivider({ className = "" }: OrnamentProps) {
    return (
        <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className={`w-full h-20 md:h-28 lg:h-36 ${className}`}
            fill="currentColor"
        >
            {/* Layer 1 - outermost clouds */}
            <path
                d="M0,160 L0,100 
                   Q60,80 120,95 Q180,110 240,90 Q300,70 360,85 
                   Q420,100 480,80 Q540,60 600,75 Q660,90 720,70 
                   Q780,50 840,65 Q900,80 960,60 Q1020,40 1080,55 
                   Q1140,70 1200,55 Q1260,40 1320,60 Q1380,80 1440,70 
                   L1440,160 Z"
                opacity="0.2"
            />
            {/* Layer 2 */}
            <path
                d="M0,160 L0,110 
                   Q80,95 160,105 Q240,115 320,100 Q400,85 480,95 
                   Q560,105 640,90 Q720,75 800,85 Q880,95 960,80 
                   Q1040,65 1120,78 Q1200,90 1280,75 Q1360,60 1440,80 
                   L1440,160 Z"
                opacity="0.35"
            />
            {/* Layer 3 */}
            <path
                d="M0,160 L0,115 
                   Q70,105 140,115 Q210,125 280,110 Q350,95 420,108 
                   Q490,120 560,105 Q630,90 700,102 Q770,115 840,100 
                   Q910,85 980,98 Q1050,110 1120,95 Q1190,80 1260,93 
                   Q1330,105 1440,90 L1440,160 Z"
                opacity="0.5"
            />
            {/* Layer 4 */}
            <path
                d="M0,160 L0,125 
                   Q90,115 180,125 Q270,135 360,120 Q450,105 540,118 
                   Q630,130 720,115 Q810,100 900,115 Q990,130 1080,115 
                   Q1170,100 1260,115 Q1350,130 1440,120 L1440,160 Z"
                opacity="0.7"
            />
            {/* Layer 5 - innermost solid */}
            <path
                d="M0,160 L0,135 
                   Q100,128 200,135 Q300,142 400,132 Q500,122 600,130 
                   Q700,138 800,128 Q900,118 1000,128 Q1100,138 1200,130 
                   Q1300,122 1440,132 L1440,160 Z"
            />
        </svg>
    );
}

/**
 * Golden Corner - Intricate floral/batik L-shaped corner decoration
 * Used for screen border decorations (top-left, bottom-right)
 */
export function GoldenCorner({ className = "" }: OrnamentProps) {
    return (
        <svg
            viewBox="0 0 200 200"
            className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 ${className}`}
            fill="currentColor"
        >
            {/* Main corner frame */}
            <path
                d="M0,0 L0,180 Q0,200 20,200 L40,200 L40,180 
                   Q40,40 40,40 L180,40 L180,20 Q180,0 160,0 Z"
                opacity="0.2"
            />
            
            {/* Inner decorative border */}
            <path
                d="M10,10 L10,160 Q10,170 20,170 L30,170 L30,150 
                   Q30,30 30,30 L150,30 L150,20 Q150,10 140,10 Z"
                opacity="0.4"
            />

            {/* Corner floral rosette */}
            <g transform="translate(25, 25)">
                {/* Center bloom */}
                <circle cx="0" cy="0" r="8" opacity="0.8" />
                <circle cx="0" cy="0" r="4" opacity="0.4" />
                
                {/* Petals radiating outward */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <ellipse
                        key={angle}
                        cx="12"
                        cy="0"
                        rx="6"
                        ry="3"
                        opacity="0.6"
                        transform={`rotate(${angle})`}
                    />
                ))}
            </g>

            {/* Vertical vine running down */}
            <g opacity="0.7">
                <path
                    d="M20,50 Q25,70 20,90 Q15,110 20,130 Q25,150 20,170"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                {/* Leaves on vine */}
                <ellipse cx="28" cy="65" rx="8" ry="4" transform="rotate(-30, 28, 65)" opacity="0.5" />
                <ellipse cx="12" cy="95" rx="8" ry="4" transform="rotate(30, 12, 95)" opacity="0.5" />
                <ellipse cx="28" cy="125" rx="8" ry="4" transform="rotate(-30, 28, 125)" opacity="0.5" />
                <ellipse cx="12" cy="155" rx="8" ry="4" transform="rotate(30, 12, 155)" opacity="0.5" />
            </g>

            {/* Horizontal vine running right */}
            <g opacity="0.7">
                <path
                    d="M50,20 Q70,25 90,20 Q110,15 130,20 Q150,25 170,20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                {/* Leaves on vine */}
                <ellipse cx="65" cy="28" rx="4" ry="8" transform="rotate(-30, 65, 28)" opacity="0.5" />
                <ellipse cx="95" cy="12" rx="4" ry="8" transform="rotate(30, 95, 12)" opacity="0.5" />
                <ellipse cx="125" cy="28" rx="4" ry="8" transform="rotate(-30, 125, 28)" opacity="0.5" />
                <ellipse cx="155" cy="12" rx="4" ry="8" transform="rotate(30, 155, 12)" opacity="0.5" />
            </g>

            {/* Small accent dots along edges */}
            <circle cx="5" cy="60" r="2" opacity="0.4" />
            <circle cx="5" cy="100" r="2" opacity="0.4" />
            <circle cx="5" cy="140" r="2" opacity="0.4" />
            <circle cx="60" cy="5" r="2" opacity="0.4" />
            <circle cx="100" cy="5" r="2" opacity="0.4" />
            <circle cx="140" cy="5" r="2" opacity="0.4" />

            {/* Filigree curls at corner edges */}
            <path
                d="M35,175 Q45,185 35,195 Q25,185 35,175"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.5"
            />
            <path
                d="M175,35 Q185,45 195,35 Q185,25 175,35"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.5"
            />
        </svg>
    );
}

/**
 * Batik Pattern Overlay - Kawung motif repeating pattern
 * Used as a texture overlay for backgrounds
 */
export function BatikPatternOverlay({ className = "" }: OrnamentProps) {
    const patternId = React.useId();

    return (
        <svg
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                {/* Kawung Pattern - Traditional Javanese batik motif */}
                <pattern
                    id={patternId}
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                >
                    {/* Central ellipse (kawung seed) */}
                    <ellipse cx="30" cy="30" rx="12" ry="18" fill="currentColor" opacity="0.08" />
                    
                    {/* Four-fold rotated petals */}
                    <ellipse cx="30" cy="30" rx="18" ry="12" fill="currentColor" opacity="0.06" />
                    
                    {/* Corner connecting elements */}
                    <ellipse cx="0" cy="0" rx="10" ry="14" fill="currentColor" opacity="0.05" />
                    <ellipse cx="60" cy="0" rx="10" ry="14" fill="currentColor" opacity="0.05" />
                    <ellipse cx="0" cy="60" rx="10" ry="14" fill="currentColor" opacity="0.05" />
                    <ellipse cx="60" cy="60" rx="10" ry="14" fill="currentColor" opacity="0.05" />
                    
                    {/* Horizontal corner connectors */}
                    <ellipse cx="0" cy="0" rx="14" ry="10" fill="currentColor" opacity="0.04" />
                    <ellipse cx="60" cy="0" rx="14" ry="10" fill="currentColor" opacity="0.04" />
                    <ellipse cx="0" cy="60" rx="14" ry="10" fill="currentColor" opacity="0.04" />
                    <ellipse cx="60" cy="60" rx="14" ry="10" fill="currentColor" opacity="0.04" />
                    
                    {/* Center dot */}
                    <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.1" />
                    
                    {/* Small accent dots at corners */}
                    <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.06" />
                    <circle cx="60" cy="0" r="3" fill="currentColor" opacity="0.06" />
                    <circle cx="0" cy="60" r="3" fill="currentColor" opacity="0.06" />
                    <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.06" />
                </pattern>
            </defs>
            
            {/* Apply pattern to cover entire area */}
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
    );
}
