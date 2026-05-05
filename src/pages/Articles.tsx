import { motion } from 'framer-motion'
import { articles } from '../data/articles'
import { t, type MessageKey } from '../i18n/messages'
import { useOutletLocale } from '../hooks/useOutletLocale'

export function Articles() {
  const { locale } = useOutletLocale()

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
        <h1 className="font-display text-4xl text-gradient-gold sm:text-5xl">{t(locale, 'articlesTitle')}</h1>
        <p className="mt-4 text-lg text-brand-sand/75">{t(locale, 'articlesSubtitle')}</p>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {articles.map((article, i) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-surface-card/50 p-6 backdrop-blur-md transition hover:border-accent/30"
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent/90">{article.source}</p>
            <h2 className="mt-3 font-display text-2xl text-accent-bright transition group-hover:text-white">
              {t(locale, article.titleKey as MessageKey)}
            </h2>
            <p className="mt-3 flex-1 text-brand-sand/75">{t(locale, article.excerptKey as MessageKey)}</p>
            <div className="mt-6 flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-brand-sand/50">
              <span>
                {t(locale, 'articlesTopic')}: {t(locale, article.topicKey as MessageKey)}
              </span>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-accent transition hover:text-accent-bright"
              >
                {t(locale, 'articlesRead')} ↗
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
