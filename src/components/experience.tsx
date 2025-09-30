import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ExperienceSection: React.FC = () => {
    const { t } = useTranslation();
    
    const experiences = [
        {
            title: t('experience.jobs.vefixy.title'),
            company: t('experience.jobs.vefixy.company'),
            companyUrl: "https://vefixy.com",
            period: t('experience.jobs.vefixy.period'),
            duration: t('experience.jobs.vefixy.duration'),
            description: t('experience.jobs.vefixy.description'),
            technologies: ["NestJS", "Node.js", "React.js", "Next.js", "Vue", "Redux", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Apache Kafka", "Java"]
        },
        {
            title: t('experience.jobs.garzon.title'),
            company: t('experience.jobs.garzon.company'),
            companyUrl: "https://drogueriagarzon.com",
            period: t('experience.jobs.garzon.period'),
            duration: t('experience.jobs.garzon.duration'),
            description: t('experience.jobs.garzon.description'),
            technologies: ["Node.js", "React.js", "Next.js", "MySQL", "Python", "Power BI"]
        },
        {
            title: t('experience.jobs.albula.title'),
            company: t('experience.jobs.albula.company'),
            companyUrl: "https://albula.ar",
            period: t('experience.jobs.albula.period'),
            duration: t('experience.jobs.albula.duration'),
            description: t('experience.jobs.albula.description'),
            technologies: ["React.js", "Vue", "JavaScript", "WordPress", "Google Ads", "Meta Ads", "SEO"]
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gradient-to-b from-gray-900/8 via-gray-900/12 to-gray-900/16">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-balance text-white">{t('experience.title')}</h2>
                    <p className="text-lg text-gray-400 text-pretty">
                        {t('experience.description')}
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline dot with glow effect */}
                            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/50"></div>
                            
                            {/* Timeline line with gradient */}
                            {index < experiences.length - 1 && (
                                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-gray-700"></div>
                            )}
                            
                            {/* Experience card */}
                            <motion.div 
                                className="ml-6 bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -2 }}
                            >
                                <div className="mb-4">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <a 
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 hover:underline"
                                        >
                                            {exp.company}
                                        </a>
                                        <span className="text-gray-500">•</span>
                                        <span className="text-gray-400 text-sm">{exp.period}</span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                                
                                {/* Technologies badges */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;