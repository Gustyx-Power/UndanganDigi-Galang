"use client";

import { motion } from "framer-motion";
import React from "react";

interface OrnamentalFrameProps {
    children: React.ReactNode;
    className?: string;
}

// Top-left corner flourish SVG (floral swirl / batik hook)
const TopLeftCorner = () => (
    <motion.svg
        viewBox="0 0 100 100"
        className="absolute -top-2 -left-2 w-16 h-16 md:w-20 md:h-20 text-fusion-gold"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
        {/* Main curved flourish */}
        <motion.path
            d="M10,90 Q10,10 90,10"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />
        {/* Inner decorative curve */}
        <motion.path
            d="M20,80 Q20,20 80,20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        />
        {/* Outer swirl element */}
        <motion.path
            d="M5,70 Q5,5 70,5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        />
        {/* Corner floral dot */}
        <motion.circle
            cx="15"
            cy="15"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
        />
        {/* Small decorative dots */}
        <motion.circle
            cx="35"
            cy="12"
            r="2"
            fill="currentColor"
            opacity="0.6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.9 }}
        />
        <motion.circle
            cx="12"
            cy="35"
            r="2"
            fill="currentColor"
            opacity="0.6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
        />
        {/* Leaf-like swirl */}
        <motion.path
            d="M25,8 Q35,18 25,28 Q15,18 25,8"
            fill="currentColor"
            opacity="0.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
        />
        <motion.path
            d="M8,25 Q18,35 8,45 Q-2,35 8,25"
            fill="currentColor"
            opacity="0.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
        />
    </motion.svg>
);

// Bottom-right corner flourish (mirrored version)
const BottomRightCorner = () => (
    <motion.svg
        viewBox="0 0 100 100"
        className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 text-fusion-gold rotate-180"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
        {/* Main curved flourish */}
        <motion.path
            d="M10,90 Q10,10 90,10"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        />
        {/* Inner decorative curve */}
        <motion.path
            d="M20,80 Q20,20 80,20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        />
        {/* Outer swirl element */}
        <motion.path
            d="M5,70 Q5,5 70,5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        />
        {/* Corner floral dot */}
        <motion.circle
            cx="15"
            cy="15"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.9 }}
        />
        {/* Small decorative dots */}
        <motion.circle
            cx="35"
            cy="12"
            r="2"
            fill="currentColor"
            opacity="0.6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
        />
        <motion.circle
            cx="12"
            cy="35"
            r="2"
            fill="currentColor"
            opacity="0.6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1.1 }}
        />
        {/* Leaf-like swirl */}
        <motion.path
            d="M25,8 Q35,18 25,28 Q15,18 25,8"
            fill="currentColor"
            opacity="0.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
        />
        <motion.path
            d="M8,25 Q18,35 8,45 Q-2,35 8,25"
            fill="currentColor"
            opacity="0.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
        />
    </motion.svg>
);

export default function OrnamentalFrame({ children, className = "" }: OrnamentalFrameProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Top-left corner ornament */}
            <TopLeftCorner />

            {/* Bottom-right corner ornament */}
            <BottomRightCorner />

            {/* Content */}
            {children}
        </div>
    );
}
