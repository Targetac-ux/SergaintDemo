import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, delay },
})

function ServiceCard({ card, delay }) {
  return (
    <motion.div
      {...reveal(delay)}
      className="group relative border border-champagne/[0.18] p-12 overflow-hidden
        hover:border-champagne/[0.35] transition-colors duration-[250ms]"
    >
      {/* Animated left border */}
      <div className="absolute top-0 left-0 w-[3px] h-0 bg-rojo group-hover:h-full transition-all duration-[350ms] ease-in-out" />

      <span className="block text-[1.6rem] mb-6">{card.icon}</span>
      <h3 className="font-playfair font-medium text-marfil text-[1.65rem] mb-[0.85rem]">{card.name}</h3>
      <p className="font-inter text-[0.9rem] text-piedra leading-[1.75] mb-7">{card.desc}</p>
      <ul className="list-none flex flex-col gap-[0.55rem] p-0 m-0">
        {card.items.map(item => (
          <li key={item} className="font-inter text-[0.82rem] text-piedra pl-[1.1rem] relative">
            <span
              className="absolute left-0 text-champagne"
              style={{ top: '0.22rem', fontSize: '0.38rem' }}
            >◆</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Servicios() {
  const { t } = useLanguage()
  const s = t.servicios

  return (
    <section id="servicios" className="bg-carbon" style={{ padding: '8rem 5rem' }}>
      <div className="max-w-[1140px] mx-auto">
        <motion.p
          {...reveal(0)}
          className="font-montserrat font-bold text-[0.62rem] tracking-[0.25em] uppercase text-rojo mb-[0.85rem]"
        >
          {s.eyebrow}
        </motion.p>

        <motion.h2
          {...reveal(0)}
          className="font-playfair font-medium text-marfil leading-[1.2] mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {s.title}
        </motion.h2>

        <div className="grid gap-7" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {s.cards.map((card, i) => (
            <ServiceCard key={card.name} card={card} delay={i * 0.15} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #servicios { padding: 6rem 1.75rem !important; }
          #servicios .grid { grid-template-columns: 1fr !important; gap: 2.75rem !important; }
        }
      `}</style>
    </section>
  )
}
