import styled from "styled-components";
import { size } from "../../styles/breakpoints";

export const BackToLink = styled.a `
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--Secundary-Color);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        cursor: wait;
    }

    @media (min-width: 2000px) {
        font-size: 25px;
    }

    @media (max-width: 1700px) {
        font-size: 20px;
    }

    @media (max-width: 1550px) {
        font-size: 19px;
    }

    @media (max-width: ${size.laptop}) {
        font-size: 19px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 25px;
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        font-size: 20px;
    }

    @media (max-width: ${size.mobileL}) and (orientation: portrait) {
        font-size: 16px;
        margin-top: -5px;
    }

    @media (max-width: ${size.mobileLX}) and (orientation: portrait) {
        font-size: 14px;
        margin-top: -5px;
    }

    @media (max-width: ${size.mobileS}) and (orientation: portrait) {
        font-size: 12px;
        margin-top: -5px;
    }
`