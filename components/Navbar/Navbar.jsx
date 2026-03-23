'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Basic active section tracking
            const sections = ['home', 'about', 'schedule', 'rules', 'team', 'contact'];
            const scrollPos = window.scrollY + 200;

            for (let section of sections) {
                const element = document.getElementById(section === 'home' ? 'hero' : section);
                if (element) {
                    if (element.offsetTop <= scrollPos && (element.offsetTop + element.offsetHeight) > scrollPos) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
            setActiveSection(sectionId);
        }
    };

    const navItems = ['Home', 'About', 'Schedule', 'Rules', 'Team', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
                ? 'bg-[#000000]/80 border-b border-accent-primary/30 shadow-[0_4px_30px_rgba(0,246,255,0.1)] backdrop-blur-xl'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            {/* Top scanning line effect
            {isScrolled && (
                <motion.div
                    className="absolute top-0 left-0 h-[1px] bg-accent-primary w-1/4 shadow-[0_0_10px_#00F6FF]"
                    animate={{ x: ['-100%', '400%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                />
            )} */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Decorative circuit detail */}
                <div className="absolute left-0 bottom-0 w-2 h-2 border-l border-b border-accent-primary opacity-50" />
                <div className="absolute right-0 bottom-0 w-2 h-2 border-r border-b border-accent-primary opacity-50" />

                <div className="flex items-center justify-between py-4 sm:py-5">
                    {/* Logo */}
                    <motion.div
                        className="relative z-50 cursor-pointer group"
                        onClick={() => scrollToSection('home')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="font-heading text-xl sm:text-2xl font-black uppercase tracking-widest text-[#F2F2F2] flex items-center gap-2">
                            {/* <span className="w-3 h-3 bg-accent-primary rounded-sm shadow-[0_0_10px_#00F6FF] animate-pulse"></span> */}
                            CIRCUIT<span className="text-accent-primary drop-shadow-[0_0_15px_rgba(0,246,255,0.6)]">TRIX</span>
                        </span>
                        {/* Hover bracket decoration */}
                        <div className="absolute -inset-2 border border-accent-primary/0 group-hover:border-accent-primary/30 transition-colors duration-300 rounded-sm" />
                        <div className="absolute -left-2 -bottom-2 w-2 h-2 border-l-2 border-b-2 border-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    {/* Desktop Navigation Menu (Segmented Control Strip) */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <div className="flex items-stretch bg-black/40 border border-white/5 p-1 relative overflow-hidden backdrop-blur-lg shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}>

                            {/* Moving background scanline */}
                            <motion.div
                                className="absolute top-0 w-12 h-full bg-accent-primary/[0.05] skew-x-[-20deg] blur-sm pointer-events-none"
                                animate={{ left: ['-20%', '120%'] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                            />

                            {navItems.map((item, index) => {
                                const id = item.toLowerCase();
                                const isActive = activeSection === id;
                                return (
                                    <div key={item} className="relative flex items-center">
                                        <button
                                            onClick={() => scrollToSection(id)}
                                            className={`relative px-6 py-2.5 tracking-[0.2em] font-mono text-[10px] uppercase transition-all duration-300 group ${isActive ? 'text-accent-primary font-bold' : 'text-text-muted hover:text-white'
                                                }`}
                                        >
                                            {/* Top & Bottom decorative corners on hover */}
                                            <div className="absolute top-0 left-0 w-1 h-[1px] bg-accent-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute bottom-0 right-0 w-1 h-[1px] bg-accent-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                                            {/* Active State Background Layer */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-segment"
                                                    className="absolute inset-0 bg-accent-primary/[0.08] border-b-2 border-accent-primary shadow-[inset_0_0_15px_rgba(0,246,255,0.15)] -z-10"
                                                    style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
                                                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                                                />
                                            )}

                                            <span className="relative z-10 flex items-center gap-2">
                                                {isActive && (
                                                    <span className="w-1.5 h-1.5 bg-accent-primary rounded-none shadow-[0_0_8px_#00F6FF] animate-pulse" />
                                                )}
                                                {item}
                                                {isActive && (
                                                    <span className="font-mono text-[8px] text-accent-primary/50 ml-1 opacity-70">.EXE</span>
                                                )}
                                            </span>
                                        </button>

                                        {/* Segment Divider */}
                                        {index < navItems.length - 1 && (
                                            <div className="w-[1px] h-5 bg-white/10 skew-x-[-15deg]" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Action */}
                    <div className="hidden md:flex relative group">
                        <button
                            className="bg-accent-primary/10 text-accent-primary border border-accent-primary px-6 py-2.5 rounded-sm font-mono text-xs uppercase tracking-widest relative overflow-hidden transition-all hover:bg-accent-primary hover:text-[#0B0B0B] hover:shadow-[0_0_20px_rgba(0,246,255,0.4)]"
                            onClick={() => window.open('https://techxtreme.gu-tech.org/event/technical/27', '_blank', 'noopener,noreferrer')}
                        >
                            <span className="relative z-10 font-bold">REGISTER</span>
                            {/* Hover Scan Texture */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2 text-accent-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMobileMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-accent-primary/20 overflow-y-auto max-h-[85vh]"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {navItems.map((item, i) => (
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-left font-mono text-sm uppercase tracking-widest text-[#F2F2F2] py-3 border-b border-white/5 flex items-center justify-between group"
                                >
                                    <span>{item}</span>
                                    <span className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        &gt;
                                    </span>
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 bg-accent-primary text-[#0B0B0B] font-mono py-3 rounded-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,246,255,0.3)]"
                                onClick={() => window.open('https://techxtreme.gu-tech.org/event/technical/27', '_blank', 'noopener,noreferrer')}
                            >
                                Register Now
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
