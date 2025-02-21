import { motion } from 'framer-motion';
import React from 'react';
import { Project } from '../types';

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Proyecto 1",
            description: "Descripción del proyecto",
            image: "/proyecto1.jpg",
            technologies: ["React", "TypeScript", "Node.js"],
            githubUrl: "https://github.com",
            liveUrl: "https://demo.com"
        },
    ];

    return (
        <section id="projects" className="min-h-screen bg-gray-900 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-white mb-12"
                >
                    Proyectos
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-lg overflow-hidden"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="bg-gray-700 px-2 py-1 rounded-full text-sm text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.githubUrl} className="text-purple-400 hover:text-purple-300">GitHub</a>
                                    <a href={project.liveUrl} className="text-purple-400 hover:text-purple-300">Demo</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;