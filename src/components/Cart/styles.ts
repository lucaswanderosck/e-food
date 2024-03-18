import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${({ theme }) => theme.coral};
  max-width: 360px;
  width: 100%;
  padding: 2rem 0.5rem;

  > span {
    font-weight: bold;
    color: ${({ theme }) => theme.peach};
    font-size: 1rem;
    display: flex;
    justify-content: center;
  }
`

export const Prices = styled.p`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.peach};
`
export const CartItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  position: relative;
  background-color: ${({ theme }) => theme.peach};
  color: ${({ theme }) => theme.coral};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    font-size: 0.875rem;
  }

  button {
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.coral};
    cursor: pointer;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.25rem;
  border: none;
  background-color: ${({ theme }) => theme.peach};
  color: ${({ theme }) => theme.coral};
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;
`
