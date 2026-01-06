import * as S from './styles';
import Background from '../../components/Background';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


function LogoutPage() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();
    
    
    const handleClick = async () => {
        try {
            await logout();
            navigate('/login')
        } catch (error) {
            console.error('erro ao fazer logout');
            throw error
        }
    }

    const cancelClick = () => {
        navigate('/user/profile')
    }

    return (
        <Background>
            <S.container>
                <h1>Sair</h1>
                <p>Você tem certeza de que deseja sair?</p>
                <S.container_with_buttons>
                    <S.cancel_button onClick={cancelClick}>Cancelar</S.cancel_button>
                    <S.confirm_button onClick={handleClick}>Confirmar</S.confirm_button>
                </S.container_with_buttons>
            </S.container>
        </Background>
    )
};

export default LogoutPage;