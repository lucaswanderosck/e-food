import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.cream};
    -webkit-font-smoothing: antialiased;
    
  }

    body, input, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .container {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
    
`
