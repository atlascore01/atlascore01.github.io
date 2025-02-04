import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Services } from "../utils/data"

const ServiceSection: React.FC = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);
        }
    }, []);

    return (
        <article className="min-h-screen bg-gradient-to-bl from-atlascoreDark to-atlascoreSecundario ">
            <section className="container mx-auto px-4 py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="font-tech text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Conocé los detalles de nuestros servicios
                    </h1>
                    <p className="font-tech text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                        Te invitamos a descubrir cómo nuestros servicios pueden transformar tu negocio con soluciones tecnológicas avanzadas y personalizadas.
                    </p>
                </motion.div>

                {/* Servicios Detallados */}
                {Services.map((service, index) => (
                    <motion.div
                        key={index}
                        id={service.id}
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg 
                            border border-atlascorePrimario/20 rounded-2xl p-8 md:p-12"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <div className="w-16 h-16 mb-6 text-atlascorePrimario">
                                        <span className="inline-block w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:text-current">
                                            <img 
                                                src={service.icon} 
                                                alt={`Icono ${service.title}`}
                                                className="w-16 h-16 object-contain"
                                            />
                                        </span>
                                    </div>
                                    <h2 className="font-tech text-2xl md:text-3xl font-bold text-white mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="font-tech text-gray-300 mb-6">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Características */}
                                        <div className="space-y-4">
                                            <h3 className="font-tech text-xl text-atlascorePrimario font-semibold">
                                                Características
                                            </h3>
                                            <ul className="font-tech text-gray-300 space-y-2">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-atlascorePrimario mt-1">•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Beneficios */}
                                        <div className="space-y-4">
                                            <h3 className="font-tech text-xl text-atlascorePrimario font-semibold">
                                                Beneficios
                                            </h3>
                                            <ul className="font-tech text-gray-300 space-y-2">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-atlascorePrimario mt-1">•</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </article>
    );
}

export default ServiceSection;

