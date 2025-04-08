import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CallForm() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "theme": "light", "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <section className="container mx-auto px-4 py-12">
            <h1 className="font-tech text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
                ó agenda una reunión
            </h1>
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-8">
                <p className="font-tech text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-6">
                    Descubre cómo podemos ayudarte a transformar tu negocio. Agenda una llamada con nuestro equipo.
                </p>
                <Cal namespace="30min"
                    calLink="atlascore-0cxev4/30min"
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{ "layout": "month_view", "theme": "light" }}
                />
            </div>
        </section>

    )
}
