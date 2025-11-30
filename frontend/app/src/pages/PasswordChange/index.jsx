import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../context/authContext';
import Loading from '../../components/Loading';

const PasswordChange = () => {
    const navigate = useNavigate();
    const { passwordChange } = useAuth();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('As senhas não coincidem. Por favor, verifique.');
            return;
        }

        if (password.length < 8) {
            alert('A senha deve ter pelo menos 8 caracteres.');
            return;
        }

        setIsLoading(true);

        try {
            await passwordChange({ 
                new_password1: password, 
                new_password2: confirmPassword 
            });
            
            alert('Senha alterada com sucesso!');
            navigate('/user/profile');

        } catch (error) {
            const msg = error.response?.data?.detail || 'Erro ao alterar senha. Tente novamente.';
            alert(msg);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loading />
    }

    return (
        <S.Container>
            <S.Card>
                <S.Header>
                    <S.Title>Trocar Senha</S.Title>
                    <S.Subtitle>
                        Mantenha sua conta segura. Escolha uma senha forte que você não use em outros sites.
                    </S.Subtitle>
                </S.Header>

                <S.Form onSubmit={handleSubmit}>
                    <S.InputGroup>
                        <label htmlFor="password">Nova Senha</label>
                        <S.InputWrapper>
                            <FontAwesomeIcon icon="lock" className="icon" />
                            <S.Input 
                                type={showPassword ? "text" : "password"} 
                                id="password"
                                placeholder="Digite a nova senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
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
                        <label htmlFor="confirmPassword">Confirmar Nova Senha</label>
                        <S.InputWrapper>
                            <FontAwesomeIcon icon="lock" className="icon" />
                            <S.Input 
                                type={showConfirmPassword ? "text" : "password"} 
                                id="confirmPassword"
                                placeholder="Repita a nova senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <FontAwesomeIcon 
                                icon={showConfirmPassword ? "eye-slash" : "eye"} 
                                className="toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                title={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                            />
                        </S.InputWrapper>
                    </S.InputGroup>

                    <S.Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Salvando...' : 'Atualizar Senha'}
                    </S.Button>
                </S.Form>

                <S.CancelLink to="/user/profile">
                    <FontAwesomeIcon icon="arrow-left" />
                    Cancelar e Voltar
                </S.CancelLink>
            </S.Card>
        </S.Container>
    );
};

export default PasswordChange;