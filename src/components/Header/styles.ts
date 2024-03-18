import styled from 'styled-components'
import background from '../../assets/images/background.svg'

export const Container = styled.header`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${({ theme }) => theme.coral};
  max-width: 539px;
  width: 100%;
  text-align: center;

  @media (max-width: 615px) {
    font-size: 1.5rem;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`
