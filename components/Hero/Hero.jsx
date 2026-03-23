'use client';

import { motion } from 'framer-motion';
import CyberButton from '@/components/ui/CyberButton';
import { Terminal, Cpu, Zap, Activity } from 'lucide-react';

export default function Hero() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 20 } }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Ambient Lighting & Glare */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-12 sm:py-16"
            >
                {/* Tech Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-6 py-2 bg-surface/40 border border-accent-primary/30 rounded-full mb-8 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors" />
                    <span className="w-2 h-2 bg-accent-primary shadow-[0_0_10px_#00F6FF] animate-pulse rounded-full"></span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">VOLTAGE IN MOTION</span>

                    {/* Scanning Line on badge */}
                    <motion.div
                        className="absolute left-0 top-0 w-2 h-full bg-white/20 blur-sm"
                        animate={{ x: ['-100%', '400%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    />
                </motion.div>

                {/* Cyberpunk Title */}
                <motion.h1 variants={itemVariants} className="mb-6 text-white relative inline-block">
                    <div className="absolute -inset-4 bg-accent-primary/10 blur-xl rounded-full z-[-1]" />
                    <div className="flex flex-col sm:flex-row items-center justify-center leading-none">
                        <span className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest text-white [text-shadow:0_0_20px_rgba(255,255,255,0.2)]">
                            CIRCUIT
                        </span>
                        <span className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest text-accent-primary [text-shadow:0_0_30px_rgba(0,246,255,0.6)] sm:ml-2">
                            TRIX
                        </span>
                    </div>
                </motion.h1>

                {/* Tagline */}
                <motion.p variants={itemVariants} className="text-center font-mono text-sm sm:text-base lg:text-lg text-text-muted max-w-3xl mx-auto mb-12 tracking-wide block">
                    &gt; A PREMIER EVENT OF <span className="text-accent-primary font-bold animate-pulse-cyan [animation-duration:3s] font-heading">TECHXTREME 2026</span><br className="sm:hidden" />
                </motion.p>

                {/* Dashboard Stats */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 relative">
                    <div className="absolute inset-0 bg-surface/30 backdrop-blur-xl border border-white/5 shadow-2xl rounded-lg -z-10" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

                    {[
                        { icon: <Cpu size={24} />, value: "02", label: "EXECUTION PHASES" },
                        { icon: <Terminal size={24} />, value: "100%", label: "SIMULATED ENV" },
                        { icon: <Zap size={24} />, value: "40%", label: "ACCURACY FOCUS" },
                        { icon: <Activity size={24} />, value: "1-2", label: "OPERATOR NODES" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-8 border-r border-white/5 last:border-0 relative group">
                            <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="text-accent-primary/80 mb-4 group-hover:text-accent-primary transition-colors group-hover:scale-110 duration-300">
                                {stat.icon}
                            </div>
                            <div className="font-heading text-4xl lg:text-5xl font-black text-white relative">
                                {stat.value}
                                <div className="absolute -inset-1 bg-accent-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity z-[-1]" />
                            </div>
                            <div className="font-mono text-xs text-text-muted mt-3 uppercase tracking-widest group-hover:text-white transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 mb-12 relative z-20 mx-auto max-w-2xl px-4">
                    <CyberButton variant="primary" onClick={() => scrollToSection('register')} className="w-full sm:flex-1">
                        <span className="tracking-[0.1em] pt-[2px]">REGISTER</span>
                        <Zap size={18} className="mb-[2px]" />
                    </CyberButton>
                    <CyberButton variant="secondary" onClick={() => scrollToSection('about')} className="w-full sm:flex-1">
                        <span className="tracking-[0.1em] pt-[2px]">MORE INFO/ DOCUMENTATION</span>
                        <Terminal size={18} className="mb-[2px]" />
                    </CyberButton>
                </motion.div>

                {/* Scroll Indicator */}
                {/* <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer hover:opacity-100 opacity-60 transition-opacity"
                    onClick={() => scrollToSection('about')}
                >
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent-primary">Scan Down</div>
                    <div className="w-px h-16 bg-white/10 relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 w-full h-1/2 bg-accent-primary shadow-[0_0_10px_#00F6FF]"
                            animate={{ y: ['-100%', '200%'] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                        />
                    </div>
                </motion.div> */}
            </motion.div>

        </section>
    );
}
