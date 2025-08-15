'use client'

import { useState } from 'react'
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Cerrar menú móvil después de hacer clic
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Navegación principal */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('contacto')}
              className="hover:opacity-80 transition-opacity duration-200 logo-button"
            >
              <Image
                src="/logo.png"
                alt="LaNaranjaDigna Logo"
                width={300}
                height={75}
                className="h-16 w-auto object-contain"
                priority
              />
            </button>
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('solucion-hosteleria')}
              className="text-gray-700 hover:text-green-600 transition-colors nav-link"
            >
              Solución Hostelería
            </button>
            <button 
              onClick={() => scrollToSection('venta-mayor')}
              className="text-gray-700 hover:text-green-600 transition-colors nav-link"
            >
              Venta al por Mayor
            </button>
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="text-gray-700 hover:text-green-600 transition-colors nav-link"
            >
              Quiénes Somos
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-gray-700 hover:text-green-600 transition-colors nav-link"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('donde-estamos')}
              className="text-gray-700 hover:text-green-600 transition-colors nav-link"
            >
              Donde Estamos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors contact-button"
            >
              Contacta
            </button>
            
            {/* Selector de idioma */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 bg-white border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <span className="text-red-500">=</span>
                <span>Español</span>
                <ChevronDown size={16} />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg py-2 min-w-[120px]">
                  <button className="w-full text-left px-3 py-2 hover:bg-gray-50">Español</button>
                  <button className="w-full text-left px-3 py-2 hover:bg-gray-50">English</button>
                </div>
              )}
            </div>
          </div>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('solucion-hosteleria')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left nav-link"
              >
                Solución Hostelería
              </button>
              <button 
                onClick={() => scrollToSection('venta-mayor')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left nav-link"
              >
                Venta al por Mayor
              </button>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left nav-link"
              >
                Quiénes Somos
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left nav-link"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('donde-estamos')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left nav-link"
              >
                Donde Estamos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors text-center contact-button"
              >
                Contacta
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 