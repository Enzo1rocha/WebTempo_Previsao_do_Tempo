import * as S from './style'
import forgotPassword from '../../assets/authPageIMGS/forgotPassword.svg'
import ForgotInput from '../../components/InputsForgotPassword'

import Button from '../../components/Button'
import Background from '../../components/Background'
import BackToLink from '../../components/BackToLink'
import { useState } from 'react'

function ForgotPassword() {

    const [IsButtonClicked, setIsButtonClicked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        IsButtonClicked ? setIsButtonClicked(false) : setIsButtonClicked(true)

    }

    return ( 
        <Background>
            <S.Container>
                <S.ContainerWithImage>
                    <S.image src={forgotPassword}></S.image>
                </S.ContainerWithImage>
                <S.FormContainer onSubmit={handleSubmit}>
                    <S.Title>Esqueceu <br></br> Sua Senha?</S.Title>

                    <S.containerInput_Button>
                        <ForgotInput></ForgotInput>
                        <S.Send_button value={"Enviar"}></S.Send_button>
                        <S.Return_button value={'Voltar'} href={'/login'}/>
                    </S.containerInput_Button>

                </S.FormContainer>
            </S.Container>
            {IsButtonClicked && <S.button_clicked_notification>
                {IsButtonClicked && <p>Se o email estiver cadastrado, você receberá um link para redefinir sua senha.</p>}
                <button type="button" onClick={() => {
                    setIsButtonClicked(false)
                }}>Concordar</button>
            </S.button_clicked_notification>}
        </Background>
    )
}

export default ForgotPassword