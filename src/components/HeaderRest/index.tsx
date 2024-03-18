import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { CartButton, Container, Logo } from './styles'

export const HeaderRest: React.FC = () => {
  const dispatch = useDispatch()

  const OpenCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
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
        <Logo src={logo}></Logo>
        <CartButton onClick={OpenCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </Container>
  )
}
