import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { LogoIcon, LogoWordmark } from './Logo'

const SECTION_IDS = ['inicio', 'nosotros', 'servicios', 'contacto']

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      let cur = 'inicio'
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) cur = id
      })
      setActiveSection(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = SECTION_IDS.map((id, i) => ({ id, label: t.nav[i] }))

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center
          border-b border-champagne/[0.12] transition-all duration-300"
        style={{
          background: 'rgba(28, 28, 30, 0.94)',
          backdropFilter: 'blur(14px)',
          padding: scrolled ? '0.9rem 5rem' : '1.25rem 5rem',
        }}
      >
        <a href="#inicio" className="flex items-center gap-[0.6rem] no-underline">
          <LogoIcon size={32} />
          <LogoWordmark height={18} />
        </a>

        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-montserrat font-semibold text-[0.65rem] tracking-[0.18em] uppercase no-underline transition-colors duration-200
                  ${activeSection === id ? 'text-champagne' : 'text-piedra hover:text-champagne'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="font-montserrat font-bold text-[0.6rem] tracking-[0.18em] uppercase text-champagne
              border border-champagne/35 px-[0.8rem] py-[0.35rem] rounded-[2px] bg-transparent
              cursor-pointer transition-all duration-200 hover:bg-champagne hover:text-carbon"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Menú"
          >
            <span className="block w-[22px] h-[2px] bg-marfil" />
            <span className="block w-[22px] h-[2px] bg-marfil" />
            <span className="block w-[22px] h-[2px] bg-marfil" />
          </button>
        </div>
      </nav>

      {/* Mobile nav padding override */}
      <style>{`
        @media (max-width: 767px) {
          nav.fixed { padding-left: 1.75rem !important; padding-right: 1.75rem !important; }
        }
      `}</style>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[998] flex flex-col justify-center items-center gap-10"
          style={{ background: 'rgba(28, 28, 30, 0.98)' }}
        >
          <button
            className="absolute top-6 right-7 bg-transparent border-none text-piedra text-2xl cursor-pointer"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileOpen(false)}
              className="font-montserrat font-semibold text-[0.8rem] tracking-[0.25em] uppercase text-marfil hover:text-champagne transition-colors no-underline"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
