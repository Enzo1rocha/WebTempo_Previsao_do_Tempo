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
                <s.container_with_form>
                    <s.FormPasswordUpdate>
                        <s.FormTitle>Digite a <br />nova senha</s.FormTitle> 
                        <s.ContainerInput>
                            <s.input type={'password'} LabelText="Nova Senha" />
                            <s.input type={'password'} LabelText="Confirmar Senha" />
                            <s.botão value={"Trocar Senha"}/> 
                        </s.ContainerInput>
                        <s.voltar value={'Voltar para o login'} href={'/login'}></s.voltar>
                    </s.FormPasswordUpdate>
                </s.container_with_form>
            </s.Container>
        </Background>
    )
}

export default UpdatePassword;