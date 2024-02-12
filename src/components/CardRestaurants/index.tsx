import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {
  Button,
  CardContainer,
  Container,
  Description,
  Rate,
  RateDiv,
  RestaurantBanner,
  Tag,
  Title,
  TitleContainer,
} from './styles'

interface Props {
  name: string
  rate: number
  description: string
  type: string
  banner: string
}

export const CardRestaurant: React.FC<Props> = ({
  type,
  name,
  rate,
  description,
  banner,
}) => {
  return (
    <Container>
      <RestaurantBanner src={banner} alt="foto do restaurante" />
      <CardContainer>
        <TitleContainer>
          <Title>{name}</Title>
          <RateDiv>
            <Rate>{rate}</Rate>
            <span>
              <BsFillStarFill color={'#F2C94C'} />
            </span>
          </RateDiv>
        </TitleContainer>
        <Description>{description}</Description>
        <Link
          to="/restaurant"
          style={{
            textDecoration: 'none',
          }}
        >
          <Button>Saiba Mais</Button>
        </Link>
      </CardContainer>
      <Tag>{type}</Tag>
    </Container>
  )
}
