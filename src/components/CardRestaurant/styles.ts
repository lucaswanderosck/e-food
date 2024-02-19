import styled from 'styled-components'

export const Container = styled.li`
  max-width: 472px;
  width: 100%;
  height: 398px;
  position: relative;
`

export const RestaurantBanner = styled.img`
  width: 100%;
  height: 217px;
  display: block;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.coral};
`

export const Button = styled.a`
  font-size: 14px;
  background-color: ${({ theme }) => theme.coral};
  padding: 4px 6px;
  color: ${({ theme }) => theme.peach};
  border: none;
  cursor: pointer;
  text-decoration: none;
`

export const Card = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.coral};
  border-top: none;
`

export const TitleCard = styled.div`
  display: flex;
  margin-bottom: 16px;
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
  top: 16px;
  right: 16px;
`

export const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 0;
  font-weight: bold;
`
