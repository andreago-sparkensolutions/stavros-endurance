import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getHorseBySlug } from '../data/horses'
import { t, type MessageKey } from '../i18n/messages'
import { useOutletLocale } from '../hooks/useOutletLocale'
import { PedigreeMap } from '../components/PedigreeMap'
import type { HorseSex, HorseStatus } from '../types/horse'

type Tab = 'overview' | 'genetics' | 'sport' | 'metrics' | 'media' | 'vet'

const tabs: { id: Tab; labelKey: MessageKey }[] = [
  { id: 'overview', labelKey: 'detailTabsOverview' },
  { id: 'genetics', labelKey: 'detailTabsGenetics' },
  { id: 'sport', labelKey: 'detailTabsSport' },
  { id: 'metrics', labelKey: 'detailTabsMetrics' },
  { id: 'media', labelKey: 'detailTabsMedia' },
  { id: 'vet', labelKey: 'detailTabsVet' },
]

function statusKey(status: HorseStatus): MessageKey {
  const m: Record<HorseStatus, MessageKey> = {
    for_sale: 'statusForSale',
    in_training: 'statusInTraining',
    reserved: 'statusReserved',
    sold: 'statusSold',
  }
  return m[status]
}

function sexKey(sex: HorseSex): MessageKey {
  const m: Record<HorseSex, MessageKey> = {
    stallion: 'sexStallion',
    mare: 'sexMare',
    gelding: 'sexGelding',
  }
  return m[sex]
}

export function HorseDetail() {
  const { slug } = useParams()
  const { locale } = useOutletLocale()
  const horse = slug ? getHorseBySlug(slug) : undefined
  const [tab, setTab] = useState<Tab>('genetics')
  const [photo, setPhoto] = useState(0)

  const images = useMemo(() => {
    if (!horse) return []
    return horse.gallery.length ? horse.gallery : [horse.heroImage]
  }, [horse])

  if (!horse) {
    return <Navigate to={`/${locale}/horses`} replace />
  }

  return (
    <div>
      <section className="border-b border-white/5 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <Link
            to={`/${locale}/horses`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-sand/60 transition hover:text-accent-bright"
          >
            ← {t(locale, 'detailBack')}
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[photo]}
                  src={images[photo]}
                  alt=""
                  initial={{ opacity: 0.2, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="aspect-[4/3] w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-black/55 px-3 py-1 text-[10px] uppercase tracking-widest text-accent-bright ring-1 ring-white/10 backdrop-blur">
                  {t(locale, statusKey(horse.status))}
                </span>
                <span className="rounded-full bg-brand-olive/85 px-3 py-1 text-[10px] uppercase tracking-widest text-brand-sand ring-1 ring-white/10">
                  {t(locale, sexKey(horse.sex))}
                </span>
              </div>
            </div>
            <div>
              <h1 className="font-display text-4xl text-gradient-gold sm:text-5xl">{horse.name}</h1>
              <p className="mt-4 text-xl text-brand-sand/85">{t(locale, horse.taglineKey as MessageKey)}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'detailAge')}</dt>
                  <dd className="mt-1 font-display text-2xl text-accent-bright">
                    {horse.age} {t(locale, 'yearsAbbr')}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'detailHeight')}</dt>
                  <dd className="mt-1 font-display text-2xl text-accent-bright">
                    {horse.heightHands} {t(locale, 'handsAbbr')}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'detailPrice')}</dt>
                  <dd className="mt-1 text-lg text-brand-sand">{t(locale, horse.priceRangeKey as MessageKey)}</dd>
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'detailTraining')}</dt>
                  <dd className="mt-1 text-lg text-brand-sand">{t(locale, horse.trainingLevelKey as MessageKey)}</dd>
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'detailBreed')}</dt>
                  <dd className="mt-1 text-lg text-brand-sand">{t(locale, horse.breedKey as MessageKey)}</dd>
                </div>
              </dl>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${t(locale, 'contactWhatsAppVal').replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-olive px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright sm:flex-none"
                >
                  {t(locale, 'ctaWhatsApp')}
                </a>
                <Link
                  to={`/${locale}/contact`}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand sm:flex-none"
                >
                  {t(locale, 'ctaContact')}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => setPhoto(i)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                  photo === i ? 'ring-accent' : 'ring-transparent hover:ring-white/20'
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex gap-2 overflow-x-auto border-b border-white/10 pb-3">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                tab === item.id
                  ? 'bg-brand-olive text-accent-bright'
                  : 'bg-transparent text-brand-sand/60 hover:text-brand-sand'
              }`}
            >
              {t(locale, item.labelKey)}
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[320px]">
          {tab === 'overview' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl space-y-6 text-lg text-brand-sand/85">
              <p>{t(locale, horse.summaryKey as MessageKey)}</p>
              <div className="grid gap-6 rounded-2xl border border-white/10 bg-surface-card/40 p-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-accent">{t(locale, 'detailTemperament')}</h3>
                  <p className="mt-3">{t(locale, horse.temperamentKey as MessageKey)}</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-accent">{t(locale, 'detailPotential')}</h3>
                  <p className="mt-3">{t(locale, horse.sportPotentialKey as MessageKey)}</p>
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'genetics' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
              <div className="max-w-3xl text-lg text-brand-sand/85">
                <p>{t(locale, horse.geneticsNarrativeKey as MessageKey)}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-accent-bright">{t(locale, 'detailHighlights')}</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {horse.geneticHighlightsKeys.map((key) => (
                    <li
                      key={key}
                      className="flex gap-3 rounded-xl border border-white/10 bg-black/25 px-4 py-4 text-brand-sand/85"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{t(locale, key as MessageKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <PedigreeMap pedigree={horse.pedigree} locale={locale} />
            </motion.div>
          )}

          {tab === 'sport' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="font-display text-2xl text-accent-bright">{t(locale, 'detailCompetitions')}</h3>
              <div className="mt-6 space-y-4">
                {horse.competitions.map((c) => (
                  <div
                    key={`${c.eventKey}-${c.year}`}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-surface-card/40 p-5 sm:flex-row sm:items-center"
                  >
                    <div>
                      <p className="font-display text-xl text-accent-bright">{t(locale, c.eventKey as MessageKey)}</p>
                      <p className="mt-1 text-sm text-brand-sand/60">
                        {c.year} · {c.distanceKm} km
                      </p>
                    </div>
                    <div className="text-sm uppercase tracking-[0.25em] text-brand-sand/80">{c.placement}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === 'metrics' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 md:grid-cols-2">
              {horse.metrics.map((m) => (
                <div key={m.labelKey} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/50">{t(locale, m.labelKey as MessageKey)}</p>
                  <p className="mt-3 font-display text-4xl text-accent-bright">{m.value}</p>
                  {m.detailKey && <p className="mt-2 text-sm text-brand-sand/65">{t(locale, m.detailKey as MessageKey)}</p>}
                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-olive to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${60 + (m.value.length % 5) * 8}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {tab === 'media' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-accent-bright">{t(locale, 'detailGallery')}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {images.map((src) => (
                    <img key={src} src={src} alt="" className="aspect-video rounded-xl object-cover" />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl text-accent-bright">{t(locale, 'detailVideo')}</h3>
                {horse.videoUrl ? (
                  <div className="mt-4 aspect-video overflow-hidden rounded-2xl border border-white/10">
                    <iframe title="video" src={horse.videoUrl} className="h-full w-full" allowFullScreen />
                  </div>
                ) : (
                  <p className="mt-4 text-brand-sand/65">{t(locale, 'detailNoVideo')}</p>
                )}
              </div>
            </motion.div>
          )}

          {tab === 'vet' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <p className="text-lg text-brand-sand/80">{t(locale, 'detailVetPlaceholder')}</p>
              {horse.vetSummaryKey && (
                <p className="mt-6 rounded-2xl border border-white/10 bg-surface-card/50 p-6 text-brand-sand/85">
                  {t(locale, horse.vetSummaryKey as MessageKey)}
                </p>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
