import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
