'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function DondeEstamos() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Donde Estamos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visítanos en Simat de la Valldigna, donde cultivamos con pasión los mejores cítricos de la región valenciana.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.1234567890123!2d-0.3107403!3d39.0426577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61bf6f3255de2f%3A0x6eef99901a9e8ee2!2sSimat%20de%20la%20Valldigna%2C%20Valencia!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación LaNaranjaDigna en Simat de la Valldigna"
              ></iframe>
            </div>
            
            {/* Información adicional del mapa */}
            <div className="mt-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">📍 Ubicación Exacta</h4>
              <p className="text-gray-600 text-sm">
                Simat de la Valldigna, Valencia<br />
                Código Postal: 46750<br />
                Coordenadas: 39.0427°N, 0.3107°W
              </p>
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                    <p className="text-gray-600">
                      Finca La Valldigna<br />
                      Simat de la Valldigna<br />
                      46750 Valencia, España
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-gray-600">653 963 899</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@lanaranjadigna.com</p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horarios de Atención</h4>
                    <p className="text-gray-600">
                      Lunes - Viernes: 8:00 - 18:00<br />
                      Sábados: 8:00 - 14:00<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">🌿 Sobre Nuestra Ubicación</h4>
              <p className="text-green-800 text-sm leading-relaxed">
                Simat de la Valldigna es un municipio de la comarca de la Safor, 
                en la provincia de Valencia. Nuestra finca se encuentra en esta 
                privilegiada zona agrícola, conocida por la excelente calidad de 
                sus cítricos gracias a su clima mediterráneo y suelos fértiles.
              </p>
            </div>

            {/* Botón de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => scrollToSection('contacto')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Solicitar Visita
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 