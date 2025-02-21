import { motion } from 'framer-motion';
import React from 'react';
import { Experience } from '../types';

const ExperienceSection: React.FC = () => {
    const experiences: Experience[] = [
        {
            id: 1,
            company: "Empresa Tech",
            position: "Senior Developer",
            period: "2020 - Presente",
            description: "Desarrollo de aplicaciones web escalables",
            technologies: ["React", "Node.js", "TypeScript"]
        },
    ];

    return (
        <section id="experience" className="min-h-screen bg-gray-800 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-white mb-12"
                >
                    Experiencia
                </motion.h2>
                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 p-6 rounded-lg shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                            <p className="text-purple-400">{exp.company}</p>
                            <p className="text-gray-400">{exp.period}</p>
                            <p className="text-gray-300 mt-4">{exp.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.technologies.map((tech) => (
                                    <span 
                                        key={tech} 
                                        className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                                    >
                                        {tech}
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

export default ExperienceSection;