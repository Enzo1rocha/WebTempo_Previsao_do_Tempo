import * as S from './styles';
import Background from '../../components/Background';
import InputComponent from '../../components/Inputs';
import Button from '../../components/Button';
import BackToLink from '../../components/BackToLink';
import PasswordChangeImage from '../../assets/authPageIMGS/PasswordChangeImage.svg'
import { useState } from 'react';
import { useAuth } from '../../context/authContext';

function PasswordChange() {

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(null);
    const { passwordChange } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            alert('As Senhas não coincidem');
            setError(true);
            return;
        }

        try {
            await passwordChange({ new_password1: password1, new_password2: password2 });
            alert('Password changed successfully');
            window.location.href = '/user/profile';
        } catch (error) {
            console.log('Erro ao alterar a senha', error);
            alert('Error changing password');
            throw error;
        }
    }

    return (
        <Background>
            <S.container>
                <S.container_with_image>
                    <S.image src={PasswordChangeImage}></S.image>
                </S.container_with_image>
                <S.container_with_form>
                    <S.change_password_form onSubmit={handleSubmit}>
                        <S.h1_form>Change <br />Your Password</S.h1_form>
                        <S.input_container>
                            <InputComponent $error={error} onChange={(e) => {setPassword1(e.target.value)}} type={'password'} LabelText="New Password" />
                            <InputComponent $error={error} onChange={(e) => {setPassword2(e.target.value)}} type={'password'} LabelText="Confirm Password" />
                            <Button value={"Change Password"} type='submit'/> 
                        </S.input_container>
                        <BackToLink value={'Cancel'} href={'/user/profile'}></BackToLink>
                    </S.change_password_form>
                </S.container_with_form>
            </S.container>
        </Background>
    )
};

export default PasswordChange;