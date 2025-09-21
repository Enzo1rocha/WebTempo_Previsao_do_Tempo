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
                <s.Title>Page Not Found</s.Title>
                <s.Subtitle>This page doesn’t exist. It may have been  <br /> removed or the URL is incorrect</s.Subtitle>
                <s.CustomButton href={user ? '/user/profile' : '/'}>Voltar</s.CustomButton>
            </s.Container>
        </Background>
    )
}

export default PageNotFound;