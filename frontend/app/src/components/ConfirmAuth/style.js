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
    font-size: 24px;
    font-weight: 700;

    @media ${device.mobileXS} {
            font-size:16px;
    }

    @media ${device.mobileS} {
            font-size: 18px;
    }

    @media ${device.mobileL} {
        font-size: 20px;
    }

    @media ${device.tablet} and (orientation: landscape) {
        font-size: 20px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        font-size: 27px;
    }
 
    @media ${device.laptop} and (orientation: landscape) {
        font-size: 21px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        font-size: 32px;
    }

`

export const Button = styled.button `
    width: 180px;
    height: 45px;
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


    @media ${device.mobileXS} {
        width: 110px;
        height: 35px;
    }

     @media ${device.mobileS} {
        width: 120px;
        height: 37px;
    }

    @media ${device.mobileL} {
            width: 140px;
            height: 37px;
        }

    @media ${device.tablet} and (orientation: landscape) {
        width: 150px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        width: 220px;
        height: 50px;
    }

    @media ${device.laptop} and (orientation: landscape) {
        width: 145px;
        height: 40px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        width: 210px;
        height: 60px;
    }
`

export const SignImage = styled.img `
    height: 60px;

    @media ${device.mobileXS} {
        height: 35px;
    }

    @media ${device.mobileS} {
        height: 38px;
    }

    @media ${device.mobileL} {
        height: 40px;
    }

    @media ${device.tablet} and (orientation: portrait) {
        height: 65px;
    }

    @media ${device.laptop} and (orientation: landscape) {
        height: 50px;
    }

    @media ${device.laptop} and (orientation: portrait) {
        height: 80px;
    }
`

