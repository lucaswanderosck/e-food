import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors['rose-700']};
  width: 320px;
  max-height: 100%;

  > div {
    max-height: 100%;
  }
`
export const ProductImg = styled.img`
  width: 304px;
  height: 167px;
  margin-bottom: 8px;
`
export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors['rose-300']};
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors['rose-300']};
  margin-bottom: 8px;
`

export const AddCart = styled.button`
  background-color: ${({ theme }) => theme.colors['rose-300']};
  color: ${({ theme }) => theme.colors['rose-700']};
  cursor: pointer;
  width: 100%;
  border: none;
  padding: 4px;
  font-weight: bold;
  font-size: 14px;
`
