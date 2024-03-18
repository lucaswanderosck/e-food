import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.coral};
  width: 20rem;
  height: 21.1875rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const ProductImg = styled.img`
  width: 19rem;
  height: 10.4375rem;
  display: block;
`
export const Title = styled.h3`
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: ${({ theme }) => theme.cream};
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.cream};
`

export const AddCart = styled.button`
  background-color: ${({ theme }) => theme.peach};
  color: ${({ theme }) => theme.coral};
  font-weight: bold;
  width: 100%;
  border: none;
  padding: 0.25rem;
  display: block;
  cursor: pointer;
`
