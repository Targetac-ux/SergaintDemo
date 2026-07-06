import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import DecoRule from './DecoRule'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay },
})

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ padding: '9rem 2rem 6rem' }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 40%, rgba(166, 25, 46, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 60%, rgba(194, 168, 120, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      <motion.p
        {...reveal(0)}
        className="font-montserrat font-semibold text-[0.62rem] tracking-[0.28em] uppercase text-champagne mb-7 relative z-10"
      >
        {h.eyebrow}
      </motion.p>

      <motion.div {...reveal(0.1)} className="relative z-10">
        <DecoRule />
      </motion.div>

      <motion.h1
        {...reveal(0.1)}
        className="font-playfair font-medium text-marfil max-w-[820px] mb-7 relative z-10 leading-[1.1]"
        style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)' }}
      >
        {h.titleLine1}
        <br />
        <em className="italic text-champagne" style={{ fontStyle: 'italic' }}>{h.titleEm}</em>{' '}
        {h.titleLine2}
      </motion.h1>

      <motion.p
        {...reveal(0.2)}
        className="font-inter font-light text-piedra max-w-[540px] mb-12 leading-[1.75] relative z-10"
        style={{ fontSize: '1.05rem' }}
      >
        {h.sub}
      </motion.p>

      <motion.div
        {...reveal(0.35)}
        className="relative z-10 flex flex-col items-center gap-5"
      >
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#contacto"
            className="font-montserrat font-bold text-[0.68rem] tracking-[0.2em] uppercase text-marfil bg-rojo
              px-[2.75rem] py-4 rounded-[2px] no-underline
              transition-all duration-200 hover:bg-rojo-dark hover:-translate-y-0.5"
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 24px rgba(166,25,46,0.35)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
          >
            {h.cta}
          </a>
          <a
            href="#servicios"
            className="font-montserrat font-bold text-[0.68rem] tracking-[0.2em] uppercase
              px-[2.75rem] py-4 rounded-[2px] no-underline
              transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: '#C2A878', border: '1px solid rgba(194,168,120,0.5)', background: 'transparent' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#C2A878'
              e.currentTarget.style.color = '#1C1C1E'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#C2A878'
            }}
          >
            {h.ctaSecondary}
          </a>
        </div>

        <p className="font-inter text-[0.75rem] text-piedra tracking-[0.06em] text-center max-w-[440px]">
          {h.trust}
        </p>
      </motion.div>

      <motion.div
        {...reveal(0.35)}
        className="flex gap-[4.5rem] mt-[5.5rem] pt-12 border-t border-champagne/[0.15] relative z-10 flex-wrap justify-center"
      >
        {h.stats.map(({ val, lbl }) => (
          <div key={lbl} className="text-center">
            <div className="font-playfair font-semibold text-champagne text-[2.4rem] leading-none mb-1.5">{val}</div>
            <div className="font-montserrat text-[0.56rem] tracking-[0.2em] uppercase text-piedra">{lbl}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
