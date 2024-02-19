import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
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
            <span>{avaliacao}</span>
            <BsFillStarFill color="#F2C94C" />
          </Rate>
        </TitleCard>
        <Description>{descricao}</Description>
        <Link to={`/restaurant/${id}`}>
          {' '}
          <Button>Saiba mais</Button>{' '}
        </Link>
      </Card>
      <Tag>{tipo}</Tag>
    </Container>
  )
}
