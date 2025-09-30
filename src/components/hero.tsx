import { motion } from 'framer-motion';
import React from 'react';
import { Stars } from './assets/stars';
import { Meteor } from './assets/meteor';

const Hero: React.FC = () => {
    return (
        <motion.section 
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden"
        >
            <Stars />
            <Meteor />
            <div className="container mx-auto px-6 text-center z-10">
                <motion.div 
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="animate-fade-in-up"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                        Hola, soy{" "}
                        <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                            Darío Albor
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto text-pretty">
                    Ingeniero de Software y Arquitecto de Plataformas
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Ver mis proyectos
                        </button>
                        <button
                            className="px-6 py-3 text-lg font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Contactar
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;