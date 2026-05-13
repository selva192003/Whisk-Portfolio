'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scroll
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden'; // Restore globals.css default
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative flex items-center justify-center w-20 h-20">
              <div className="absolute inset-0 border-t-2 border-l-2 border-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-b-2 border-r-2 border-emerald-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <span className="text-white font-black tracking-tighter text-xl">SJ</span>
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3, duration: 0.5 }}
               className="flex flex-col items-center gap-3"
            >
                <div className="h-[2px] w-48 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-400"
                    />
                </div>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em]">Initializing Experience</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
