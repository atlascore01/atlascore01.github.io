import Parallax from "./Parallax";

export default function Home() {

    return (
        <article className="min-h-screen">
            <Parallax >
                <section className="h-screen flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            src="logotipo-white.png"
                            alt="Logotipo"
                            className="w-3/5 max-w-xl"
                        />
                        <h1 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl max-w-2xl text-center">
                            Impulsando la Innovación Digital para Empresas en Crecimiento
                        </h1>
                    </div>
                </section>
                <section className="w-full lg:w-3/4 bg-atlascoreDark p-4 rounded-lg md:rounded-r-3xl lg:md:rounded-l-none py-16">
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-6">
                        Transformamos Negocios a Través de Soluciones Tecnológicas Innovadoras
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">
                        AtlasCore es una startup apasionada por la tecnología y el emprendimiento. Nos especializamos en impulsar la transformación digital de pequeñas y medianas empresas, ayudándolas a optimizar procesos, mejorar la productividad y alcanzar un crecimiento sostenible.
                    </p>
                </section>
                <section className="w-full py-16">
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
                </section>
            </Parallax>
        </article>
    )
}
