import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const brands = [
  { name: 'Arhaus',              file: 'arhaus.svg' },
  { name: 'Bernhardt Furniture', file: 'bernhardt.svg' },
  { name: 'CB2',                 file: 'cb2.svg' },
  { name: 'Crate & Barrel',      file: 'crate-barrel.svg' },
  { name: 'Four Hands',          file: 'fourhands.svg' },
  { name: 'Holly Hunt',          file: 'hollyhunt.svg' },
  { name: 'Loloi',               file: 'loloi.svg' },
  { name: 'Perigold',            file: 'perigold.png' },
  { name: 'Wayfair',             file: 'wayfair.svg' },
  { name: 'Williams-Sonoma',     file: 'williams-sonoma.svg' },
]

export default function Marcas() {
  const { t } = useLanguage()
  const m = t.marcas

  return (
    <section id="marcas" className="bg-marfil overflow-hidden" style={{ padding: '7rem 0' }}>
      <div className="marcas-pad" style={{ padding: '0 5rem' }}>
      <div className="max-w-[1140px] mx-auto mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="font-montserrat font-bold text-[0.62rem] tracking-[0.25em] uppercase text-rojo mb-[0.85rem]"
        >
          {m.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-playfair font-medium text-carbon leading-[1.2]"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {m.title}
        </motion.h2>
      </div>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="marquee-outer"
        style={{
          borderTop: '1px solid rgba(194, 168, 120, 0.25)',
          borderBottom: '1px solid rgba(194, 168, 120, 0.25)',
          padding: '2.5rem 0',
        }}
      >
        <div className="marquee-track">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="marquee-item"
              title={brand.name}
            >
              <img
                src={`/logoswork/${brand.file}`}
                alt={brand.name}
                className="logo-img"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          .marcas-pad { padding-left: 1.75rem !important; padding-right: 1.75rem !important; }
        }
      `}</style>
    </section>
  )
}
