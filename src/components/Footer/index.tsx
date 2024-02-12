import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import logo from '../../assets/images/logo.svg'
import { Container, Description, Logo, SocialLinks } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="" />
      <SocialLinks>
        <a href="">
          <RiInstagramFill size={20} />
        </a>
        <a href="">
          <RiFacebookFill size={20} />
        </a>
        <a href="">
          <RiTwitterFill size={20} />
        </a>
      </SocialLinks>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Description>
    </Container>
  )
}
