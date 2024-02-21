import React from 'react'
import { PiStarFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { formatDescriptionCardRestaurant } from '../../utils/formatters'
import {
  Button,
  Card,
  Container,
  Description,
  Rate,
  RestaurantBanner,
  Tag,
  Title,
  TitleCard,
} from './styles'

export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface DadosRestaurante {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: MenuItem[]
}

export const CardRestaurant: React.FC<DadosRestaurante> = ({
  id,
  titulo,
  tipo,
  avaliacao,
  descricao,
  capa,
}) => {
  return (
    <Container>
      <RestaurantBanner src={capa} alt="foto do restaurante" />
      <Card>
        <TitleCard>
          <Title>{titulo}</Title>
          <Rate>
            <p>{avaliacao}</p>
            <PiStarFill color="#FFB930" size={24} />
          </Rate>
        </TitleCard>
        <Description>{formatDescriptionCardRestaurant(descricao)}</Description>
        <Link to={`/restaurant/${id}`}>
          {' '}
          <Button>Saiba mais</Button>{' '}
        </Link>
      </Card>
      <Tag>{tipo}</Tag>
    </Container>
  )
}
