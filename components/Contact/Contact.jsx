'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import CyberButton from '@/components/ui/CyberButton';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Texture grid */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMHptMzkuNSAwVjIwaC0uNVYwaC0zOXY0MGgzOS41eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface/80 border border-white/10 rounded-sm mb-6 font-mono text-xs text-accent-primary backdrop-blur-md"
                    >
                        <MessageSquare size={14} className="animate-pulse" />
                        <span>SECURE_COMMS_LINK</span>
                    </motion.div>

                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-center uppercase tracking-widest text-white relative flex flex-col sm:block leading-tight sm:leading-none">
                        <span>SYSTEM</span> <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(163,255,18,0.4)] mt-1 sm:mt-0">CONTACT</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Left Panel: Comms Info */}
                    <div className="space-y-6">
                        {[
                            { icon: <Mail size={24} />, title: 'CONTACT EMAILS', data: ['250101004010@gandhinagaruni.ac.in', '250101004011@gandhinagaruni.ac.in'] },
                            { icon: <Phone size={24} />, title: 'EVENT COORDINATORS', data: ['Madhav Dave: +91 7984253060', 'Jaimin Markana: +91 9510006403'] },
                            { icon: <MapPin size={24} />, title: 'EVENT VENUE & LOCATION ', data: ['Gandhinagar University Campus', 'Khatraj - Kalol RD.', 'Tal. Kalol', 'Dist. Gandhinagar-382721'] }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#111] border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative group text-center sm:text-left"
                                style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                            >
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                                <div className="p-3 bg-black border border-white/5 text-accent-primary shadow-[inset_0_0_10px_rgba(163,255,18,0.05)]">
                                    {item.icon}
                                </div>

                                <div>
                                    <h4 className="font-mono text-xs text-text-muted mb-2 tracking-[0.2em]">{item.title}</h4>
                                    {item.data.map((line, i) => (
                                        <p key={i} className="text-white/90 font-mono text-sm tracking-widest">{line}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Links as module */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#111] border border-white/10 p-6 relative"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                        >
                            <h4 className="font-mono text-xs text-text-muted mb-4 tracking-[0.2em] text-center sm:text-left">EXTERNAL_NETWORKS</h4>
                            <div className="flex justify-center sm:justify-start gap-4">
                                {['TX', 'IN', 'IG', 'DC'].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-12 h-12 flex items-center justify-center bg-black border border-white/10 hover:border-accent-primary text-white/50 hover:text-accent-primary hover:shadow-[inset_0_0_15px_rgba(163,255,18,0.2)] transition-all font-mono text-sm tracking-widest"
                                        style={{ clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)' }}
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Panel: Terminal Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0B0B0B] border border-white/10 p-8 relative"
                        style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-accent-primary/50 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-accent-primary rounded-full animate-ping" />
                                </div>
                            </div>
                            <span className="font-mono text-[10px] text-text-muted tracking-widest">COMMS_TERMINAL_V1.0</span>
                        </div>

                        <form className="space-y-6">
                            <div className="relative group">
                                <label className="font-mono text-[10px] text-accent-primary tracking-widest mb-2 block">
                                    &gt; IDENTIFIER (NAME)
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-accent-primary focus:outline-none focus:bg-accent-primary/[0.02] transition-colors"
                                    placeholder="Enter string..."
                                    style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-primary group-focus-within:w-full transition-all duration-300" />
                            </div>

                            <div className="relative group">
                                <label className="font-mono text-[10px] text-accent-primary tracking-widest mb-2 block">
                                    &gt; RETURN ADDRESS (EMAIL)
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-accent-primary focus:outline-none focus:bg-accent-primary/[0.02] transition-colors"
                                    placeholder="Enter route..."
                                    style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                                />
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-primary group-focus-within:w-full transition-all duration-300" />
                            </div>

                            <div className="relative group">
                                <label className="font-mono text-[10px] text-accent-primary tracking-widest mb-2 block">
                                    &gt; PAYLOAD (MESSAGE)
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-accent-primary focus:outline-none focus:bg-accent-primary/[0.02] transition-colors resize-none"
                                    placeholder="Awaiting input..."
                                    style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                                ></textarea>
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-primary group-focus-within:w-full transition-all duration-300" />
                            </div>

                            <div className="pt-4">
                                <CyberButton variant="primary" className="w-full justify-center">
                                    <span className="tracking-[0.2em] pt-[2px]">TRANSMIT_DATA</span>
                                    <Send size={16} className="mb-[2px] ml-2" />
                                </CyberButton>
                            </div>
                        </form>

                        {/* Scanner Line */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}>
                            <motion.div
                                className="w-full h-1 bg-accent-primary/20 blur-sm"
                                animate={{ top: ['-10%', '110%'] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                style={{ position: 'absolute' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
