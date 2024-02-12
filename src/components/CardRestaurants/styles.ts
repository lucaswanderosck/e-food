import styled from 'styled-components'

export const Container = styled.div`
  max-width: 472px;
  width: 100%;
  height: 398px;
  position: relative;

  & + & {
    margin-bottom: 48px;
  }
`

export const RestaurantBanner = styled.img`
  width: 100%;
  height: 217px;
  display: block;
  object-fit: cover;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors['rose-700']};
`

export const Button = styled.a`
  background-color: ${({ theme }) => theme.colors['rose-700']};
  padding: 4px 6px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  text-decoration: none;
`

export const CardContainer = styled.div`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors['rose-700']};
  border-top: none;
`

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors['rose-700']};
`

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors['rose-700']};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  padding: 6px 4px;
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
  text-transform: capitalize;
`

export const Rate = styled.span`
  margin-right: 8px;
  font-weight: bold;
  font-size: 18px;
`

export const RateDiv = styled.div`
  display: flex;
  align-items: center;
`
