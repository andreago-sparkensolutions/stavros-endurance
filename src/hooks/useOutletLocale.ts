import { useOutletContext } from 'react-router-dom'
import type { Locale } from '../types/horse'

export interface LayoutContext {
  locale: Locale
}

export function useOutletLocale(): LayoutContext {
  return useOutletContext<LayoutContext>()
}
