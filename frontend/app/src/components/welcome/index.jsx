import * as S from './style'

import SignUp from '../../assets/authPageIMGS/SignUp.png'

import InputComponent from '../Inputs'

import Sign_Container from '../ConfirmAuth'

import ForgoutAccount from '../forgoutAccount'
import { use, useState } from 'react'



function Welcome({img, FormTitle, LabelText, Text, ShowNameInput, isLogin, navigateTo, onSubmit, error}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (isLogin) {
            const formData = {
                'email': email,
                'password': password
            }
            onSubmit(formData)
        } else {
            const formData = {
                'username': name.trim(),
                'email': email.trim(),
                'password1': password,
                'password2': password,
            }
            onSubmit(formData)
        }
    }

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
                        {error && <S.Alert>Erro ao fazer login, verifique suas credenciais.</S.Alert>}
                        {ShowNameInput && <InputComponent type={'text'} LabelText="Name"
                        id={'name'} value={name} onChange={(e) => setName(e.target.value)} $error={error} />}
                        <InputComponent type={'email'} LabelText="Email" id={'email'} value={email} onChange={(e) => setEmail(e.target.value)} $error={error} />
                        <InputComponent $error={error} type={'password'} LabelText="Password" id={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </S.ContainerWithInputs>
                    
                    <Sign_Container LabelText={LabelText} onClick={handleSubmit} />

                    <ForgoutAccount Text={Text} navigateTo={navigateTo} isLogin={isLogin}/>
   
                </S.FormContainer>
            </S.ContainerWithForm>
        </S.Container>
    )
}

export default Welcome