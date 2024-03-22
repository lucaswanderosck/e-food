import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteI } from '../components/CardRestaurant'

export interface Product {
  id: number
  price: number
}

export interface PurchasePayload {
  products: Product[]
  delivery: {
    receiver: string
    adress: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

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
    purchase: builder.mutation<void, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetRestaurantsQuery,
  useGetCurrentRestQuery,
  usePurchaseMutation,
} = api
