/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                surface: '#0A0A0A',
                accent: {
                    primary: '#00F6FF',
                    secondary: '#00F6FF',
                },
                text: {
                    primary: '#FFFFFF',
                    muted: 'rgba(255, 255, 255, 0.7)',
                },
                primary: {
                    bg: '#000000',
                    'bg-secondary': '#0A0A0A',
                    'bg-tertiary': '#121212',
                    'bg-elevated': '#1A1A1A',
                },
            },
            fontFamily: {
                heading: ["var(--font-circuit-forem)", "sans-serif"],
                body: ["var(--font-body)"],
                mono: ["var(--font-mono)", "monospace"],
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(0, 246, 255, 0.3), 0 0 40px rgba(0, 246, 255, 0.1)',
                'underglow-cyan': '0 10px 30px -10px rgba(0, 246, 255, 0.2)',
            },
            animation: {
                'pulse-cyan': 'pulseCyan 2s ease-in-out infinite',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'scanline': 'scanline 8s linear infinite',
            },
            keyframes: {
                pulseCyan: {
                    '0%, 100%': { opacity: 0.8, boxShadow: '0 0 15px rgba(0, 246, 255, 0.2)' },
                    '50%': { opacity: 1, boxShadow: '0 0 25px rgba(0, 246, 255, 0.4)' },
                },
                fadeIn: {
                    from: { opacity: 0, transform: 'translateY(10px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
            },
        },
    },
    plugins: [],
}

