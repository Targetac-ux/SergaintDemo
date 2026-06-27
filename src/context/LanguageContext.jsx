import { createContext, useContext, useState } from 'react'

const translations = {
  es: {
    nav: ['Inicio', 'Nosotros', 'Servicios', 'Contacto'],
    hero: {
      eyebrow: 'Distribuidora con 12 años de experiencia',
      titleLine1: 'Distribuimos calidad.',
      titleEm: 'Conectamos',
      titleLine2: 'negocios.',
      sub: 'Somos el socio confiable de empresas que exigen lo mejor en tecnología y mobiliario de alta gama.',
      cta: 'Conoce nuestros servicios',
      stats: [
        { val: '12+', lbl: 'Años de experiencia' },
        { val: '2', lbl: 'Categorías especializadas' },
        { val: '100%', lbl: 'Compromiso de calidad' },
      ],
    },
    nosotros: {
      eyebrow: '◆ Sobre nosotros',
      title: 'Una historia construida\nsobre la confianza.',
      p1: 'Sergaint es una distribuidora especializada con más de 12 años de experiencia en el mercado. Nació con la convicción de que las empresas merecen acceso a productos de calidad, respaldados por un servicio responsable y cercano.',
      p2: 'A lo largo del tiempo hemos consolidado relaciones de largo plazo con nuestros clientes, entendiendo sus necesidades y ofreciendo soluciones que combinan funcionalidad, diseño y durabilidad en dos verticales clave: tecnología y muebles.',
      values: [
        { name: 'Calidad', desc: 'Trabajamos únicamente con productos que cumplen altos estándares de funcionalidad y durabilidad.' },
        { name: 'Confianza', desc: '12 años de relaciones sólidas con nuestros clientes son el mejor reflejo de nuestro compromiso.' },
        { name: 'Especialización', desc: 'Nos enfocamos en dos categorías para ofrecer conocimiento profundo y asesoría genuina.' },
      ],
    },
    servicios: {
      eyebrow: '◆ Nuestros servicios',
      title: 'Lo que distribuimos.',
      cards: [
        {
          icon: '💻',
          name: 'Tecnología',
          desc: 'Distribuimos equipos y soluciones tecnológicas para empresas que buscan eficiencia y modernidad en sus operaciones.',
          items: ['Equipos de cómputo y periféricos', 'Dispositivos y accesorios tecnológicos', 'Soluciones para oficina y empresa', 'Asesoría en selección de productos'],
        },
        {
          icon: '🪑',
          name: 'Muebles',
          desc: 'Mobiliario de calidad para ambientes de trabajo que inspiran productividad, comodidad y estilo.',
          items: ['Mobiliario de oficina', 'Espacios comerciales y corporativos', 'Muebles para el hogar', 'Personalización por proyecto'],
        },
      ],
    },
    contacto: {
      eyebrow: '◆ Contacto',
      title: 'Hablemos.',
      cards: [
        { label: 'Correo electrónico', value: 'contacto@sergaint.com' },
        { label: 'Teléfono', value: '+52 (000) 000-0000' },
        { label: 'Ubicación', value: 'México' },
      ],
    },
    footer: '© 2024 Sergaint. Todos los derechos reservados.',
  },
  en: {
    nav: ['Home', 'About', 'Services', 'Contact'],
    hero: {
      eyebrow: '12 years of distribution expertise',
      titleLine1: 'We distribute quality.',
      titleEm: 'We connect',
      titleLine2: 'businesses.',
      sub: 'The trusted partner for businesses that demand the best in technology and premium furniture.',
      cta: 'Explore our services',
      stats: [
        { val: '12+', lbl: 'Years of experience' },
        { val: '2', lbl: 'Specialized categories' },
        { val: '100%', lbl: 'Commitment to quality' },
      ],
    },
    nosotros: {
      eyebrow: '◆ About us',
      title: 'A story built\non trust.',
      p1: 'Sergaint is a specialized distributor with over 12 years of market experience. It was born with the conviction that businesses deserve access to quality products, backed by responsible and attentive service.',
      p2: 'Over the years we have built lasting relationships with our clients, understanding their needs and offering solutions that combine functionality, design, and durability across two key verticals: technology and furniture.',
      values: [
        { name: 'Quality', desc: 'We work only with products that meet high standards of functionality and durability.' },
        { name: 'Trust', desc: '12 years of strong client relationships are the best reflection of our commitment.' },
        { name: 'Expertise', desc: 'We focus on two categories to offer deep knowledge and genuine guidance.' },
      ],
    },
    servicios: {
      eyebrow: '◆ Our services',
      title: 'What we distribute.',
      cards: [
        {
          icon: '💻',
          name: 'Technology',
          desc: 'We distribute equipment and technology solutions for businesses seeking efficiency and modernity in their operations.',
          items: ['Computer equipment and peripherals', 'Tech devices and accessories', 'Office and business solutions', 'Product selection advisory'],
        },
        {
          icon: '🪑',
          name: 'Furniture',
          desc: 'Quality furniture for work environments that inspire productivity, comfort, and style.',
          items: ['Office furniture', 'Commercial and corporate spaces', 'Home furniture', 'Project-based customization'],
        },
      ],
    },
    contacto: {
      eyebrow: '◆ Contact',
      title: "Let's talk.",
      cards: [
        { label: 'Email', value: 'contacto@sergaint.com' },
        { label: 'Phone', value: '+52 (000) 000-0000' },
        { label: 'Location', value: 'Mexico' },
      ],
    },
    footer: '© 2024 Sergaint. All rights reserved.',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
