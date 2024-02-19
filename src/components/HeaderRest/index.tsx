import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Cart, Container, Logo } from './styles'

export const HeaderRest: React.FC = () => (
  <Container>
    <div className="container">
      <Link to="/">
        <span
          style={{
            color: '#E66767',
          }}
        >
          Restaurantes
        </span>
      </Link>
      <Logo src={logo} />
      <Cart>0 produto(s) no carrinho</Cart>
    </div>
  </Container>
)
