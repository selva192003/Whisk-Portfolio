'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MdCode, MdScience, MdCloud } from "react-icons/md";

type ServiceType = {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
};

const services: ServiceType[] = [
    {
        title: "Full-Stack Development",
        description: "Building scalable web applications from end-to-end. Expertise in React, Next.js for fluid user interfaces and Node.js, Spring Boot for robust backend architectures.",
        icon: MdCode,
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Data Science & Machine Learning",
        description: "Transforming raw data into actionable insights. Building predictive models, analyzing trends, and developing AI-driven solutions using Python, TensorFlow, and Scikit-learn.",
        icon: MdScience,
        color: "from-emerald-500 to-teal-400"
    },
    {
        title: "Cloud & Infrastructure",
        description: "Deploying and managing applications in the cloud. Ensuring high availability, CI/CD automation, and scalable architectures utilizing AWS, Docker, and Vercel.",
        icon: MdCloud,
        color: "from-purple-500 to-pink-400"
    }
];

function ServiceCard({ service, index }: { service: ServiceType; index: number }) {
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
        <div className="perspective-[1200px]">
            <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/20 transition-colors h-full flex flex-col"
            >
                {/* Hover Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col gap-6 h-full" style={{ transform: "translateZ(30px)" }}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 bg-clip-text`}>
                        <service.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                        {service.title}
                    </h3>
                    
                    <p className="text-zinc-400 leading-relaxed mt-auto" style={{ transform: "translateZ(10px)" }}>
                        {service.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="w-full bg-[#050505] py-24 md:py-32 relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">What I Do</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Competencies</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}
