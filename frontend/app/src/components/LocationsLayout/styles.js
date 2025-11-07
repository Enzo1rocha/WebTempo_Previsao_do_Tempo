import styled from "styled-components";
import {device, size} from '../../styles/breakpoints';

export const Container = styled.div `
    background-color: white;
    width: auto;
    height: 120px;
    padding: 20px 0px 15px 20px ;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 5px;
    gap: 7px;
    white-space: nowrap;
    cursor: pointer;

    box-shadow: 1px 2px 5px rgba(0,0,0,0.25);

    &:hover {
        outline: 3px solid var(--Secundary-Color);
        transition: 90ms ease-in-out;
    }

    h1 {
    margin-top: 16px;
     font-size: 22px;
     font-weight: bolder;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     width: 250px;
     color: var(--Secundary-Color);
    }
    p { 
     font-size: 15px;
     color: var(--Secundary-Color);
     font-weight: bold;
    }
    div {
        cursor: pointer;
        position: absolute;
        background-color: var(--Background-Color);
        height: 30px;
        width: 30px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        top: 10px;
        right: 10px;
        > svg {
            color: var(--Secundary-Color);
            font-size: 16px;
        }
    }

    @media (max-width: ${size.desktop}) {
        height: 140px;
        padding: 15px 0px 15px 20px;

        h1 {
            font-size: 28px;
        }

        p {
            font-size: 21px;
        }

        div {
            width: 45px;
            height: 45px;

            > svg {
                font-size: 20px;
            }
        }
    }

    @media (max-width: ${size.laptopXL}) {
        height: 140px;
        padding: 15px 0px 15px 20px;

        h1 {
            font-size: 25.5px;
        }

        p {
            font-size: 20px;
        }

        div {
            width: 40px;
            height: 40px;
            > svg {
                font-size: 18px;
            }
        }
    }

    @media (max-width: ${size.laptopXL2}) {
        height: 120px;
        padding: 20px 0px 15px 20px;

        h1 {
            font-size: 20px;
        }

        p {
            font-size: 14px;
        }

        div {
            width: 30px;
            height: 30px;
            > svg {
                font-size: 12px;
            }
        }
    }
    @media (max-width: ${size.laptopL}) {
        height: 110px;
        padding: 20px 0px 15px 20px;

        h1 {
            font-size: 18.5px;
        }

        p {
            font-size: 13px;
        }

        div {
            width: 30px;
            height: 30px;
            > svg {
                font-size: 12px;
            }
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        height: 110px;
        padding: 20px 0px 15px 20px;

        h1 {
            font-size: 17.5px;
        }

        p {
            font-size: 12px;
        }

        div {
            width: 25px;
            height: 25px;
            > svg {
                font-size: 11px;
            }
        }
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        height: 110px;
        padding: 20px 0px 15px 20px;

        h1 {
            font-size: 18px;
        }

        p {
            font-size: 13px;
        }

        div {
            width: 30px;
            height: 30px;
            > svg {
                font-size: 12px;
            }
        }
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        height: 100px;
        padding: 20px 0px 15px 20px;

        h1 {
            font-size: 15px;
        }

        p {
            font-size: 11px;
        }

        div {
            width: 27px;
            height: 27px;
            > svg {
                font-size: 11px;
            }
        }
    }

    @media (max-width: ${size.mobileL}) {
        height: 90px;
        padding: 20px 0px 15px 20px;

        h1 {
            font-size: 13.5px;
            width: fit-content;
        }

        p {
            font-size: 10px;
        }

        div {
            width: 20px;
            height: 20px;
            > svg {
                font-size: 9px;
            }
        }
    }

    @media (max-width: ${size.mobileLX}) {
        height: 90px;
        padding: 20px 0px 15px 20px;

        h1 {
            font-size: 11px;
            width: fit-content;
        }

        p {
            font-size: 8.5px;
        }

        div {
            width: 18px;
            height: 18px;
            > svg {
                font-size: 8px;
            }
        }
    }

    @media (max-width: ${size.mobileS}) {
        height: 90px;
        padding: 15px 0px 10px 15px;

        h1 {
            font-size: 10.5px;
            width: fit-content;
        }

        p {
            font-size: 8px;
        }

        div {
            width: 18px;
            height: 18px;
            > svg {
                font-size: 8px;
            }
        }
    }

 `