import styled from "styled-components";
import { size, device } from "../../styles/breakpoints";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 49% 51%;
    width: 100%;
    height: 100vh;

    @media (max-width: 2060px) {
        grid-template-columns: 49% 51%;
    }

    @media (max-width: ${size.laptop}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ContainerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 40px;
    width: 100%;

    @media (max-width: 2060px) {
        padding: 0px;
    }

    @media (max-width: ${size.tablet}) {

    }
`

export const Content = styled.div `
    padding: 0px 0px;
    width: 100%;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 60px;
    z-index: 1;

    

    @media (max-width: 1550px) {
        margin-left: 100px;
        gap: 40px;
    }

    @media (max-width: ${size.laptopL}) {
        margin-left: 40px;
        gap: 40px;
    }

    @media (max-width: ${size.laptop}) {
        max-width: 650px;
        margin: auto;
    }

    @media (max-width: ${size.tablet}) {
        max-width: 500px;
    }

    @media (max-width: ${size.mobileL}) {
        max-width: 355px;
    }

    @media (max-width: 376px) {
        max-width: 320px;
    }

    @media (max-width: ${size.mobileS}) {
        max-width: 300px;
    }
`

export const title_buttonContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 25px;

    @media (max-width: 2060px) {
        gap: 20px;
    }
`

export const Title = styled.h1 `
    font-size: 70px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    font-weight: 700;
    letter-spacing: 0.1px;
    line-height: 58px;
    color: var(--Secundary-Color);

    @media (max-width: 2060px) {
        font-size: 65px;
        line-height: 60px;
    }

    @media (max-width: 1550px) {
        font-size: 58px;
        line-height: 57px;
        letter-spacing: -2px;
    }

    @media (max-width: 1440px) {
        font-size: 50px;
        line-height: 50px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 45px;
        letter-spacing: -2px;
        line-height: 42px;
        text-align: left;
    }

    @media (max-width: ${size.mobileL}) {
        text-align: center;
        font-size: 37px;
        line-height: 38px;
    }

    @media (max-width: 376px) {
        font-size: 32px;
        line-height: 34px;
    }

    @media (max-width: ${size.mobileS}) {
        font-size: 28px;
        line-height: 31px;
    }


`

export const SubTitle = styled.p `
    font-size: 23px;
    text-align: justify;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 25px;
    color: var(--Primary-Color);

    @media (max-width: 2060px) {
        font-size: 21px;
    }

    @media (max-width: 1550px) {
        font-size: 20px;
        line-height: 25px;
    }

    @media (max-width: ${size.laptopL}) {
        font-size: 19px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 17px;
        line-height: 24px;;
    }
     @media (max-width: ${size.mobileL}) {
        font-size: 17px;
        line-height: 24px;
        text-align: center;
     }

     @media (max-width: 376px) {
        font-size: 16px;
        line-height: 23px;
        text-align: center;
    }

    @media (max-width: ${size.mobileS}) {
        font-size: 13.5px;
        line-height: 21px;
        text-align: center;
    }
`


export const ContainerWithImage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    @media (max-width: ${size.laptop}) {
        display: none;
    }
`

export const ImageContent = styled.img `
    height: 1100px;
    z-index: 1;
    padding: 0px 20px 0px 0px; 

    @media (max-width: 2060px) {
        height: 900px;
    }

    @media (max-width: 1550px) {
        height: 620px;
        padding: 0px;
    }

    @media (max-width: 1440px) {
        height: 600px;
        padding: 0px;
    }
`

export const Button = styled.a `
    width:100%;  
    margin: auto;
    position: relative;
    padding: 14px;
    border-radius: 15px;
    font-size: 25px;
    cursor: pointer;
    bottom: 0px;
    text-decoration: none;
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.6px;

    @media (max-width: 2060px) {
        padding: 12px;
        font-size: 20px;
        letter-spacing: 0.6px;
    }

    @media (max-width: ${size.mobileL}) {
        font-size: 18px;
        padding: 13px 10px;
    }

    @media (max-width: 376px) {
        font-size: 17px;
        padding: 13px;
    }
`
 