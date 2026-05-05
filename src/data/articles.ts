export interface Article {
  id: string
  titleKey: string
  excerptKey: string
  source: string
  url: string
  topicKey: string
}

/** Curated third-party reading — replace URLs with final picks for production */
export const articles: Article[] = [
  {
    id: 'a1',
    titleKey: 'article1Title',
    excerptKey: 'article1Excerpt',
    source: 'FEI',
    url: 'https://www.fei.org/disciplines/endurance',
    topicKey: 'topicRules',
  },
  {
    id: 'a2',
    titleKey: 'article2Title',
    excerptKey: 'article2Excerpt',
    source: 'AERC',
    url: 'https://aerc.org/',
    topicKey: 'topicTraining',
  },
  {
    id: 'a3',
    titleKey: 'article3Title',
    excerptKey: 'article3Excerpt',
    source: 'UC Davis Veterinary Medicine',
    url: 'https://www.vetmed.ucdavis.edu/',
    topicKey: 'topicRecovery',
  },
  {
    id: 'a4',
    titleKey: 'article4Title',
    excerptKey: 'article4Excerpt',
    source: 'The Arabian Horse Association',
    url: 'https://www.arabianhorses.org/',
    topicKey: 'topicGenetics',
  },
]
