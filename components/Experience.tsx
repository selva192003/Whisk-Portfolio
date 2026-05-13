'use client';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: "2024 - 2026",
        role: "Master of Computer Applications",
        company: "Kongu Engineering College, Erode",
        description: "Completed postgraduate studies focusing on advanced software engineering, cloud computing, and full-stack development. Led academic projects spanning machine learning and modern web technologies.",
    },
    {
        year: "2021 - 2024",
        role: "Bachelor of Science in Information Technology",
        company: "The Madura College, Madurai",
        description: "Graduated with honors, establishing a strong foundation in computer science fundamentals, data structures, and algorithms. Built several foundational projects utilizing Python, Java, and SQL.",
    }
];

export default function Experience() {
    return (
        <section id="experience" className="w-full bg-[#050505] py-24 md:py-32 relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">

                <div className="mb-16 md:mb-24 text-center md:text-left">
                    <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">Background</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Education & <span className="text-zinc-600">Journey</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-zinc-900 group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:scale-110 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl shadow-black z-10 transition-all duration-500">
                                <div className="w-3 h-3 bg-zinc-400 group-hover:bg-blue-400 rounded-full transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-white/5 group-hover:border-white/20 group-hover:-translate-y-1 transition-all duration-500 shadow-2xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <h3 className="font-bold text-xl text-white tracking-tight">{exp.role}</h3>
                                    <span className="text-blue-400/80 font-mono text-sm whitespace-nowrap">{exp.year}</span>
                                </div>
                                <h4 className="font-medium text-lg text-emerald-400/80 mb-4">{exp.company}</h4>
                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
