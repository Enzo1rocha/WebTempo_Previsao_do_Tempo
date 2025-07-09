import * as s from './style';
import Background from '../../components/Background';
import Button from '../../components/Button'
import BackToLink from '../../components/BackToLink';
import InputComponent from '../../components/Inputs';
import UpdatePasswordImage from '../../assets/authPageIMGS/UpdatePassword.svg';

function UpdatePassword() {
    return (
        <Background>
            <s.Container>
                <s.ContainerWithImage>
                    <s.ImageContent src={UpdatePasswordImage}></s.ImageContent>
                </s.ContainerWithImage>
                <s.FormPasswordUpdate>
                    <s.FormTitle>Enter <br /> New password</s.FormTitle>
                    <s.ContainerInput>
                        <InputComponent type={'password'} LabelText="New Password" />
                        <InputComponent type={'password'} LabelText="Confirm Password" />
                        <Button value={"Update Password"}/> 
                    </s.ContainerInput>
                    <BackToLink value={'Back to Login'} href={'/login'}></BackToLink>
                </s.FormPasswordUpdate>
            </s.Container>
        </Background>
    )
}

export default UpdatePassword;