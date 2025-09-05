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
            <div className="text-center z-10">
                <motion.h1 
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="text-6xl font-bold mb-4"
                >
                    Darío Albor
                </motion.h1>
                <motion.h2 
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    className="text-2xl text-gray-400"
                >
                    Desarrollador
                </motion.h2>
            </div>
        </motion.section>
    );
};

export default Hero;