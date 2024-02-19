import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { Footer } from './components/Footer'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <Footer />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
