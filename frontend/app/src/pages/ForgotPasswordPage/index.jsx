import React, { useState } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthService from '../../services/authService';
import Loading from '../../components/Loading';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const request = await AuthService.passwordReset({email: email})
      console.log(request);
      if (request.status == 200) {
        setIsSuccess(true)
      } else {
        console.log("aparentemente o email não foi enviado");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar e-mail. Verifique se o endereço está correto.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading message="Carregando..." />;
  }

  return (
    <S.Container>
      <S.Card>
        {!isSuccess ? (
          <>
            <S.Header>
              <S.Title>Esqueceu a senha?</S.Title>
              <S.Subtitle>
                Não se preocupe, acontece! Digite seu e-mail abaixo e enviaremos as instruções de recuperação.
              </S.Subtitle>
            </S.Header>

            <S.Form onSubmit={handleSubmit}>
              <S.InputGroup>
                <label htmlFor="email">E-mail Cadastrado</label>
                <S.InputWrapper>
                  <FontAwesomeIcon icon="envelope" className="icon" />
                  <S.Input 
                    type="email" 
                    id="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </S.InputWrapper>
              </S.InputGroup>

              <S.Button type="submit" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar Link de Recuperação'}
              </S.Button>
            </S.Form>
          </>
        ) : (
          // --- TELA 2: Sucesso ---
          <S.SuccessState>
            <FontAwesomeIcon icon="check-circle" className="icon-success" />
            <h2>Verifique seu e-mail</h2>
            <p>
              Enviamos um link de recuperação para <strong>{email}</strong>. 
              <br />
              Clique no link para criar uma nova senha.
            </p>
            
            <S.Button onClick={() => window.location.href = '/login'}>
              Voltar para o Login
            </S.Button>
          </S.SuccessState>
        )}

        {/* Link de Voltar (Sempre visível se não for sucesso, ou condicional) */}
        {!isSuccess && (
          <S.BackLink to="/login">
            <FontAwesomeIcon icon="arrow-left" />
            Voltar para o Login
          </S.BackLink>
        )}
      </S.Card>
    </S.Container>
  );
};

export default ForgotPasswordPage;