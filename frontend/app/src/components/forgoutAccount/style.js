import styled from "styled-components";
import { device, size } from "../../styles/breakpoints";

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
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;

    text-align: left;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    @media ${device.mobileXS} {
        font-size:12px;
    }

    @media ${device.mobileS} {
        font-size: 12px;
    }

    @media ${device.mobileL} {
        font-size: 14px;
    }

    @media ${device.tablet} and (orientation: landscape) {
        font-size: 14px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        font-size: 21px;
    }


    @media ${device.laptop} and (orientation: landscape) {
        font-size: 14px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        font-size: 23px;
    }

    @media (max-width: ${size.mobileS}) {
        font-size: 13px;
    }


`