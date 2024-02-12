import styled from 'styled-components'
import background from '../../assets/images/background.svg'

export const Container = styled.header`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 186px;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  display: flex;

  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const LinkHome = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors['rose-700']};
`

export const CartButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`
