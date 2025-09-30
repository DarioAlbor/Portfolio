import { motion } from 'framer-motion';
import React from 'react';
import { 
    ComputerDesktopIcon,
    CodeBracketIcon,
    CircleStackIcon,
    PaintBrushIcon,
    CloudIcon,
    BoltIcon
} from '@heroicons/react/24/outline';

const skills = [
    { Icon: ComputerDesktopIcon, title: "Frontend", items: ["React", "Next.js", "Vue.js", "Astro", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap", "Chakra UI"] },
    { Icon: CodeBracketIcon, title: "Backend", items: ["Node.js", "NestJS", "Python", "Java"] },
    { Icon: CircleStackIcon, title: "Bases de Datos", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { Icon: BoltIcon, title: "Eventos", items: ["Apache Kafka", "RabbitMQ"] },
    { Icon: CloudIcon, title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Vercel", "CI/CD", "Git", "Entorno Atlassian"] },
    { Icon: PaintBrushIcon, title: "UI & UX", items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] }
];

const AboutMe: React.FC = () => {
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
                    <h2 className="text-4xl font-bold mb-4 text-balance text-white">Sobre mí</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
                        Especializado en transformar requerimientos de negocio complejos en plataformas de software robustas. Mi foco es la escalabilidad, la alta disponibilidad y la eficiencia.
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
                                {items.map(item => (
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