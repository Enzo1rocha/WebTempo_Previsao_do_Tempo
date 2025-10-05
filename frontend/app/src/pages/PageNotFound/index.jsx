import * as s from './style'
import Background from "../../components/Background";
import Button from '../../components/Button';
import Page404 from '../../assets/errors/Page404.svg'
import { useAuth } from '../../context/authContext';


function PageNotFound() {   
    const { user } = useAuth();


    return (
        <Background>
            <s.Container>
                <s.Img src={Page404}></s.Img>
                <s.content_text>
                    <s.Title>Página não encontrada</s.Title>
                    <s.Subtitle>Está página não existe. Ela pode ter sido <br /> removida ou a URL está incorreta</s.Subtitle>
                    <s.CustomButton href={user ? '/user/profile' : '/'}>Voltar</s.CustomButton>
                </s.content_text>
            </s.Container>
        </Background>
    )
}

export default PageNotFound;