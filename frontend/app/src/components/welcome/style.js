import styled from "styled-components";
import { device, size } from "../../styles/breakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:auto;
    padding: 30px 0px 0px 0px;
    gap: 40px;
    background-color: var(--Primary-Color);

    @media ${device.mobileXS} {
        width: 100%;
    }

    @media ${device.mobileS} {
        gap: 50px;
        padding-top: 50px;
    }

    @media ${device.mobileL} {
        gap: 40px;
    }

    @media ${device.tablet} and (orientation: landscape) {
        gap: 30px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        gap: 32px;
    }

    @media ${device.laptop} and (orientation: landscape) {
        display: grid;
        grid-template-columns: 60% 40%;
        margin: auto;
        background-color: var(--Background-Color);
        padding: 0;
        gap: 0; /* Reset do gap do flex */
    }

    @media ${device.laptopL} and (orientation: landscape) {
        grid-template-columns: 58% 42%;
    }
`;

export const ContainerWithForm = styled.div`
    /* ESTILOS BASE (MOBILE) */
    width: 100%;
    height: 100%;
    padding: 25px 25px 60px 25px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: var(--Background-Color);
    display: flex;
    justify-content: center;

    @media ${device.tablet} and (orientation: landscape) {
        min-height: fit-content; /* Volta a ter altura mínima */
        border-radius: 0; /* Remove bordas arredondadas */
        padding: 20px 20px 40px 20px;
        display: block;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        min-height: 600px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        padding-top: 40px;
        padding-bottom: 100px;
        min-height: 700px;
    }

    @media ${device.laptopL} {
        padding: 30px 35px;
        display: block;
    }
`;

export const FormContainer = styled.form`
    /* ESTILOS BASE (MOBILE) */
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    padding-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: var(--Background-Color);

    @media ${device.tablet} and (orientation: landscape){
        gap: 30px;
        padding-bottom: 0;
        height: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        gap: 30px;
    }

    @media ${device.laptop} and (orientation: landscape) {
        gap: 28px;
        width: auto;
    }

    @media ${device.laptop} and (orientation: portrait) {
        gap: 40px;
    }

    @media ${device.laptopL} {
        gap: 45px;
    }
`;

export const Container_FormTitle_Alert = styled.div`
    /* ESTILOS BASE (MOBILE) */
    display: flex;
    flex-direction: column;
    gap: 0px;

    @media ${device.laptopL} {
        gap: 10px;
    }
`;

export const Alert = styled.p`
    /* ESTILOS BASE (MOBILE) */
    font-size: 11px;
    padding: 5px;
    font-weight: 600;
    text-align: start;
    color: #FE3234;

    @media ${device.tablet} {
        font-size: 9px;
    }

    @media ${device.laptop} {
        font-size: 12px;
    }

    @media ${device.laptopL} {
        font-size: 13px;
    }
`;

export const FormTitle = styled.h1`
    /* ESTILOS BASE (MOBILE) */
    color: var(--Primary-Color);
    font-size: 25px;
    letter-spacing: 0.2px;
    line-height: 30px;
    margin-top: 15px;
    gap: 0px;

    @media ${device.mobileXS} {
        font-size: 22px;
        line-height: 22px;
    }

    @media ${device.mobileS} {
        font-size: 25px;
        line-height: 25px;
    }

    @media ${device.mobileL} {
        font-size: 32px;
        line-height: 32px;
    }

    @media ${device.tablet} and (orientation: landscape) {
        font-size: 32px;
        line-height: 31px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        font-size: 39px;
        line-height: 40px;
    }

    @media ${device.laptop} and (orientation: landscape) {
        font-size: 33px;
        line-height: 35px;
        margin-top: 5px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        font-size: 45px;
        line-height: 45px;
        margin-top: 5px;
    }
    
    @media ${device.laptopL} {
        font-size: 45px;
        letter-spacing: 0.3px;
        line-height: 40px;
        margin-top: 18px;
    }
`;

export const ContainerWithInputs = styled.div`
    /* ESTILOS BASE (MOBILE) */
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${device.tablet} and (orientation: portrait) {
        gap: 20px;
    }

    @media ${device.laptop} and (orientation: landscape) {
        gap: 10px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        gap: 30px;
    }
`;

export const ContainerWithImage = styled.div`
    /* ESTILOS BASE (MOBILE) */
    width: auto;
    height: auto;
    background-color: var(--Primary-Color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0; /* Base sem bordas arredondadas */

    @media ${device.mobileL} {
        min-height: 300px;
    }

    @media ${device.tablet} {
        min-height: 320px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        min-height: 450px;
    }

    @media ${device.laptop} {
        min-height: 100vh;
    }

    @media ${device.laptop} and (orientation: portrait) {
        min-height: 550px;
    }

    @media ${device.laptopL} {
        min-height: 100vh;
    }
`;

export const PictureContainer = styled.picture`
    /* ESTILOS BASE (MOBILE) */
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;


    @media ${device.mobileL} {
        height: 250px;
    }

    @media ${device.mobileL} and (orientation: portrait) {
        min-height: 350px;
    }

    @media ${device.tablet} {
        height: 220px;
        position: static; /* Volta ao fluxo normal */
    }

    @media ${device.laptop} {
        height: 320px;
    }
    
    @media ${device.laptopL} {
        height: 500px;
    }
`;

export const SignUpImage = styled.img`
    /* ESTILOS BASE (MOBILE) */
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;

    @media ${device.mobileXS} {
        height: 220px;
    }

    @media ${device.mobileS} {
        height: 210px;
    }

    @media ${device.mobileLX} {
      height: 220px;
      padding-right: 0;
    }

    @media ${device.mobileL} and (orientation: portrait) {
        height: 290px;
    }


    @media ${device.tablet} and (orientation: landscape) {
        position: static; /* Volta ao fluxo normal */
        transform: none; /* Reseta a transformação */
        height: 260px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        height: 380px;
    }


    @media ${device.laptop} and (orientation: landscape) {
        height: 360px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        height: 450px;
    }
    
    @media ${device.laptopL} {
        height: 520px;
    }

    @media (max-width:${size.mobileS}) {
        height: 200px;;
    }

`;