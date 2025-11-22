import styled from "styled-components";
import { size } from "../../styles/breakpoints";
import InputComponent from "../../components/Inputs"
import Button from "../../components/Button";
import BackToLink from "../../components/BackToLink";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 54% 35%;
    width: 100vw;
    height: 100vh;
    align-items: center;

    @media (max-width: ${size.laptopXL}) {
        grid-template-columns: 52% 35%;
    }

    @media (max-width: ${size.laptopXL2}) {
        grid-template-columns: 52% 38%;
    }

    @media (max-width: ${size.laptopL}) {
        grid-template-columns:50% 48%;
    }

    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ContainerWithImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
    z-index: 1;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const ImageContent = styled.img`
    width: auto;
    height: 850px;

    @media (max-width: 2300px) {
        height: 700px;
    }

    @media (max-width: ${size.laptopXL}) {
        height: 550px;
    }

    @media (max-width: ${size.laptopXL2}) {
        height: 465px;
    }

    @media (max-width: ${size.laptopL}) {
        height: 410px;
    }

    @media (max-width: 1180px) {
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

export const FormPasswordUpdate = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 35px;
    width: 750px;

    @media (max-width: ${size.laptopXL}) {
        width: 600px;
    }

    @media (max-width: ${size.laptopXL2}) {
        gap: 20px;
        width: 540px;
    }

    @media (max-width: ${size.laptopL}) {
        width: 490px;
    }

    @media (max-width: 1180px) {
        gap: 15px;
        width: 430px;
    }

    @media (max-width: 1000px) {
        width: 600px;
    }

    @media (max-width: 650px) {
        width: 430px;
    }

    @media (max-width: 580px) {
        width: 370px;
    }

    @media (max-width: 400px) {
        width: 310px;
        gap: 15px;
    }

    @media (max-width: 321px) {
        gap: 10px;
        width: 285px;
    }
`

export const FormTitle = styled.h1`
    font-size: 55px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 52px;
    white-space: nowrap;
    color: var(--Primary-Color);
    display: flex;
    align-self: flex-start;
    text-align: left;

    @media (max-width: ${size.laptopXL}) {
        font-size: 49px;
    }

    @media (max-width: ${size.laptopXL2}) {
     font-size: 35px;
     line-height: 34px;
    }

    @media (max-width: ${size.laptopL}) {
        font-size: 32px;
        line-height: 33px;
    }

    @media (max-width: 1180px) {
        font-size: 31px;
        line-height: 32px;
    }

    @media (max-width: 1000px) {
        font-size: 32px;
        line-height: 33px;
    }

    @media (max-width: 650px) {
        font-size: 30px;
        line-height: 31px;
    }

    @media (max-width: 580px) {
        font-size: 26px;
        line-height: 29px;
    }

    @media (max-width: 400px) {
        font-size: 23px;

        line-height: 27px;
    }

    @media (max-width: 321px) {
        font-size: 21px;
        line-height: 25px;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 580px) {
        gap: 12px;
    }

    @media (max-width: 321px) {
        gap: 6.5px;
    }
`

export const input = styled(InputComponent) `
    width: 750px;
    padding-bottom: 25px;

    .input-label {
        font-size: 31px;
    }

    .input-field {
        font-size: 31px;
    }

    @media (max-width: ${size.laptopXL}) {
        width: 600px;

        .input-field {
            font-size: 27px;
        }

        .input-label {
            font-size: 27px;
        }
    }

    @media (max-width: ${size.laptopXL2}) {
    padding-bottom: 17.5px;
       width:540px;

       .input-field {
        font-size: 19px;
       }

       .input-label {
        font-size: 19px;
       }
    }

    @media (max-width: ${size.laptopL}) {
        width: 490px;
        padding-bottom: 12px;

        .input-field {
            font-size: 19px;
        }

        .input-label {
            font-size: 19px;
        }
    }

    @media (max-width: 1180px) {
        width: 430px;
        border-bottom-width: 2.9px;
        padding-bottom: 8px;

        .input-field {
            font-size: 18px;
        }

        .input-label {
            font-size: 18px;
        }
    }

    @media (max-width: 1000px) {
        width: 600px;
        border-bottom-width: 3.1px;
        padding-bottom: 8px;

        .input-field {
            font-size: 19px;
        }

        .input-label {
            font-size: 19px;
        }
    }

    @media (max-width: 650px) {
        width: 430px;
        padding-bottom: 10px;

        .input-field {
            font-size: 19px;
        }

        .input-label {
            font-size: 19px;
        }
    }
    @media (max-width: 580px) {
        width: 370px;
        padding-bottom: 5px;
        border-bottom-width: 2.7px;

        .input-field {
            font-size: 15px;
        }

        .input-label {
            font-size: 15px;
        }
    }

    @media (max-width: 400px) {
        width: 310px;
        padding-bottom: 4px;

        .input-field {
            font-size: 14.5px;
        }

        .input-label {
            font-size: 14.5px;
        }
    }

    @media (max-width: 321px) {
        width: 285px;

        .input-field {
            font-size: 13.5px;
        }

        .input-label {
            font-size: 13.5px;
        }
    }
`

export const botão = styled(Button) `
    font-size: 25px;
    padding: 18px;

    @media (max-width: ${size.laptopXL}) {
        font-size: 24px;
    }

    @media (max-width: ${size.laptopXL2}) {
        font-size: 17px;
        padding: 13px;
    }

    @media (max-width: ${size.laptopL}) {
        font-size: 16px;
    }

    @media (max-width: 1180px) {
        font-size: 15px;
        padding: 12px;
    }

    @media (max-width: 1000px) {
        font-size: 16px;
        padding: 12px;
    }

    @media (max-width: 650px) {
        font-size: 17px;
        padding: 12px;
    }

    @media (max-width: 580px) {
        font-size: 14px;
        padding: 11.5px;
        margin-top: 7px;
    }

    @media (max-width: 400px) {
        font-size: 13px;
        padding: 11.5px;
    }

    @media (max-width: 321px) {
        font-size: 12px;
        padding: 11px;
    }
`

export const voltar = styled(BackToLink) `
    @media (max-width: 2000px) {
        font-size: 25px;
    }

    @media (max-width: ${size.laptopXL}) {
        font-size: 23px;
    }

    @media (max-width: ${size.laptopXL2}) {
        font-size: 16px;
    }

    @media (max-width: ${size.laptopL}) {
       font-size:15px;
    }

    @media (max-width: 1180px) {
        font-size: 14px;
    }

    @media (max-width: 1000px) {
        font-size: 15px;
    }

    @media (max-width: 650px) {
        font-size: 15px;
        margin-top: 5px;
    }

    @media (max-width: 580px) {
        font-size: 15px;
        margin-top: 10px;
    }

    @media (max-width: 400px) {
        font-size: 13px;
        margin-top: 10px;
    }
    
    @media (max-width: 321px) {
        margin-top: 10px;
        font-size: 12px;
    }
`
