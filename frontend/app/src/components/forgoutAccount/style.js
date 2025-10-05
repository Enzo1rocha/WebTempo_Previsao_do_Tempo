import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    @media ${device.laptopL} {
        
    }

    @media ${device.laptop} {
        
    }
`

export const Link = styled.a`
    color: var(--Secundary-Color);
    font-size: 19px;
    font-weight: 600;
    text-decoration: none;

    text-align: left;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    @media ${device.laptopL} {
        font-size: 15px;
    }

    @media ${device.laptop} {
        font-size: 13px;
    }

    @media ${device.mobileL} {
        font-size: 15px;
    }

    @media ${device.mobileS} {
        font-size: 11px;
    }
`