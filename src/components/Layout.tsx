import { useEffect } from 'react'
import { Outlet, Navigate, useParams } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { isLocale } from '../lib/locale'

export function Layout() {
  const { locale: localeParam } = useParams()
  if (!isLocale(localeParam)) {
    return <Navigate to="/en" replace />
  }
  const locale = localeParam

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <div className="mesh-bg flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1">
        <Outlet context={{ locale }} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
