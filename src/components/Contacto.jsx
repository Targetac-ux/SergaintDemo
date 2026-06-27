import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, delay },
})

export default function Contacto() {
  const { t } = useLanguage()
  const c = t.contacto

  return (
    <section
      id="contacto"
      className="relative overflow-hidden"
      style={{ background: '#141416', padding: '8rem 5rem' }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-100px', right: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(166, 25, 46, 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1140px] mx-auto relative z-10">
        <motion.p
          {...reveal(0)}
          className="font-montserrat font-bold text-[0.62rem] tracking-[0.25em] uppercase text-rojo mb-[0.85rem]"
        >
          {c.eyebrow}
        </motion.p>

        <motion.h2
          {...reveal(0)}
          className="font-playfair font-medium text-marfil leading-[1.2] mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {c.title}
        </motion.h2>

        <motion.div {...reveal(0)} className="flex gap-12 flex-wrap">
          {c.cards.map(({ label, value }) => (
            <div
              key={label}
              className="px-10 py-8 min-w-[200px]"
              style={{
                border: '1px solid rgba(194, 168, 120, 0.18)',
                borderTop: '2px solid #C2A878',
              }}
            >
              <p className="font-montserrat font-semibold text-[0.58rem] tracking-[0.22em] uppercase text-champagne mb-[0.3rem]">
                {label}
              </p>
              <p className="font-inter text-[0.96rem] text-marfil">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #contacto { padding: 6rem 1.75rem !important; }
        }
      `}</style>
    </section>
  )
}
