'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Fingerprint, Lock, Terminal } from 'lucide-react';
import CyberButton from '@/components/ui/CyberButton';

export default function Rules() {
    const rules = [
        {
            category: "CLEARANCE REQUIRED",
            icon: <Fingerprint size={20} />,
            items: [
                "Open to all verified college undergraduates (active status)",
                "Team formation strictly prior to lockdown deadline",
                "Biometric/College ID check mandatory for physical entry",
                "Cross-network (international) nodes permitted"
            ]
        },
        {
            category: "MODULE GUIDELINES",
            icon: <Terminal size={20} />,
            items: [
                "Squad limitations vary per operational track",
                "Inter-collegiate squad assembly is authorized",
                "Single-squad binding strict: No duplicate enrollments",
                "Squad reconfiguration locks 48h pre-launch"
            ]
        },
        {
            category: "EXECUTION PROTOCOLS",
            icon: <ShieldAlert size={20} />,
            items: [
                "100% original compiled architecture required",
                "AI-assisted coding must be publicly logged & disclosed",
                "Plagiarism flags trigger immediate zero-day ban",
                "Deployments must target designated track parameters"
            ]
        },
        {
            category: "ROOT DIRECTIVES",
            icon: <Lock size={20} />,
            items: [
                "Absolute respect within the network hierarchy",
                "Zero tolerance for griefing, harassment, or malice",
                "Strict adherence to physical layer safety protocols",
                "System Admin (Judge) decisions execute fully and finally"
            ]
        }
    ];

    return (
        <section id="rules" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwLDBMMjAsNDBMMDQsNDBMMTAsMEwyMCwwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE2MywyNTUsMTgsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(239,68,68,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-scanline pointer-events-none" />
                        <AlertTriangle size={16} className="text-red-500 animate-pulse" />
                        <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-[0.2em] relative z-10">
                            SYSTEM_DIRECTIVES
                        </span>
                    </motion.div>

                    <h2 className="font-heading text-4xl sm:text-5xl font-black text-center uppercase tracking-widest text-white relative">
                        RULES & <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(163,255,18,0.4)]">PROTOCOLS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    {/* Center background line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

                    {rules.map((section, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#111] border border-white/10 p-6 sm:p-8 relative group"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                        >
                            {/* Hover Tech Effects */}
                            <div className="absolute inset-0 bg-accent-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="p-2 bg-black border border-white/10 text-white/50 group-hover:text-accent-primary group-hover:border-accent-primary/50 transition-colors shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                                    {section.icon}
                                </div>
                                <h3 className="font-mono text-sm uppercase tracking-widest text-white/90 font-bold whitespace-nowrap">
                                    {section.category}
                                </h3>
                                {/* Decorative extending line */}
                                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
                            </div>

                            <ul className="space-y-4 relative z-10">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-accent-primary rounded-none mt-1.5 shadow-[0_0_5px_#00F6FF] shrink-0" />
                                        <span className="font-mono text-xs sm:text-sm text-text-muted leading-relaxed tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Border highlights */}
                            <div className="absolute bottom-0 right-0 w-8 h-px bg-accent-primary/50" />
                            <div className="absolute bottom-0 right-0 w-px h-8 bg-accent-primary/50" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-black/60 border border-white/10 p-8 flex flex-col items-center gap-6 relative overflow-hidden"
                        style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
                    >
                        {/* Warning tape styling on top */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,rgba(163,255,18,0.5),rgba(163,255,18,0.5)_10px,transparent_10px,transparent_20px)]" />

                        <p className="font-mono text-sm text-center text-text-muted max-w-md">
                            &gt; QUERYING SYSTEM FOR OUT-OF-BOUNDS EXCEPTIONS? CONNECT WITH A ROOT ADMIN.
                        </p>
                        
                        <CyberButton variant="primary">
                            <span className="tracking-[0.1em] pt-[2px]">OPEN SECURE COMMS</span>
                            <Terminal size={16} className="mb-[2px]" />
                        </CyberButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
