import * as S from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutPage = () => {
  return (
    <S.PageContainer>
      <S.Header>
        <S.Title>Sobre o WebTempo</S.Title>
        <S.Subtitle>
          Uma solução completa de meteorologia que une precisão de dados com uma experiência de usuário moderna e performática.
        </S.Subtitle>
      </S.Header>

      <S.Section>
        <S.SectionTitle><FontAwesomeIcon icon="map-location-dot" style={{marginRight: 10}}/> O Projeto</S.SectionTitle>
        <S.TextBlock>
          <p>
            O <strong>WebTempo</strong> não é apenas um mostrador de temperatura. É uma plataforma desenvolvida para entregar previsões meteorológicas em tempo real com máxima confiabilidade. 
          </p>
          <p style={{marginTop: '15px'}}>
            A aplicação resolve o problema de acesso rápido e detalhado a informações climáticas, oferecendo recursos como geolocalização automática, busca global e visualização de tendências em gráficos interativos. Todo o sistema foi desenhado pensando na <strong>usabilidade</strong> e na <strong>precisão</strong>.
          </p>
        </S.TextBlock>
      </S.Section>

      <S.Section>
        <S.SectionTitle><FontAwesomeIcon icon="code" style={{marginRight: 10}}/> Engenharia & Arquitetura</S.SectionTitle>
        <p style={{marginBottom: '20px', color: '#64748b'}}>
          Este projeto utiliza uma arquitetura <strong>Headless (Decoupled)</strong>, separando a lógica de negócios no backend da interface interativa no frontend.
        </p>
        
        <S.Grid>
          <S.TechCard>
            <S.IconWrapper color="#61DAFB"><FontAwesomeIcon icon={['fab', 'react']} />
            </S.IconWrapper>
            <S.CardContent>
              <h3>React + Vite</h3>
              <p>Interface reativa de alta performance (SPA).</p>
            </S.CardContent>
          </S.TechCard>
          
          <S.TechCard>
            <S.IconWrapper color="#DB7093">
                <FontAwesomeIcon icon="pen-to-square" />
            </S.IconWrapper>
            <S.CardContent>
              <h3>Styled Components</h3>
              <p>Estilização modular e dinâmica via CSS-in-JS.</p>
            </S.CardContent>
          </S.TechCard>

           <S.TechCard>
            <S.IconWrapper color="#FF4154">
                <FontAwesomeIcon icon="gauge-simple-high" />
            </S.IconWrapper>
            <S.CardContent>
              <h3>TanStack Query</h3>
              <p>Gerenciamento de cache e estado assíncrono.</p>
            </S.CardContent>
          </S.TechCard>

          {/* Backend */}
          <S.TechCard>
            <S.IconWrapper color="#092E20">
                <FontAwesomeIcon icon={['fab', 'python']} />
            </S.IconWrapper>
            <S.CardContent>
              <h3>Django DRF</h3>
              <p>API RESTful robusta e segura.</p>
            </S.CardContent>
          </S.TechCard>

          <S.TechCard>
            <S.IconWrapper color="#DC382D">
                <FontAwesomeIcon icon="bolt" />
            </S.IconWrapper>
            <S.CardContent>
              <h3>Redis Cache</h3>
              <p>Otimização de latência e redução de chamadas à API.</p>
            </S.CardContent>
          </S.TechCard>

          <S.TechCard>
            <S.IconWrapper color="#00758F">
                <FontAwesomeIcon icon="database" />
            </S.IconWrapper>
            <S.CardContent>
              <h3>MySQL</h3>
              <p>Persistência de dados relacional e escalável.</p>
            </S.CardContent>
          </S.TechCard>
        </S.Grid>
      </S.Section>

      <S.Section>
        <S.SectionTitle><FontAwesomeIcon icon="user-tie" style={{marginRight: 10}}/> Quem Desenvolveu</S.SectionTitle>
        <S.AuthorSection>
          <S.AuthorInfo>
            <h3>Olá, eu sou Enzo Rocha</h3>
            <p>
              Desenvolvedor Full Stack apaixonado por resolução de problemas e tecnologia. 
              <br /> 
              Criei o <strong>WebTempo</strong> como um desafio técnico para aplicar conceitos avançados de integração, segurança e performance em um cenário realista. 
            </p>
            <p>
              Meu foco é transformar problemas complexos em interfaces limpas e código eficiente. Estou sempre em busca de novos desafios para expandir meu conhecimento técnico.
            </p>
          </S.AuthorInfo>
          <S.SocialLinks>
            <a href="https://github.com/enzo1rocha" title="GitHub" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href="https://linkedin.com/in/enzo1rocha" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          </S.SocialLinks>
        </S.AuthorSection>
      </S.Section>
    </S.PageContainer>
  );
};

export default AboutPage;