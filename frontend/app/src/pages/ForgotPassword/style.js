import styled from "styled-components";
import { size } from "../../styles/breakpoints";
import Button from "../../components/Button";
import BackToLink from "../../components/BackToLink";

export const Container = styled.div `
    display: grid;
    grid-template-columns: 56% 44%;
    min-height: 100vh;
    max-width: 100vw;
    
    background-color: transparent;

    @media (max-width: ${size.desktop}) {
        grid-template-columns: 54% 46%;
    }

    @media (max-width: ${size.laptopXL}) {
        grid-template-columns: 50% 48%;
    }

    @media (max-width: ${size.laptopXL2}) {
        grid-template-columns: 48% 48%;
    }

    @media (max-width: ${size.laptopL}) {
        grid-template-columns: 48% 52%;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        display: flex;
        grid-template-columns: none;
        justify-content: center;
        align-items: center;
    }
    

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        grid-template-columns: 50% 50%;
    }

    @media (max-width: ${size.tablet}) {

    }
`

export const ContainerWithImage = styled.picture `
    width: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        display: none;
    }  

`

export const image = styled.img `
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 45px;
    z-index: 1;

    @media (max-width: ${size.desktop}) {
        height: 850px;
    }

    @media (max-width: ${size.laptopXL}) {
        height: 740px;
    }

    @media (max-width: ${size.laptopXL2}) {
        height: 620px;
    }

    @media (max-width: ${size.laptopL}) {
        height: 430px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        height: 320px;
    }
    
`

export const containerInput_Button = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 25px;
    width: auto;

    @media (max-width: ${size.laptopXL2}) {
        gap: 22px;
    }

    @media (max-width: ${size.laptopL}) {
        gap: 20px;
    }

    @media (max-width: ${size.tabletS}) {
        gap: 13.5px;
    }
`

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 60px;
    width: 900px;
    padding: 50px 20px;
    z-index: 1;

    justify-content: center;
    margin-bottom: 00px;

    @media (max-width: ${size.desktop}) {
        width: 800px;
    }

    @media (max-width: ${size.laptopXL}) {
        width: 690px;
    }
    @media (max-width: ${size.laptopXL2}) {
        width: 620px;
        gap: 40px;
    }

    @media (max-width: ${size.laptopL}) {
        gap: 30px;
        width: 500px;
    }
    
    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        width: 550px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        width: 360px;
    }

    @media (max-width: ${size.tablet}) {
        width: 470px;
    }

    @media (max-width: ${size.tabletS}) {
        width: 400px;
        gap: 30px;
    }

    @media (max-width: ${size.mobileL}) {
        width: 340px;
        gap: 20px;
    }

    @media (max-width: ${size.mobileLX}) {
        width: 300px;
    }
`


export const Title = styled.h1 `
    font-size: 60px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    color: var(--Primary-Color);
    font-weight: 700;
    letter-spacing: normal;
    line-height: 58px;

    @media (max-width: ${size.desktop}) {
        font-size: 54px;
        line-height: 56px;
    }

    @media (max-width: ${size.laptopXL}) {
        font-size: 48px;
        line-height: 52px;
    }

    @media (max-width: ${size.laptopXL2}) {
        font-size: 42px;
        line-height: 46px;
    }

    @media (max-width: ${size.laptopL}) {
        font-size: 34px;
        line-height: 34.5px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 39px;
        line-height: 45px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        font-size: 28px;
        line-height: 30.5px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 34px;
        line-height: 38px;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.13);
    }

    @media (max-width: ${size.tabletS}) {
        font-size: 24px;
        line-height: 26.5px;
    }

    @media (max-width: ${size.mobileL}) {
        font-size: 22px;
        line-height: 22px;
    }

    @media (max-width: ${size.mobileLX}) {
        font-size: 20px;
        line-height: 22px;
    }

    
`

export const BackTo = styled.a `
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: var(--Secundary-Color);

    &:hover {
        text-decoration: underline;
    }
`

export const button_clicked_notification = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--Secundary-Color-20-transparent);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    flex-direction: column;
    text-align: center;

    > p {
        background-color: white;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 670px;
        margin-bottom: 20px;
        font-size: 22px;
        color: var(--Text-Color);
        font-weight: 500;
        line-height: 1.4;
    }

    > button {
        background-color: var(--Secundary-Color);
        color: white;
        border: none;
        width: 100%;
        padding: 15px;
        max-width: 370px;
        border-radius: 10px;
        font-size: 22px;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
        &:hover {
            background-color: var(--Secundary-Color);
        }
    }

    @media (max-width: ${size.laptopXL2}) {
        > p {
            font-size: 21px;
            padding: 22px;
        }

        > button {
            font-size: 20px;
            padding: 15px;
        }
    }

    @media (max-width: ${size.laptop}) {
        > p {
            font-size: 18px;
            padding: 20px;
            max-width: 520px;
        }

        > button {
            font-size: 18px;
            padding: 13px;
            max-width: 520px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        > p {
            font-size: 12.5px;
            max-width: 300px;
            padding: 16px;
        }

        > button {
            font-size: 12px;
            padding: 10px;
            max-width: 300px;
        }
    }

    `

export const Send_button = styled(Button) `
    padding: 21px 0px;
    font-size: 27px;

    @media (max-width: ${size.desktop}) {
        font-size: 25px;
        padding: 19px;
    }

    @media (max-width: ${size.laptopXL}) {
        font-size: 23px;
        padding: 16px;
    }

    @media (max-width: ${size.laptopXL2}) {
        font-size: 17px;
        padding: 12px;
    }

    @media (max-width: ${size.laptopL}) {
        font-size: 14px;
        padding: 11px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 19px;
        padding: 13px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        font-size: 11px;
        padding: 8px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 16px;
        padding: 12px;
    }

    @media (max-width: ${size.tabletS}) {
        font-size: 11.5px;
        padding: 11.5px;
    }

    @media (max-width: ${size.mobileLX}) {
        font-size: 11px;
        padding: 11px;
    }
`

export const Return_button = styled(BackToLink) `
    font-size: 27px;

    @media (max-width: ${size.desktop}) {
        font-size: 25px;
    }

    @media (max-width: ${size.laptopXL}) {
        font-size: 23px;
    }

    @media (max-width: ${size.laptopXL2}) {
        font-size: 17px;
    }

    @media (max-width: ${size.laptopL}) {
    font-size: 14px;  
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 19px;
    }
    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        font-size: 11px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 16px;
    }

    @media (max-width: ${size.tabletS}) {
        font-size: 11.5px;
        margin-top: 5px;
    }

    @media (max-width: ${size.mobileLX}) {
        font-size: 11px; 
    }
`