import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
    // Referencias para cada sección
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    // Detectar cuando cada sección está en vista
    const section1IsInView = useInView(section1Ref, { once: true });
    const section2IsInView = useInView(section2Ref, { once: true });
    const section3IsInView = useInView(section3Ref, { once: true });

    return (
        <>
            <motion.section
                ref={section1Ref}
                className="min-h-screen flex flex-col items-center justify-center font-poppins"
                initial={{ opacity: 0, y: 20 }}
                animate={section1IsInView ? { opacity: 1, y: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 2.5 }}
            >
                <img src="logotipo-white.png" alt="Logotipo" className="w-1/3" />
                <h1 className="text-white font-semibold text-2xl">
                    Impulsando la Innovación Digital para Empresas en Crecimiento
                </h1>
            </motion.section>

            <motion.section
                ref={section2Ref}
                className="min-h-screen flex flex-col items-end justify-center px-8 w-full lg:w-3/4 bg-atlascoreDark"
                initial={{ opacity: 0, x: 100 }}
                animate={section2IsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 2.5 }}
            >
                <div className="max-w-2xl">
                    <h2 className="text-white text-4xl mb-6">
                        Transformamos Negocios a Través de Soluciones Tecnológicas Innovadoras
                    </h2>
                    <p className="text-gray-300">
                        AtlasCore es una startup apasionada por la tecnología y el emprendimiento. Nos especializamos en impulsar la transformación digital de pequeñas y medianas empresas, ayudándolas a optimizar procesos, mejorar la productividad y alcanzar un crecimiento sostenible.
                    </p>
                </div>
            </motion.section>

            <motion.section
                ref={section3Ref}
                className="min-h-screen flex flex-col items-center justify-center p-8"
                initial={{ opacity: 0, x: 100 }}
                animate={section3IsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 2.5 }}
            >
                <h2 className="text-white text-4xl mb-12">
                    Nuestras Soluciones
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                    <div className="bg-atlascorePrimario/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-white text-xl font-semibold mb-4">Consultoría Tecnológica Personalizada</h3>
                        <p className="text-gray-300">
                            Ayudamos a las empresas a identificar y aplicar las herramientas tecnológicas adecuadas para sus necesidades.
                        </p>
                    </div>

                    <div className="bg-atlascorePrimario/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-white text-xl font-semibold mb-4">Optimización de Procesos de Negocio</h3>
                        <p className="text-gray-300">
                            Simplificamos y automatizamos procesos para mejorar la eficiencia y productividad.
                        </p>
                    </div>

                    <div className="bg-atlascorePrimario/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-white text-xl font-semibold mb-4">Soluciones Innovadoras a Medida</h3>
                        <p className="text-gray-300">
                            Diseño y desarrollo de tecnologías adaptadas a los objetivos específicos de cada cliente.
                        </p>
                    </div>
                </div>
            </motion.section>
        </>
    )
}
