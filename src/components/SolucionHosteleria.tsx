'use client'

import { motion } from 'framer-motion'
import { Settings, Wrench, Citrus } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: "Máquina Profesional a Bajo Coste",
    description: "Te cedemos una avanzada exprimidora profesional de alto rendimiento, fabricada en España, a un coste muy reducido. Olvídate de la gran inversión inicial."
  },
  {
    icon: Wrench,
    title: "Servicio Técnico Integral",
    description: "Nos encargamos del mantenimiento y las reparaciones. Si hay una avería, es nuestro problema, no el tuyo. Tu negocio no para."
  },
  {
    icon: Citrus,
    title: "La Mejor Naranja de Zumo",
    description: "A cambio, te suministramos en exclusiva nuestras naranjas de la Valldigna, seleccionadas para un zumo con el punto justo de dulzor."
  }
]

export default function SolucionHosteleria() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solucion-hosteleria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Una Alianza para tu Negocio de Hostelería
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrece el mejor zumo de naranja natural sin complicaciones. Nuestra solución integral para Bares, Restaurantes y Hoteles está diseñada para maximizar tu rentabilidad y la satisfacción de tus clientes.
          </p>
        </motion.div>

        {/* Tarjetas de características */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botón de acción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => scrollToSection('contacto')}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Quiero esta Solución
          </button>
        </motion.div>
      </div>
    </section>
  )
} 