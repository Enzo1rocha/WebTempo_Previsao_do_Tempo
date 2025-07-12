import * as S from './styles';
import Background from '../../components/Background';


function LogoutPage() {
    return (
        <Background>
            <S.container>
                <h1>Logout</h1>
                <p>Are you sure you want to log out?</p>
                <S.container_with_buttons>
                    <S.cancel_button>Cancel</S.cancel_button>
                    <S.confirm_button>Confirm Logout</S.confirm_button>
                </S.container_with_buttons>
            </S.container>
        </Background>
    )
};

export default LogoutPage;