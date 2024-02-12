import React from 'react'
import fotoRestaurant from '../../assets/images/fotto-rastaurante.png'
import { Header } from '../../components/Header'
import { RestaurantsList } from '../../containers/RestaurantsList'
import { Restaurant } from '../../models/Restaurant'

const Restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Restaurante 1',
    rate: 4.5,
    description: 'Comida boa e barata',
    type: 'Comida Brasileira',
    banner: fotoRestaurant,
  },
  {
    id: 2,
    name: 'Restaurante 2',
    rate: 4.5,
    description: 'Comida boa e barata',
    type: 'Comida Brasileira',
    banner: fotoRestaurant,
  },
  {
    id: 3,
    name: 'Restaurante 3',
    rate: 4.5,
    description: 'Comida boa e barata',
    type: 'Comida Brasileira',
    banner: fotoRestaurant,
  },
  {
    id: 4,
    name: 'Restaurante 4',
    rate: 4.5,
    description: 'Comida boa e barata',
    type: 'Comida Brasileira',
    banner: fotoRestaurant,
  },
  {
    id: 5,
    name: 'Restaurante 5',
    rate: 4.5,
    description: 'Comida boa e barata',
    type: 'Comida Brasileira',
    banner: fotoRestaurant,
  },
  {
    id: 6,
    name: 'Restaurante 6',
    rate: 4.5,
    description: 'Comida boa e barata',
    type: 'Comida Brasileira',
    banner: fotoRestaurant,
  },
]

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <RestaurantsList restaurants={Restaurants} />
    </>
  )
}
