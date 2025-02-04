import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-atlascoreDark to-atlascoreSecundario font-poppins text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Título con animación */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12"
        >
          Sobre Nosotros
        </motion.h1>

        {/* Nuestra Historia - Enfoque en el presente y futuro */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-tech text-2xl md:text-3xl font-bold mb-8 text-center">Nuestra Historia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fundación */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-8"
            >
              <h3 className="font-tech text-xl font-bold mb-4">Fundación</h3>
              <p className="font-sans text-gray-300">
                Atlascore fue fundada en 2024 con la visión de...
              </p>
            </motion.div>
            {/* Objetivos actuales */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-8"
            >
              <h3 className="font-tech text-xl font-bold mb-4">Objetivos Actuales</h3>
              <p className="font-sans text-gray-300">
                Nuestro enfoque actual es...
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Misión y Visión - Diseño fluido */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-tech text-2xl md:text-3xl font-bold mb-8 text-center">Misión y Visión</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-8"
            >
              <h3 className="font-tech text-xl font-bold mb-4">Misión</h3>
              <p className="font-sans text-gray-300">
                ...
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-8"
            >
              <h3 className="font-tech text-xl font-bold mb-4">Visión</h3>
              <p className="font-sans text-gray-300">
                ...
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Nuestros Valores - Tarjetas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-tech text-2xl md:text-3xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="font-tech grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovación",
                description: "Buscamos constantemente nuevas formas de mejorar.",
              },
              {
                title: "Integridad",
                description: "Actuamos con honestidad y transparencia.",
              },
              {
                title: "Colaboración",
                description: "Trabajamos juntos para alcanzar el éxito.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nuestro Equipo - Diseño fluido */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-tech text-2xl md:text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            Conoce al equipo detrás de Atlascore. Somos un grupo de profesionales apasionados por la tecnología.
          </p>
          {/* Aquí podrías agregar tarjetas o una galería con fotos y descripciones del equipo */}
        </motion.section>
      </div>
    </div>
  );
};

export default About; 



// ... existing code ...

{/* 
  Línea de tiempo (Guardar para el futuro)
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-12"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nuestra Historia</h2>
    <div className="relative">
      <div className="absolute left-1/2 w-1 h-full bg-atlascorePrimario/20 transform -translate-x-1/2"></div>
      <div className="space-y-8">
        {[
          {
            year: "2015",
            title: "Fundación",
            description: "Atlascore fue fundada con la visión de transformar la tecnología.",
          },
          {
            year: "2018",
            title: "Primer gran proyecto",
            description: "Implementamos nuestra primera solución a gran escala.",
          },
          {
            year: "2021",
            title: "Expansión internacional",
            description: "Comenzamos a operar en múltiples países.",
          },
          {
            year: "2023",
            title: "Innovación continua",
            description: "Seguimos innovando con soluciones de vanguardia.",
          },
        ].map((event, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
          >
            <div className="w-1/2 p-4">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </motion.div>
            </div>
            <div className="w-1/2 p-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="inline-block bg-atlascorePrimario/20 rounded-full px-6 py-3"
              >
                <span className="text-lg font-bold">{event.year}</span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
*/}

// ... existing code ...