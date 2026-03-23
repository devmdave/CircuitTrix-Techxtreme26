'use client';

import { motion } from 'framer-motion';
import { Network, Briefcase, ShieldCheck } from 'lucide-react';
import CyberButton from '@/components/ui/CyberButton';

export default function Sponsors() {
    return (
        <section id="sponsors" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvc3ZnPg==')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface/80 border border-white/10 rounded-sm mb-6 font-mono text-xs text-accent-primary backdrop-blur-md"
                    >
                        <Network size={14} className="animate-pulse" />
                        <span>AFFILIATE_NETWORK</span>
                    </motion.div>

                    <h2 className="font-heading text-4xl sm:text-5xl font-black text-center uppercase tracking-widest text-white relative">
                        SYSTEM <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(163,255,18,0.4)]">PARTNERS</span>
                    </h2>
                </div>

                {/* Become a Sponsor Card - Tech Module */}
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#0B0B0B] border border-white/10 relative p-8 sm:p-12 group overflow-hidden"
                        style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}
                    >
                        {/* Hover Gradient Base */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            {/* Graphic Side */}
                            <div className="w-full md:w-1/3 flex flex-col items-center justify-center relative">
                                <div className="absolute inset-0 bg-accent-primary/10 blur-[50px] rounded-full" />
                                <div className="w-32 h-32 border border-accent-primary/50 flex items-center justify-center relative bg-black/50 shadow-[0_0_30px_rgba(163,255,18,0.1)] group-hover:shadow-[0_0_50px_rgba(163,255,18,0.2)] transition-shadow duration-500"
                                     style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
                                >
                                    <Briefcase size={48} className="text-accent-primary" />
                                    {/* Scanning ring inner */}
                                    <motion.div 
                                        className="absolute inset-2 border border-dashed border-accent-primary/30 rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    />
                                    <motion.div 
                                        className="absolute inset-4 border border-accent-primary/20 rounded-full"
                                        animate={{ rotate: -360 }}
                                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-2/3 text-center md:text-left shadow-none">
                                <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                                    <ShieldCheck size={18} className="text-accent-primary" />
                                    <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-widest">
                                        INITIALIZE SPONSORSHIP
                                    </h3>
                                </div>
                                <p className="mb-8 font-mono text-sm text-text-muted leading-relaxed max-w-lg">
                                    Integrate with the <span className="text-accent-primary">CircuitTrix</span> mainframe. Gain direct connection to elite engineering talent and showcase your tech infrastructure to the next generation.
                                </p>
                                
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="p-3 bg-white/[0.02] border border-white/5 relative group-hover:border-accent-primary/20 transition-colors">
                                        <div className="absolute top-0 left-0 w-1 h-1 bg-accent-primary/50" />
                                        <div className="font-heading text-xl font-bold text-white mb-1">500+</div>
                                        <div className="font-mono text-[9px] text-accent-primary/60 tracking-widest uppercase">Nodes</div>
                                    </div>
                                    <div className="p-3 bg-white/[0.02] border border-white/5 relative group-hover:border-accent-primary/20 transition-colors">
                                        <div className="absolute top-0 left-0 w-1 h-1 bg-accent-primary/50" />
                                        <div className="font-heading text-xl font-bold text-white mb-1">₹50L+</div>
                                        <div className="font-mono text-[9px] text-accent-primary/60 tracking-widest uppercase">Liquidity</div>
                                    </div>
                                    <div className="p-3 bg-white/[0.02] border border-white/5 relative group-hover:border-accent-primary/20 transition-colors">
                                        <div className="absolute top-0 left-0 w-1 h-1 bg-accent-primary/50" />
                                        <div className="font-heading text-xl font-bold text-white mb-1">48h</div>
                                        <div className="font-mono text-[9px] text-accent-primary/60 tracking-widest uppercase">Uptime</div>
                                    </div>
                                </div>

                                <CyberButton variant="primary">
                                    <span className="tracking-[0.1em] pt-[2px]">REQUEST_ACCESS_PACK</span>
                                </CyberButton>
                            </div>
                        </div>

                        {/* Border Accents */}
                        <div className="absolute bottom-0 right-0 w-16 h-px bg-accent-primary" />
                        <div className="absolute bottom-0 right-0 w-px h-16 bg-accent-primary" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
