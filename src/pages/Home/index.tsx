import React from 'react'
import { DadosRestaurante } from '../../components/CardRestaurant'
import { Header } from '../../components/Header'
import { RestaurantList } from '../../containers/RestaurantList'

export const Home: React.FC = () => {
  const [restaurante, setRestaurante] = React.useState<DadosRestaurante[]>([])

  // https://fake-api-tau.vercel.app/api/efood/restaurantes

  React.useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurante} />
    </>
  )
}
