'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    MdCode,
    MdTextFields,
    MdDashboard,
    MdPalette,
    MdAutoAwesome,
    MdDns,
    MdSettings,
    MdStorage,
    MdLayers,
    MdCloud,
    MdRocketLaunch,
    MdTerminal,
    MdBugReport
} from "react-icons/md";

const techStackRow1 = [
    { name: 'React', icon: MdCode },
    { name: 'TypeScript', icon: MdTextFields },
    { name: 'Next.js', icon: MdDashboard },
    { name: 'Tailwind CSS', icon: MdPalette },
    { name: 'Framer Motion', icon: MdAutoAwesome },
    { name: 'Python', icon: MdBugReport },
    { name: 'JavaScript', icon: MdCode },
];

const techStackRow2 = [
    { name: 'Node.js', icon: MdDns },
    { name: 'Express.js', icon: MdSettings },
    { name: 'PostgreSQL', icon: MdStorage },
    { name: 'MongoDB', icon: MdLayers },
    { name: 'AWS', icon: MdCloud },
    { name: 'Docker', icon: MdRocketLaunch },
    { name: 'Git', icon: MdTerminal },
];

// Duplicate for seamless infinite scroll
const row1 = [...techStackRow1, ...techStackRow1];
const row2 = [...techStackRow2, ...techStackRow2];

export default function Arsenal() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <section ref={containerRef} id="arsenal" className="w-full bg-[#050505] py-24 md:py-32 relative overflow-hidden z-20 border-t border-white/5">
            <motion.div style={{ y: bgY }} className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-blue-900/10 via-blue-900/5 to-transparent pointer-events-none" />
            
            <motion.div style={{ y: textY }} className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-16 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    The <span className="text-blue-500">Arsenal</span>
                </h2>
                <p className="text-zinc-400 mt-4 text-lg max-w-xl">
                    A collection of tools and technologies I use to build scalable, high-performance web applications.
                </p>
            </motion.div>

            <div className="relative flex flex-col gap-6 w-[200vw] -left-[50vw] md:w-[150vw] md:-left-[25vw] opacity-80 hover:opacity-100 transition-opacity duration-500">
                {/* Row 1 - Left to Right */}
                <motion.div 
                    initial={{ x: "0%" }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="flex gap-6 items-center"
                >
                    {row1.map((tech, index) => (
                        <div 
                            key={`r1-${index}`} 
                            className="flex items-center gap-3 px-8 py-4 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full whitespace-nowrap min-w-max hover:border-blue-500/50 hover:bg-zinc-800 transition-all cursor-crosshair group"
                        >
                            <tech.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                            <span className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 - Right to Left */}
                <motion.div 
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    className="flex gap-6 items-center"
                >
                    {row2.map((tech, index) => (
                        <div 
                            key={`r2-${index}`} 
                            className="flex items-center gap-3 px-8 py-4 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full whitespace-nowrap min-w-max hover:border-emerald-500/50 hover:bg-zinc-800 transition-all cursor-crosshair group"
                        >
                            <tech.icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                            <span className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
                
                {/* Fade edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none" />
            </div>
        </section>
    );
}
