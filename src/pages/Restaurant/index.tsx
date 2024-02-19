import React from 'react'
import { useParams } from 'react-router'
import { Banner } from '../../Components/Banner'
import { DadosRestaurante } from '../../Components/CardRestaurant'
import { HeaderRest } from '../../Components/HeaderRest'
import { ProductList } from '../../Containers/ProductList'

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
