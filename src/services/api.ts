import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DadosRestaurante } from '../components/CardRestaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<DadosRestaurante[], void>({
      query: () => 'restaurantes',
    }),
    getCurrentRest: builder.query<DadosRestaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
})

export const { useGetRestaurantsQuery, useGetCurrentRestQuery } = api

export default api
