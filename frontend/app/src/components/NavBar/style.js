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
    width: 100%;
    margin: auto;
    background-color: var(--Secundary-Color);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);


    @media ${device.laptop} {
        padding: 10px 20px;
    }

    @media ${device.laptopL} {
        padding: 12px 30px;
    }

    
`

export const Logo = styled.a `
    color: var(--Background-Color);
    font-size: 30px;
    font-weight:600;
    text-decoration: none;
    cursor: pointer;


    @media ${device.mobileL} {
        font-size: 17px
    }

    @media ${device.laptop} {
        font-size: 25px;
    }

     @media ${device.laptopL} {
        font-size: 30px;
    }

`

export const Nav = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;

    @media ${device.laptop} {
        gap: 10px;
    }

    @media ${device.laptopL} {
        gap: 17px;
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


    @media ${device.mobileL} {
        height: 30px;
        width: 30px;
        border-radius: 50%;

        > svg {
            font-size: 15px;
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

    @media ${device.laptop} {
        font-size: 17px;
    }

    @media ${device.laptopL} {
        font-size: 19px;
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

    @media ${device.mobileL} {
        width: 80%;
    }

    @media ${device.laptop} {
        width: 420px;
    }

    @media ${device.laptopL} {
        width: 550px;
    }

    
`

export const isSearchClicked = styled.div `
    background-color: var(--Secundary-Color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    gap: 5px;
`

export const Container_Search_Icon = styled.button `
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.clicked ? '10px' : '50px'};
    border: 2px solid var(--Secundary-Color);
    box-shadow: 0px 2px 2px rgba(0,0,0,0.5);

    > svg {
        height: 18px;
        color: var(--Secundary-Color);
    }
`