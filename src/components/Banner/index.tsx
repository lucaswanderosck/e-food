import React from 'react'
import { Container, Title, Type } from './styles'

interface Props {
  capa: string
  tipo: string
  titulo: string
}

export const Banner: React.FC<Props> = ({ capa, tipo, titulo }) => (
  <Container style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <Type>{tipo}</Type>
      <Title>{titulo}</Title>
    </div>
  </Container>
)
