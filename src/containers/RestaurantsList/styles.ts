import styled from 'styled-components'

export const Container = styled.section`
  padding: 64px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`
