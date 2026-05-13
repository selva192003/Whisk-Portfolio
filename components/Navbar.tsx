'use client';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';



export default function Navbar() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
        >
            <div className="flex items-center justify-between md:justify-center gap-2 md:gap-8 px-6 py-4 bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
                <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-white font-bold tracking-tighter text-xl mr-auto md:mr-8 cursor-pointer">
                    SJ<span className="text-blue-500">.</span>
                </a>
                
                <div className="hidden md:flex items-center gap-6">
                    {/* Tabs removed to enhance minimalistic design per user request */}
                </div>

                <motion.a 
                    href="https://linkedin.com/in/selva-j/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(10, 102, 194, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-auto md:ml-8 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-semibold hover:bg-[#004182] border border-transparent transition-all duration-300 cursor-none"
                >
                    <FaLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                </motion.a>
            </div>
        </motion.nav>
    );
}
