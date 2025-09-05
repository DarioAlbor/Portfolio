import { motion } from 'framer-motion';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <div className="flex justify-center mb-6">
                        <motion.img 
                            src="/images/logoblue.svg" 
                            alt="Logo" 
                            className="h-16 w-auto"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400">
                    &copy; Todos los derechos reservados
                    <span className="ml-1">{new Date().getFullYear()}.</span>
                    </p>
                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        {[
                            { name: 'Inicio', href: '#home' },
                            { name: 'Sobre Mí', href: '#about' },
                            { name: 'Experiencia', href: '#experience' },
                            { name: 'Proyectos', href: '#projects' },
                            { name: 'Contacto', href: '#contact' },
                            { name: 'CV', href: 'https://example.com/cv' }
                        ].map((item) => (
                            <li key={item.name}>
                                <a className="text-gray-400 transition hover:text-white" href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                        {[
                            { name: 'LinkedIn', icon: 'M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.25 11.25h-3v-5.5c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06v5.6h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.58v5.6z', href: 'https://www.linkedin.com/in/darioalbor' },
                            { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', href: 'https://github.com/DarioAlbor' },
                        ].map((social) => (
                            <li key={social.name}>
                                <a href={social.href} rel="noreferrer" target="_blank" className="text-gray-400 transition hover:text-white">
                                    <span className="sr-only">{social.name}</span>
                                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;