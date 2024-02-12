import React from 'react'
import { CardRestaurant } from '../../components/CardRestaurants'
import { Restaurant } from '../../models/Restaurant'
import { Container, List } from './styles'

interface Props {
  restaurants: Restaurant[]
}

export const RestaurantsList: React.FC<Props> = ({ restaurants }) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((item) => (
            <CardRestaurant
              key={item.id}
              description={item.description}
              rate={item.rate}
              name={item.name}
              type={item.type}
              banner={item.banner}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}
