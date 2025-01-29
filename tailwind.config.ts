import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            spacing: {
                25: '2px',
                50: '4px',
                100: '8px',
                150: '12px',
                200: '16px',
                300: '24px',
                400: '32px',
                500: '40px',
                600: '48px',
                800: '64px',
                1000: '80px',
                1200: '96px',
                1600: '128px',
            }
        },
    },
    plugins: [],
} satisfies Config;
