import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { horses } from '../data/horses'
import { t, type MessageKey } from '../i18n/messages'
import { useOutletLocale } from '../hooks/useOutletLocale'
import { HorseCard } from '../components/HorseCard'

const heroImg =
  'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=2400&q=85'

export function Home() {
  const { locale } = useOutletLocale()
  const featured = horses.filter((h) => h.status === 'for_sale').slice(0, 3)

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/92 to-brand-charcoal/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,184,150,0.18),transparent_45%)]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-medium uppercase tracking-[0.4em] text-accent"
            >
              {t(locale, 'homeHeroKicker')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 font-display text-4xl leading-[1.05] text-gradient-gold sm:text-5xl lg:text-6xl"
            >
              {t(locale, 'homeHeroTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-6 max-w-xl text-lg text-brand-sand/80"
            >
              {t(locale, 'homeHeroSubtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to={`/${locale}/horses`}
                className="inline-flex items-center justify-center rounded-full bg-brand-olive px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-bright shadow-[0_0_40px_rgba(68,72,56,0.65)] transition hover:bg-brand-olive/90"
              >
                {t(locale, 'ctaAllHorses')}
              </Link>
              <a
                href={`https://wa.me/${t(locale, 'contactWhatsAppVal').replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-sand transition hover:border-accent/40 hover:text-accent-bright"
              >
                {t(locale, 'ctaWhatsApp')}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/25 via-transparent to-brand-olive/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-card/60 p-6 backdrop-blur-xl">
              <div className="grid gap-4">
                {(
                  [
                    ['homeStatsGenetics', 'homeStatsGeneticsVal'],
                    ['homeStatsDocs', 'homeStatsDocsVal'],
                    ['homeStatsSales', 'homeStatsSalesVal'],
                  ] as const satisfies readonly (readonly [MessageKey, MessageKey])[]
                ).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-4"
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-sand/55">{t(locale, k)}</span>
                    <span className="font-display text-lg text-accent-bright">{t(locale, v)}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-brand-sand/45">
                {t(locale, 'homeTechChip3')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl text-accent-bright sm:text-4xl">{t(locale, 'homeIntroTitle')}</h2>
            <p className="mt-5 text-lg text-brand-sand/80">{t(locale, 'homeIntroBody')}</p>
            <ul className="mt-8 space-y-4 text-brand-sand/85">
              {[t(locale, 'homeIntroPoint1'), t(locale, 'homeIntroPoint2'), t(locale, 'homeIntroPoint3')].map(
                (item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-surface-card/50 p-8 backdrop-blur-md">
            <h3 className="font-display text-2xl text-accent-bright">{t(locale, 'homeTechTitle')}</h3>
            <p className="mt-4 text-brand-sand/75">{t(locale, 'homeTechBody')}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[t(locale, 'homeTechChip1'), t(locale, 'homeTechChip2'), t(locale, 'homeTechChip3')].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-brand-sand/80"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black/20 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-accent-bright sm:text-4xl">{t(locale, 'homeFeaturedTitle')}</h2>
            <p className="mt-4 text-lg text-brand-sand/75">{t(locale, 'homeFeaturedSubtitle')}</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((horse, index) => (
              <HorseCard key={horse.slug} horse={horse} locale={locale} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to={`/${locale}/horses`}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-accent transition hover:text-accent-bright"
            >
              {t(locale, 'ctaAllHorses')}
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
