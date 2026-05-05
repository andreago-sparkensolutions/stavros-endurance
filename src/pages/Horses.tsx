import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { horses } from '../data/horses'
import type { HorseSex, HorseStatus } from '../types/horse'
import { t, type MessageKey } from '../i18n/messages'
import { useOutletLocale } from '../hooks/useOutletLocale'
import { HorseCard } from '../components/HorseCard'

const statuses: HorseStatus[] = ['for_sale', 'in_training', 'reserved', 'sold']
const sexes: HorseSex[] = ['stallion', 'mare', 'gelding']

const statusKeys: Record<HorseStatus, MessageKey> = {
  for_sale: 'statusForSale',
  in_training: 'statusInTraining',
  reserved: 'statusReserved',
  sold: 'statusSold',
}
const sexKeys: Record<HorseSex, MessageKey> = {
  stallion: 'sexStallion',
  mare: 'sexMare',
  gelding: 'sexGelding',
}

export function Horses() {
  const { locale } = useOutletLocale()
  const [status, setStatus] = useState<HorseStatus | 'all'>('all')
  const [sex, setSex] = useState<HorseSex | 'all'>('all')

  const filtered = useMemo(() => {
    return horses.filter((h) => {
      if (status !== 'all' && h.status !== status) return false
      if (sex !== 'all' && h.sex !== sex) return false
      return true
    })
  }, [status, sex])

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
        <h1 className="font-display text-4xl text-gradient-gold sm:text-5xl">{t(locale, 'horsesTitle')}</h1>
        <p className="mt-4 text-lg text-brand-sand/75">{t(locale, 'horsesSubtitle')}</p>
      </motion.div>

      <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-white/10 bg-surface-card/40 p-6 backdrop-blur-md lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-sand/50">{t(locale, 'filterStatus')}</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={status === 'all'} onClick={() => setStatus('all')} label={t(locale, 'filterAll')} />
            {statuses.map((s) => (
              <FilterChip
                key={s}
                active={status === s}
                onClick={() => setStatus(s)}
                label={t(locale, statusKeys[s])}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-sand/50">{t(locale, 'filterSex')}</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={sex === 'all'} onClick={() => setSex('all')} label={t(locale, 'filterAll')} />
            {sexes.map((sx) => (
              <FilterChip
                key={sx}
                active={sex === sx}
                onClick={() => setSex(sx)}
                label={t(locale, sexKeys[sx])}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {filtered.map((horse, index) => (
          <HorseCard key={horse.slug} horse={horse} locale={locale} index={index} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-brand-sand/60">{t(locale, 'horsesEmpty')}</p>
      )}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition ${
        active
          ? 'border-accent/50 bg-brand-olive text-accent-bright shadow-[0_0_24px_rgba(196,184,150,0.15)]'
          : 'border-white/10 bg-black/20 text-brand-sand/70 hover:border-white/20 hover:text-brand-sand'
      }`}
    >
      {label}
    </button>
  )
}
