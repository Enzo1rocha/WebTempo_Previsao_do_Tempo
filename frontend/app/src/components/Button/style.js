import styled from "styled-components";
import { size } from "../../styles/breakpoints";

export const Button = styled.button `
    background-color: var(--Secundary-Color);
    width: auto;
    padding: 10px 0px;
    font-size: 20px;
    color: var(--Background-Color);
    font-weight: 700;
    letter-spacing: 0.6px;
    
    border-radius: 15px;

    transition: 0.2s;

    &:hover {
        background-color: var(--Primary-Color);
    }

    &:active {
        cursor: wait;
    }

    @media (min-width: 2000px) {
        font-size: 25px;
        padding: 15px 0px;
    }

    @media (max-width: 1700px) {
        font-size: 22px;
        padding: 15px 0px;
    }

    @media (max-width: 1550px) {
        font-size: 19px;
        padding: 13px 0px;
    }

    @media (max-width: ${size.laptop}) {
        font-size: 18px;
        padding: 13px 0px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 25px;
        padding: 15px 0px;
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        font-size: 20px;
        padding: 15px 0px;
    }

    @media (max-width: ${size.mobileL}) and (orientation: portrait) {
        font-size: 18px;
        padding: 14px 0px;
    }

    @media (max-width: ${size.mobileLX}) and (orientation: portrait) {
        font-size: 15px;
        padding: 13px 0px;
    }

    @media (max-width: ${size.mobileS}) and (orientation: portrait) {
        font-size: 13px;
        padding: 12px 0px;
    }
`