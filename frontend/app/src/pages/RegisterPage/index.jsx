import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import geolocationService from '../../services/geolocationService';
import AuthService from "../../services/authService";
import { useAuth } from "../../context/authContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  
  // Estados para visibilidade das senhas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [Location, setLocation] = useState({})
  const { register } = useAuth();

  const errorMessages = {
    "This password is too common.": "Senha muito fraca",
    "This field may not be blank.": "Campo obrigatório",
    "Unable to log in with provided credentials.": "Credenciais inválidas",
    "user with this email already exists.": "Este e-mail já está em uso",
    "A user with that username already exists.": 'Um usuário com este nome ja existe.',
    "The password is too similar to the username.": 'A senha é muito similar ao nome de usuário',
    "This password is too short. It must contain at least 8 characters.": 'Essa senha é muito curta. (deve conter no minimo 8 caracteres)',
    'The password is too similar to the email.': 'A senha é muito similar ao email.'
    };

  // Estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '', // Alterado de 'password' para 'password1'
    password2: '',  // Alterado de 'confirmPassword' para 'password2'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
            if ("geolocation" in navigator) {
                navigator.permissions.query({name: 'geolocation' }).then(async (result) => {
                    switch (result.state) {
                        case 'granted':
                        case 'prompt':
                            try {
                                const location = await geolocationService();
                                setLocation(location)
                            } catch (error) {
                                console.log('Erro ao obter localização', error);
                            } break;
                        default:
                            alert("Você bloqueou o acesso à localização. Ative nas configurações do navegador.")
                            break;
                    }
                }) 
            } else {
                console.log('GEOLOCATION IS NOT AVAILABLE');
                
            } 
        }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação: Verifica se as senhas são iguais
    if (formData.password1 !== formData.password2) {
      alert("As senhas não coincidem! Por favor, verifique.");
      return;
    }

    const fullData = {
        ...formData,
        'lat_boot_location': String(Location.lat),
        'long_boot_location': String(Location.long)
    }

    try {
        const request = await register(fullData)

        if (request) {
            console.log('Usuario registrado com sucesso');
            navigate('/user/favorite')
        } else {
            navigate('/login', {
                state: {message: 'Conta criada com sucesso, faça login'}
            })
        }
    } catch (error) {
            if (error.response && error.response.data) {
                const erros = error.response.data
                let mensagem = '';

                for (const key in erros) {
                    const msgIngles = erros[key][0];
                    mensagem += errorMessages[msgIngles] ? errorMessages[msgIngles] : msgIngles;
                    mensagem += '\n';
                 }
                console.log(mensagem);
                
                alert(mensagem)
            } else {
                console.error('Erro no registro: ', error);
                alert('Erro ao criar conta, tente novamente.')
                
            }
        }
  };

  return (
    <S.Container>
      <S.RegisterCard>
        <S.Header>
          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>
            Comece a acompanhar o clima da sua região com precisão hoje mesmo.
          </S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          {/* Campo de Nome */}
          <S.InputGroup>
            <label htmlFor="name">Nome Completo</label>
            <S.InputWrapper>
              <FontAwesomeIcon icon="user" className="icon" />
              <S.Input 
                type="text" 
                id="name"
                name="name"
                placeholder="Ex: Maria Silva"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </S.InputWrapper>
          </S.InputGroup>

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

          {/* Campo de Senha (Password 1) */}
          <S.InputGroup>
            <label htmlFor="password1">Senha</label>
            <S.InputWrapper>
              <FontAwesomeIcon icon="lock" className="icon" />
              <S.Input 
                type={showPassword ? "text" : "password"} 
                id="password1"
                name="password1"
                placeholder="Crie uma senha forte"
                value={formData.password1}
                onChange={handleChange}
                required
                minLength={6}
              />
              <FontAwesomeIcon 
                icon={showPassword ? "eye-slash" : "eye"} 
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Ocultar senha" : "Mostrar senha"}
              />
            </S.InputWrapper>
          </S.InputGroup>

          {/* Campo de Confirmar Senha (Password 2) */}
          <S.InputGroup>
            <label htmlFor="password2">Confirmar Senha</label>
            <S.InputWrapper>
              <FontAwesomeIcon icon="lock" className="icon" />
              <S.Input 
                type={showConfirmPassword ? "text" : "password"} 
                id="password2"
                name="password2"
                placeholder="Repita sua senha"
                value={formData.password2}
                onChange={handleChange}
                required
                minLength={6}
              />
              <FontAwesomeIcon 
                icon={showConfirmPassword ? "eye-slash" : "eye"} 
                className="toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                title={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
              />
            </S.InputWrapper>
          </S.InputGroup>

          <S.Button type="submit">Criar Conta Gratuitamente</S.Button>
        </S.Form>

        <S.Footer>
          Já tem uma conta?
          <Link to="/login">Fazer Login</Link>
        </S.Footer>
      </S.RegisterCard>
    </S.Container>
  );
};

export default RegisterPage;