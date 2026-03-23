'use client';

import { motion } from 'framer-motion';
import { Target, Cpu, Wifi, RotateCcw, Code, Cpu as Brain, TerminalSquare } from 'lucide-react';
import CyberButton from '@/components/ui/CyberButton';

export default function Tracks() {
    const tracks = [
        {
            title: "CIRCUIT DESIGN",
            category: "HARDWARE_NODE",
            description: "Design innovative PCB circuits with real-world applications. Focus on efficiency, power management, and creativity.",
            prize: "₹1,50,000",
            participants: "3-4 UNITS",
            icon: <Cpu size={24} />
        },
        {
            title: "IOT INNOVATION",
            category: "EMBEDDED_SYS",
            description: "Build smart IoT solutions addressing urban challenges. From smart homes to environmental monitoring.",
            prize: "₹2,00,000",
            participants: "2-3 UNITS",
            icon: <Wifi size={24} />
        },
        {
            title: "ROBOTICS ARENA",
            category: "MECHATRONICS",
            description: "Autonomous robots competing in complex challenges. Test your control algorithms and mechanical design.",
            prize: "₹1,75,000",
            participants: "4-5 UNITS",
            icon: <RotateCcw size={24} />
        },
        {
            title: "CODE SPRINT",
            category: "SOFTWARE_ALG",
            description: "Algorithmic challenges and competitive programming. Solve complex problems with optimal solutions.",
            prize: "₹1,00,000",
            participants: "1-2 UNITS",
            icon: <Code size={24} />
        },
        {
            title: "AI & ML TRACK",
            category: "NEURAL_NETS",
            description: "Develop AI models for practical applications. Computer vision, NLP, or predictive analytics.",
            prize: "₹2,50,000",
            participants: "2-4 UNITS",
            icon: <Brain size={24} />
        },
        {
            title: "HACKATHON",
            category: "FULL_STACK",
            description: "24-hour innovation marathon. Build complete solutions from concept to deployment.",
            prize: "₹3,00,000",
            participants: "3-5 UNITS",
            icon: <TerminalSquare size={24} />
        }
    ];

    return (
        <section id="tracks" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-20 left-0 w-32 h-[1px] bg-accent-primary/20" />
            <div className="absolute top-40 left-0 w-16 h-[1px] bg-accent-primary/40" />
            <div className="absolute bottom-20 right-0 w-64 h-[1px] bg-accent-primary/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface/80 border border-white/10 rounded-sm mb-6 font-mono text-xs text-accent-primary backdrop-blur-md"
                    >
                        <Target size={14} className="animate-pulse-cyan" />
                        <span>TACTICAL_VECTORS</span>
                    </motion.div>

                    <h2 className="font-heading text-4xl sm:text-5xl font-black text-center uppercase tracking-widest text-white mb-6 relative">
                        COMPETITION <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(163,255,18,0.4)]">TRACKS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#111] border border-white/10 p-6 relative group overflow-hidden"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-accent-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-primary/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-black border border-white/10 text-white/50 group-hover:text-accent-primary group-hover:border-accent-primary/50 transition-colors duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                                    {track.icon}
                                </div>
                                <div>
                                    <div className="font-mono text-[9px] text-accent-primary mb-1 tracking-widest uppercase">
                                        ID: {track.category}
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-white tracking-widest uppercase">
                                        {track.title}
                                    </h3>
                                </div>
                            </div>

                            <p className="font-mono text-xs text-text-muted mb-6 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                {track.description}
                            </p>

                            <div className="space-y-3 pt-6 border-t border-white/10 relative">
                                {/* Thin accent bar that grows on hover */}
                                <div className="absolute top-0 left-0 w-0 h-[1px] bg-accent-primary group-hover:w-full transition-all duration-700 ease-out" />

                                <div className="flex items-center justify-between font-mono text-xs bg-black/40 px-3 py-2 border border-white/5">
                                    <span className="text-white/40 tracking-widest">BOUNTY</span>
                                    <span className="text-accent-primary font-bold tracking-wider">{track.prize}</span>
                                </div>
                                <div className="flex items-center justify-between font-mono text-xs bg-black/40 px-3 py-2 border border-white/5">
                                    <span className="text-white/40 tracking-widest">SQUAD_LIMIT</span>
                                    <span className="text-white tracking-wider">{track.participants}</span>
                                </div>
                            </div>

                            {/* Corner Decals */}
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-accent-primary transition-colors" />
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-accent-primary transition-colors" />
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 flex justify-center w-full">
                     <CyberButton variant="secondary" onClick={() => {}}>
                        <span className="tracking-[0.2em] pt-[2px]">VIEW_DETAILED_SPECS</span>
                    </CyberButton>
                </div>
            </div>
        </section>
    );
}
