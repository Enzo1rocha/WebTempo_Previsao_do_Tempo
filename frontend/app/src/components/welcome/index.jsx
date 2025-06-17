import * as S from './style'

import SignUp from '../../assets/authPageIMGS/SignUp.png'

import InputComponent from '../Inputs'

import Sign_Container from '../ConfirmAuth'

import ForgoutAccount from '../forgoutAccount'



function Welcome({img, FormTitle, LabelText, Text, ShowNameInput, isLogin, navigateTo}) {

    return (
        <S.Container>

            <S.ContainerWithImage>
                <S.PictureContainer>
                    <S.SignUpImage src={img} $isLogin={isLogin}>
                    </S.SignUpImage>
                </S.PictureContainer>
            </S.ContainerWithImage>

            <S.ContainerWithForm>
                <S.FormContainer>

                    <S.FormTitle>{FormTitle}</S.FormTitle>


                    <S.ContainerWithInputs>
                        {ShowNameInput && <InputComponent type={'text'} LabelText="Name" />}
                        <InputComponent type={'email'} LabelText="Email" />
                        <InputComponent type={'password'} LabelText="Password" />
                    </S.ContainerWithInputs>
                    
                    <Sign_Container LabelText={LabelText} />

                    <ForgoutAccount Text={Text} navigateTo={navigateTo} isLogin={isLogin}/>
   
                </S.FormContainer>
            </S.ContainerWithForm>
        </S.Container>
    )
}

export default Welcome