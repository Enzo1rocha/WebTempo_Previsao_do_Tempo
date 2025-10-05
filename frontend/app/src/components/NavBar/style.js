import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from "../../styles/breakpoints";

export const Container = styled.div `
    position: relative;
    top: 0;
    z-index:999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 50px;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    margin: auto;
    background-color: var(--Secundary-Color);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

    @media ${device.laptopL} {
        padding: 10px 30px;
    }

    @media ${device.laptop} {
        padding: 10px 20px;
    }

    
`

export const Logo = styled.a `
    color: var(--Background-Color);
    font-size: 30px;
    font-weight:600;
    text-decoration: none;
    cursor: pointer;

    @media ${device.laptopL} {
        font-size: 24px;
    }

    @media ${device.laptop} {
        font-size: 20px;
    }

    @media ${device.mobileL} {
        font-size: 14px
    }

`

export const Nav = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;

    @media ${device.laptopL} {
        gap: 7px;
    }

    @media ${device.laptop} {
        gap: 5px;
    }

`


export const NavMobile = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 40px;
    background-color: var(--Background-Color);
    border-radius: 50px;
    position: relative;

    svg {
        color: var(--Secundary-Color);
        font-size: 17px;
    }

    @media ${device.laptopL} {
        
    }

    @media ${device.laptop} {

    }

    @media ${device.mobileL} {
        height: 25px;
        width: 30px;
        border-radius: 50px;

        > svg {
            font-size: 14px;
        }
    }

`

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: fixed;
    top: 55px;
    left: 0;
    padding: 10px 0px;


    overflow: hidden;
    transition: 0.4s ease;

    background-color: var(--Secundary-Color);

    transition: all 0.4s ease;


    height: 100vh;
    width: 100vw;

    @media ${device.laptopL} {
        
    }

    @media ${device.laptop} {
        
    }
`

export const NavItem = styled.a `
    font-size: 17px;
    text-decoration: none;
    color: var(--Background-Color);
    font-weight: 600;
    padding: 4px 8px;

    transition: 0.2s ease-out;
    

    &:hover {
        text-decoration: underline;
        background-color: var(--Background-Color);
        color: var(--Secundary-Color);
        border-radius: 5px;
    }

    @media ${device.laptopL} {
        font-size: 16px;
    }

    @media ${device.laptop} {
        font-size: 14px;
    }
`

export const NavItemMobile = styled.a `
    font-size: 17px;
    text-decoration: none;
    color: var(--Background-Color);
    font-weight: 600;
    padding: 4px 8px;

    border-radius: 5px;


    &:hover {
        background-color: var(--Background-Color);
        color: var(--Secundary-Color);
    }
`

export const SearchBarContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 390px;

    @media ${device.laptopL} {
        width: 380px;
    }

    @media ${device.laptop} {
        width: 270px;
    }

    @media ${device.mobileL} {
        width: 170px;
    }
`