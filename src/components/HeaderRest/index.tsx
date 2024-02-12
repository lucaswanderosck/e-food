import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { CartButton, Container, LinkHome } from './styles'

export const HeaderRest: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LinkHome>Restaurantes</LinkHome>
        </Link>
        <img src={logo} alt="" />
        <CartButton>0 produto(s) no carrinho</CartButton>
      </div>
    </Container>
  )
}
