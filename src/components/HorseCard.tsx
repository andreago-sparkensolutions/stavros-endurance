import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Horse, Locale } from '../types/horse'
import { t, type MessageKey } from '../i18n/messages'

interface HorseCardProps {
  horse: Horse
  locale: Locale
  index: number
}

function statusLabel(locale: Locale, status: Horse['status']) {
  const map = {
    for_sale: 'statusForSale',
    in_training: 'statusInTraining',
    reserved: 'statusReserved',
    sold: 'statusSold',
  } as const
  return t(locale, map[status])
}

function sexLabel(locale: Locale, sex: Horse['sex']) {
  const map = { stallion: 'sexStallion', mare: 'sexMare', gelding: 'sexGelding' } as const
  return t(locale, map[sex])
}

export function HorseCard({ horse, locale, index }: HorseCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
    >
      <Link to={`/${locale}/horses/${horse.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={horse.heroImage}
            alt=""
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-widest text-accent-bright ring-1 ring-white/10 backdrop-blur">
              {statusLabel(locale, horse.status)}
            </span>
            <span className="rounded-full bg-brand-olive/80 px-3 py-1 text-[10px] uppercase tracking-widest text-brand-sand ring-1 ring-white/10">
              {sexLabel(locale, horse.sex)}
            </span>
          </div>
        </div>
        <div className="space-y-3 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl text-accent-bright">{horse.name}</h3>
              <p className="mt-1 text-sm text-brand-sand/70">{t(locale, horse.taglineKey as MessageKey)}</p>
            </div>
            <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-brand-sand/80">
              {horse.age} {t(locale, 'yearsAbbr')}
            </span>
          </div>
          <dl className="grid grid-cols-2 gap-3 text-sm text-brand-sand/75">
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-brand-sand/45">
                {t(locale, 'detailTraining')}
              </dt>
              <dd>{t(locale, horse.trainingLevelKey as MessageKey)}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-brand-sand/45">
                {t(locale, 'detailPrice')}
              </dt>
              <dd>{t(locale, horse.priceRangeKey as MessageKey)}</dd>
            </div>
          </dl>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent transition group-hover:translate-x-1">
            {t(locale, 'ctaViewHorse')}
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
