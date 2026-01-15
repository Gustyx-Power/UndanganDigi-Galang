import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Tema Garut (Sunda)
                garut: {
                    primary: "#1A5F7A",
                    secondary: "#57C5B6",
                    bg: "#F0F9FF",
                },
                // Tema Purworejo (Jawa)
                purworejo: {
                    primary: "#8D493A",
                    secondary: "#D0B8A8",
                    bg: "#FDF8F5",
                },
                // Elemen Dekoratif & Text
                fusion: {
                    gold: "#D4AF37",
                    dark: "#2D2424",
                    light: "#F8F6F4",
                }
            },
            fontFamily: {
                script: ["var(--font-great-vibes)"],
                serif: ["var(--font-playfair)"],
                sans: ["var(--font-lato)"],
                arabic: ["var(--font-amiri)"],
            },
            backgroundImage: {
                'gradient-fusion': 'linear-gradient(to right, #1A5F7A, #8D493A)',
            }
        },
    },
    plugins: [],
};
export default config;