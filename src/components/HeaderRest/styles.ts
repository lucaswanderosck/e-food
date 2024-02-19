import styled from 'styled-components'
import background from '../../assets/images/background.svg'

export const Container = styled.header`
  height: 186px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.coral};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`

export const Cart = styled.span``
