import React, { useState } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactPage = () => {
  // Estado para controlar os campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Estados para feedback visual (Enviando / Sucesso)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio para API (espera 2 segundos)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Limpa o form

      // Remove a mensagem de sucesso após 5 segundos
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Entre em Contato</S.Title>
        <S.Subtitle>
          Tem alguma dúvida, sugestão ou quer apenas trocar uma ideia sobre tecnologia? 
          Preencha o formulário abaixo ou me chame nas redes sociais.
        </S.Subtitle>
      </S.Header>

      <S.ContentWrapper>
        {/* Coluna da Esquerda: Infos */}
        <S.InfoSection>
          <S.InfoCard>
            <h3>
              <FontAwesomeIcon icon="envelope" style={{color: '#3b82f6'}} /> 
              Email
            </h3>
            <p>Enzo25rocha@gmail.com</p>
            <p style={{fontSize: '0.8rem', marginTop: 5}}>Respondo geralmente em até 24h.</p>
          </S.InfoCard>

          <S.InfoCard>
            <h3>
              <FontAwesomeIcon icon={['fab', 'linkedin']} style={{color: '#0077b5'}} /> 
              LinkedIn
            </h3>
            <p>Conecte-se comigo profissionalmente.</p>
            <a href="https://linkedin.com/in/enzo1rocha" target="_blank" rel="noreferrer">
              Acessar Perfil <FontAwesomeIcon icon="arrow-right" size="xs" />
            </a>
          </S.InfoCard>

          <S.InfoCard>
            <h3>
              <FontAwesomeIcon icon={['fab', 'github']} style={{color: '#333'}} /> 
              GitHub
            </h3>
            <p>Veja este e outros projetos open-source.</p>
            <a href="https://github.com/enzo1rocha" target="_blank" rel="noreferrer">
              Acessar Repositórios <FontAwesomeIcon icon="arrow-right" size="xs" />
            </a>
          </S.InfoCard>
        </S.InfoSection>

        {/* Coluna da Direita: Formulário */}
        <S.FormSection onSubmit={handleSubmit}>
          {isSuccess && (
            <S.SuccessMessage>
              <FontAwesomeIcon icon="circle-exclamation" style={{marginRight: 8}} />
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </S.SuccessMessage>
          )}

          <S.FormGroup>
            <label htmlFor="name">Seu Nome</label>
            <S.Input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Ex: João Silva"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </S.FormGroup>

          <S.FormGroup>
            <label htmlFor="email">Seu E-mail</label>
            <S.Input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="joao@exemplo.com" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <label htmlFor="message">Mensagem</label>
            <S.TextArea 
              id="message" 
              name="message" 
              placeholder="Escreva sua mensagem aqui..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </S.FormGroup>

          <S.Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              'Enviando...'
            ) : (
              <>
                Enviar Mensagem <FontAwesomeIcon icon="paper-plane" />
              </>
            )}
          </S.Button>
        </S.FormSection>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default ContactPage;