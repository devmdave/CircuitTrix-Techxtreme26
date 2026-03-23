'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CyberCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    
    // Check if device is desktop
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        // Disable on touch devices to avoid issues
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsDesktop(!isTouchDevice);

        if (isTouchDevice) return;

        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        const updateCursorType = (e) => {
            const target = e.target;
            const computedStyle = window.getComputedStyle(target);
            if (computedStyle.cursor === 'pointer' || target.closest('a') || target.closest('button')) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', updateCursorType);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateCursorType);
        };
    }, []);

    if (!isDesktop) return null;

    return (
        <>
            {/* Core dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent-primary rounded-full pointer-events-none z-[100] mix-blend-screen"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: isPointer ? 1.5 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Outer Ring / Radar */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-primary pointer-events-none z-[99] mix-blend-screen"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isPointer ? 1.5 : 1,
                    opacity: isPointer ? 0.8 : 0.3
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            >
                <motion.div
                    className="absolute inset-0 border-t border-accent-primary rounded-full shadow-[0_0_10px_#00F6FF]"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
            </motion.div>
        </>
    );
}
