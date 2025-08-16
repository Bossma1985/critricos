'use client'

import { motion } from 'framer-motion'
import { Zap, ShoppingCart } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <img
          src="/images/hero/naranjal-hero.jpg"
          alt="Naranjal de la Valldigna con árboles cargados de naranjas"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-20 container mx-auto px-4 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Texto y botones - Lado izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-300/80">
              Cítricos al por Mayor{' '}
              <span className="text-orange-400 drop-shadow-lg">LaNaranja</span>
              <span className="text-green-400 drop-shadow-lg">Digna</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300/80">
            Cítricos al por mayor con sello de agricultor. <br />
            Controlamos el proceso de principio a fin: cultivo, selección y distribución. <br />
            Recibe cítricos frescos y nuestra solución completa de zumo para bares y restaurantes, directo del campo a tu negocio.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection('solucion-hosteleria')}
                  className="inline-flex items-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                >
                  <Zap size={20} />
                  <span>Solución Hostelería</span>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection('venta-mayor')}
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors shadow-lg"
                >
                  <ShoppingCart size={20} />
                  <span>Ver Productos</span>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Espacio para las frutas del fondo - Lado derecho */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
} 