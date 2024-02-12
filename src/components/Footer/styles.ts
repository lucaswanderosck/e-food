import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors['rose-300']};
  padding: 40px;
`
export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
  line-height: 0;

  a {
    background-color: ${({ theme }) => theme.colors['rose-700']};
    color: ${({ theme }) => theme.colors['rose-100']};
    padding: 4px;
    border-radius: 50%;
  }
`

export const Logo = styled.img`
  display: block;
  margin-bottom: 32px;
`
export const Description = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors['rose-700']};
`
