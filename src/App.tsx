import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Horses } from './pages/Horses'
import { HorseDetail } from './pages/HorseDetail'
import { Articles } from './pages/Articles'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:locale" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="horses" element={<Horses />} />
          <Route path="horses/:slug" element={<HorseDetail />} />
          <Route path="articles" element={<Articles />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
