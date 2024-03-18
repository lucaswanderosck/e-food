import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { store } from './store'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <Footer />
          <Cart />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  )
}
