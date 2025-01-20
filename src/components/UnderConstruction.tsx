"use client"

import { motion } from "framer-motion"

export default function UnderConstruction() {
    return (
        <div className="fixed inset-0 flex items-start justify-center bg-gray-900 bg-opacity-75 z-50">
            {/* Video de fondo */}
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                src="/background.mp4" // Asegúrate de que la ruta sea correcta
                autoPlay
                loop
                muted
            />
            <div className="text-center w-full relative z-10">
                <motion.div
                    className="w-full h-16 mb-8 relative overflow-hidden"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="absolute inset-0 flex"
                        animate={{ x: "-100%" }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="flex-none w-full h-16 bg-yellow-400 flex items-center justify-center"
                            >
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-2 h-9 bg-gradient-to-r from-black via-black to-transparent transform -skew-x-12" />
                                ))}
                                <div className="w-11/12 h-9 bg-gradient-to-r from-black via-black to-transparent transform -skew-x-12 flex items-center justify-center">
                                    <span className="text-yellow-400 font-bold text-sm whitespace-nowrap transform skew-x-12">
                    /// SITIO EN CONSTRUCCIÓN ///
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.h1
                    className="text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    En construcción
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Estamos preparando todo, nos vemos pronto ...
                </motion.p>
            </div>
        </div>
    )
}