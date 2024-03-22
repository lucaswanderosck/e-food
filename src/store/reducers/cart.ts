import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuI } from './../../components/CardRestaurant/index'

interface CartState {
  items: MenuI[]
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
    add: (state, action: PayloadAction<MenuI>) => {
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
    clear: (state) => {
      state.items = []
    },
  },
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
