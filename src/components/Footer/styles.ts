import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.peach};
  padding: 40px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
  line-height: 0;

  a {
    background-color: ${({ theme }) => theme.coral};
    color: ${({ theme }) => theme.cream};
    padding: 4px;
    border-radius: 50%;
  }
`

export const Copy = styled.p`
  max-width: 480px;
  width: 100%;
  font-size: 10px;
  color: ${({ theme }) => theme.coral};
`

export const LogoFooter = styled.img`
  width: 125px;
  height: 57px;
  display: block;
  margin-bottom: 32px;
`
