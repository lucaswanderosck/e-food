import styled from 'styled-components'

export const Container = styled.div``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`
