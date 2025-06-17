import * as S from './style'
import forgotPassword from '../../assets/authPageIMGS/forgotPassword.svg'
import ForgotInput from '../../components/InputsForgotPassword'

import Button from '../../components/Button'
import Background from '../../components/Background'
import BackToLink from '../../components/BackToLink'

function ForgotPassword() {

    return ( 
        <Background>
            <S.Container>
                <S.ContainerWithImage>
                    <S.image src={forgotPassword}></S.image>
                </S.ContainerWithImage>
                <S.FormContainer>
                    <S.Title>Forgot <br></br> Your Password?</S.Title>

                    <S.containerInput_Button>
                        <ForgotInput></ForgotInput>
                        <Button value={"Reset Password"}></Button>
                        <BackToLink value={'Back to Signin'} href={'/login'}></BackToLink>
                    </S.containerInput_Button>

                </S.FormContainer>
            </S.Container>
        </Background>
    )
}

export default ForgotPassword