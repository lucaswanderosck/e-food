import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteI } from '../components/CardRestaurant'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestauranteI[], void>({
      query: () => 'restaurantes',
    }),
    getCurrentRest: builder.query<RestauranteI, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
})

export const { useGetRestaurantsQuery, useGetCurrentRestQuery } = api
