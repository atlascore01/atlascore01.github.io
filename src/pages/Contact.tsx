import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import CallForm from "../components/CallForm";

export default function Contact() {
    // Variantes para animaciones suaves y escalonadas
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Tiempo entre animaciones de los hijos
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <article className="min-h-screen bg-gradient-to-bl from-atlascoreDark to-atlascoreSecundario">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center pt-24"
            >
                <motion.h1
                    variants={itemVariants}
                    className="font-tech text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                    Contáctanos
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="font-tech text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
                >
                    Si tienes alguna pregunta o inquietud, no dudes en contactarnos. Estamos aquí para ayudarte!
                </motion.p>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col lg:flex-row lg:justify-center lg:space-x-1 space-y-10 lg:space-y-0 items-stretch"
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 text-center flex flex-col justify-start"
                    >
                        <ContactForm />
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 text-center flex flex-col justify-start"
                    >
                        <CallForm />
                    </motion.div>
                </motion.div>
            </motion.div>


        </article>
    );
}