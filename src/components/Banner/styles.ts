import styled from 'styled-components'

export const Container = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 3.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  > div {
    padding: 1.5rem 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Type = styled.span`
  font-weight: 100;
  font-size: 2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.white};
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.white};
`
