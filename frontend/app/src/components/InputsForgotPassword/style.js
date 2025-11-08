import styled from "styled-components"
import { size } from "../../styles/breakpoints"

export const containerInput = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    height: min-content;
    padding: 20px 33px;
    border-radius: 15px;
    gap: 10px;
    border: 1px solid black;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);

    @media (max-width: ${size.desktop}) {
        padding: 18px 30px;
    }

    @media (max-width: ${size.laptopXL}) {
        padding: 16px 30px; 
    }

    @media (max-width: ${size.laptopXL2}) {
            padding: 11px 20px;
        }

        @media (max-width: ${size.laptopL}) {
        padding: 10px 15px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        padding: 15px 15px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        padding: 9px 15px;
    }

    @media (max-width: ${size.tablet}) {
        padding: 10px 15px;
    }

    @media (max-width: ${size.tabletS}) {
        padding: 8px 15px;
    }

    @media (max-width: ${size.mobileLX}) {
        padding: 6.5px 15px;
    }
`

export const label = styled.label `
    font-size: 28px;
    color: var(--Primary-Color);
    font-weight: 600;;
    background-color: transparent;
    white-space: nowrap;

    @media (max-width: ${size.desktop}) {
        font-size: 26px;
    }

    @media (max-width: ${size.laptopXL}) {
        font-size: 25px;
    }

    @media (max-width: ${size.laptopXL2}) {
        font-size: 18px;
    }

    @media (max-width: ${size.laptopL}) {
        font-size: 16px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 21px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        font-size: 12px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 19px;
    }
    
    @media (max-width: ${size.tabletS}) {
        font-size: 14px;
    }

    @media (max-width: ${size.mobileLX}) {
        font-size: 13.5px;
    }
`

export const inputField = styled.input `
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 28px;
    font-weight: 600;
    color: var(--Primary-Color);
    width: 100%;

    @media (max-width: ${size.desktop}) {
        font-size: 26px;
    }

    @media (max-width: ${size.laptopXL}) {
        font-size: 25px;
    }

    @media (max-width: ${size.laptopXL2}) {
        font-size: 18px;
    }

    @media (max-width: ${size.laptopL}) {
        font-size: 16px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 21px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        font-size: 12px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 19px;
    }

    @media (max-width: ${size.tabletS}) {
        font-size: 14px;
    }

    @media (max-width: ${size.mobileLX}) {
        font-size: 13.5px;
    }
`