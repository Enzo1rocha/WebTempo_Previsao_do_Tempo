import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "../../context/AuthContext";
import Loading from '../../components/Loading';

const LoginPage = () => {
  const { login } = useAuth()
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    'email': '',
    'password': ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
        await login(formData);
    } catch {
        alert('Erro ao fazer login');
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <S.Container>
      {isLoading && <Loading message="Entrando..." />}

      <S.LoginCard>
        <S.Header>
          <S.Title>Bem-vindo de volta</S.Title>
          <S.Subtitle>
            Insira suas credenciais para acessar o WebTempo.
          </S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          <S.InputGroup>
            <label htmlFor="email">E-mail</label>
            <S.InputWrapper>
              <FontAwesomeIcon icon="envelope" className="icon" />
              <S.Input 
                type="email" 
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </S.InputWrapper>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="password">Senha</label>
            <S.InputWrapper>
              <FontAwesomeIcon icon="lock" className="icon" />
              <S.Input 
                type={showPassword ? "text" : "password"} 
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <FontAwesomeIcon 
                icon={showPassword ? "eye-slash" : "eye"} 
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Ocultar senha" : "Mostrar senha"}
              />
            </S.InputWrapper>
            <S.ForgotPassword to="/forgot">
              Esqueceu sua senha?
            </S.ForgotPassword>
          </S.InputGroup>

          <S.Button type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar na Conta'}
          </S.Button>
        </S.Form>

        <S.Footer>
          Não tem uma conta?
          <Link to="/register">Cadastre-se gratuitamente</Link>
        </S.Footer>
      </S.LoginCard>
    </S.Container>
  );
};

export default LoginPage;