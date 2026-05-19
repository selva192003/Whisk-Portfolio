'use client';
import { useRef } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from './ContactForm';

export default function FooterCTA() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
    const orbY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

    return (
        <section ref={containerRef} id="contact" className="w-full bg-black py-24 md:py-32 relative z-20 border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <motion.div style={{ y: orbY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-16 relative z-10 text-center"
            >
                <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>

                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-tight">
                    Let&apos;s Build Something<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-800">Extraordinary.</span>
                </h2>

                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    Looking for a dedicated developer to bring your digital vision to life?
                    I&apos;m currently open to new opportunities and exciting collaborations.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
                    <motion.a
                        href="https://www.linkedin.com/in/selva-j-89ba092b5/"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(10, 102, 194, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex justify-center items-center gap-3 bg-[#0A66C2] text-white border border-[#0A66C2]/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#004182] transition-all duration-300 w-full md:w-auto min-w-[200px] cursor-none"
                    >
                        <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" /> LinkedIn Profile
                    </motion.a>

                    <motion.a
                        href="https://github.com/selva192003"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex justify-center items-center gap-3 bg-zinc-900 text-white border border-white/10 px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors duration-300 w-full md:w-auto cursor-none"
                    >
                        <FaGithub className="w-5 h-5" /> GitHub
                    </motion.a>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 bg-zinc-900/40 backdrop-blur-md rounded-3xl border border-white/5">

                    <div className="flex items-center gap-4 text-zinc-300">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                            <MdEmail className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <p className="font-mono text-xs text-zinc-500 uppercase">Email</p>
                            <a href="mailto:selvaj192003@gmail.com" className="hover:text-white transition-colors">selvaj192003@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-zinc-300">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                            <MdPhone className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <p className="font-mono text-xs text-zinc-500 uppercase">Phone</p>
                            <a href="tel:+919342831123" className="hover:text-white transition-colors">+91 9342831123</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-zinc-300">
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
                            <MdLocationOn className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <p className="font-mono text-xs text-zinc-500 uppercase">Location</p>
                            <span className="text-zinc-300">Madurai, Tamil Nadu</span>
                        </div>
                    </div>

                </div>

                <div className="mt-12">
                    <ContactForm />
                </div>

                <div className="mt-16 text-center flex flex-col items-center border-t border-white/5 pt-8">
                    <p className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Selva J. Built with Next.js, Framer Motion & Tailwind.
                    </p>
                </div>
            </div>
        </section>
    );
}
