import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    ComputerDesktopIcon,
    CodeBracketIcon,
    CircleStackIcon,
    PaintBrushIcon,
    CloudIcon,
    BoltIcon
} from '@heroicons/react/24/outline';

const AboutMe: React.FC = () => {
    const { t } = useTranslation();
    
    const skills = [
        { Icon: ComputerDesktopIcon, title: t('about.skills.frontend.title'), items: t('about.skills.frontend.items', { returnObjects: true }) },
        { Icon: CodeBracketIcon, title: t('about.skills.backend.title'), items: t('about.skills.backend.items', { returnObjects: true }) },
        { Icon: CircleStackIcon, title: t('about.skills.database.title'), items: t('about.skills.database.items', { returnObjects: true }) },
        { Icon: BoltIcon, title: t('about.skills.events.title'), items: t('about.skills.events.items', { returnObjects: true }) },
        { Icon: CloudIcon, title: t('about.skills.cloud.title'), items: t('about.skills.cloud.items', { returnObjects: true }) },
        { Icon: PaintBrushIcon, title: t('about.skills.uiux.title'), items: t('about.skills.uiux.items', { returnObjects: true }) }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-transparent via-gray-900/5 to-gray-900/8" style={{ backgroundColor: 'oklch(0.40 0 0 / 0.01)' }}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-balance text-white">{t('about.title')}</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
                        {t('about.description')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map(({ Icon, title, items }) => (
                        <motion.div 
                            key={title}
                            whileHover={{ scale: 1.05 }} 
                            className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-700"
                        >
                            <div className="text-center">
                                <Icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {(items as string[]).map(item => (
                                    <span key={item} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;