import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    border-bottom: 3.2px solid var(--Secundary-Color-Transparent);

    padding-bottom: 15px;
    justify-content: center;
    align-items: center;

    @media ${device.laptopL} {
        border-bottom: 3.1px solid var(--Secundary-Color-Transparent);
        padding-bottom: 6px;
    }

    @media ${device.laptop} {
        border-bottom: 2.8px solid var(--Secundary-Color-Transparent);
        padding-bottom: 3px;
    }

    @media ${device.mobileL} {
            border-bottom: 3.2px solid var(--Secundary-Color-Transparent);
            padding-bottom: 3px;
        }
`

export const Label = styled.label`
    color: var(--Secundary-Color-Transparent);
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;

    @media ${device.laptopL} {
        font-size: 16.5px;
    }

    @media ${device.laptop} {
        font-size: 14px;
    }

    @media ${device.mobileL} {
        font-size: 17px;
    }

    @media ${device.mobileS} {
        font-size: 15px;
    }
`

export const Field = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;

    font-size: 20px;
    font-weight: 600;
    color: var(--Secundary-Color-Transparent);
    ${props => props.$error && `color: var(--Error-Color);`}
    background-color: transparent;    

    &:focus {
        outline: none;
    }

    @media ${device.laptopL} {
        font-size: 16.5px;
    }

    @media ${device.laptop} {
        font-size: 14px;
    }
    @media ${device.mobileL} {
        font-size: 17px;
    }
    @media ${device.mobileS} {
        font-size: 15px;
    }
`