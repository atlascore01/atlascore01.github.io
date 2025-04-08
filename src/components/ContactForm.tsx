"use client"

import { useState } from "react"
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor ingresa un email válido" }),
  subject: z.string().min(5, { message: "El negocio debe tener al menos 5 caracteres" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  service: z.string().nonempty({ message: "Por favor selecciona un servicio" }),
})
type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  // Inicializar react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      service: "",
    },
  })


  // Manejar el envío del formulario
  const { submit: onSubmit } = useWeb3Forms({
    access_key: import.meta.env.VITE_ACCESS_KEY_EMAIL,
    settings: {
      from_name: "Web Atlascore",
      subject: "New Contact Message from your Website"
    },
    onSuccess: () => {
      setIsSubmitting(true)
      setTimeout(() => {
        setFormResponse({
          type: "success",
          message: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
        })
        reset()
        setIsSubmitting(false)
      }, 2000)
    },
    onError: () => {
      setIsSubmitting(false)
      setTimeout(() => {
        setFormResponse({
          type: "error",
          message: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
        })
        setIsSubmitting(false)
      }, 2000)
    },
  });

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <AnimatePresence>
        {formResponse?.type === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 right-5 bg-green-100 border border-green-300 text-green-800 rounded-lg shadow-lg p-4 flex items-center gap-2"
          >
            {formResponse.type === "success" ? (
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            ) : (
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            )}
            <p className={`text-sm ${formResponse.type === "success" ? "text-green-700" : "text-red-700"}`}>
              {formResponse.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="font-tech text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">Escribenos un mail</h1>
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-8">
        <p className="font-tech text-gray-300 text-lg md:text-xl mb-6">
          Rellena el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
        </p>
        <div className="mb-6 bg-white rounded-2xl p-4 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-tech font-semibold">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-700">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-300" : "border-gray-300"
                    }`}
                  {...register("name")}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-300" : "border-gray-300"
                    }`}
                  {...register("email")}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2 font-tech font-semibold">
              <label htmlFor="subject" className="block text-gray-700">
                ¿Cuál es tu negocio?
              </label>
              <input
                id="subject"
                type="text"
                placeholder="¿A que te dedicas?"
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? "border-red-300" : "border-gray-300"
                  }`}
                {...register("subject")}
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2 font-tech font-semibold">
              <label htmlFor="service" className="block text-gray-700">
                ¿Qué servicio necesitas?
              </label>
              <select
                id="service"
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 ${errors.service ? "border-red-300" : "border-gray-300"}`}
                {...register("service", { required: "Por favor selecciona un servicio" })}
              >
                <option value="">Selecciona un servicio</option>
                <option value="desarrollo-web">Consultoría Tecnológica</option>
                <option value="diseno-grafico">Automatización Inteligente</option>
                <option value="marketing-digital">Desarrollo a Medida</option>
                <option value="consultoria-tecnica">Administración de Infraestructura</option>
                <option value="soporte-tecnico">Monitoreo y Análisis</option>
                <option value="mantenimiento">ETL y Business Intelligence</option>
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
            </div>

            <div className="space-y-2 font-tech font-semibold">
              <label htmlFor="message" className="block text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] ${errors.message ? "border-red-300" : "border-gray-300"
                  }`}
                {...register("message")}
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </span>
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}