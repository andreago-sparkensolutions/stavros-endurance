export type Locale = 'en' | 'es'

export type HorseStatus = 'for_sale' | 'in_training' | 'reserved' | 'sold'

export type HorseSex = 'stallion' | 'mare' | 'gelding'

export interface PedigreeNode {
  name: string
  /** Optional registry / strain note */
  note?: string
}

export interface Pedigree {
  sire: PedigreeNode
  dam: PedigreeNode
  /** Second generation — optional depth for UI */
  grandsire?: { sire: PedigreeNode; dam: PedigreeNode }
  granddam?: { sire: PedigreeNode; dam: PedigreeNode }
}

export interface PerformanceMetric {
  labelKey: string
  value: string
  detailKey?: string
}

export interface CompetitionResult {
  eventKey: string
  year: number
  placement: string
  distanceKm: number
}

export interface Horse {
  slug: string
  name: string
  age: number
  breedKey: string
  heightHands: number
  sex: HorseSex
  trainingLevelKey: string
  status: HorseStatus
  priceRangeKey: string
  heroImage: string
  gallery: string[]
  videoUrl?: string
  /** Short marketing line keys */
  taglineKey: string
  summaryKey: string
  temperamentKey: string
  sportPotentialKey: string
  /** Lineage narrative (not only tree) */
  geneticsNarrativeKey: string
  /** DNA / parent verification style bullets */
  geneticHighlightsKeys: string[]
  pedigree: Pedigree
  competitions: CompetitionResult[]
  metrics: PerformanceMetric[]
  vetSummaryKey?: string
}
