import * as s from './style';
import Background from '../../components/Background';
import Button from '../../components/Button';
import WelcomeImage from '../../assets/authPageIMGS/Welcome.svg';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../context/AuthContext';


function WelcomePage() {

    const user = useAuth();

    return (
        <Background>
            <s.Container>
                <s.ContainerContent>
                    <s.Content>
                        <s.Title>Previsão do Tempo <br /> Online</s.Title>

                        <s.title_buttonContainer>
                            <s.SubTitle>Fique por dentro das previsões meteorológicas com o <strong>WebTempo.</strong> Seja para planejar seu dia, se preparar para uma viagem ou apenas por curiosidade, oferecemos atualizações em tempo real, previsões de hora em hora e informações climáticas detalhadas.
                            </s.SubTitle>
                        <s.Button href={user.user ? '/user/profile' : '/register'}>{user.user ? 'Pesquisar Local' : 'Crie sua conta'}</s.Button>
                        </s.title_buttonContainer>
                    </s.Content>    
                </s.ContainerContent>
                <s.ContainerWithImage>
                    <s.ImageContent src={WelcomeImage}></s.ImageContent>
                </s.ContainerWithImage>
            </s.Container>
        </Background>   
    )
}

export default WelcomePage;