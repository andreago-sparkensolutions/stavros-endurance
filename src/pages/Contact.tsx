import { motion } from 'framer-motion'
import { t } from '../i18n/messages'
import { useOutletLocale } from '../hooks/useOutletLocale'

export function Contact() {
  const { locale } = useOutletLocale()
  const wa = t(locale, 'contactWhatsAppVal').replace(/\D/g, '')

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
        <h1 className="font-display text-4xl text-gradient-gold sm:text-5xl">{t(locale, 'contactTitle')}</h1>
        <p className="mt-4 text-lg text-brand-sand/75">{t(locale, 'contactSubtitle')}</p>
      </motion.div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-3xl border border-white/10 bg-surface-card/50 p-8 backdrop-blur-md"
        >
          <h2 className="font-display text-2xl text-accent-bright">Direct</h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'contactWhatsApp')}</dt>
              <dd className="mt-2">
                <a className="text-lg text-brand-sand hover:text-accent-bright" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
                  {t(locale, 'contactWhatsAppVal')}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'contactEmail')}</dt>
              <dd className="mt-2">
                <a className="text-lg text-brand-sand hover:text-accent-bright" href={`mailto:${t(locale, 'contactEmailVal')}`}>
                  {t(locale, 'contactEmailVal')}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'contactPhone')}</dt>
              <dd className="mt-2 text-lg text-brand-sand">{t(locale, 'contactPhoneVal')}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/45">{t(locale, 'contactAddress')}</dt>
              <dd className="mt-2 text-lg text-brand-sand">{t(locale, 'contactAddressVal')}</dd>
            </div>
          </dl>
          <p className="mt-8 text-sm text-brand-sand/60">{t(locale, 'contactVisits')}</p>
          <p className="mt-3 text-sm text-brand-sand/60">{t(locale, 'contactTransport')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-black/30 p-8"
        >
          <h2 className="font-display text-2xl text-accent-bright">{t(locale, 'contactProcessTitle')}</h2>
          <ol className="mt-8 space-y-5 text-brand-sand/85">
            {(['contactProcess1', 'contactProcess2', 'contactProcess3', 'contactProcess4'] as const).map((key, idx) => (
              <li key={key} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-olive text-sm text-accent-bright">
                  {idx + 1}
                </span>
                <span>{t(locale, key)}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </div>
  )
}
