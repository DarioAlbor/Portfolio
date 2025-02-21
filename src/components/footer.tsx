import { motion } from 'framer-motion';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="text-gray-400 mb-4 md:mb-0">
                        © 2025 Dario Albor. Todos los derechos reservados.
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                            Twitter
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;