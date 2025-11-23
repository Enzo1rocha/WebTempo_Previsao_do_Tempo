import React, { useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from "react-router-dom";
import AuthService from "../../services/authService";
import { useAuth } from "../../context/authContext";

const LoginPage = () => {
  const { login } = useAuth()
  
  // Estados
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    'email': '',
    'password': ''
  });

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Dados de Login:', formData);
    try {
        await login(formData);
    } catch (error) {
        console.log('Erro ao fazer login', error);
        
    }
  };

  return (
    <S.Container>
      <S.LoginCard>
        <S.Header>
          <S.Title>Bem-vindo de volta</S.Title>
          <S.Subtitle>
            Insira suas credenciais para acessar o Clima App.
          </S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          {/* Campo de Email */}
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

          {/* Campo de Senha */}
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

          <S.Button type="submit">Entrar na Conta</S.Button>
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