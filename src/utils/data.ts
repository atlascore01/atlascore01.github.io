export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    benefits: string[];
}

export const Services: Service[] = [
    {
        id: 'consultoria-tecnologica',
        title: "Consultoría Tecnológica",
        description: "Asesoramiento estratégico para optimizar y transformar tu infraestructura tecnológica.",
        icon: "/icons/contec.svg",
        features: [
            "Evaluación de infraestructura actual",
            "Planificación estratégica tecnológica",
            "Optimización de recursos IT",
            "Roadmap de transformación digital"
        ],
        benefits: [
            "Reducción de costos operativos",
            "Mejora en la eficiencia de procesos",
            "Ventaja competitiva tecnológica",
            "Escalabilidad planificada"
        ]
    },
    {
        id: 'automatizacion-inteligente',
        title: "Automatización Inteligente",
        description: "Optimización de procesos mediante tecnologías avanzadas de automatización e IA.",
        icon: "/icons/autint.svg",
        features: [
            "Automatización de procesos repetitivos",
            "Implementación de IA y Machine Learning",
            "Workflows personalizados",
            "Integración con sistemas existentes"
        ],
        benefits: [
            "Reducción de errores humanos",
            "Mayor eficiencia operativa",
            "Optimización de recursos",
            "Análisis predictivo"
        ]
    },
    {
        id: 'desarrollo-medida',
        title: "Desarrollo a Medida",
        description: "Creación de soluciones tecnológicas adaptadas perfectamente a tus necesidades específicas.",
        icon: "icons/desmed.svg",
        features: [
            "Desarrollo de software personalizado",
            "Aplicaciones web y móviles",
            "Integración de sistemas",
            "Arquitectura escalable"
        ],
        benefits: [
            "Soluciones 100% adaptadas",
            "Mayor control y flexibilidad",
            "Ventaja competitiva única",
            "Evolución continua del software"
        ]
    },
    {
        id: 'administracion-infraestructura',
        title: "Administración de Infraestructura",
        description: "Gestión integral y optimización de infraestructura tecnológica para máximo rendimiento.",
        icon: "icons/admininfra.svg"
        ,
        features: [
            "Gestión de servidores y redes",
            "Seguridad y respaldo de datos",
            "Optimización de recursos",
            "Mantenimiento preventivo"
        ],
        benefits: [
            "Alta disponibilidad",
            "Seguridad reforzada",
            "Rendimiento optimizado",
            "Reducción de incidentes"
        ]
    },
    {
        id: 'monitoreo-analisis',
        title: "Monitoreo y Análisis",
        description: "Supervisión continua y análisis en tiempo real de sistemas críticos.",
        icon: "icons/monanalisis.svg",
        features: [
            "Monitoreo 24/7",
            "Alertas en tiempo real",
            "Análisis de tendencias",
            "Reportes personalizados"
        ],
        benefits: [
            "Prevención de incidentes",
            "Tiempo de respuesta mejorado",
            "Decisiones basadas en datos",
            "Optimización continua"
        ]
    },
    {
        id: 'etl-business-intelligence',
        title: "ETL y Business Intelligence",
        description: "Transformamos datos en conocimiento mediante procesos ETL y análisis avanzado.",
        icon: "icons/etlbi.svg",
        features: [
            "Integración de fuentes de datos",
            "Transformación y limpieza",
            "Visualización avanzada",
            "Dashboards interactivos"
        ],
        benefits: [
            "Decisiones informadas",
            "Insights en tiempo real",
            "Ventaja competitiva analítica",
            "ROI mejorado"
        ]
    }
]; 
{/**
** Services del home que se reemplaza por el services global
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
    },
    {
        title: "Administración de Infraestructura",
        description: "Gestión integral y optimización de infraestructura tecnológica para garantizar la máxima disponibilidad, seguridad y rendimiento de los sistemas.",
        icon: <div className="w-12 h-12 mb-6 text-atlascorePrimario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        </div>
    },
    {
        title: "Monitoreo y Análisis",
        description: "Supervisión continua y análisis en tiempo real de sistemas críticos para prevenir incidentes y optimizar el rendimiento de tu infraestructura tecnológica.",
        icon: <div className="w-12 h-12 mb-6 text-atlascoreSecundario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        </div>
    },
    {
        title: "ETL y Business Intelligence",
        description: "Transformamos datos en conocimiento mediante procesos de Extracción, Transformación y Carga (ETL), facilitando la toma de decisiones estratégicas basadas en datos.",
        icon: <div className="w-12 h-12 mb-6 text-atlascorePrimario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        </div>
    }
];

    
    */}
