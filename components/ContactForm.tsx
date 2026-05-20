'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdSend, MdCheckCircle, MdError } from 'react-icons/md';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-8 md:p-12 bg-zinc-900/40 backdrop-blur-md rounded-3xl border border-white/5 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-3xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-zinc-400 mb-8">Have a question or suggestion? I&apos;d love to hear from you.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What's on your mind?"
                        className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                    />
                </div>

                <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                    whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                    className={`mt-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                        status === 'success' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' :
                        status === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/50' :
                        'bg-blue-600 hover:bg-blue-700 text-white border border-blue-500/20'
                    } disabled:opacity-70 disabled:cursor-not-allowed cursor-none`}
                >
                    {status === 'idle' && <><MdSend className="w-5 h-5" /> Send Message</>}
                    {status === 'loading' && (
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...
                        </div>
                    )}
                    {status === 'success' && <><MdCheckCircle className="w-5 h-5" /> Message Sent Successfully!</>}
                    {status === 'error' && <><MdError className="w-5 h-5" /> Something went wrong. Try again.</>}
                </motion.button>
            </form>
            
            {status === 'success' && (
                <p className="text-xs text-zinc-500 mt-4 text-center">
                    Thank you for reaching out! I&apos;ll get back to you as soon as possible.
                </p>
            )}
        </div>
    );
}
