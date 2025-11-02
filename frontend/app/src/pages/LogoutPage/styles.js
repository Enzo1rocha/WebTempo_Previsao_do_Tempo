import styled from "styled-components";
import { device, size } from "../../styles/breakpoints";


export const container = styled.div `
    width: 100vw;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    h1 {
        color: var(--Secundary-Color);
        font-family: var(--Primary-Font);
        font-size: 65px;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
        font-weight: 700;
        z-index: 11;
    }

    p {
        font-size: 18px;
        color: var(--Primary-Color);
        font-family: var(--Primary-Font);
        z-index: 11;
    }

    @media (max-width: ${size.laptop}) {
        h1 {
            font-size: 45px;
        }
        p {
            font-size: 16px;
        }
    }

    @media (max-width: ${size.mobileLX}) {
        h1 {
            font-size: 35px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: ${size.mobileS}) {
        h1 {font-size:30px;}
        p {font-size: 13px;}
    }
`

export const container_with_buttons = styled.div `
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    z-index: 11;
    @media (max-width: ${size.mobileS}) {
        gap: 15px;
    }
`

export const cancel_button = styled.button `
    color: var(--Secundary-Color);
    background-color: transparent;
    border: 3px solid var(--Secundary-Color);
    font-family: var(--Primary-Font);
    font-weight: 800;
    font-size: 18px;
    min-width: 200px;
    padding: 7px 2px;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: ${size.laptop}) {
        font-size: 16px;
        min-width: 180px;
    }

    @media (max-width: ${size.mobileLX}) {
        font-size: 12px;
        min-width: 150px;
    }

    @media (max-width: ${size.mobileS}) {
        font-size: 11px;
        padding: 9px 2px;
        min-width: 130px;
    }
    `

export const confirm_button = styled.button `
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    font-family: var(--Primary-Font);
    font-weight: 800;
    font-size: 18px;
    min-width: 200px;
    padding: 7px 2px;
    border-radius: 10px;
    cursor: pointer;

    &:active {
        cursor: wait;
    }

    @media (max-width: ${size.laptop}) {
        font-size: 16px;
        min-width: 180px;
    }

    @media (max-width: ${size.mobileLX}) {
        font-size: 12px;
        min-width: 150px;
    }

    @media (max-width: ${size.mobileS}) {
        font-size: 11px;
        padding: 9px 2px;
        min-width: 130px;
    }
`