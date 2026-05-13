'use client';

import { motion } from 'framer-motion';

export default function ShinyBadge({ text }: { text: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden relative group cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_2s_infinite]" />
            <span className="text-zinc-300 text-xs font-semibold tracking-widest uppercase relative z-10">
                {text}
            </span>
        </motion.div>
    );
}
