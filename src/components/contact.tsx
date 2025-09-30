import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ContactForm } from '../types';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

declare const process: {
  env: {
    REACT_APP_GITHUB_URL?: string;
    REACT_APP_LINKEDIN_URL?: string;
    REACT_APP_EMAIL?: string;
    [key: string]: string | undefined;
  };
};

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    const githubUrl = process.env.REACT_APP_GITHUB_URL;
    const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
    const email = process.env.REACT_APP_EMAIL;

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/20 to-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-balance text-white">Contacto</h2>
                    <p className="text-lg text-gray-400 text-pretty">
                        Si necesitas contactarme, no dudes en escribirme
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div 
                        className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Tu nombre"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">Mensaje</label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200"
                                type="submit"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                Enviar mensaje
                            </motion.button>
                        </form>

                         <div className="flex flex-row justify-center items-center gap-5 mt-8 pt-6 border-t border-gray-700/50">
                             <motion.a
                                 href={githubUrl || "https://github.com/darioalbor"}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center justify-center w-12 h-12 bg-gray-700/50 border border-gray-600/50 rounded-full text-white hover:text-gray-200 hover:bg-gray-600/50 transition-all duration-200 flex-shrink-0"
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                             >
                                 <span className="sr-only">GitHub</span>
                                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                 </svg>
                             </motion.a>
                             
                             <motion.a
                                 href={linkedinUrl || "https://linkedin.com/in/albordario"}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center justify-center w-12 h-12 bg-gray-700/50 border border-gray-600/50 rounded-full text-white hover:text-gray-200 hover:bg-gray-600/50 transition-all duration-200 flex-shrink-0"
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                             >
                                 <span className="sr-only">LinkedIn</span>
                                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                 </svg>
                             </motion.a>
                             
                             <motion.a
                                 href={`mailto:${email || "dario@vefixy.com"}`}
                                 className="inline-flex items-center justify-center w-12 h-12 bg-gray-700/50 border border-gray-600/50 rounded-full text-white hover:text-gray-200 hover:bg-gray-600/50 transition-all duration-200 flex-shrink-0"
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.95 }}
                             >
                                 <span className="sr-only">Email</span>
                                 <EnvelopeIcon className="w-7 h-7" />
                             </motion.a>
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;