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
  const [Location, setLocation] = useState({});
  // Trocamos 'register' por 'login' do useAuth, pois faremos o registro manualmente via AuthService
  const { login } = useAuth();

  const errorMessages = {
    "This password is too common.": "Senha muito fraca",
    "This field may not be blank.": "Campo obrigatório",
    "Unable to log in with provided credentials.": "Credenciais inválidas",
    "user with this email already exists.": "Este e-mail já está em uso",
    "A user with that username already exists.": 'Um usuário com este nome já existe.',
    "The password is too similar to the username.": 'A senha é muito similar ao nome de usuário',
    "This password is too short. It must contain at least 8 characters.": 'Essa senha é muito curta. (deve conter no minimo 8 caracteres)',
    'The password is too similar to the email.': 'A senha é muito similar ao email.'
  };

  // Estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.permissions.query({name: 'geolocation' }).then(async (result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          try {
            const location = await geolocationService();
            setLocation(location);
          } catch (error) {
            console.log('Erro ao obter localização', error);
          }
        } else if (result.state === 'denied') {
           console.log("Acesso à localização bloqueado.");
        }
      }).catch(err => {
         console.log("Erro ao verificar permissões:", err);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação: Verifica se as senhas são iguais
    if (formData.password1 !== formData.password2) {
      alert("As senhas não coincidem! Por favor, verifique.");
      return;
    }

    const userData = {
        'username': formData.name,
        'email': formData.email,
        'password1': formData.password1, // Django espera 'password'
        'password2': formData.password2,
        'lat_boot_location': Location?.lat ? String(Location.lat) : 0,
        'long_boot_location': Location?.long ? String(Location.long) : 0,
    };

    try {
        // 1. Tenta Registrar usando AuthService direto
        const request = await AuthService.register(userData);
        console.log(request.status);
        
        
        // Verifica se o status é 201 (Created)
        // Verificamos tanto request.status (padrão axios) quanto request.data.status (caso sua API encapsule)
        if (request.status === 201) {

          console.log('Usuário registrado com sucesso');
          
            
            // 2. Tenta Logar automaticamente
            const loginCredentials = { email: userData.email, password: formData.password1 };
            
            try {
                // O login do useAuth geralmente retorna a resposta ou lança erro
                await login(loginCredentials);
                
                // Se não deu erro no await login, assumimos sucesso
                // alert('Registrado e logado'); // Opcional: feedback visual
                navigate('/user/profile'); // Redireciona para Home/Dashboard
                
            } catch (loginError) {
                console.log("Erro no login automático:", loginError);
                alert('Registrado com sucesso! Por favor, faça login.');
                navigate('/login');
            }
        }
    } catch (error) {
        // Lógica de tratamento de erro do Registro
        if (error.response && error.response.data) {
            const data = error.response.data;
            
            if (typeof data === 'string') {
                alert(data);
                return;
            }

            let mensagem = '';
            if (data.message) {
                mensagem += data.message + '\n';
            }

            Object.keys(data).forEach((key) => {
                if (key === 'message') return;
                const errorContent = data[key];
                const msgIngles = Array.isArray(errorContent) ? errorContent[0] : errorContent;
                const errorTranslated = errorMessages[msgIngles] || msgIngles;
                mensagem += `${errorTranslated}\n`;
            });

            if (mensagem) alert(mensagem);
            
        } else {
            console.error('Erro no registro: ', error);
            alert('Erro ao criar conta. Tente novamente.');
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