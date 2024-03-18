import React from 'react'
import { Header } from '../../components/Header'
import { RestaurantList } from '../../container/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

export const Home: React.FC = () => {
  const { data: restaurante, isLoading } = useGetRestaurantsQuery()

  if (!restaurante || isLoading) return <p>Carregando...</p>

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurante}></RestaurantList>
    </>
  )
}
