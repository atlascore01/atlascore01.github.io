import { motion } from "framer-motion";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

export default function Home() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log("Particles container loaded", container);
    }, []);

    return (
        <article className="min-h-screen">
                {/* Hero Section */}
                <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                opacity: 0
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onHover: {
                                        enable: true,
                                        mode: "repulse"
                                    }
                                },
                                modes: {
                                    repulse: {
                                        distance: 100,
                                        duration: 0.4
                                    }
                                }
                            },
                            particles: {
                                color: {
                                    value: "#8BD990"
                                },
                                links: {
                                    color: "#4B4BA1",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce"
                                    },
                                    random: false,
                                    speed: 1,
                                    straight: false
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800
                                    },
                                    value: 80
                                },
                                opacity: {
                                    value: 0.5
                                },
                                shape: {
                                    type: "circle"
                                },
                                size: {
                                    value: { min: 1, max: 5 }
                                }
                            },
                            detectRetina: true
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-atlascoreDark via-atlascorePrimario/30 to-transparent opacity-80" />
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute w-72 h-72 bg-atlascorePrimario/10 rounded-full blur-3xl"
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -100, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ top: '20%', left: '10%' }}
                        />
                        <motion.div
                            className="absolute w-96 h-96 bg-atlascoreSecundario/10 rounded-full blur-3xl"
                            animate={{
                                x: [0, -150, 0],
                                y: [0, 100, 0],
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ bottom: '10%', right: '15%' }}
                        />
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-6 z-10"
                    >
                        <img
                            src="logotipo-white.png"
                            alt="Logotipo"
                            className="w-3/5 max-w-xl hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </section>

                {/* About Section */}
                <section className="relative w-full py-24">
                    <div className="absolute inset-0 bg-gradient-to-b from-atlascoreDark/90 to-atlascoreDark/40 backdrop-blur-sm" />
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="relative">
                                <h2 className="font-tech text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                                    <span className="relative">
                                        <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-atlascorePrimario to-atlascoreSecundario opacity-30"></span>
                                        <span className="relative text-white">Transformamos el</span>
                                    </span>
                                    {" "}
                                    <span className="relative">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-atlascorePrimario to-atlascoreSecundario font-extrabold">
                                            Futuro Digital
                                        </span>
                                    </span>
                                </h2>
                            </div>
                            <p className="font-tech text-gray-300 text-lg md:text-xl leading-relaxed">
                                AtlasCore impulsa la evolución digital en organizaciones de diversas escalas e industrias, 
                                combinando innovación tecnológica con estrategias personalizadas
                                para un crecimiento exponencial, escalable, sostenible y a medida de cada cliente según su necesidad.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="w-full py-24 px-4">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-tech text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-white"
                    >
                        Nuestras Soluciones
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="font-tech h-full p-8 rounded-2xl bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg 
                                    border border-atlascorePrimario/20 hover:border-atlascorePrimario/30 transition-all duration-300
                                    shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                    {service.icon}
                                    <h3 className="font-tech text-2xl font-semibold mb-4 text-white group-hover:text-atlascorePrimario transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="font-tech text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
        </article>
    );
}

const services = [
    {
        title: "Consultoría Tecnológica",
        description: "Estrategias personalizadas y soluciones innovadoras para impulsar tu transformación digital.",
        icon: <div className="w-12 h-12 mb-6 text-atlascorePrimario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        </div>
    },
    {
        title: "Automatización Inteligente",
        description: "Optimización de procesos mediante tecnologías avanzadas de automatización y IA.",
        icon: <div className="w-12 h-12 mb-6 text-atlascoreSecundario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
    },
    {
        title: "Desarrollo a Medida",
        description: "Creación de soluciones tecnológicas adaptadas perfectamente a tus necesidades específicas.",
        icon: <div className="w-12 h-12 mb-6 text-atlascorePrimario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        </div>
    },
    {
        title: "Administración de Infraestructura",
        description: "Gestión integral y optimización de infraestructura tecnológica para garantizar la máxima disponibilidad, seguridad y rendimiento de los sistemas.",
        icon: <div className="w-12 h-12 mb-6 text-atlascorePrimario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        </div>
    },
    {
        title: "Monitoreo y Análisis",
        description: "Supervisión continua y análisis en tiempo real de sistemas críticos para prevenir incidentes y optimizar el rendimiento de tu infraestructura tecnológica.",
        icon: <div className="w-12 h-12 mb-6 text-atlascoreSecundario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        </div>
    },
    {
        title: "ETL y Business Intelligence",
        description: "Transformamos datos en conocimiento mediante procesos de Extracción, Transformación y Carga (ETL), facilitando la toma de decisiones estratégicas basadas en datos.",
        icon: <div className="w-12 h-12 mb-6 text-atlascorePrimario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        </div>
    }
];
