'use client';

import { motion } from 'framer-motion';
import { KeyRound, ShieldAlert, ExternalLink } from 'lucide-react';
import CyberButton from '@/components/ui/CyberButton';

export default function Register() {
    return (
        <section id="register" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,246,255,0.02)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-primary/[0.05] border border-accent-primary/20 rounded-sm mb-6 font-mono text-xs text-accent-primary"
                    >
                        <KeyRound size={14} className="animate-pulse" />
                        <span>SECURE_REGISTRATION</span>
                    </motion.div>

                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-center uppercase tracking-widest text-white relative flex flex-col sm:block leading-tight sm:leading-none">
                        <span>REGISTER</span> <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(0,246,255,0.4)] mt-1 sm:mt-0">FOR CIRCUITTRIX</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full bg-[#0A0A0A] border border-white/10 p-6 sm:p-10 lg:p-16 relative overflow-hidden flex flex-col items-center text-center"
                        style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}
                    >
                        {/* Top decorative line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(90deg,rgba(0,246,255,0.5),rgba(0,246,255,0.5)_10px,transparent_10px,transparent_20px)]" />

                        {/* Inner glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

                        {/* Icon */}
                        <div className="relative mb-8 p-6 bg-black border border-white/5 shadow-[inset_0_0_20px_rgba(0,246,255,0.05)] rounded-full">
                            <ShieldAlert size={48} className="text-accent-primary" />
                        </div>

                        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-widest text-white mb-4 relative z-10">
                            INITIATE YOUR REGISTRATION
                        </h3>

                        <p className="font-mono text-sm sm:text-base text-text-muted leading-relaxed mb-10 max-w-2xl relative z-10">
                            Continue your registration on the TECHXTREME 2026 website, where account creation and verification are completed. You’ll be redirected there to finish setting up your account securely.
                        </p>

                        <a
                            href="https://techxtreme.gu-tech.org/event/technical/27" // USER_TODO: Insert actual registration link here
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 group"
                        >
                            <CyberButton variant="primary" className="px-8 py-4 sm:px-12 sm:py-5 flex items-center justify-center gap-3 w-full sm:w-auto">
                                <span className="tracking-[0.2em] font-bold text-sm sm:text-base pt-1">CONTINUE TO REGISTRATION</span>
                                <ExternalLink size={20} className="mb-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </CyberButton>
                        </a>

                        {/* Corner Status */}
                        <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white/30 tracking-widest uppercase md:block hidden">
                            STATUS: SECURE_REDIRECT
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
