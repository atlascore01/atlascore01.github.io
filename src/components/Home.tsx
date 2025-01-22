import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
    // Referencias para cada sección
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    // Detectar cuando cada sección está en vista
    const section1IsInView = useInView(section1Ref, { once: true, amount: 0.5 });
    const section2IsInView = useInView(section2Ref, { once: true, amount: 0.5 });
    const section3IsInView = useInView(section3Ref, { once: true, amount: 0.5 });

    return (
        <>
            <motion.section
                ref={section1Ref}
                className="min-h-screen flex flex-col items-center justify-center font-poppins px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={section1IsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img 
                    src="logotipo-white.png" 
                    alt="Logotipo" 
                    className="w-4/5 md:w-1/2 lg:w-1/3 max-w-xl" 
                />
                <h1 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl mt-6 max-w-2xl">
                    Impulsando la Innovación Digital para Empresas en Crecimiento
                </h1>
            </motion.section>

            <motion.section
                ref={section2Ref}
                className="min-h-screen flex flex-col items-center lg:items-end justify-center px-4 md:px-8 w-full bg-atlascoreDark"
                initial={{ opacity: 0, x: 50 }}
                animate={section2IsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="max-w-2xl w-full lg:w-3/4">
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-6">
                        Transformamos Negocios a Través de Soluciones Tecnológicas Innovadoras
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">
                        AtlasCore es una startup apasionada por la tecnología y el emprendimiento. Nos especializamos en impulsar la transformación digital de pequeñas y medianas empresas, ayudándolas a optimizar procesos, mejorar la productividad y alcanzar un crecimiento sostenible.
                    </p>
                </div>
            </motion.section>

            <motion.section
                ref={section3Ref}
                className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={section3IsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-center">
                    Nuestras Soluciones
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full px-4">
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
