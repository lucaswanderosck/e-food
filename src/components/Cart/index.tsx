import { useFormik } from 'formik'
import React from 'react'
import { PiTrashLight } from 'react-icons/pi'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../utils/formatters'
import {
  Button,
  CartItem,
  Container,
  InputGroup,
  Overlay,
  Prices,
  Sidebar,
  Title,
} from './styles'

export const Cart: React.FC = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const [cart, setCart] = React.useState(true)
  const [purchaseData, setPurchaseData] = React.useState(false)
  const [paymentData, setPaymentData] = React.useState(false)
  const [checkout, setCheckout] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotal = () => {
    return items.reduce((acc, valorAtual) => {
      return (acc += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      CEP: '',
      number: '',
      reference: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      address: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      city: Yup.string()
        .min(4, 'O campo precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatorio'),
      CEP: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      number: Yup.number()
        .min(2, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      cardName: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      cardNumber: Yup.string()
        .min(16, 'O campo precisa ter pelo menos 16 caracteres')
        .required('Campo obrigatorio'),
      cvv: Yup.number()
        .min(3, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      expiresMonth: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      expiresYear: Yup.string()
        .min(4, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        products: [
          {
            id: 1,
            price: 10,
          },
        ],
        delivery: {
          receiver: values.fullName,
          adress: {
            description: values.address,
            city: values.city,
            zipCode: values.CEP,
            number: Number(values.number),
            complement: values.reference,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
      })
    },
  })

  const checkInput = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToPurchase = () => {
    setCart(false)
    setPurchaseData(true)
  }

  const backToCart = () => {
    setCart(true)
    setPurchaseData(false)
    setPaymentData(false)
    setCheckout(false)
  }

  const goToPayment = () => {
    if (
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.CEP &&
      !form.errors.number
    ) {
      setPurchaseData(false)
      setPaymentData(true)
    }
  }

  const backToPurchase = () => {
    setPurchaseData(true)
    setPaymentData(false)
  }

  const goToCheckout = () => {
    if (
      !form.errors.cardName &&
      !form.errors.cardNumber &&
      !form.errors.cvv &&
      !form.errors.expiresMonth &&
      !form.errors.expiresYear
    ) {
      setPaymentData(false)
      setCheckout(true)
    }
    console.log(form.values)
  }

  const finishPurchase = () => {
    setCart(true)
    setCheckout(false)
    closeCart()
    navigate('/')
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar className={cart ? '' : 'is-closed'}>
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
          {formatPrice(getTotal())}
        </Prices>
        <Button onClick={goToPurchase} disabled={items.length < 1}>
          Continuar com a entrega
        </Button>
      </Sidebar>
      <Sidebar className={purchaseData ? '' : 'is-closed'}>
        <Title>Entrega</Title>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('fullName') ? 'error' : ''}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('address') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('city') ? 'error' : ''}
            />
          </div>
          <InputGroup>
            <div>
              <label htmlFor="CEP">CEP</label>
              <InputMask
                type="text"
                name="CEP"
                id="CEP"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('CEP') ? 'error' : ''}
                mask="99999-999"
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <InputMask
                type="text"
                name="number"
                id="number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('number') ? 'error' : ''}
                mask="9999"
              />
            </div>
          </InputGroup>
          <div>
            <label htmlFor="reference">Complemento (opcional)</label>
            <input
              style={{ marginBottom: '32px' }}
              type="text"
              name="reference"
              id="reference"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
        </form>
        {form.dirty ? (
          <Button type="button" onClick={goToPayment}>
            Continuar com pagamento
          </Button>
        ) : (
          ''
        )}
        <Button type="button" onClick={backToCart}>
          Voltar para carrinho
        </Button>
      </Sidebar>
      <Sidebar className={paymentData ? '' : 'is-closed'}>
        <Title>Pagamento - Valor a pagar {formatPrice(getTotal())}</Title>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              style={{ textTransform: 'uppercase' }}
              type="text"
              name="cardName"
              id="cardName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('cardName') ? 'error' : ''}
            />
          </div>
          <InputGroup>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                style={{
                  width: '228px',
                }}
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <InputMask
                type="text"
                name="cvv"
                id="cvv"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('cvv') ? 'error' : ''}
                mask="999"
              />
            </div>
          </InputGroup>
          <InputGroup>
            <div>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                type="text"
                name="expiresMonth"
                id="expiresMonth"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('expiresMonth') ? 'error' : ''}
                mask="99"
              />
            </div>
            <div>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                type="text"
                name="expiresYear"
                id="expiresYear"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('expiresYear') ? 'error' : ''}
                mask="9999"
              />
            </div>
          </InputGroup>
          <Button
            type="submit"
            onClick={goToCheckout}
            style={{
              marginTop: '24px',
            }}
          >
            Finalizar pagamento
          </Button>
          <Button type="button" onClick={backToPurchase}>
            Voltar para a edição de endereço
          </Button>
        </form>
      </Sidebar>
      {isSuccess ? (
        <Sidebar className={checkout ? '' : 'is-closed'}>
          {isLoading && <p>Carregando...</p>}
          <Title>Pedido realizado - {data?.orderId}</Title>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!{' '}
          </p>
          <Button onClick={finishPurchase}>Concluir</Button>
        </Sidebar>
      ) : (
        <Sidebar className={checkout ? '' : 'is-closed'}>
          <p>Carregando...</p>
        </Sidebar>
      )}
    </Container>
  )
}
