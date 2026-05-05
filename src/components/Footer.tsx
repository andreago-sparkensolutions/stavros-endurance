import type { Locale } from '../types/horse'
import { t } from '../i18n/messages'
import { Logo } from './Logo'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Logo locale={locale} />
          <p className="mt-4 max-w-sm text-sm text-brand-sand/60">{t(locale, 'footerTagline')}</p>
        </div>
        <div className="text-sm text-brand-sand/50">
          © {year} Stavros Endurance. {t(locale, 'footerRights')}
        </div>
      </div>
    </footer>
  )
}
