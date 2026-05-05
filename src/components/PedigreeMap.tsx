import type { Pedigree } from '../types/horse'
import type { Locale } from '../types/horse'
import { t } from '../i18n/messages'

interface PedigreeMapProps {
  pedigree: Pedigree
  locale: Locale
}

function Node({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface-elevated/80 px-4 py-3 text-left shadow-inner shadow-black/40">
      <p className="font-display text-lg text-accent-bright">{title}</p>
      {subtitle && <p className="mt-1 text-xs text-brand-sand/60">{subtitle}</p>}
    </div>
  )
}

export function PedigreeMap({ pedigree, locale }: PedigreeMapProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-2xl text-accent-bright">{t(locale, 'detailPedigreeTitle')}</h3>
        <p className="mt-1 text-sm text-brand-sand/60">{t(locale, 'detailPedigreeSubtitle')}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent/80">{t(locale, 'detailSireBranch')}</p>
          <Node title={pedigree.sire.name} subtitle={pedigree.sire.note} />
          {pedigree.grandsire && (
            <div className="grid gap-3 sm:grid-cols-2">
              <Node title={pedigree.grandsire.sire.name} subtitle={pedigree.grandsire.sire.note} />
              <Node title={pedigree.grandsire.dam.name} subtitle={pedigree.grandsire.dam.note} />
            </div>
          )}
        </div>
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent/80">{t(locale, 'detailDamBranch')}</p>
          <Node title={pedigree.dam.name} subtitle={pedigree.dam.note} />
          {pedigree.granddam && (
            <div className="grid gap-3 sm:grid-cols-2">
              <Node title={pedigree.granddam.sire.name} subtitle={pedigree.granddam.sire.note} />
              <Node title={pedigree.granddam.dam.name} subtitle={pedigree.granddam.dam.note} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
