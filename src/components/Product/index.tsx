import React from 'react'
import { AddCart, Container, Description, ProductImg, Title } from './styles'

export interface Props {
  foto: string
  nome: string
  descricao: string
  id: number
}

export const Product: React.FC<Props> = ({ foto, nome, descricao }) => (
  <Container>
    <ProductImg src={foto} alt={nome} />
    <Title>{nome}</Title>
    <Description>{descricao}</Description>
    <AddCart>Adicionar ao carrinho</AddCart>
  </Container>
)
