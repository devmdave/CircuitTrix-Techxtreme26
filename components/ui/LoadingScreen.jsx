'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fast fake progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                // Random jump in progress
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div 
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#0B0B0B] font-mono text-accent-primary"
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Matrix Rain / Tech Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

                    <div className="relative z-10 w-full max-w-sm px-8">
                        {/* Loading Header */}
                        <div className="flex justify-between text-xs mb-2 opacity-70 tracking-[0.2em] uppercase">
                            <span>Boot Sequence</span>
                            <span>{progress}%</span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-[2px] w-full bg-white/10 relative overflow-hidden mb-6">
                            <motion.div 
                                className="absolute top-0 left-0 h-full bg-accent-primary shadow-[0_0_15px_#00F6FF]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear", duration: 0.1 }}
                            />
                        </div>

                        {/* Status Messages */}
                        <div className="h-6 overflow-hidden text-xs uppercase tracking-widest opacity-80 flex items-center justify-center">
                            <motion.div
                                key={Math.floor(progress / 20)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                {progress < 30 && "Initializing Core Processors..."}
                                {progress >= 30 && progress < 60 && "Establishing Neural Links..."}
                                {progress >= 60 && progress < 90 && "Loading Cybernetic Dashboards..."}
                                {progress >= 90 && "System Online."}
                            </motion.div>
                        </div>

                        {/* Glitch Box Decorators */}
                        <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-accent-primary/50" />
                        <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-accent-primary/50" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
