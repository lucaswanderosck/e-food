import React from 'react'
import banner from '../../assets/images/banner.png'
import { Category, Container, Title } from './styles'

export const Banner: React.FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Category>Categoria do prato</Category>
        <Title>Titulo do Prato</Title>
      </div>
    </Container>
  )
}
