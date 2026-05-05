import { useLocation, useNavigate } from 'react-router-dom'
import type { Locale } from '../types/horse'

interface LanguageSwitcherProps {
  locale: Locale
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const navigate = useNavigate()
  const location = useLocation()

  function switchTo(next: Locale) {
    const parts = location.pathname.split('/').filter(Boolean)
    if (parts.length === 0) {
      navigate(`/${next}`)
      return
    }
    parts[0] = next
    navigate(`/${parts.join('/')}${location.search}`)
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 backdrop-blur-md">
      {(['en', 'es'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest transition ${
            locale === code
              ? 'bg-brand-olive text-accent-bright shadow-[0_0_20px_rgba(196,184,150,0.25)]'
              : 'text-brand-sand/60 hover:text-brand-sand'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
