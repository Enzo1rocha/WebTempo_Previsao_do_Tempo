import * as S from './styles';
import Background from '../../components/Background';
import InputComponent from '../../components/Inputs';
import Button from '../../components/Button';
import BackToLink from '../../components/BackToLink';
import PasswordChangeImage from '../../assets/authPageIMGS/PasswordChangeImage.svg'

function PasswordChange() {
    return (
        <Background>
            <S.container>
                <S.container_with_image>
                    <S.image src={PasswordChangeImage}></S.image>
                </S.container_with_image>
                <S.container_with_form>
                    <S.change_password_form>
                        <S.h1_form>Change <br />Your Password</S.h1_form>
                        <S.input_container>
                            <InputComponent type={'password'} LabelText="New Password" />
                            <InputComponent type={'password'} LabelText="Confirm Password" />
                            <Button value={"Change Password"}/> 
                        </S.input_container>
                        <BackToLink value={'Cancel'} href={'/login'}></BackToLink>
                    </S.change_password_form>
                </S.container_with_form>
            </S.container>
        </Background>
    )
};

export default PasswordChange;