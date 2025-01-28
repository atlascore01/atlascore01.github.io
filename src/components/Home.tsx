import Parallax from "./Parallax";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <article className="min-h-screen">
            <Parallax>
                {/* Hero Section */}
                <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-atlascoreDark via-atlascorePrimario/30 to-transparent opacity-80" />
                    
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
                        <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl max-w-3xl text-center leading-tight">
                            Innovación Digital para la 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-atlascorePrimario via-white to-atlascoreSecundario font-extrabold">
                                {" "}Nueva Era Empresarial
                            </span>
                        </h1>
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-atlascorePrimario via-atlascoreSecundario to-atlascorePrimario text-transparent bg-clip-text">
                                Transformamos el Futuro Digital
                            </h2>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                                AtlasCore impulsa la evolución digital de empresas visionarias, 
                                combinando innovación tecnológica con estrategias personalizadas 
                                para un crecimiento exponencial.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="w-full py-24 px-4">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-white"
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
                                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg 
                                    border border-atlascorePrimario/20 hover:border-atlascorePrimario/30 transition-all duration-300
                                    shadow-lg hover:shadow-2xl hover:-translate-y-1"
                                >
                                    {service.icon}
                                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-atlascorePrimario transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </Parallax>
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
    }
];
