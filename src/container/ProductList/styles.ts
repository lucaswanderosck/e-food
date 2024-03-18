import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 2rem;
  column-gap: 2rem;
  margin-bottom: 120px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.83);
    z-index: -1;
  }

  &.active {
    display: flex;
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${({ theme }) => theme.coral};
  padding: 2rem;
  color: ${({ theme }) => theme.peach};
  position: relative;
`
export const ModalContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  div h4 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.white};
    margin-bottom: 1rem;
  }

  div p,
  div span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.white};
    margin-bottom: 1rem;
  }

  div button {
    padding: 4px 7px;
    border: none;
    cursor: pointer;
    display: block;
    font-weight: 700;
    font-size: 0.875rem;
    text-align: center;
    margin-top: 1rem;
    color: ${({ theme }) => theme.coral};
    background-color: ${({ theme }) => theme.peach};
  }
`

export const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  line-height: 0;
`
