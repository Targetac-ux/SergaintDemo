import { useLanguage } from '../context/LanguageContext'
import { LogoWordmark } from './Logo'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="flex justify-between items-center border-t border-champagne/[0.1] flex-wrap gap-3"
      style={{ background: '#0d0d0f', padding: '2rem 5rem' }}
    >
      <LogoWordmark height={16} />
      <span className="font-inter text-[0.75rem] text-piedra">{t.footer}</span>

      <style>{`
        @media (max-width: 767px) {
          footer { padding: 1.75rem !important; flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
