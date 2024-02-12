import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Restaurant } from './pages/Restautant'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant" element={<Restaurant />} />
    </Routes>
  )
}
