'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonios = [
  {
    nombre: "María García",
    cargo: "Propietaria, Restaurante El Rincón",
    texto: "La calidad de las naranjas es excepcional. Nuestros clientes siempre preguntan por el zumo natural. El servicio técnico es impecable.",
    rating: 5,
    imagen: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    nombre: "Carlos Rodríguez",
    cargo: "Gerente, Hotel Valencia Palace",
    texto: "Desde que trabajamos con LaNaranjaDigna, nuestros desayunos han mejorado notablemente. La máquina funciona perfectamente y el suministro es puntual.",
    rating: 5,
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    nombre: "Ana López",
    cargo: "Directora, Cafetería Central",
    texto: "La inversión inicial fue mínima y la rentabilidad máxima. Nuestros clientes aprecian la calidad del zumo recién exprimido.",
    rating: 5,
    imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
]

export default function Testimonios() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor garantía. Descubre por qué confían en nosotros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 relative"
            >
              {/* Icono de comillas */}
              <div className="absolute top-6 right-6 text-green-200">
                <Quote size={40} />
              </div>

              {/* Estrellas */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonio.texto}"
              </p>

              {/* Información del cliente */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonio.imagen}
                  alt={testimonio.nombre}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonio.nombre}</div>
                  <div className="text-sm text-gray-600">{testimonio.cargo}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfacción</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Soporte Técnico</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5.0</div>
            <div className="text-gray-600">Valoración Media</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 