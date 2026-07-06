import { createContext, useContext, useState } from 'react'

const translations = {
  es: {
    nav: ['Soluciones', 'Tecnología', 'Muebles', 'Nosotros', 'Contacto'],
    navCta: 'Solicitar cotización',
    hero: {
      eyebrow: 'U.S.-based · McAllen, TX',
      titleLine1: 'Soluciones de Tecnología',
      titleEm: 'y Mobiliario',
      titleLine2: 'para Empresas',
      sub: 'Sergaint ayuda a empresas a adquirir, amueblar y equipar espacios de trabajo productivos con tecnología confiable, mobiliario comercial y soporte de procurement profesional.',
      cta: 'Solicitar cotización',
      ctaSecondary: 'Ver soluciones',
      trust: 'Soporte basado en EE. UU. para tecnología, mobiliario y proyectos de espacio de trabajo.',
      stats: [
        { val: '12+', lbl: 'Años de experiencia' },
        { val: '2', lbl: 'Áreas de solución' },
        { val: '100%', lbl: 'Soporte basado en EE. UU.' },
      ],
    },
    nosotros: {
      eyebrow: '◆ Sobre nosotros',
      title: 'Un socio basado en EE. UU.\nconstruido sobre la confianza.',
      p1: 'Sergaint es un proveedor de soluciones basado en EE. UU. con más de 12 años de experiencia ayudando a empresas a adquirir, amueblar y equipar sus espacios de trabajo. Operamos desde McAllen, TX, sirviendo a empresas que necesitan un socio de procurement confiable.',
      p2: 'Nos especializamos en dos áreas principales — tecnología empresarial y mobiliario comercial de oficina — para ofrecer experiencia profunda y orientación genuina, no un catálogo genérico.',
      values: [
        { name: 'Confianza', desc: 'Más de 12 años de servicio consistente y relaciones de confianza con clientes en múltiples industrias.' },
        { name: 'Soporte en EE. UU.', desc: 'Presencia local en McAllen, TX. Estándares de negocio americanos, servicio ágil y comunicación clara.' },
        { name: 'Especialización', desc: 'Nos enfocamos en tecnología y mobiliario para ofrecer conocimiento real y soluciones prácticas, no solo productos.' },
      ],
    },
    servicios: {
      eyebrow: '◆ Nuestras soluciones',
      title: 'Lo que entregamos.',
      cards: [
        {
          icon: '💻',
          name: 'Soluciones Tecnológicas',
          desc: 'Ayudamos a empresas a adquirir y desplegar la tecnología que necesitan — desde computadoras y periféricos hasta redes y herramientas de colaboración.',
          items: ['Computadoras y periféricos', 'Impresoras y gestión de impresión', 'Equipos de red', 'Pantallas y herramientas de colaboración', 'Soporte de procurement de TI'],
        },
        {
          icon: '🪑',
          name: 'Soluciones de Mobiliario',
          desc: 'Mobiliario de oficina de grado comercial para empresas que necesitan espacios funcionales y profesionales — desde una sola oficina hasta implementaciones multi-sede.',
          items: ['Escritorios y estaciones de trabajo', 'Sillas y asientos de oficina', 'Mobiliario para salas de conferencias', 'Almacenamiento y archiveros', 'Áreas de recepción y lounge'],
        },
      ],
    },
    marcas: {
      eyebrow: '◆ Nuestras marcas',
      title: 'Trabajamos con los mejores.',
    },
    contacto: {
      eyebrow: '◆ Contacto',
      title: 'Trabajemos juntos.',
      sub: 'Solicita una cotización, haz una pregunta o cuéntanos sobre tu proyecto.',
      cards: [
        { label: 'Correo', value: 'contact@sergaint.com' },
        { label: 'Teléfono', value: '(956) 726-1797' },
        { label: 'Ubicación', value: 'McAllen, TX · USA' },
      ],
    },
    footer: '© 2025 Serga International LLC. Todos los derechos reservados.',
  },
  en: {
    nav: ['Solutions', 'Technology', 'Furniture', 'About', 'Contact'],
    navCta: 'Request a Quote',
    hero: {
      eyebrow: 'U.S.-based · McAllen, TX',
      titleLine1: 'Business Technology &',
      titleEm: 'Office Furniture',
      titleLine2: 'Solutions',
      sub: 'Sergaint helps companies source, furnish, and equip productive workspaces with reliable technology, commercial furniture, and professional procurement support.',
      cta: 'Request a Quote',
      ctaSecondary: 'Explore Solutions',
      trust: 'U.S.-based support for business technology, furniture, and workspace projects.',
      stats: [
        { val: '12+', lbl: 'Years in business' },
        { val: '2', lbl: 'Core solution areas' },
        { val: '100%', lbl: 'U.S.-based support' },
      ],
    },
    nosotros: {
      eyebrow: '◆ About us',
      title: 'A U.S.-based partner\nbuilt on reliability.',
      p1: 'Sergaint is a U.S.-based solutions provider with over 12 years of experience helping businesses source, furnish, and equip their workspaces. We operate from McAllen, TX, serving companies that need a reliable, responsive procurement partner.',
      p2: 'We specialize in two core areas — business technology and commercial office furniture — to offer deep expertise and genuine guidance, not a generic catalog.',
      values: [
        { name: 'Reliability', desc: '12+ years of consistent service and trusted client relationships across multiple industries.' },
        { name: 'U.S.-Based Support', desc: 'Local presence in McAllen, TX. American business standards, responsive service, and clear communication.' },
        { name: 'Focused Expertise', desc: 'We focus on technology and furniture to deliver real knowledge and practical solutions, not just products.' },
      ],
    },
    servicios: {
      eyebrow: '◆ Our solutions',
      title: 'What we deliver.',
      cards: [
        {
          icon: '💻',
          name: 'Technology Solutions',
          desc: 'We help businesses source and deploy the technology they need — from computers and peripherals to networking and collaboration tools.',
          items: ['Business computers and peripherals', 'Printers and managed print', 'Networking equipment', 'Displays and collaboration tools', 'IT procurement support'],
        },
        {
          icon: '🪑',
          name: 'Office Furniture Solutions',
          desc: 'Commercial-grade office furniture for businesses that need functional, professional spaces — from single offices to multi-site rollouts.',
          items: ['Desks and workstations', 'Office seating', 'Conference room furniture', 'Storage and filing', 'Reception and lounge areas'],
        },
      ],
    },
    marcas: {
      eyebrow: '◆ Our brands',
      title: 'We work with the best.',
    },
    contacto: {
      eyebrow: '◆ Contact',
      title: "Let's work together.",
      sub: 'Request a quote, ask a question, or tell us about your project.',
      cards: [
        { label: 'Email', value: 'contact@sergaint.com' },
        { label: 'Phone', value: '(956) 726-1797' },
        { label: 'Location', value: 'McAllen, TX · USA' },
      ],
    },
    footer: '© 2025 Serga International LLC. All rights reserved.',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
