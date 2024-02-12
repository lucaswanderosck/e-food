import React from 'react'
import product1 from '../../assets/images/product1.png'
import { AddCart, Container, Description, ProductImg, Title } from './styles'

export const Product: React.FC = () => {
  return (
    <Container>
      <div>
        <ProductImg src={product1} alt="" />
        <Title>Titulo</Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          dolorum fugit non, quidem harum aspernatur quibusdam quos beatae nemo
          labore adipisci! Eum vel ex sequi a totam ipsam autem ad.
        </Description>
        <AddCart>Adicionar ao carrinho</AddCart>
      </div>
    </Container>
  )
}
