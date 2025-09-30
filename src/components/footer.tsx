import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="bg-[#0a0a0a]">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <div className="w-80 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>
                    
                    <div className="flex justify-center mb-6">
                        <motion.a
                            href="#home"
                            className="block cursor-pointer"
                        >
                            <motion.img 
                                src="/images/logoblue.svg" 
                                alt="Logo - Ir a Inicio" 
                                className="h-16 w-auto"
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        </motion.a>
                    </div>

                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400">
                    &copy; {t('footer.copyright')}
                    <span className="ml-1">{new Date().getFullYear()}.</span>
                    </p>
                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        {[
                            { name: t('footer.navigation.about'), href: '#about' },
                            { name: t('footer.navigation.experience'), href: '#experience' },
                            { name: t('footer.navigation.projects'), href: '#projects' },
                            { name: t('footer.navigation.contact'), href: '#contact' },
                            { name: t('footer.navigation.cv'), href: '/cv.pdf' }
                        ].map((item) => (
                            <li key={item.name}>
                                <a className="text-gray-400 transition hover:text-white" href={item.href}>
                                    {item.name}
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