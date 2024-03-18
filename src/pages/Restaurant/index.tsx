import React from 'react'
import { useParams } from 'react-router'
import { Banner } from '../../components/Banner'
import { HeaderRest } from '../../components/HeaderRest'
import { ProductList } from '../../container/ProductList'
import { useGetCurrentRestQuery } from '../../services/api'

export const Restaurant: React.FC = () => {
  const { id } = useParams()
  const { data: currentRest } = useGetCurrentRestQuery(id!)

  if (currentRest) {
    return (
      <>
        <HeaderRest />
        <Banner
          capa={currentRest.capa}
          tipo={currentRest.tipo}
          titulo={currentRest.titulo}
        ></Banner>
        <ProductList />
      </>
    )
  }

  return <h3>Carregando...</h3>
}
