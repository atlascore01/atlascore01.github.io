import { motion } from "framer-motion";

interface DetailedService {
    title: string;
    description: string;
    icon: JSX.Element;
    features: string[];
    benefits: string[];
}

export default function Services() {
    return (
        <article className="min-h-screen bg-atlascoreDark">
            <section className="container mx-auto px-4 py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="font-tech text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Servicios Detallados
                    </h1>
                    <p className="font-tech text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                        Descubre cómo nuestros servicios pueden transformar tu negocio con soluciones tecnológicas avanzadas y personalizadas.
                    </p>
                </motion.div>

                {/* Servicios Detallados */}
                {detailedServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="mb-20 last:mb-0"
                    >
                        <div className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg 
                            border border-atlascorePrimario/20 rounded-2xl p-8 md:p-12"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <div className="w-16 h-16 mb-6 text-atlascorePrimario">
                                        {service.icon}
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

const detailedServices: DetailedService[] = [
    {
        title: "Consultoría Tecnológica",
        description: "Asesoramiento estratégico para optimizar y transformar tu infraestructura tecnológica.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>,
        features: [
            "Evaluación de infraestructura actual",
            "Planificación estratégica tecnológica",
            "Optimización de recursos IT",
            "Roadmap de transformación digital"
        ],
        benefits: [
            "Reducción de costos operativos",
            "Mejora en la eficiencia de procesos",
            "Ventaja competitiva tecnológica",
            "Escalabilidad planificada"
        ]
    },
    {
        title: "Automatización Inteligente",
        description: "Optimización de procesos mediante tecnologías avanzadas de automatización e IA.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>,
        features: [
            "Automatización de procesos repetitivos",
            "Implementación de IA y Machine Learning",
            "Workflows personalizados",
            "Integración con sistemas existentes"
        ],
        benefits: [
            "Reducción de errores humanos",
            "Mayor eficiencia operativa",
            "Optimización de recursos",
            "Análisis predictivo"
        ]
    },
    {
        title: "Desarrollo a Medida",
        description: "Creación de soluciones tecnológicas adaptadas perfectamente a tus necesidades específicas.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>,
        features: [
            "Desarrollo de software personalizado",
            "Aplicaciones web y móviles",
            "Integración de sistemas",
            "Arquitectura escalable"
        ],
        benefits: [
            "Soluciones 100% adaptadas",
            "Mayor control y flexibilidad",
            "Ventaja competitiva única",
            "Evolución continua del software"
        ]
    },
    {
        title: "Administración de Infraestructura",
        description: "Gestión integral y optimización de infraestructura tecnológica para máximo rendimiento.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>,
        features: [
            "Gestión de servidores y redes",
            "Seguridad y respaldo de datos",
            "Optimización de recursos",
            "Mantenimiento preventivo"
        ],
        benefits: [
            "Alta disponibilidad",
            "Seguridad reforzada",
            "Rendimiento optimizado",
            "Reducción de incidentes"
        ]
    },
    {
        title: "Monitoreo y Análisis",
        description: "Supervisión continua y análisis en tiempo real de sistemas críticos.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>,
        features: [
            "Monitoreo 24/7",
            "Alertas en tiempo real",
            "Análisis de tendencias",
            "Reportes personalizados"
        ],
        benefits: [
            "Prevención de incidentes",
            "Tiempo de respuesta mejorado",
            "Decisiones basadas en datos",
            "Optimización continua"
        ]
    },
    {
        title: "ETL y Business Intelligence",
        description: "Transformamos datos en conocimiento mediante procesos ETL y análisis avanzado.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>,
        features: [
            "Integración de fuentes de datos",
            "Transformación y limpieza",
            "Visualización avanzada",
            "Dashboards interactivos"
        ],
        benefits: [
            "Decisiones informadas",
            "Insights en tiempo real",
            "Ventaja competitiva analítica",
            "ROI mejorado"
        ]
    }
]; 