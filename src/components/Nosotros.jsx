import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, delay },
})

export default function Nosotros() {
  const { t } = useLanguage()
  const n = t.nosotros

  return (
    <section id="nosotros" className="bg-marfil" style={{ padding: '8rem 5rem' }}>
      <div className="max-w-[1140px] mx-auto">
        <motion.p
          {...reveal(0)}
          className="font-montserrat font-bold text-[0.62rem] tracking-[0.25em] uppercase text-rojo mb-[0.85rem]"
        >
          {n.eyebrow}
        </motion.p>

        <motion.h2
          {...reveal(0)}
          className="font-playfair font-medium text-carbon leading-[1.2] mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', whiteSpace: 'pre-line' }}
        >
          {n.title}
        </motion.h2>

        <div className="grid gap-24 items-start" style={{ gridTemplateColumns: '1.1fr 1fr' }}>
          {/* Text column */}
          <motion.div {...reveal(0)} className="nosotros-text">
            <p className="font-inter text-[1rem] leading-[1.85] text-[#3c3c3e] mb-6">{n.p1}</p>
            <p className="font-inter text-[1rem] leading-[1.85] text-[#3c3c3e]">{n.p2}</p>
          </motion.div>

          {/* Values column */}
          <motion.div {...reveal(0.2)} className="flex flex-col gap-8">
            {n.values.map(({ name, desc }) => (
              <div key={name} className="pl-[1.4rem]" style={{ borderLeft: '2px solid #C2A878' }}>
                <p className="font-montserrat font-bold text-[0.65rem] tracking-[0.2em] uppercase text-rojo mb-[0.35rem]">
                  {name}
                </p>
                <p className="font-inter text-[0.9rem] text-[#5a5a5c] leading-[1.65]">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #nosotros { padding: 6rem 1.75rem !important; }
          #nosotros .grid { grid-template-columns: 1fr !important; gap: 2.75rem !important; }
        }
      `}</style>
    </section>
  )
}
