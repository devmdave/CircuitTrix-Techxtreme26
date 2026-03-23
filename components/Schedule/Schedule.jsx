'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Terminal, ChevronRight, Download } from 'lucide-react';
import CyberButton from '@/components/ui/CyberButton';

export default function Schedule() {
    const schedule = [
        {
            day: "EVENT DAY",
            date: "3rd MARCH 2026",
            events: [
                { time: "09:00 AM", title: "SYSTEM INIT & VERIFICATION", type: "ENTRY" },
                { time: "10:00 AM", title: "ROUND 1 EXECUTION (30 MINS)", type: "COMPETITION" },
                { time: "10:30 AM", title: "ROUND 2 EXECUTION (60 MINS)", type: "COMPETITION" },
                { time: "3:00 PM", title: "WINNERS ANNOUNCEMENT", type: "AWARD" }
            ]
        }
    ];

    const getEventStyles = (type) => {
        const styles = {
            KEYNOTE: "border-accent-primary/50 text-accent-primary bg-accent-primary/[0.05]",
            COMPETITION: "border-emerald-500/50 text-emerald-400 bg-emerald-500/[0.05]",
            WORKSHOP: "border-cyan-500/50 text-cyan-400 bg-cyan-500/[0.05]",
            GENERAL: "border-white/20 text-white/70 bg-white/[0.02]"
        };
        return styles[type] || styles.GENERAL;
    };

    return (
        <section id="schedule" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface/80 border border-white/10 rounded-sm mb-6 font-mono text-xs text-accent-primary backdrop-blur-md"
                    >
                        <Calendar size={14} className="animate-pulse-cyan" />
                        <span>TIMELINE_PROTOCOL</span>
                    </motion.div>

                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-center uppercase tracking-widest text-white mb-6 relative flex flex-col sm:block leading-tight sm:leading-none">
                        <span>EVENT</span> <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(163,255,18,0.4)] mt-1 sm:mt-0">TIMELINE</span>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/20">
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-accent-primary shadow-[0_0_10px_#00F6FF]"
                                animate={{ x: ['-100%', '300%'] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                                style={{ width: '30%' }}
                            />
                        </div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 max-w-md w-full mx-auto gap-6 mb-16 px-2 sm:px-0">
                    {schedule.map((day, dayIndex) => (
                        <motion.div
                            key={dayIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: dayIndex * 0.2 }}
                            className="bg-[#111] border border-white/10 relative overflow-hidden group"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                        >
                            {/* Animated Background Line */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-[1px] bg-accent-primary/40 hidden group-hover:block pointer-events-none"
                                animate={{ top: ['0%', '100%'] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />

                            {/* Header Panel */}
                            <div className="p-6 border-b border-white/5 relative bg-black/40">
                                <div className="absolute top-0 right-0 w-12 h-12 bg-accent-primary/5 blur-[20px]" />
                                <div className="flex justify-between items-center">
                                    <div className="font-heading text-3xl font-black text-white/90 tracking-widest">
                                        {day.day}
                                    </div>
                                    <div className="font-mono text-xs text-accent-primary/80 border border-accent-primary/30 px-2 py-1 bg-accent-primary/10">
                                        {day.date}
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Events */}
                            <div className="p-6 space-y-4">
                                {day.events.map((event, eventIndex) => (
                                    <div key={eventIndex} className={`p-4 border-l-2 relative overflow-hidden transition-all duration-300 hover:translate-x-1 bg-black/40 ${getEventStyles(event.type)}`}>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-current opacity-0 hover:opacity-[0.03] transition-opacity pointer-events-none" />

                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2 font-mono text-xs opacity-80">
                                                <Clock size={12} />
                                                <span className="tracking-widest">{event.time}</span>
                                                <span className="ml-auto text-[9px] border px-1 opacity-70 border-current">
                                                    {event.type}
                                                </span>
                                            </div>
                                            <h4 className="font-heading text-sm uppercase font-bold tracking-widest text-white mt-1 flex items-center gap-2">
                                                <ChevronRight size={14} className="opacity-50" />
                                                {event.title}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Corner Decals */}
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-accent-primary transition-colors" />
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-accent-primary transition-colors" />
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 relative z-20">
                    <CyberButton variant="secondary" onClick={() => { }}>
                        <span className="tracking-[0.2em] pt-[2px]">DOWNLOAD_LOGS</span>
                        <Download size={18} className="mb-[2px]" />
                    </CyberButton>
                </div>
            </div>
        </section>
    );
}
