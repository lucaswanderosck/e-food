import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import logo from '../../assets/images/logo.svg'
import { Container, Copy, LogoFooter, SocialLinks } from './styles'

export const Footer: React.FC = () => (
  <Container>
    <LogoFooter src={logo} alt="" />
    <SocialLinks>
      <a href="">
        <RiInstagramFill size={16} />
      </a>
      <a href="">
        <RiFacebookFill size={16} />
      </a>
      <a href="">
        <RiTwitterFill size={16} />
      </a>
    </SocialLinks>
    <Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Copy>
  </Container>
)
