'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { label: 'Solución Hostelería', id: 'solucion-hosteleria' },
    { label: 'Venta al por Mayor', id: 'venta-mayor' },
    { label: 'Quiénes Somos', id: 'quienes-somos' },
    { label: 'Testimonios', id: 'testimonios' },
    { label: 'Donde Estamos', id: 'donde-estamos' },
  ]

  return (
         <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
       scrolled 
         ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-700/30' 
         : 'bg-gray-900/90 backdrop-blur-xl shadow-md'
     }`}>
      {/* Navegación principal */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
                        <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative overflow-hidden rounded-xl p-2 transition-all duration-300 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-green-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src="/logo.png"
                alt="LaNaranjaDigna Logo"
                width={280}
                height={70}
                className="h-14 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </button>
          </div>

          {/* Navegación desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
                             <button 
                 key={item.id}
                 onClick={() => scrollToSection(item.id)}
                 className="group relative px-4 py-2 rounded-xl text-white hover:text-orange-300 transition-all duration-300 hover:bg-white/10 font-medium"
               >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 to-green-400/15 rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100 scale-95 group-hover:scale-100" />
              </button>
            ))}
          </div>

          {/* Botón de contacto */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scrollToSection('contacto')}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Contacta</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
                         className="lg:hidden group relative p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="relative">
              {isMenuOpen ? (
                                 <X size={24} className="text-white group-hover:text-orange-300 transition-colors" />
               ) : (
                 <Menu size={24} className="text-white group-hover:text-orange-300 transition-colors" />
              )}
            </div>
          </button>
        </div>

        {/* Menú móvil moderno */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6">
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 space-y-4">
                {menuItems.map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group w-full text-left px-4 py-3 rounded-xl text-gray-800 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-300 flex items-center justify-between font-medium"
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className="text-gray-500 group-hover:text-gray-700 transition-colors transform group-hover:translate-x-1" />
                  </button>
                ))}
                
                {/* Botón de contacto móvil */}
                <div className="pt-4 border-t border-gray-200/50">
                  <button 
                    onClick={() => scrollToSection('contacto')}
                    className="group w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Contacta Ahora</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 