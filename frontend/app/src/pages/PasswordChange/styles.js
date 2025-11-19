import styled from "styled-components";
import BackToLink from "../../components/BackToLink";
import { device, size } from "../../styles/breakpoints";

export const container = styled.div `
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    align-items: center;

    @media (max-width: 2100px) and (orientation: landscape) {
        grid-template-columns: 42% 42%;
    }

    @media (max-width: 1700px) and (orientation: landscape) {
        grid-template-columns: 41% 41%;
    }

    @media (max-width: ${size.laptopL}) and (orientation:landscape) {
        grid-template-columns: 40% 40%;
    }

    @media (max-width: 1280px) and (orientation: landscape) {
        grid-template-columns: 44% 44%;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`

export const container_with_image = styled.div `
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
    display: none;
    }
`

export const image = styled.img `
    z-index: 1;
    width: auto;
    height: 900px;

    @media (max-width: 2100px) and (orientation: landscape) {
        height: 700px;
    }

    @media (max-width: 1700px) and (orientation: landscape) {
        height: 650px;
    }

    @media (max-width: 1550px) and (orientation: landscape) {
        height: 570px;
    }

    @media (max-width: ${size.laptopL}) and (orientation:landscape) {
        height: 530px;
    }

    @media (max-width: 1280px) and (orientation: landscape) {
        height: 490px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        height: 450px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        height: 390px;
    }
`

export const container_with_form = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const change_password_form = styled.form `
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`

export const h1_form = styled.h1 `
    font-size: 60px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 55px;
    color: var(--Primary-Color);
    white-space: nowrap;
    display: flex;
    align-self: flex-start;

    @media (max-width: 2100px) {
        font-size: 60px;
        letter-spacing: 0.6px;
        line-height: 59px;
    }

    @media (max-width: 1700px) {
        font-size: 55px;
        letter-spacing: 0.5px;
        line-height: 53px;
    }

    @media (max-width: 1550px) {
        font-size: 47px;
        letter-spacing: 0.4px;
        line-height: 46px;
    }

    @media (max-width: ${size.laptopL}) {
        font-size: 45px;  
        letter-spacing: 0.4px;
        line-height: 44px;
    }

    @media (max-width: 1280px) {
        font-size: 40px;
        letter-spacing: 0.4px;
        line-height: 39px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        font-size: 36px;
        line-height: 36px;
        letter-spacing: 0.3px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 53px;
        letter-spacing: 0.5px;
        line-height: 53px;
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        font-size: 40px;
        letter-spacing: 0.4px;
        line-height: 39px;
    }

    @media (max-width: ${size.mobileL}) and (orientation: portrait) {
        font-size: 30px;
        letter-spacing: 0.3px;
        line-height: 34px;
        margin-bottom: -5px;
    }

    @media (max-width: ${size.mobileLX}) and (orientation: portrait) {
        font-size: 27px;
        line-height: 29px;
        margin-bottom: -5px;
    }

    @media (max-width: ${size.mobileS}) and (orientation: portrait) {
        font-size: 26px;
        line-height: 29px;
        margin-bottom: -5px;
    }
`

export const error_message = styled.p `
    font-weight: 600;
    color: var(--Error-Color);
    font-size: 16px;
    align-self: flex-start;
`

export const input_container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 900px;

    @media (max-width: 2100px) and (orientation: landscape) {
        width: 750px;
    }

    @media (max-width: 1700px) and (orientation: landscape) {
        width: 550px;
    }

    @media (max-width: 1550px) and (orientation: landscape) {
        width: 500px;
    }

    @media (max-width: 1280px) and (orientation: landscape) {
        width: 460px; 
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        width: 400px; 
    }

    @media (max-width: ${size.laptop}) and  (orientation: portrait) {
        width: 550px;
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        width: 420px;
        gap: 15px;
    }

    @media (max-width: ${size.mobileL}) and (orientation: portrait) {
        width: 330px;
    }

    @media (max-width: ${size.mobileLX}) and (orientation: portrait) {
        width: 300px;
    }

    @media (max-width: ${size.mobileS}) and (orientation: portrait) {
        width: 260px;
    }
`