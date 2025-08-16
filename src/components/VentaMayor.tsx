'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  "Naranjas, mandarinas y limones de temporada.",
  "Aguacates de cultivo propio.",
  "Servicio para fruterías, supermercados y colectividades.",
  "Calibres y confección a medida de tus necesidades."
]

export default function VentaMayor() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="venta-mayor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/products/citricos-frescos.jpg"
                alt="Cítricos frescos de la Valldigna: naranjas, mandarinas y limones"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Venta al por Mayor de Cítricos y Aguacates
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Somos tu proveedor de confianza. Te ofrecemos un suministro fiable y de máxima calidad de cítricos y aguacates directamente del campo.
            </p>

            {/* Lista de características */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* Botón de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.button
                onClick={() => scrollToSection('contacto')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Solicitar Presupuesto
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 