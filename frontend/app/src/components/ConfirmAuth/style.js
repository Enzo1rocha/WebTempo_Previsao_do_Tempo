import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.div `
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    @media ${device.laptopL} {
        
    }

    @media ${device.laptop} {
        
    }
`

export const LabelForButton = styled.label `
    color: var(--Primary-Color);
    font-size: 30px;
    font-weight: 700;

    @media ${device.laptopL} {
        font-size: 21px;
    }

    @media ${device.laptop} {
        font-size: 16px;
    }

    @media ${device.mobileL} {
           font-size: 19px;
    }

    @media ${device.mobileS} {
        font-size: 15px;
    }
`

export const Button = styled.button `
    width: 180px;
    height: 50px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    background-color: var(--Primary-Color);

    cursor: pointer;

    display:  flex;
    justify-content: center;
    align-items: center;

    &:active {
        cursor: wait;
    }

    @media ${device.laptopL} {
        width: 170px;
        height: 45px;
        padding: 8px;
        border-radius: 9px;
        padding: 5px;
    }

    @media ${device.laptop} {
        width: 135px;
        height: 36px;
        padding: 8px;
        border-radius: 8px;
        padding: 5px;
    }

    @media ${device.mobileL} {
        width: 140px;
        height: 40px;
        padding: 10px;
        border-radius: 10px;

    }

    @media ${device.mobileS} {
        width: 110px;
        height: 35px;
    }
`

export const SignImage = styled.img `
    height: 70px;

    @media ${device.laptopL} {
        height: 56px;
    }

    @media ${device.laptop} {
        height: 42px;
    }

    @media ${device.mobileL} {
        height: 45px;
    }

    @media ${device.mobileS} {
        height: 35px;
    }
`

