import styled from "styled-components";
import Button from "../../components/Button";
import { device, size } from "../../styles/breakpoints";


export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    position: relative;

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        gap: 0px;
    }

`

export const content_text = styled.div `
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    bottom: 40px;

    @media (max-width: 1920px) and (orientation: landscape) {
        bottom: 20px;
    }

    @media (max-width: 1550px) and (orientation: landscape) {
        bottom: 20px;
    }

    @media (max-width: ${size.laptopL}) and (orientation: landscape) {
        bottom: 20px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        bottom: 10px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        position: static;
        margin-bottom: 20px;
        margin-top: -20px;
    }
    `

export const Img = styled.img `
    height: 1100px;
    position: absolute;
    top: -40px;

    @media (max-width: 1920px) and (orientation: landscape)  {
        height: 650px;
        top: -50px;
    }

    @media (max-width: 1550px) and (orientation: landscape) {
        height: 600px;
        top: -60px;
    }

    @media (max-width: ${size.laptopL}) and (orientation: landscape){
        height: 550px;
        top: -55px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        height: 420px;
        top: -20px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        height: 700px;
        margin-bottom: -20px;
        margin-top: -50px;
        position: static;
    }
`

export const Title = styled.h1 `
    text-align: center;
    color: var(--Secundary-Color);
    font-weight: 700;
    text-shadow: 1px 3px 4px rgba(0,0,0,0.3);
    font-size: 90px;

    @media (max-width: 1920px) and (orientation: landscape) {
        font-size: 50px;
    }

    @media (max-width: 1550px) and (orientation: landscape){
        font-size: 50px;
    }

    @media (max-width: ${size.laptopL}) and (orientation: landscape) {
        font-size: 45px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        font-size: 35px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 55px;
    }
`

export const Subtitle = styled.p `
    font-size: 30px;
    text-align: center;

    @media (max-width: 1920px) and (orientation: landscape) {
        font-size: 22px;
    }

    @media (max-width: 1550px) and (orientation: landscape) {
        font-size: 22px;
    }

    @media (max-width: ${size.laptopL}) and (orientation: landscape) {
        font-size: 19px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        font-size: 17px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 28px;
    }
`

export const CustomButton = styled.a `
    width: 500px;
    margin: auto;
    padding: 15px;
    border-radius: 15px;
    font-size: 25px;
    cursor: pointer;
    text-decoration: none;
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.6px;

    @media (max-width: 1920px) and (orientation: landscape) {
        width: 350px;
        font-size: 20px;
        padding: 13px;
    }

    @media (max-width: 1550px) and (orientation: landscape) {
        width: 350px;
        font-size: 20px;
        padding: 10px;
    }

    @media (max-width: ${size.laptopL}) and (orientation: landscape) {
        width: 300px;
        font-size: 20px;
        padding: 10px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        width: 280px;
        font-size: 16px;
        padding: 9px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        width: 460px;
        padding: 15px;
        font-size: 22px;
    }
`


