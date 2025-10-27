import styled from "styled-components";
import { device, size } from "../../styles/breakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    border-bottom: 3.6px solid var(--Secundary-Color-Transparent);

    padding-bottom: 10px;
    justify-content: center;
    align-items: center;


    @media ${device.tablet} and (orientation: portrait) {
        border-bottom: 5px solid var(--Secundary-Color-Transparent);
    }

    @media ${device.laptop} and (orientation: portrait) {
        border-bottom: 5px solid var(--Secundary-Color-Transparent);
    }

    @media ${device.laptop} and (orientation: landscape) {
        border-bottom: 3.3px solid var(--Secundary-Color-Transparent);
    }

    @media (min-width: 2000px) {
        padding-bottom: 15px;
        gap: 2px;
    }

    @media (max-width: 1700px) {
        padding-bottom: 10px;
    }

    @media (max-width: ${size.mobileL}) and (orientation: portrait) {
        padding-bottom: 5px;
    }
`

export const Label = styled.label`
    color: var(--Secundary-Color-Transparent);
    font-size: 21px;
    font-weight: 600;
    white-space: nowrap;


    @media ${device.mobileXS} {
        font-size:16px;
    }

    @media ${device.mobileS} {
        font-size:16px;
    }

    @media ${device.mobileL} {
        font-size: 18px;
    }

    @media ${device.tablet} and (orientation: landscape) {
        font-size: 18px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        font-size: 27px;
    }


    @media ${device.laptop} and (orientation: landscape) {
        font-size: 19px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        font-size: 30px;
    }

    @media (min-width: 2000px) {
        font-size: 25px;
    }

    @media (max-width: 1700px) {
        font-size: 22px;
    }

    @media (max-width: 1550px) {
        font-size: 19.5px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        font-size: 23px;
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        font-size: 19px;
        font-weight: 600;
    }

    @media (max-width: ${size.mobileLX}) and (orientation: portrait) {
        font-size: 16px;
    }

    @media (max-width: ${size.mobileS}) and (orientation: portrait) {
        font-size: 14px;
    }

`

export const Field = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;

    font-size: 21px;
    font-weight: 600;
    color: var(--Secundary-Color-Transparent);
    ${props => props.$error && `color: var(--Error-Color);`}
    background-color: transparent;    

    &:focus {
        outline: none;
    }

    @media ${device.mobileXS} {
        font-size:16px;
    }

     @media ${device.mobileS} {
        font-size:16px;
    }

    @media ${device.mobileL} {
        font-size: 18px;
    }

    @media ${device.tablet} and (orientation: landscape) {
        font-size: 18px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        font-size: 27px;
    }

    @media ${device.laptop} and (orientation: landscape) {
        font-size: 19px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        font-size: 30px;
    }

    @media (max-width: ${size.mobileS}) and (orientation: portrait) {
        font-size: 14px;
    }
`