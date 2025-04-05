import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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

        {/* Misión y Visión - Diseño fluido */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-tech text-2xl md:text-3xl font-bold mb-8 text-center">Misión y Objetivo </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-8"
            >
              <h3 className="font-tech text-xl font-bold mb-4">Misión</h3>
              <p className="font-sans text-gray-300">
              Nuestra misión es brindar servicios IT de consultoría y asesoramiento tecnológico integral personalizado para nuestros clientes, logrando potenciar y optimizar su desarrollo como organización, mejorando su productividad y su capacidad para innovar y crecer en un entorno de constante cambio.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-8"
            >
              <h3 className="font-tech text-xl font-bold mb-4">Objetivo</h3>
              <p className="font-sans text-gray-300">
              Nuestro objetivo como organización en desarrollo, es ofrecer soluciones tecnológicas robustas, innovadoras y personalizadas de manera tal que logren satisfacer las necesidades específicas de nuestros clientes.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Agustín Melián",
                role: "Gerente de Implementación Tecnica",
                description: "Especialista en gestión e implementación de soluciones tecnológicas.",
                image: "/Atlascore-integrantes/agusm.jpg"
              },
              {
                name: "Nicolás Arcos",
                role: "Ingeniero en Operaciones de Desarrollo",
                description: "Administrador de Infraestructura tecnológica. Impulsador de cultura DevOps en Atlascore.",
                image: "/Atlascore-integrantes/nicoa.png"
              },
              {
                name: "Emmanuel Leal Stuyck",
                role: "Gerente de Incidencias",
                description: "Especialista en la gestión de incidentes. Asegura la continuidad de servicios y minimiza tiempos de inactividad.",
                image: "/Atlascore-integrantes/emma.jpg"
              },
              {
                name: "Nicolás France",
                role: "Especialista en Inteligencia Artificial",
                description: "Aplica soluciones tecnologicas basadas en modelos predictivos y de aprendizaje automático para optimizar procesos empresariales.",
                image: "/Atlascore-integrantes/nicof.jpg"
              },
              {
                name: "Gabriel Bustos",
                role: "Desarrollador Full Stack | Ingeniero de Datos",
                description: "Combina sus dos areas de expertise, permitiendo la creación de soluciones innovadoras y basadas en información clave para la toma de decisiones estratégicas.",
                image: "/Atlascore-integrantes/gabi.jpg"
              },
              {
                name: "Agustín Quevedo",
                role: "Especialista en Soporte Técnico",
                description: "Asistencia especializada para resolver problemas de hardware, software y redes, es quien garantiza el correcto funcionamiento de los sistemas.",
                image: "/Atlascore-integrantes/agusq.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-gradient-to-br from-atlascorePrimario/10 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-6 flex flex-col items-center"
              >
                <div className="relative w-40 h-40 mb-4">
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-atlascorePrimario/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-tech text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-atlascorePrimario font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experiencia en Empresas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="font-tech text-2xl md:text-3xl font-bold mb-8 text-center">Stack Tecnológico</h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Tecnologías y herramientas que utilizamos para desarrollar soluciones innovadoras
          </p>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'bg-atlascorePrimario',
            }}
            className="w-full"
          >
            {[
              {
                name: "React",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                description: "Biblioteca de JavaScript para crear interfaces de usuario interactivas"
              },
              {
                name: "TypeScript",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                description: "JavaScript tipado que mejora la calidad y mantenibilidad del código"
              },
              {
                name: "Node.js",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                description: "Entorno de ejecución de JavaScript en el servidor"
              },
              {
                name: "Python",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                description: "Lenguaje versátil para desarrollo backend y análisis de datos"
              },
              {
                name: "Docker",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                description: "Plataforma de contenedores para desarrollo y despliegue"
              },
              {
                name: "AWS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                description: "Servicios en la nube para infraestructura y escalabilidad"
              },
              {
                name: "Ansible",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
                description: "Automatización de infraestructura y despliegue de aplicaciones"
              },
              {
                name: "MongoDB",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                description: "Base de datos NoSQL para aplicaciones modernas"
              },
              {
                name: "PostgreSQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                description: "Base de datos relacional robusta y confiable"
              },
              {
                name: "Git",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                description: "Control de versiones para desarrollo colaborativo"
              },
              {
                name: "Kubernetes",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
                description: "Orquestación de contenedores para aplicaciones distribuidas"
              },
              {
                name: "TensorFlow",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                description: "Framework para desarrollo de modelos de machine learning"
              },
              {
                name: "Jenkins",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
                description: "Automatización de integración y despliegue continuo"
              }
            ].map((tech, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className="bg-gradient-to-br from-atlascorePrimario/5 to-atlascoreSecundario/5 backdrop-blur-lg border border-atlascorePrimario/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full"
                >
                  <div className="w-32 h-32 mb-4 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-tech text-lg font-bold mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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