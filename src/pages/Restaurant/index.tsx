import React from 'react'
import { useParams } from 'react-router'
import { Banner } from '../../components/Banner'
import { DadosRestaurante } from '../../components/CardRestaurant'
import { HeaderRest } from '../../components/HeaderRest'
import { ProductList } from '../../container/ProductList'

export const Restaurant: React.FC = () => {
  const { id } = useParams()

  const [currentRest, setCurrentRest] = React.useState<DadosRestaurante>()

  React.useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCurrentRest(res))
  }, [id])

  if (!currentRest) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRest />
      <Banner
        capa={currentRest.capa}
        tipo={currentRest.tipo}
        titulo={currentRest.titulo}
      />
      <ProductList />
    </>
  )
}
