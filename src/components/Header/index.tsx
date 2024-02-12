import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Container, Logo, Title } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Container>
  )
}
