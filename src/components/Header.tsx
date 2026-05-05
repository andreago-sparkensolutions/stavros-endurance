import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { Locale } from '../types/horse'
import { t, type MessageKey } from '../i18n/messages'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

interface HeaderProps {
  locale: Locale
}

const nav: { to: string; key: MessageKey }[] = [
  { to: '', key: 'navHome' },
  { to: 'horses', key: 'navHorses' },
  { to: 'articles', key: 'navArticles' },
  { to: 'contact', key: 'navContact' },
]

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-brand-charcoal/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.key}
              to={item.to ? `/${locale}/${item.to}` : `/${locale}`}
              end={item.to === ''}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.2em] transition hover:text-accent-bright ${
                  isActive ? 'text-accent-bright' : 'text-brand-sand/70'
                }`
              }
            >
              {t(locale, item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-sand md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg leading-none">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/5 bg-brand-charcoal md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {nav.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.to ? `/${locale}/${item.to}` : `/${locale}`}
                  end={item.to === ''}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-left text-sm uppercase tracking-[0.18em] ${
                      isActive ? 'bg-brand-olive/40 text-accent-bright' : 'text-brand-sand/80'
                    }`
                  }
                >
                  {t(locale, item.key)}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
