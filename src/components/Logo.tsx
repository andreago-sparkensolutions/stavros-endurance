import { Link } from 'react-router-dom'
import type { Locale } from '../types/horse'

interface LogoProps {
  locale: Locale
  className?: string
}

export function Logo({ locale, className = '' }: LogoProps) {
  return (
    <Link
      to={`/${locale}`}
      className={`group inline-flex flex-col items-start leading-none tracking-[0.35em] ${className}`}
    >
      <span className="font-display text-[0.72rem] uppercase text-brand-sand/90 transition-colors group-hover:text-accent-bright sm:text-[0.78rem]">
        Stavros
      </span>
      <span className="font-display text-lg font-semibold uppercase tracking-[0.42em] text-accent-bright sm:text-xl">
        Endurance
      </span>
    </Link>
  )
}
