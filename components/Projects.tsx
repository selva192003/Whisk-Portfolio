'use client';
import { MdArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "IPL Stats Hub",
        category: "Full-Stack Dashboard",
        year: "2024",
        description: "A comprehensive IPL analytics dashboard featuring 1,095+ matches, 10 franchises, and 290+ international players. Built with Spring Boot and Recharts.",
        technologies: ["React", "Spring Boot", "Tailwind CSS"],
        link: "https://ipl-dash-board-tau.vercel.app",
        github: "https://github.com/selva192003/IPL-DashBoard",
        image: "/images/IPL logo.jpg"
    },
    {
        id: 2,
        title: "Expense Ease",
        category: "Python Application",
        year: "2024",
        description: "A smart expense tracking and management desktop application with intuitive categorization, budget monitoring, and financial analytics.",
        technologies: ["Python", "Flask", "SQLite"],
        link: "https://github.com/selva192003/python-microProj/releases",
        github: "https://github.com/selva192003/python-microProj",
        image: "/images/Expense Ease logo.png"
    },
    {
        id: 3,
        title: "Agro Emission AI",
        category: "Machine Learning",
        year: "2024",
        description: "AI-powered data science project predicting agricultural emission patterns using environmental data to provide insights for sustainable farming.",
        technologies: ["Python", "Pandas", "Scikit-learn"],
        link: "https://github.com/selva192003/DS_Micro_Project",
        github: "https://github.com/selva192003/DS_Micro_Project",
        image: "/images/Agro Emission AI.jpg"
    },
    {
        id: 4,
        title: "Titanic Predict",
        category: "Data Science",
        year: "2024",
        description: "Classification model predicting passenger survival outcomes. Implements EDA and model evaluation with detailed performance metrics.",
        technologies: ["TensorFlow", "Keras", "NumPy"],
        link: "https://github.com/selva192003/ML-Micro-Project",
        github: "https://github.com/selva192003/ML-Micro-Project",
        image: "/images/Titanic Predict.png"
    },
    {
        id: 5,
        title: "Sri Murugan Electrical",
        category: "E-Commerce",
        year: "2024",
        description: "Modern, scalable e-commerce platform built to seamlessly manage product catalogs, customizable options, and high-performance routing.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://srimuruganelectricals.vercel.app",
        github: "https://github.com/selva192003/sri-murugan-electrical",
        image: "/images/sri murugan electricals logo.png"
    }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className={`perspective-[1200px] ${index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "col-span-1 lg:col-span-1 aspect-[4/5] md:aspect-auto"}`}>
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors duration-500 shadow-2xl w-full h-full"
            >
                {/* Background Image Setup */}
                <div className="absolute inset-0 z-0" style={{ transform: "translateZ(-50px)" }}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                </div>

                <div className="p-8 flex justify-between items-start w-full relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <span className="text-blue-400 font-mono text-xs tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        {project.category}
                    </span>
                    <span className="text-zinc-400 font-mono text-sm">
                        {project.year}
                    </span>
                </div>

                <div className="p-8 relative z-10 flex flex-col gap-4 w-full mt-auto" style={{ transform: "translateZ(40px)" }}>
                    <div className="flex gap-2 mb-2 flex-wrap">
                        {project.technologies.map((tech: string) => (
                            <span key={tech} className="text-xs text-zinc-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 line-clamp-2 md:line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 px-4 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black text-white text-sm font-semibold transition-all duration-300 backdrop-blur-md gap-2 cursor-none"
                        >
                            Live Demo <MdArrowOutward className="w-4 h-4" />
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white transition-colors duration-300 backdrop-blur-md cursor-none"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="w-full bg-[#050505] py-24 md:py-32 relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Featured <span className="text-zinc-600">Projects</span>
                        </h2>
                    </div>
                    <p className="text-zinc-400 max-w-sm text-lg leading-relaxed">
                        A curated selection of my most recent work, ranging from scalable full-stack applications to AI predictive models.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
