import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    border-bottom: 3.6px solid var(--Secundary-Color-Transparent);

    padding-bottom: 10px;
    justify-content: center;
    align-items: center;


    @media ${device.laptopL} {
        
    }

    @media ${device.laptop} {
        border-bottom: 3.3px solid var(--Secundary-Color-Transparent);
    }
`

export const Label = styled.label`
    color: var(--Secundary-Color-Transparent);
    font-size: 21px;
    font-weight: 600;
    white-space: nowrap;

    @media ${device.laptop} {
        font-size: 19px;
    }

    @media ${device.tablet} {
        font-size: 18px;
    }

    @media ${device.mobileL} {
        font-size: 18px;
    }

    @media ${device.mobileS} {
        font-size:16px;
    }

     @media ${device.mobileXS} {
        font-size:16px;
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

    @media ${device.laptop} {
        font-size: 19px;
    }

    @media ${device.tablet} {
        font-size: 18px;
    }

    @media ${device.mobileL} {
        font-size: 18px;
    }
    @media ${device.mobileS} {
        font-size:16px;
    }

    @media ${device.mobileXS} {
        font-size:16px;
    }
`