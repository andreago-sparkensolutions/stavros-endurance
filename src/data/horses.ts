import type { Horse } from '../types/horse'

/**
 * Stock imagery — IDs verified to resolve (several earlier Unsplash URLs now 404).
 * Mix: Unsplash + Pexels (both allow hotlinking for this use).
 */
const img = {
  a: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=2000&q=85',
  b: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=2000&q=85',
  c: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=85',
  d: 'https://images.pexels.com/photos/13066405/pexels-photo-13066405.jpeg?auto=compress&cs=tinysrgb&w=1920',
  e: 'https://images.pexels.com/photos/18717372/pexels-photo-18717372.jpeg?auto=compress&cs=tinysrgb&w=1920',
  f: 'https://images.pexels.com/photos/30449359/pexels-photo-30449359.jpeg?auto=compress&cs=tinysrgb&w=1920',
}

export const horses: Horse[] = [
  {
    slug: 'alba-rizada',
    name: 'Alba Rizada SE',
    age: 7,
    breedKey: 'breedPureArabian',
    heightHands: 15.1,
    sex: 'mare',
    trainingLevelKey: 'levelAdvanced',
    status: 'for_sale',
    priceRangeKey: 'priceTier1',
    heroImage: img.a,
    gallery: [img.a, img.b, img.c],
    videoUrl: undefined,
    taglineKey: 'horseAlbaTagline',
    summaryKey: 'horseAlbaSummary',
    temperamentKey: 'horseAlbaTemperament',
    sportPotentialKey: 'horseAlbaPotential',
    geneticsNarrativeKey: 'horseAlbaGenetics',
    geneticHighlightsKeys: [
      'horseAlbaGh1',
      'horseAlbaGh2',
      'horseAlbaGh3',
      'horseAlbaGh4',
    ],
    pedigree: {
      sire: { name: 'Rizada Al Shaqab', note: 'Show / endurance lines' },
      dam: { name: 'Alba Luz OA', note: 'Distance-proven dam line' },
      grandsire: {
        sire: { name: 'Marwan Al Shaqab', note: 'Type & engine' },
        dam: { name: 'OFW Mishaahl', note: 'Feminine balance' },
      },
      granddam: {
        sire: { name: 'Gazal Al Shaqab', note: 'Classic sire line' },
        dam: { name: 'Padrons Ghibli', note: 'Athletic hindquarter' },
      },
    },
    competitions: [
      { eventKey: 'evtNationalCup', year: 2024, placement: '3rd', distanceKm: 120 },
      { eventKey: 'evtRegional', year: 2023, placement: '1st', distanceKm: 90 },
    ],
    metrics: [
      { labelKey: 'metricHrRest', value: '38 bpm', detailKey: 'metricHrRestDetail' },
      { labelKey: 'metricHr10', value: '56 bpm', detailKey: 'metricHr10Detail' },
      { labelKey: 'metricSpeed', value: '18.2 km/h', detailKey: 'metricSpeedDetail' },
      { labelKey: 'metricRecovery', value: 'A+', detailKey: 'metricRecoveryDetail' },
    ],
    vetSummaryKey: 'vetAlba',
  },
  {
    slug: 'stavros-northwind',
    name: 'Stavros Northwind',
    age: 9,
    breedKey: 'breedPureArabian',
    heightHands: 15.2,
    sex: 'gelding',
    trainingLevelKey: 'levelElite',
    status: 'for_sale',
    priceRangeKey: 'priceTier2',
    heroImage: img.d,
    gallery: [img.d, img.e, img.f],
    taglineKey: 'horseNorthTagline',
    summaryKey: 'horseNorthSummary',
    temperamentKey: 'horseNorthTemperament',
    sportPotentialKey: 'horseNorthPotential',
    geneticsNarrativeKey: 'horseNorthGenetics',
    geneticHighlightsKeys: ['horseNorthGh1', 'horseNorthGh2', 'horseNorthGh3', 'horseNorthGh4'],
    pedigree: {
      sire: { name: 'Northwinds KA', note: 'FEI mileage' },
      dam: { name: 'Stavros Sahar', note: 'Home dam line' },
      grandsire: {
        sire: { name: 'Psytadel', note: 'Power' },
        dam: { name: 'Kajora', note: 'Feminine neck' },
      },
      granddam: {
        sire: { name: 'Wade Al Shaqab', note: 'Scope' },
        dam: { name: 'Sahara Elite', note: 'Recovery' },
      },
    },
    competitions: [
      { eventKey: 'evtCei2', year: 2024, placement: '5th', distanceKm: 160 },
      { eventKey: 'evtCei1', year: 2023, placement: '2nd', distanceKm: 120 },
    ],
    metrics: [
      { labelKey: 'metricHrRest', value: '36 bpm' },
      { labelKey: 'metricHr10', value: '52 bpm' },
      { labelKey: 'metricSpeed', value: '19.0 km/h' },
      { labelKey: 'metricRecovery', value: 'A+' },
    ],
    vetSummaryKey: 'vetNorth',
  },
  {
    slug: 'obsidian-leyl',
    name: 'Obsidian Leyl',
    age: 6,
    breedKey: 'breedPureArabian',
    heightHands: 14.3,
    sex: 'stallion',
    trainingLevelKey: 'levelDeveloping',
    status: 'in_training',
    priceRangeKey: 'priceTier1',
    heroImage: img.b,
    gallery: [img.b, img.a],
    taglineKey: 'horseLeylTagline',
    summaryKey: 'horseLeylSummary',
    temperamentKey: 'horseLeylTemperament',
    sportPotentialKey: 'horseLeylPotential',
    geneticsNarrativeKey: 'horseLeylGenetics',
    geneticHighlightsKeys: ['horseLeylGh1', 'horseLeylGh2', 'horseLeylGh3'],
    pedigree: {
      sire: { name: 'Leyl Master', note: 'Night-line type' },
      dam: { name: 'Obsidian Rose', note: 'Compact athlete' },
    },
    competitions: [{ eventKey: 'evtYoungHorse', year: 2024, placement: '2nd', distanceKm: 80 }],
    metrics: [
      { labelKey: 'metricHrRest', value: '40 bpm' },
      { labelKey: 'metricHr10', value: '58 bpm' },
      { labelKey: 'metricSpeed', value: '17.6 km/h' },
      { labelKey: 'metricRecovery', value: 'A' },
    ],
  },
  {
    slug: 'carmen-desierto',
    name: 'Carmen del Desierto',
    age: 8,
    breedKey: 'breedPartbred',
    heightHands: 15.0,
    sex: 'mare',
    trainingLevelKey: 'levelAdvanced',
    status: 'reserved',
    priceRangeKey: 'priceTier2',
    heroImage: img.c,
    gallery: [img.c, img.f],
    taglineKey: 'horseCarmenTagline',
    summaryKey: 'horseCarmenSummary',
    temperamentKey: 'horseCarmenTemperament',
    sportPotentialKey: 'horseCarmenPotential',
    geneticsNarrativeKey: 'horseCarmenGenetics',
    geneticHighlightsKeys: ['horseCarmenGh1', 'horseCarmenGh2', 'horseCarmenGh3'],
    pedigree: {
      sire: { name: 'Desierto XX', note: 'Anglo-Arab influence' },
      dam: { name: 'Carmen OA', note: 'Pure Arabian dam' },
    },
    competitions: [
      { eventKey: 'evtNationalCup', year: 2022, placement: '4th', distanceKm: 120 },
    ],
    metrics: [
      { labelKey: 'metricHrRest', value: '39 bpm' },
      { labelKey: 'metricHr10', value: '55 bpm' },
      { labelKey: 'metricSpeed', value: '18.0 km/h' },
      { labelKey: 'metricRecovery', value: 'A' },
    ],
  },
]

export function getHorseBySlug(slug: string): Horse | undefined {
  return horses.find((h) => h.slug === slug)
}
