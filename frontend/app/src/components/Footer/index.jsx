import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Container>
      <S.Content>
        <S.BrandSection>
          <h2>
            <FontAwesomeIcon icon="cloud-sun" style={{ color: '#3b82f6' }} />
            WebTempo
          </h2>
          <p>
            Sua fonte confiável de previsões meteorológicas precisas e em tempo real. 
            Planeje seu dia com confiança.
          </p>
        </S.BrandSection>

        <S.LinkSection>
          <h3>Navegação</h3>
          <Link to="/">Início</Link>
          <Link to="/about">Sobre o Projeto</Link>
          <Link to="/contact">Entre em Contato</Link>
          <Link to="/login">Acessar Conta</Link>
        </S.LinkSection>

        <S.LinkSection>
          <h3>Conecte-se</h3>
          <S.SocialIcons>
            <a href="https://github.com/enzo1rocha" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://linkedin.com/in/enzo1rocha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a href="mailto:enzo25rocha@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </S.SocialIcons>
        </S.LinkSection>
      </S.Content>

      <S.BottomBar>
        <p>&copy; {currentYear} WebTempo. Todos os direitos reservados.</p>
        <p>Desenvolvido com 💙 por Enzo1Rocha</p>
      </S.BottomBar>
    </S.Container>
  );
};

export default Footer;