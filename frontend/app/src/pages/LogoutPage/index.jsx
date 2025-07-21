import * as S from './styles';
import Background from '../../components/Background';
import { useAuth } from '../../context/authContext';
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
        navigate('/user/favorite')
    }

    return (
        <Background>
            <S.container>
                <h1>Logout</h1>
                <p>Are you sure you want to log out?</p>
                <S.container_with_buttons>
                    <S.cancel_button onClick={cancelClick}>Cancel</S.cancel_button>
                    <S.confirm_button onClick={handleClick}>Confirm Logout</S.confirm_button>
                </S.container_with_buttons>
            </S.container>
        </Background>
    )
};

export default LogoutPage;