'use client';
import { motion } from 'framer-motion';

export default function CyberButton({ children, variant = 'primary', onClick, className = '' }) {
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';
    const isHolographic = variant === 'holographic';

    const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm uppercase tracking-[0.15em] font-bold cursor-pointer transition-all duration-300 min-h-[52px] overflow-hidden group gap-3";
    
    // Variant classes setup
    let variantClasses = "";
    if (isPrimary) {
        variantClasses = "bg-accent-primary/10 text-accent-primary border border-accent-primary hover:bg-accent-primary hover:text-background shadow-[0_0_15px_rgba(163,255,18,0.15)] hover:shadow-[0_0_30px_rgba(163,255,18,0.4)]";
    } else if (isSecondary) {
        variantClasses = "bg-surface/50 backdrop-blur-md text-text-primary border border-white/10 hover:border-accent-primary/50 hover:bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(163,255,18,0.2)]";
    } else if (isHolographic) {
        variantClasses = "bg-transparent text-[#00ffc6] border border-[#00ffc6]/30 hover:border-[#00ffc6] hover:bg-[#00ffc6]/10 text-shadow-[0_0_10px_rgba(0,255,198,0.5)] shadow-[inset_0_0_15px_rgba(0,255,198,0.1)] hover:shadow-[0_0_25px_rgba(0,255,198,0.4)]";
    }

    // Determine the glow and scan color based on variant
    const glowColor = isHolographic ? 'border-[#00ffc6]' : 'border-accent-primary';
    const scanBgColor = isPrimary ? 'bg-background/20' : (isHolographic ? 'bg-[#00ffc6]/30' : 'bg-accent-primary/20');
    
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses} ${className}`}
        >
            {/* Background scanning/hologram effect */}
            {(isPrimary || isHolographic) && (
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-30 mix-blend-overlay z-0 pointer-events-none" />
            )}

            {/* Glowing borders around corners */}
            <div className={`absolute left-0 top-0 w-2 h-2 border-l-2 border-t-2 transition-colors duration-300 ${glowColor}/50 ${isPrimary ? 'group-hover:border-background/50' : `group-hover:${glowColor}`}`} />
            <div className={`absolute right-0 bottom-0 w-2 h-2 border-r-2 border-b-2 transition-colors duration-300 ${glowColor}/50 ${isPrimary ? 'group-hover:border-background/50' : `group-hover:${glowColor}`}`} />

            {/* Hover Glitch / Line animation */}
            <motion.div 
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] ${scanBgColor} opacity-0 group-hover:opacity-100 hidden sm:block`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
            />

            {/* Specific Holographic glitch overlay */}
            {isHolographic && (
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#00ffc6]/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 pointer-events-none"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
