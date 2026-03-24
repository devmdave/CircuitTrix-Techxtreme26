'use client';

import { motion } from 'framer-motion';
import { Users, Linkedin, Twitter, Github, Instagram, Link2 } from 'lucide-react';

const teamMembers = [
    {
        name: "MADHAV DAVE",
        role: "COORDINATOR",
        image: "/team/madhav.jpg",
        id: "NODE-11A",
        socials: { linkedin: "https://www.linkedin.com/in/madhav-dave-52b552379/" }
    },
    {
        name: "JAMIN MARKANA",
        role: "CO-COORDINATOR",
        image: "/team/jaimin.jpeg",
        id: "NODE-22B",
        socials: { linkedin: "https://www.linkedin.com/in/jaimin-markana-2b6000383/" }
    },
    {
        name: "SACHI NAIK",
        role: "VOLUNTEER",
        image: "/team/sachi.jpeg",
        id: "NODE-33C",
        socials: { linkedin: "https://www.linkedin.com/in/sachi-naik-46a668381/" }
    },
    {
        name: "TRUSHTI RIBADIYA",
        role: "VOLUNTEER",
        image: "/team/trushti.jpeg",
        id: "NODE-44D",
        socials: { linkedin: "https://www.linkedin.com/in/ribadiya-trushti-034aba389/" }
    },
    {
        name: "JAINIL AGAL",
        role: "VOLUNTEER",
        image: "/team/jainil.jpg",
        id: "NODE-55E",
        socials: { linkedin: "https://www.linkedin.com/in/jainil-agal-9aa992383/" }
    }
];

export default function Team() {
    return (
        <section id="team" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Horizontal tracking grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface/80 border border-white/10 rounded-sm mb-6 font-mono text-xs text-accent-primary backdrop-blur-md"
                    >
                        <Users size={14} className="animate-pulse" />
                        <span>PERSONNEL_DATABASE</span>
                    </motion.div>

                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-center uppercase tracking-widest text-white relative flex flex-col sm:block leading-tight sm:leading-none">
                        <span>CORE</span> <span className="text-accent-primary drop-shadow-[0_0_15px_rgba(163,255,18,0.4)] mt-1 sm:mt-0">OPERATORS</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full max-w-[280px] mx-auto sm:max-w-none sm:mx-0 sm:w-[calc(50%-0.8rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)] bg-[#111] border border-white/10 p-4 text-center transition-all duration-300 hover:border-accent-primary/30 group relative"
                            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                        >
                            {/* Inner Scanning Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Corner Decals */}
                            <div className="absolute top-1 right-1 font-mono text-[7px] text-white/30 tracking-widest uppercase">
                                {member.id}
                            </div>

                            {/* Frame for Profile Image */}
                            <div className="relative aspect-square w-full mb-4 overflow-hidden border border-white/10 group-hover:border-accent-primary/50 transition-colors p-1 bg-black">
                                {/* Crosshairs target graphic */}
                                <div className="absolute inset-1 pointer-events-none z-10 opacity-0 group-hover:opacity-30 transition-opacity">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-accent-primary" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-accent-primary" />
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-accent-primary" />
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-accent-primary" />
                                </div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500 scale-100 group-hover:scale-105"
                                />
                            </div>

                            {/* Info */}
                            <div className="space-y-1 relative z-10">
                                <h4 className="font-heading text-sm font-bold text-white tracking-widest group-hover:text-accent-primary transition-colors duration-300 pt-1">
                                    {member.name}
                                </h4>
                                <p className="text-center font-mono text-[9px] text-text-muted tracking-[0.15em] mb-4">
                                    {member.role}
                                </p>

                                {/* Social Links built into bottom bar */}
                                <div className="flex justify-center gap-2 pt-3 border-t border-white/5 relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-accent-primary/30" />
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} className="w-6 h-6 flex items-center justify-center bg-black border border-white/10 text-white/50 hover:text-accent-primary hover:border-accent-primary/50 transition-colors" aria-label={`${member.name} LinkedIn`}>
                                            <Linkedin size={10} />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} className="w-6 h-6 flex items-center justify-center bg-black border border-white/10 text-white/50 hover:text-accent-primary hover:border-accent-primary/50 transition-colors" aria-label={`${member.name} Twitter`}>
                                            <Twitter size={10} />
                                        </a>
                                    )}
                                    {member.socials.github && (
                                        <a href={member.socials.github} className="w-6 h-6 flex items-center justify-center bg-black border border-white/10 text-white/50 hover:text-accent-primary hover:border-accent-primary/50 transition-colors" aria-label={`${member.name} GitHub`}>
                                            <Github size={10} />
                                        </a>
                                    )}
                                    {member.socials.instagram && (
                                        <a href={member.socials.instagram} className="w-6 h-6 flex items-center justify-center bg-black border border-white/10 text-white/50 hover:text-accent-primary hover:border-accent-primary/50 transition-colors" aria-label={`${member.name} Instagram`}>
                                            <Instagram size={10} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

