'use client';

import { Terminal, Shield, Wifi, Database } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-white/10 relative overflow-hidden pt-16">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMHptMzkuNSAwVjIwaC0uNVYwaC0zOXY0MGgzOS41eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] pointer-events-none" />

            {/* Top scanning line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand / System Status */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 border border-accent-primary/30 flex items-center justify-center bg-accent-primary/5 relative">
                                <Terminal size={20} className="text-accent-primary" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                            </div>
                            <div>
                                <h3 className="font-heading text-2xl font-black uppercase tracking-widest text-white m-0 leading-none">
                                    CIRCUIT<span className="text-accent-primary">TRIX</span>
                                </h3>
                                <div className="font-mono text-[9px] text-accent-primary tracking-[0.3em] uppercase mt-1">
                                    VOLTAGE IN MOTION
                                </div>
                            </div>
                        </div>

                        <div className="font-mono text-xs text-text-muted leading-relaxed mb-6 p-4 bg-white/[0.02] border border-white/5 relative">
                            <div className="absolute top-0 left-0 w-2 h-[1px] bg-accent-primary" />
                            <div className="absolute top-0 left-0 w-[1px] h-2 bg-accent-primary" />
                            &gt; Where electronics meets code. Engineering the future of innovation, one circuit at a time.
                            <br /><br />
                            <span className="text-accent-primary animate-pulse">_</span>
                        </div>

                        <div className="flex gap-4">
                            {['TX', 'IN', 'IG', 'DC'].map((icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-12 h-8 flex items-center justify-center bg-[#111] border border-white/10 text-white/50 hover:border-accent-primary hover:text-accent-primary hover:shadow-[inset_0_0_10px_rgba(163,255,18,0.2)] transition-all font-mono text-xs tracking-widest relative group"
                                    style={{ clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)' }}
                                >
                                    {icon}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent-primary group-hover:w-1/2 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Directories */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                            <Database size={12} className="text-accent-primary" />
                            DIRECTORY_A
                        </h4>
                        <ul className="space-y-3 sm:space-y-4">
                            {['About', 'Tracks', 'Schedule', 'Rules', 'Register'].map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="font-mono text-sm text-text-muted hover:text-accent-primary transition-colors flex items-center gap-3 group w-full"
                                    >
                                        <span className="text-white/10 group-hover:text-accent-primary transition-colors text-[10px]">&gt;</span>
                                        <span className="relative overflow-hidden">
                                            {link.toUpperCase()}
                                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                            <Shield size={12} className="text-accent-primary" />
                            DIRECTORY_B
                        </h4>
                        <ul className="space-y-3 sm:space-y-4">
                            {['FAQs', 'Code of Conduct', 'Privacy Policy', 'Sponsorship', 'Past Events'].map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="font-mono text-sm text-text-muted hover:text-accent-primary transition-colors flex items-center gap-3 group w-full"
                                    >
                                        <span className="text-white/10 group-hover:text-accent-primary transition-colors text-[10px]">&gt;</span>
                                        <span className="relative overflow-hidden">
                                            {link.toUpperCase()}
                                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Network Broadcast */}
                    <div className="lg:col-span-3">
                        <h4 className="font-mono text-xs text-white/50 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                            <Wifi size={12} className="text-accent-primary" />
                            NET_BROADCAST
                        </h4>
                        <p className="font-mono text-xs text-text-muted mb-4 leading-relaxed">
                            Subscribe to root node updates. Receive patches and event logs directly.
                        </p>
                        <form className="relative group">
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-focus-within:border-accent-primary transition-colors z-10" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-focus-within:border-accent-primary transition-colors z-10" />

                            <input
                                type="email"
                                placeholder="&gt; ENTER_COMMS_ADDRESS_"
                                className="w-full bg-[#111] border border-white/10 px-4 py-3 text-white font-mono text-xs focus:border-accent-primary focus:outline-none focus:bg-accent-primary/[0.02] transition-all pr-24"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 px-4 bg-accent-primary text-black font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-colors"
                            >
                                UPLINK
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 pb-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse shadow-[0_0_10px_#00F6FF]" />
                        <p className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase">
                            © {currentYear} CIRCUITTRIX. ALL_SYSTEMS_NOMINAL.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-mono text-[10px] text-white/40 tracking-[0.1em] uppercase mt-4 lg:mt-0">
                        <a href="#" className="hover:text-accent-primary transition-colors">SECURITY_POLICY</a>
                        <span>//</span>
                        <a href="#" className="hover:text-accent-primary transition-colors">ROOT_ACCESS</a>
                        <span>//</span>
                        <a href="#" className="hover:text-accent-primary transition-colors">PING_NODE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
