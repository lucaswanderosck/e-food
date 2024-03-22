import React from 'react'
import { TfiClose } from 'react-icons/tfi'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { MenuI, RestauranteI } from '../../components/CardRestaurant'
import { Product } from '../../components/Product'
import { add, open } from '../../store/reducers/cart'
import { formatDescription } from '../../utils/formatters'
import { Close, List, Modal, ModalContainer, ModalContent } from './styles'

interface ModalState {
  isVisible: boolean
}

export const ProductList: React.FC = () => {
  const { id } = useParams()

  const [currentRest, setCurrentRest] = React.useState<RestauranteI>()
  const [modal, setModal] = React.useState<ModalState>({
    isVisible: false,
  })
  const [selectedProduct, setSelectedProduct] = React.useState<MenuI>()

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(selectedProduct!))
    dispatch(open())
  }

  React.useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCurrentRest(res))
  }, [id])

  if (!currentRest) {
    return <h3>Carregando...</h3>
  }

  const openModal = (product: MenuI) => {
    setSelectedProduct(product)
    setModal({
      isVisible: true,
    })
  }

  return (
    <>
      <div className="container">
        <List>
          {currentRest.cardapio?.map((item) => (
            <li key={item.id} onClick={() => openModal(item)}>
              <Product
                foto={item.foto}
                nome={item.nome}
                descricao={formatDescription(item.descricao)}
                id={item.id}
              />
            </li>
          ))}
        </List>
      </div>
      {selectedProduct && (
        <Modal className={modal.isVisible ? 'active' : ''}>
          <ModalContent className="container">
            <ModalContainer>
              <img src={selectedProduct.foto} alt="" />
              <div>
                <h4>{selectedProduct.nome}</h4>

                <p>{selectedProduct.descricao}</p>
                <span>{selectedProduct.porcao}</span>
                <button onClick={addToCart}>
                  Adicionar ao carrinho {`R$ ${selectedProduct.preco}0`}
                </button>
              </div>
            </ModalContainer>
            <Close
              onClick={() => {
                setModal({
                  isVisible: false,
                })
              }}
            >
              <TfiClose color="#fff" />
            </Close>
          </ModalContent>
          <div
            className="overlay"
            onClick={() => {
              setModal({
                isVisible: false,
              })
            }}
          ></div>
        </Modal>
      )}
    </>
  )
}
