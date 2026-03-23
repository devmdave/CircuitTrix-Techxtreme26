import { Oxanium, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import './globals.css'
import CyberCursor from "@/components/ui/CyberCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";

const oxanium = Oxanium({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
    variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-mono",
});

const circuitForem = localFont({
    src: "./fonts/CircuitForemRegular.otf",
    variable: "--font-circuit-forem",
});

export const metadata = {
    title: 'CircuitTrix 2026 | Premier Tech Innovation Event',
    description: 'Where electronics meets code. Join CircuitTrix 2026 for cutting-edge competitions in IoT, robotics, AI, and more. Register now for the future of tech innovation.',
    keywords: 'CircuitTrix, tech event, hackathon, electronics, coding, robotics, IoT, AI, innovation, competition',
    authors: [{ name: 'CircuitTrix Team' }],
    openGraph: {
        title: 'CircuitTrix 2026 | Premier Tech Innovation Event',
        description: 'Where electronics meets code. Engineer the future of innovation.',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${oxanium.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${circuitForem.variable}`} suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="bg-[#0B0B0B] font-body text-text-primary overflow-x-hidden selection:bg-accent-primary selection:text-background" suppressHydrationWarning>
                <LoadingScreen />
                <CyberCursor />
                {/* Vintage CRT overlay effect */}
                <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] mix-blend-screen bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiMwMDAiLz48cmVjdCB5PSIzIiB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIi8+PC9zdmc+')]" />

                {children}
            </body>
        </html>
    )
}
