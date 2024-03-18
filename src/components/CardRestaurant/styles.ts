import styled from 'styled-components'

export const Container = styled.li`
  max-width: 472px;
  width: 100%;
  max-height: 398px;
  height: 100%;
  position: relative;
`

export const RestaurantBanner = styled.img`
  width: 100%;
  height: 217px;
  display: block;
`
export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.coral};
`

export const Button = styled.a`
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.coral};
  padding: 4px 6px;
  color: ${({ theme }) => theme.peach};
  border: none;
  cursor: pointer;
  text-decoration: none;
`

export const Card = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.coral};
  border-top: none;
`

export const TitleCard = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.coral};
`

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.coral};
  color: ${({ theme }) => theme.peach};
  font-size: 12px;
  padding: 6px 4px;
  display: block;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export const Rate = styled.div`
  width: 55px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  p {
    font-size: 18px;
  }
`
