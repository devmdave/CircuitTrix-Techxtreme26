'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TechCard({ title, description, icon, delay = 0, status = "ACTIVE" }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative bg-[#0D0D0D] p-6 lg:p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 select-none"
            style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
        >
            {/* Dark Base Layer with PCB Traces */}
            <div className="absolute inset-0 z-0 border border-white/5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50" />

            {/* Glowing Accent Border mapped to ClipPath */}
            <div className="absolute inset-0 z-0 border-2 border-transparent group-hover:border-accent-primary/40 transition-colors duration-500 pointer-events-none" 
                 style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}/>

            {/* Corner Highlight Lines (Simulating the cut edge) */}
            <div className="absolute top-0 left-0 w-[28px] h-[2px] bg-accent-primary/20 transform -rotate-45 origin-top-left shadow-[0_0_10px_#00F6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="absolute bottom-0 right-0 w-[28px] h-[2px] bg-accent-primary/20 transform -rotate-45 origin-bottom-right shadow-[0_0_10px_#00F6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

            {/* Scanning Line Effect (Horizontal pass) */}
            <motion.div
                className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/60 to-transparent shadow-[0_0_15px_#00F6FF] z-0 hidden group-hover:block"
                animate={isHovered ? { top: ['0%', '100%'] } : { top: '0%' }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />

            {/* Angular Moving Light Streak */}
            <motion.div 
                className="absolute top-0 left-0 w-[50%] h-[150%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 z-0 hidden group-hover:block pointer-events-none"
                animate={isHovered ? { x: ['-200%', '300%'] } : {}}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />

            {/* Foreground Content Stack */}
            <div className="relative z-10 flex flex-col h-full">
                
                {/* Meta Row / System Indicator */}
                <div className="flex justify-between items-center mb-8 pb-3 border-b border-white/10 relative">
                    <div className="absolute bottom-[-1px] left-0 w-1/4 h-[1px] bg-accent-primary/50" />
                    <div className="flex items-center gap-2">
                        {/* Blinking Status LED */}
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary shadow-[0_0_8px_#00F6FF]"></span>
                        </div>
                        <span className="font-mono text-[10px] text-text-primary/70 uppercase tracking-widest">{status}</span>
                    </div>
                    
                    <span className="font-mono text-[10px] text-accent-primary/50 tracking-widest">
                        SEC-0{Math.floor(Math.random() * 9) + 1}
                    </span>
                </div>

                {/* Tech Icon Box (Inset Styling) */}
                <div className="w-14 h-14 bg-black/40 border border-white/5 flex items-center justify-center text-white/80 mb-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] group-hover:border-accent-primary/40 group-hover:text-accent-primary transition-all duration-300 relative group-hover:shadow-[inset_0_0_15px_rgba(163,255,18,0.1)]">
                    {/* Tiny Edge Markers */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-accent-primary/80 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-accent-primary/80 transition-colors" />
                    {icon}
                </div>

                {/* Main Content Info */}
                <div className="flex-grow">
                    <h3 className="font-heading text-xl font-bold uppercase text-white mb-3 tracking-widest group-hover:text-accent-primary transition-colors duration-300">
                        {title}
                    </h3>
                    
                    <p className="text-text-muted font-mono text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                        {description}
                    </p>
                </div>

                {/* Technical Footer Row */}
                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-end">
                    {/* Simulated Data Bars */}
                    <div className="flex gap-[3px] items-end h-[16px]">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div 
                                key={i}
                                className="w-1 bg-accent-primary/50"
                                animate={{ height: [4, Math.random() * 12 + 4, 4] }}
                                transition={{ repeat: Infinity, duration: Math.random() + 0.5 }}
                            />
                        ))}
                    </div>
                    
                    {/* Micro Output readings */}
                    <div className="font-mono text-[9px] text-accent-primary/40 text-right uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="mb-0.5">PWR: ONL // SIGNAL LINKED</div>
                        <div>MEM: {(Math.random() * 8 + 1).toFixed(2)} TB/s</div>
                    </div>
                </div>

                {/* Decorative Brackets on Bottom edges */}
                <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-white/20 group-hover:bg-accent-primary/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-white/20 group-hover:bg-accent-primary/50 transition-colors" />
            </div>
        </motion.div>
    );
}
