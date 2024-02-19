import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { FiX } from 'react-icons/fi'
import { DadosRestaurante, MenuItem } from '../../Components/CardRestaurant'
import { Product } from '../../Components/Product'
import { formatDescription } from '../../utils/formatters'
import { Close, List, Modal, ModalContainer, ModalContent } from './styles'

type ModalState = {
  isVisible: boolean
}

export const ProductList: React.FC = () => {
  const { id } = useParams()

  const [currentRest, setCurrentRest] = useState<DadosRestaurante>()
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
  })
  const [selectedProduct, setSelectedProduct] = useState<MenuItem>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCurrentRest(res))
  }, [id])

  if (!currentRest) {
    return <h3>Carregando...</h3>
  }

  const openModal = (product: MenuItem) => {
    setSelectedProduct(product)
    setModal({
      isVisible: true,
    })
    console.log([product])
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
                <button>
                  Adicionar ao carrinho {`- R$ ${selectedProduct.preco}0`}
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
              <FiX />
            </Close>
          </ModalContent>
          <div
            className="overlay"
            onClick={() => {
              setModal({
                isVisible: false,
              })
            }}
          />
        </Modal>
      )}
    </>
  )
}
