import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from './../../components/CardRestaurant/index'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const product = state.items.find((item) => item.id === action.payload.id)

      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('Esse item já foi adicionado ao carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    close: (state) => {
      state.isOpen = false
    },
  },
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
