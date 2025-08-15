'use client'

import { motion } from 'framer-motion'

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">LA</div>
                <div className="text-2xl font-bold">NARANJA</div>
                <div className="text-xl font-bold">DIGNA</div>
              </div>
            </div>
          </motion.div>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            El Legado de Tres Generaciones
          </motion.h2>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            LaNaranjaDigna es el fruto del trabajo y la pasión de nuestra familia de agricultores en la Valldigna. Conocemos la tierra, cuidamos cada árbol y seleccionamos solo el mejor fruto. Esta herencia es nuestra garantía de calidad y tu pasaporte a un sabor auténtico.
          </motion.p>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">Generaciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Calidad Garantizada</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 