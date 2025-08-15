import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SolucionHosteleria from '@/components/SolucionHosteleria'
import VentaMayor from '@/components/VentaMayor'
import QuienesSomos from '@/components/QuienesSomos'
import Testimonios from '@/components/Testimonios'
import DondeEstamos from '@/components/DondeEstamos'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="solucion-hosteleria">
        <SolucionHosteleria />
      </div>
      <div id="venta-mayor">
        <VentaMayor />
      </div>
      <div id="quienes-somos">
        <QuienesSomos />
      </div>
      <div id="testimonios">
        <Testimonios />
      </div>
      <div id="donde-estamos">
        <DondeEstamos />
      </div>
      <div id="contacto">
        <ContactForm />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
