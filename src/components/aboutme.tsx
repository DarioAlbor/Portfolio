import { motion } from 'framer-motion';
import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="min-h-screen bg-gray-900 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-8">Sobre mí</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-gray-300">
                            <p className="mb-4">
                                [descripción personal]
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-white">Frontend</h3>
                                    <p className="text-gray-400">React, Vue, Angular</p>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-white">Backend</h3>
                                    <p className="text-gray-400">Node.js, Python, Java</p>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative h-[400px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3"></div>
                            <img 
                                src="/foto.jpg" 
                                alt="foto" 
                                className="absolute inset-0 object-cover rounded-lg shadow-xl"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;