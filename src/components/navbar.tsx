import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const { scrollY } = useScroll();
    const glowOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "#about", text: t('navbar.about') },
        { href: "#experience", text: t('navbar.experience') },
        { href: "#projects", text: t('navbar.projects') },
        { href: "#contact", text: t('navbar.contact') }
    ] as const;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <motion.header 
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 md:px-0"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="relative px-6 py-3 rounded-full backdrop-blur-md bg-black/20 border border-white/10 shadow-lg">
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                    style={{ opacity: glowOpacity }}
                />
                <div className="flex items-center space-x-4 md:space-x-8">
                    <motion.a
                        href="#home"
                        className="relative block cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 -z-10 rounded-full opacity-0 hover:opacity-75 bg-white/30 blur-lg transition-opacity duration-300"
                            whileHover={{
                                scale: 1.4,
                                filter: "blur(15px)",
                            }}
                        />
                        <img 
                            src="/images/logowhite.svg" 
                            alt="Logo - Ir a Inicio" 
                            className="w-8 h-8 md:w-10 md:h-10"
                        />
                    </motion.a>

                    <div className="w-px h-6 bg-white/10" />
                    
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            className="relative flex items-center space-x-2 text-white/80 transition-colors group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 text-xs md:text-sm font-medium">
                                {item.text}
                            </span>
                            <motion.span
                                className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-blue-500/0"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 0.2,
                                    background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 100%)",
                                    scale: 1.2,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}

                    <div className="w-px h-6 bg-white/10" />
                    
                    {/* Language Selector */}
                    <div className="flex items-center space-x-2">
                        <motion.button
                            onClick={() => changeLanguage('en')}
                            className={`relative w-8 h-6 rounded-sm overflow-hidden border transition-all duration-200 ${
                                i18n.language === 'en' ? 'border-blue-400 shadow-lg shadow-blue-400/50' : 'border-white/20 hover:border-white/40'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="English"
                        >
                            <img 
                                src="https://flagicons.lipis.dev/flags/4x3/gb.svg" 
                                alt="English"
                                className="w-full h-full object-cover"
                            />
                        </motion.button>
                        <motion.button
                            onClick={() => changeLanguage('es')}
                            className={`relative w-8 h-6 rounded-sm overflow-hidden border transition-all duration-200 ${
                                i18n.language === 'es' ? 'border-blue-400 shadow-lg shadow-blue-400/50' : 'border-white/20 hover:border-white/40'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="Español"
                        >
                            <img 
                                src="https://flagicons.lipis.dev/flags/4x3/es.svg" 
                                alt="Español"
                                className="w-full h-full object-cover"
                            />
                        </motion.button>
                    </div>
                    
                    <div className="w-px h-6 bg-white/10" />
                    
                    <motion.div
                        className="relative"
                        initial={{ y: 0 }}
                        animate={{
                            y: [0, -8, 0],
                            transition: {
                                delay: 1,
                                duration: 1.5,
                            }
                        }}
                    >
                        <motion.div
                            className="absolute -z-10 inset-0 rounded-full bg-blue-500"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0.6, 0],
                                scale: [1, 1.25, 1],
                                filter: ["blur(0px)", "blur(15px)", "blur(0px)"],
                                transition: {
                                    delay: 1,
                                    duration: 1.5,
                                }
                            }}
                            whileHover={{
                                opacity: 0.6,
                                scale: 1.25,
                                filter: "blur(15px)",
                            }}
                            transition={{
                                duration: 0.2
                            }}
                        />
                        <motion.div
                            className="relative px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium text-sm transition-all duration-100"
                            whileHover={{
                                scale: 1.05,
                                filter: "brightness(1.1)",
                                y: -4
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full"
                            >
                                {t('footer.navigation.cv')}
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;