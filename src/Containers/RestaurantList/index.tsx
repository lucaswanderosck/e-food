import React from 'react'
import {
  CardRestaurant,
  DadosRestaurante,
} from '../../Components/CardRestaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: DadosRestaurante[]
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
