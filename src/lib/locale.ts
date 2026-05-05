import type { Locale } from '../types/horse'

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'es'
}

export function parseLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : 'en'
}
