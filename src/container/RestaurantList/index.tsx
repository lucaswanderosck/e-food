import React from 'react'
import { CardRestaurant, RestauranteI } from '../../components/CardRestaurant'
import { Container, List } from './styles'

interface Props {
  restaurants: RestauranteI[]
}

export const RestaurantList: React.FC<Props> = ({ restaurants }) => (
  <Container className="container">
    <List>
      {restaurants.map((restaurante) => (
        <CardRestaurant
          key={restaurante.id}
          id={restaurante.id}
          titulo={restaurante.titulo}
          tipo={restaurante.tipo}
          descricao={restaurante.descricao}
          avaliacao={restaurante.avaliacao}
          capa={restaurante.capa}
        />
      ))}
    </List>
  </Container>
)
