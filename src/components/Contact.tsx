import { useEffect } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Contact() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                "styles": { 
                    "branding": { "brandColor": "#8BD990" } 
                },
                "hideEventTypeDetails": false,
            });
        })();
    }, []);

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
                        Agenda una Reunión
                    </h1>
                    <p className="font-tech text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                        Descubre cómo podemos ayudarte a transformar tu negocio. Agenda una llamada con nuestro equipo.
                    </p>
                </motion.div>

                {/* Cal Component */}
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-8">
                    <Cal
                        calLink="tu-usuario/reunion-consultoria"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{
                            name: "AtlasCore",
                            email: "contacto@atlascore.com",
                            theme: "dark",
                        }}
                    />
                </div>
            </section>
        </article>
    );
} 