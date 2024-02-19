import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.coral};
  width: 320px;
  height: 339px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const ProductImg = styled.img`
  width: 304px;
  height: 167px;
  display: block;
`
export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.cream};
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.cream};
`

export const AddCart = styled.button`
  background-color: ${({ theme }) => theme.peach};
  color: ${({ theme }) => theme.coral};
  font-weight: bold;
  width: 100%;
  border: none;
  padding: 4px;
  display: block;
  cursor: pointer;
`
