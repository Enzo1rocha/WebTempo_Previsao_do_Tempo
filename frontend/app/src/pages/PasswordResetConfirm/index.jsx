import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthService from '../../services/authService';
import Loading from '../../components/Loading';

const PasswordResetConfirmPage = () => {
  const navigate = useNavigate();
  // Pega uid e token da URL (definidos na rota como /:uid/:token)
  const { token, uid } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    setIsLoading(true);

    const payload = {
      new_password1: password,
      new_password2: confirmPassword,
      uid: uid,
      token: token
    };

    try {
      await AuthService.passwordResetConfirm(payload);
      
      setIsSuccess(true);
      
      // Redireciona após 3 segundos
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      
    } catch (error) {
      console.error(error);
      if (error.response?.data?.token) {
          alert("Link inválido ou expirado. Solicite uma nova redefinição.");
      } else {
          alert("Erro ao redefinir senha. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading message="Localizando você..." />;
  }

  if (isSuccess) {
    return (
      <S.Container>
        <S.Card>
          <S.SuccessState>
            <FontAwesomeIcon icon="check-circle" className="icon-success" />
            <h2>Senha alterada!</h2>
            <p>Sua senha foi redefinida com sucesso.</p>
            <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: 10}}>
                Redirecionando para o login...
            </p>
          </S.SuccessState>
        </S.Card>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Card>
        <S.Header>
          <div className="header-icon">
            <FontAwesomeIcon icon="key" />
          </div>
          <S.Title>Redefinir Senha</S.Title>
          <S.Subtitle>
            Crie uma nova senha forte para acessar sua conta novamente.
          </S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          {/* Nova Senha */}
          <S.InputGroup>
            <label htmlFor="password">Nova Senha</label>
            <S.InputWrapper>
              <FontAwesomeIcon icon="lock" className="icon" />
              <S.Input 
                type={showPassword ? "text" : "password"} 
                id="password"
                placeholder="Mínimo de 8 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
              <FontAwesomeIcon 
                icon={showPassword ? "eye-slash" : "eye"} 
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            </S.InputWrapper>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="confirmPassword">Confirmar Nova Senha</label>
            <S.InputWrapper>
              <FontAwesomeIcon icon="lock" className="icon" />
              <S.Input 
                type={showPassword ? "text" : "password"} 
                id="confirmPassword"
                placeholder="Repita a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
              />
            </S.InputWrapper>
          </S.InputGroup>

          <S.Button type="submit" disabled={isLoading}>
            {isLoading ? 'Redefinindo...' : 'Salvar Nova Senha'}
          </S.Button>
        </S.Form>
      </S.Card>
    </S.Container>
  );
};

export default PasswordResetConfirmPage;