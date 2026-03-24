'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ScanLine } from 'lucide-react';
import CyberButton from '@/components/ui/CyberButton';

export default function Poster() {
    return (
        <section id="poster" className="py-24 bg-[#000000] relative overflow-hidden flex items-center justify-center min-h-[90vh]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,246,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,246,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">

                    {/* Left side: Information & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-5/12 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-primary/[0.05] border border-accent-primary/20 rounded-sm font-mono text-xs text-accent-primary">
                            <Sparkles size={14} className="animate-pulse" />
                            <span>FEATURED_ASSET</span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest text-[#FFFFFF] flex flex-col sm:block leading-tight sm:leading-none">
                                <span>CIRCUITTRIX</span>
                                <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(0,246,255,0.5)] mt-1 sm:mt-0 sm:ml-2">2026</span>
                            </h2>
                            <p className="font-mono text-sm sm:text-base text-white/70 leading-relaxed border-l-2 border-accent-primary/50 pl-4">
                                Experience the ultimate fusion of hardware engineering and advanced computation. Explore the official event visual log.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="https://techxtreme.gu-tech.org/event/technical/27" className="inline-block">
                                <CyberButton variant="primary" className="px-8 py-4">
                                    <span className="tracking-[0.2em] font-bold">REGISTER NOW</span>
                                    <ArrowRight size={18} className="ml-2" />
                                </CyberButton>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right side: Premium Poster Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-full lg:w-7/12 relative group perspective-[1000px]"
                    >
                        {/* Glowing backdrop matching the poster shape */}
                        <div className="absolute inset-0 bg-accent-primary/20 blur-[60px] transform group-hover:bg-accent-primary/30 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

                        {/* Main Container */}
                        <div className="relative bg-[#050505] p-2 sm:p-3 border border-accent-primary/30 shadow-[0_0_50px_rgba(0,246,255,0.15)] group-hover:shadow-[0_0_80px_rgba(0,246,255,0.3)] group-hover:border-accent-primary/60 transition-all duration-700 w-full max-w-[500px] mx-auto xl:max-w-[600px] transform-gpu hover:-translate-y-2">

                            {/* Decorative Corner Brackets */}
                            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent-primary z-20 pointer-events-none" />
                            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent-primary z-20 pointer-events-none" />
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent-primary z-20 pointer-events-none" />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent-primary z-20 pointer-events-none" />

                            {/* Glass Panel Overlay for Reflections */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Holographic Scanline Effect */}
                            <motion.div
                                className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-accent-primary/10 to-transparent z-10 pointer-events-none"
                                animate={{ top: ['-20%', '120%'] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                style={{ position: 'absolute' }}
                            />

                            {/* Corner Status Label */}
                            <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md border border-accent-primary/50 px-3 py-1 flex items-center gap-2 pointer-events-none">
                                <ScanLine size={12} className="text-accent-primary" />
                                <span className="font-mono text-[9px] tracking-[0.3em] text-accent-primary">VERIFIED</span>
                            </div>

                            {/* The Poster Image wrapper */}
                            <div className="relative w-full aspect-[4/4] overflow-hidden bg-[#111]">
                                {/* Using standard img tag. User should place a high-res poster named circuittrix-poster.jpg in their public folder */}
                                <img
                                    src="/circuittrix-poster.jpeg"
                                    alt="Circuittrix 2026 Official Poster"
                                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Fallback/Loading state border indicator if image is missing */}
                                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                            </div>

                            {/* Bottom micro-text */}
                            <div className="absolute -bottom-8 right-0 font-mono text-[10px] text-accent-primary/50 tracking-[0.2em]">
                                ASSET_ID: CTX-26-PRIME
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
