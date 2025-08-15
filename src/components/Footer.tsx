'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <div className="text-xl font-bold">LaNaranjaDigna</div>
                <div className="text-sm text-gray-400">Solución Hostelería</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tres generaciones cultivando los mejores cítricos de la Valldigna. Calidad, tradición y servicio integral para tu negocio.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('solucion-hosteleria')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Solución Hostelería
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('venta-mayor')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Venta al por Mayor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('quienes-somos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('donde-estamos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Donde Estamos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nuestros Productos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('venta-mayor')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Naranjas de Zumo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('venta-mayor')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mandarinas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('venta-mayor')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Limones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('venta-mayor')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Aguacates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solucion-hosteleria')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Máquinas Exprimidoras
                </button>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Finca La Valldigna<br />
                    Carretera de la Valldigna, Km 15<br />
                    46700 Valencia, España
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">653 963 899</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">info@lanaranjadigna.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Lunes - Viernes: 8:00 - 18:00<br />
                    Sábados: 8:00 - 14:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 LaNaranjaDigna. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 