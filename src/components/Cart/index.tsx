import { PiTrashLight } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../utils/formatters'
import { Button, CartItem, Container, Overlay, Prices, Sidebar } from './styles'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length === 0 && <span>Carrinho vazio</span>}
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)}>
                <PiTrashLight />
              </button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          {formatPrice(getTotalPrice())}
        </Prices>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </Container>
  )
}
