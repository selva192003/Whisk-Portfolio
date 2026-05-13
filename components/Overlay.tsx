'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // 0% - 15% -> My Name
    const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], ['0%', '-50%']);

    // 15% - 32% -> I build modern web applications
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.32], [0, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.15, 0.25, 0.32], ['-10%', '0%', '-10%']);

    // 32% - 50% -> Bridging frontend and backend
    const opacity3 = useTransform(scrollYProgress, [0.32, 0.42, 0.50], [0, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.32, 0.42, 0.50], ['10%', '0%', '10%']);

    // 50% - 68% -> Passionate fresher 
    const opacity4 = useTransform(scrollYProgress, [0.50, 0.60, 0.68], [0, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.50, 0.60, 0.68], ['10%', '0%', '-10%']);

    // 68% - 85% -> Master's at Kongu
    const opacity5 = useTransform(scrollYProgress, [0.68, 0.78, 0.85], [0, 1, 0]);
    const y5 = useTransform(scrollYProgress, [0.68, 0.78, 0.85], ['10%', '0%', '-10%']);

    // 85% - 100% -> Creating digital experiences
    const opacity6 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 0]);
    const scale6 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0.8, 1, 1]);

    return (
        <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 w-full h-[800vh]">

            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="sticky top-0 h-screen w-full flex items-center justify-center p-8 text-center"
            >
                <div className="max-w-4xl backdrop-blur-sm bg-black/20 p-8 rounded-3xl border border-white/5">
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference mb-4 drop-shadow-2xl">
                        SELVA J.
                    </h1>
                    <p className="text-xl md:text-3xl text-zinc-300 font-medium tracking-tight">
                        Aspiring Software Developer
                    </p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, x: x2 }}
                className="absolute top-[150vh] w-full flex items-center justify-start px-8 md:px-24 h-screen"
            >
                <div className="max-w-2xl bg-black/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5">
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                        I build modern <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            web applications.
                        </span>
                    </h2>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, x: x3 }}
                className="absolute top-[300vh] w-full flex items-center justify-end px-8 md:px-24 h-screen text-right"
            >
                <div className="max-w-2xl bg-black/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5">
                    <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                        Bridging frontend <br />
                        <span className="text-emerald-400 italic font-serif">
                            and backend.
                        </span>
                    </h2>
                </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute top-[450vh] w-full flex items-center justify-center px-8 h-screen text-center"
            >
                <div className="max-w-3xl bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-blue-500/10">
                    <p className="text-3xl md:text-5xl text-white font-bold leading-tight">
                        A passionate fresher with a Bachelor&apos;s degree in Information Technology.
                    </p>
                </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
                style={{ opacity: opacity5, y: y5 }}
                className="absolute top-[600vh] w-full flex items-center justify-center px-8 h-screen text-center"
            >
                <div className="max-w-3xl bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-emerald-500/10">
                    <p className="text-3xl md:text-5xl text-white font-bold leading-tight">
                        Completed Master&apos;s in Computer Applications at Kongu Engineering College.
                    </p>
                </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
                style={{ opacity: opacity6, scale: scale6 }}
                className="absolute top-[700vh] w-full flex items-center justify-center px-8 h-screen text-center"
            >
                <div className="max-w-4xl bg-black/30 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
                    <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 tracking-tighter leading-tight">
                        Creating beautiful digital experiences.
                    </h2>
                </div>
            </motion.div>

        </div>
    );
}
