import * as S from './style';
import { useNavigate } from 'react-router-dom';

function ForgoutAccount({Text, navigateTo, isLogin}) {

     const navigate = useNavigate( )
    
    return (
        <S.Container>
            <S.Link onClick={() => {navigate(navigateTo)}}>
                {Text}
            </S.Link>
            {isLogin && <S.Link onClick={() => navigate('/forgot')}>
                {'Esqueceu a senha?'}
            </S.Link>}
        </S.Container>
    )
}

export default ForgoutAccount