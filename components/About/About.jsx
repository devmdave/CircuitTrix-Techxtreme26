'use client';

import { motion } from 'framer-motion';
import { Zap, Activity, Cpu } from 'lucide-react';
import TechCard from '@/components/ui/TechCard';

export default function About() {
    const cards = [
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "STAGE 1: SIMULATION",
            description: "Analyze, debug, and repair a faulty circuit within a strict 30-minute window using Tinkercad. Speed and precision are critical.",
            delay: 0.1
        },
        {
            icon: <Activity className="w-8 h-8" />,
            title: "STAGE 2: SHOWDOWN",
            description: "The final phase. Engineer solutions from raw problem statements—design temperature alarms, signal amplifiers, or logic controllers.",
            delay: 0.2
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "EVALUATION MATRIX",
            description: "Nodes are assessed strictly on circuit accuracy (40%), creative innovation (25%), clear and neat documentation (20%), and time management (15%).",
            delay: 0.3
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-[linear-gradient(transparent,rgba(0,246,255,0.05))] pointer-events-none transform -skew-y-12" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface/80 border border-white/10 rounded-sm mb-6 font-mono text-xs text-accent-primary backdrop-blur-md"
                    >
                        <Cpu size={14} className="animate-pulse" />
                        <span>EVENT_DIRECTIVE</span>
                    </motion.div>

                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-center uppercase tracking-widest text-white mb-6 relative flex flex-col sm:block">
                        <span>ABOUT</span> <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(0,246,255,0.4)] mt-1 sm:mt-0">CIRCUITTRIX</span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-center font-mono mt-2"
                    >
                        <span className="text-accent-primary block mb-6 font-bold tracking-[0.2em] uppercase text-lg sm:text-xl">
                            &gt; Think. Design. Electrify.
                        </span>
                        <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                            The Ultimate Circuit Challenge tests your knowledge and practical skills in circuit design, simulation, and debugging. Experience the core of Electronics and Communication Engineering by solving real-world analog and digital circuit problems using Tinkercad.
                        </p>
                    </motion.div>
                </div>

                {/* Cyber Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative z-10">
                    {cards.map((item, index) => (
                        <TechCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            delay={item.delay}
                            status={index === 0 ? "ENTRY" : index === 1 ? "FINAL" : "SYSTEM"}
                        />
                    ))}
                </div>

                {/* Dashboard Stats Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-[#111] border border-accent-primary/20 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    {/* UI Tech Details */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent-primary" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent-primary" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent-primary" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent-primary" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {[
                            { number: "1-2", label: "OPERATORS PER TEAM" },
                            { number: "30m", label: "STAGE 1 TIME LIMIT" },
                            { number: "100%", label: "TINKERCAD POWERED" },
                            { number: "CASH", label: "PRIZES & CERTIFICATES" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="font-heading text-4xl sm:text-5xl lg:text-5xl font-black text-white mb-2 group-hover:text-accent-primary group-hover:drop-shadow-[0_0_10px_rgba(0,246,255,0.4)] transition-all duration-300">
                                    {stat.number}
                                </div>
                                <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-accent-primary/80 uppercase">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Matrix Line */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-0" />
                    <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 -z-0 md:block hidden" />
                </motion.div>
            </div>
        </section>
    );
}
