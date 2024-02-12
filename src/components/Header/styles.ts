import styled from 'styled-components'
import background from '../../assets/images/background.svg'

export const Container = styled.header`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 2.625rem;
  color: ${({ theme }) => theme.colors['rose-700']};
  max-width: 35rem;
  width: 100%;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`
