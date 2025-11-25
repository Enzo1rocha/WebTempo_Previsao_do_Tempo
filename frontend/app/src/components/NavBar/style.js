import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device, size } from "../../styles/breakpoints";
import SearchBar from "../SearchBar";

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
    position: ${props => props.$menu_clicado ? 'fixed' : 'relative'};
    margin: auto;
    background-color: var(--Secundary-Color);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

    @media ${device.mobileS} {
        padding: 10px 10px;
    }

    @media ${device.mobileL} {
        padding: 10px 10px;
    }

    @media ${device.tablet} {
        padding: 10px 20px;
    }


    @media ${device.laptop} {
        padding: 10px 20px;
    }

    @media ${device.laptopL} {
        padding: 12px 30px;
    }

    @media (max-width: ${size.mobileS}) {
        justify-content: space-between;
        align-items: center;
        padding: 12px 12px;
    }
    
`

export const Logo = styled.a `
    color: var(--Background-Color);
    font-size: 30px;
    font-weight:600;
    text-decoration: none;
    cursor: pointer;

    @media ${device.mobileS} {
        font-size: 18px;
    }


    @media ${device.mobileL} {
        font-size: 20px
    }

    @media ${device.tablet} {
        font-size: 30px;
    }

    @media ${device.laptop} {
        font-size: 25px;
    }

     @media ${device.laptopL} {
        font-size: 30px;
    }

    @media (max-width: ${size.mobileS}) {
        font-size: 18px;
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

    @media ${device.mobileS} {
        height: 28px;
        width: 28px;
        border-radius: 10px;

        > svg {
            font-size: 15px;
        }
    }

    @media ${device.mobileL} {
        height: 35px;
        width: 35px;
        border-radius: 8px;
        border: 2px solid var(--Secundary-Color);

        > svg {
            font-size: 10px;
        }
    }

    @media ${device.tablet} {
        height: 41px;
        width: 41px;
        border-radius: 10px;
        border: 3px solid var(--Secundary-Color);

        > svg {
            font-size: 20px;
        }
    }

    @media (max-width: ${size.mobileS}) {
        height: 24px;
        width: 26px;

        > svg {
            font-size: 13px;
        }
    }


`

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: fixed;
    top: 50px;
    left: 0;
    padding: 10px 0px;


    overflow: hidden;
    transition: 0.4s ease;

    background-color: var(--Secundary-Color);

    transition: all 0.4s ease;


    height: 100vh;
    width: 100vw;
    z-index: 999;
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

    @media ${device.mobileL} {
        font-size: 18px;
    }

    @media ${device.tablet} {
        font-size: 25px;
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

    @media ${device.tablet} {
        width: 600px;
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
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    gap: 5px;
    width: 100%;
    margin: auto;



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

    @media ${device.mobileS} {
        height: ${props => props.clicked ? '40px' : '31px'};
        width: ${props => props.clicked ? '40px' : '31px'};
        border-radius: ${props => props.clicked ? '8px' : '10px'};

        > svg {
            font-size: 15px;
    }
}

    @media ${device.mobileL} {
        height: ${props => props.clicked ? '40px' : '35px'};
        width:  ${props => props.clicked ? '40px' : '35px'};
        border-radius: 8px;

        > svg {
            font-size: ${props => props.clicked ? '20px' : '10px'};
        }
    }

    @media ${device.tablet} {
        height: 41px;
        width: 41px;
        border-radius: 10px;

        > svg {
            font-size: 24px;
        }
    }

    @media (max-width: ${size.mobileS}) {
        height: ${props => props.clicked ? '40px' : '28px'};
        width: ${props => props.clicked ? '40px' : '30px'};
        border-radius: ${props => props.clicked ? '8px' : '10px'};

        > svg {
            font-size: ${props => props.clicked ? '8px' : '10px'};
        }
    }
    
`

export const SearchBarDesign = styled(SearchBar) `
    .searchBarContainer {
        height: 42.5px;

        > input {
            font-size: 13.5px;
        }
    }

    .warning {
        font-size: 13.5px;
        padding: 8px 5px;
    }
`