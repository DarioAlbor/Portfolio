import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <section id="contact" className="min-h-screen bg-gray-800 py-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-xl p-8 shadow-2xl"
                >
                    <h2 className="text-4xl font-bold text-white mb-8">Contacto</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2">Nombre</label>
                            <input
                                type="text"
                                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Mensaje</label>
                            <textarea
                                className="w-full bg-gray-800 text-white rounded-lg p-3 h-32 focus:ring-2 focus:ring-purple-500"
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
                            type="submit"
                        >
                            Enviar mensaje
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;