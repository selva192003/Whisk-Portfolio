'use client';
import { motion } from 'framer-motion';
import { MdVerified, MdDownload } from 'react-icons/md';

const certificates = [
  { id: 1, title: "AWS For Beginners", issuer: "AWS", link: "/Certificates/AWS For Begginers.pdf", type: "pdf" },
  { id: 2, title: "Agile Fundamentals", issuer: "Guvi", link: "/Certificates/Agile Fundamentals-Guvi.png", type: "image" },
  { id: 3, title: "Cloud Computing", issuer: "Cloud Academy", link: "/Certificates/Cloud Computing Certificate.pdf", type: "pdf" },
  { id: 4, title: "Data Science for Engineers", issuer: "NPTEL", link: "/Certificates/Data Science for Engineers Nptel Certifcate.pdf", type: "pdf" },
  { id: 5, title: "Edge Computing", issuer: "NPTEL", link: "/Certificates/Edge Computing-NPTEL Certificate.pdf", type: "pdf" },
  { id: 6, title: "Databricks Certificate", issuer: "Databricks", link: "/Certificates/Data Bricks Certificate.pdf", type: "pdf" },
  { id: 7, title: "DevOps for Engineering Leaders", issuer: "LinkedIn", link: "/Certificates/DevOps for Engineering Leaders.png", type: "image" },
  { id: 8, title: "Docker Certification", issuer: "Guvi", link: "/Certificates/Docker Certification-Guvi.png", type: "image" },
  { id: 9, title: "Fundamentals of DevOps", issuer: "Guvi", link: "/Certificates/Fundamentals of DevOps-Guvi.png", type: "image" },
  { id: 10, title: "Git Certification", issuer: "Guvi", link: "/Certificates/Git Certification-Guvi.png", type: "image" },
  { id: 11, title: "Google Analytics", issuer: "Google", link: "/Certificates/Google Analytics Badge.png", type: "image" },
  { id: 12, title: "Introduction to Containers", issuer: "Guvi", link: "/Certificates/Introducation to Containers-Guvi.png", type: "image" },
  { id: 13, title: "Jenkins for Automation", issuer: "Guvi", link: "/Certificates/Jenkins for Automation-Guvi.png", type: "image" },
  { id: 14, title: "Microsoft Azure Administrator", issuer: "Microsoft", link: "/Certificates/Microsoft Azure Administrator.png", type: "image" },
  { id: 15, title: "Postman API Fundamentals", issuer: "Postman", link: "/Certificates/Postman - Postman API Fundamentals Student Expert - 2025-07-31 (1).png", type: "image" },
  { id: 16, title: "Python Basics", issuer: "Udemy", link: "/Certificates/Python Basics Course-Udemy.docx", type: "doc" },
  { id: 17, title: "Terraform Certificate", issuer: "Guvi", link: "/Certificates/Terraform Certificate-Guvi.png", type: "image" },
  { id: 18, title: "GitHub Foundations", issuer: "GitHub", link: "/Certificates/github-foundations.png", type: "image" },
  { id: 19, title: "Data Fundamentals", issuer: "Certification Body", link: "/Certificates/data-fundamentals.png", type: "image" },
];

export default function Certifications() {
    return (
        <section id="certifications" className="w-full bg-[#050505] py-24 md:py-32 relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
                
                <div className="mb-16 md:mb-20 text-center md:text-left">
                    <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">Achievements</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Professional <span className="text-zinc-600">Certifications</span>
                    </h2>
                    <p className="text-zinc-400 mt-4 text-lg max-w-2xl">
                        A verified collection of my qualifications from leading platforms in the tech industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div 
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all cursor-crosshair min-h-[160px]"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <MdVerified className="text-emerald-400 w-5 h-5" />
                                </div>
                                <span className="text-zinc-500 text-xs font-mono uppercase bg-white/5 px-2 py-1 rounded">
                                    {cert.issuer}
                                </span>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-white text-base md:text-lg mb-4 line-clamp-2 leading-tight">
                                    {cert.title}
                                </h3>
                                
                                <motion.a 
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors cursor-none"
                                >
                                    View Certificate <MdDownload className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
