import * as s from './style'
import Background from "../../components/Background";
import Button from '../../components/Button';
import Page404 from '../../assets/errors/Page404.svg'
import { useEffect } from 'react';
import geolocationService from '../../services/geolocationService';

function PageNotFound() {   
    
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.permissions.query({name: 'geolocation' }).then((result) => {
                switch (result.state) {
                    case 'granted':
                        geolocationService.geolocationService()
                        break;
                    case 'prompt':
                        geolocationService.geolocationService()
                        break;
                    default:
                        alert("Você bloqueou o acesso à localização. Ative nas configurações do navegador.")
                        break;
                }
            }) 
        } else {
            console.log('GEOLOCATION IS NOT AVAILABLE');
            
        } 
    }, [])

    return (
        <Background>
            <s.Container>
                <s.Img src={Page404}></s.Img>
                <s.Title>Page Not Found</s.Title>
                <s.Subtitle>This page doesn’t exist. It may have been  <br /> removed or the URL is incorrect</s.Subtitle>
                <s.CustomButton value={'Go Back'} IsLink={true} href='/'></s.CustomButton>
            </s.Container>
        </Background>
    )
}

export default PageNotFound;