import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.div `
    background-color: var(--Background-Color);
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 1600px;
    display: grid;
    grid-template-columns: 59% 41%;

    @media ${device.laptopL} {
        grid-template-columns: 55% 45%;
    }

    @media ${device.laptop} {
        grid-template-columns: 52% 48%;
    }

    @media ${device.tablet} {
        display: flex;
        width: 100%;
        height: auto;
        padding: 30px 0px 0px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        background-color: var(--Primary-Color);
    }

    @media ${device.mobileL} {
        gap: 80px;
    }

    @media ${device.mobileS} {
        gap: 40px;
    }
`
export const ContainerWithForm = styled.div `
    width: auto;
    min-height: 100vh;
    background-color: var(--Background-Color);
    padding: 50px 70px;

    @media ${device.laptopL} {
        padding: 30px 35px;
    }

    @media ${device.laptop} {
        padding: 30px 30px;
        width: 100%;
    }

    @media ${device.tablet} {
        width: 100%;
        border-top-left-radius: 70px;
        border-top-right-radius: 70px;
        padding: 20px 40px 60px 40px;
        min-height: unset;
        height: fit-content;
    }
    
    @media ${device.mobileL} {
        justify-content: center;
        align-items: flex-start;
    }

    @media ${device.mobileS} {
        padding: 25px 25px 60px 25px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
    
`
export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 50px;

    @media ${device.laptopL} {
        gap: 45px;
    }

    @media ${device.laptop} {
        gap: 28px;
    }

    @media ${device.tablet} {
        gap: 30px;
    }

    @media ${device.mobileL} {
        padding-bottom: 50px;
        background-color: var(--Background-Color);
    }

    @media ${device.mobileS} {
        gap: 40px; 
    }
`
export const Container_FormTitle_Alert = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${device.laptopL} {
        gap: 10px;
    }

    @media ${device.laptop} {
        gap: 0px;
    }

    @media ${device.tablet} {
        gap: 0px;
    }
`
export const Alert = styled.p `
    font-size: 14px;
    padding: 5px;
    font-weight: 600;
    text-align: start;
    color: #FE3234;

    @media ${device.laptopL} {
        font-size: 13px;
    }

    @media ${device.laptop} {
        font-size: 12px;
    }

    @media ${device.tablet} {
        font-size: 9px;
    }

    @media ${device.mobileL} {
        font-size: 11px;
    }
    `
export const FormTitle = styled.h1 `
    color: var(--Primary-Color);
    line-height: 50px;
    letter-spacing: 0.4px;
    font-weight: 700;
    font-size: 50px;
    gap: 10px;
    margin-top: 20px;

    @media ${device.laptopL} {
        font-size: 40px;
        letter-spacing: 0.3px;
        gap: 7px;
        margin-top: 18px;
    }

    @media ${device.laptop} {
        font-size: 30px;
        letter-spacing: 0.2px;
        gap: 0px;
        line-height: 35px;
        margin-top: 5px;
    }

    @media ${device.tablet} {
        font-size: 25px;
        letter-spacing: 0.2px;
        gap: 0px;
        margin-top: 15px;
        line-height: 30px;
    }

    @media ${device.mobileL} {
        font-size: 33px;
    }

    @media ${device.mobileS} {
        font-size: 25px;
    }
`
export const ContainerWithInputs = styled.div `
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media ${device.laptop} {
        gap: 10px;
    }

    @media ${device.mobileL} {
        gap: 10px;
    }
` 
export const ContainerWithImage = styled.div `
    width: auto;
    min-height: 100%;
    background-color: var(--Primary-Color);
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} {
        border-top-right-radius: 9%;
        border-bottom-right-radius: 9%;
    }

    @media ${device.mobileL} {
        height: auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    @media ${device.mobileS} {
    }
`
export const PictureContainer = styled.picture `
    width: auto;
    height: 80vh;
    margin-right: ${props => props.$isLogin ? '0px' : '0px'};
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.laptopL} {
        height: 450px;
    }

    @media ${device.laptop} {
        height: 320px;
    }

    @media ${device.tablet} {
        height: 220px;
    }

    @media ${device.mobileL} {
        height: 250px;
        position: relative;
    }

    @media ${device.mobileS} {
        height: 220px;
    }
    `
export const SignUpImage = styled.img `
    height: 80%;

    @media ${device.laptop} {
        
    }

    @media ${device.tablet} {
        height: 90%;
    }

    @media ${device.mobileL} {
        height: 100%;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media ${device.mobileS} {
        height: 80%;
        padding-right: 15px;
    }
` 