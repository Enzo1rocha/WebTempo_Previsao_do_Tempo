import styled from "styled-components";
import { device, size } from "../../styles/breakpoints";

export const Location_Page_Container =  styled.main `
    width: 100%;
    min-height: 100vh;
    margin: auto;
    background-color: var(--Background-Color);
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        min-height: fit-content;
        height: 1200px;
    }
`

export const Container_User_Details = styled.div `
    width: 90%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: -20px;

    > h1 {
        color: var(--Secundary-Color);
        font-size: 33px;
        font-family: var(--Primary-Font);
        font-weight: 600;
           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: ${size.desktop}) {
        > h1 {
            font-size: 45px;
            font-weight: 700;
        }
    }

    @media (max-width: ${size.laptopXL}) {
        > h1 {
            font-size: 40px;
            font-weight: 700;
        }
    }

    @media (max-width: ${size.laptopXL2}) {
        > h1 {
            font-size: 30px;
            font-weight: 700;
        }
    }

    @media (max-width: ${size.laptopL}) {
        > h1 {
            font-size: 24px;
            font-weight: 700;
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        > h1 {
            font-size: 22px;
            font-weight: 700;
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        margin-top: 30px;
        margin-bottom: 0px;
        > h1 {
            font-size: 26px;
            font-weight: 700;
        }
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        margin-top: 0px;
        > h1 {
            font-size: 23px;
            text-align: center;
            margin-bottom: 5px;
        }
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        margin-top: 0px;
        > h1 {
            font-size: 21.5px;
            text-align: center;
            margin-bottom: 5px;
        }
    }
`

export const content_user_details = styled.div `
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    padding: 25px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.25);

    > p {
        font-size: 16px;
        color: var(--Secundary-Color);
        font-weight: 600;
        font-family: var(--Primary-Font);
    } > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    } > div > div > p > strong {
        color: var(--Secundary-Color);
    }
    
    @media (max-width: ${size.desktop}) {
        padding: 45px 20px;;
        > p {
            font-size: 26px;
        }
        > div { margin-top: 15px}
        > div > div > p {
            font-size: 26px;
        }
    }

    @media (max-width: ${size.laptopXL}) {
        padding: 30px 25px;

        > p {
            font-size: 24px;
        }

        > div {
            margin-top: 10px;
        }

        > div > div > p {
            font-size: 24px;
        }
    }
    @media (max-width: ${size.laptopXL2}) {
        padding: 25px 20px;

        > p {
            font-size: 18px;
        }

        > div {
            margin-top: 10px;
        }

        > div > div > p {
            font-size: 17px;
        }
    }
    @media (max-width: ${size.laptopL}) {
        padding: 25px 20px;

        > p {
            font-size: 14.5px;
        }

        > div {
            margin-top: 10px;
        }

        > div > div > p {
            font-size: 12.5px;
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        padding: 20px 15px;

        > p {
            font-size: 12.5px;
        }

        > div {
            margin-top: 10px;
        }

        > div > div > p {
            font-size: 12px;
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        padding: 20px 15px;

        > p {
            font-size: 15.5px;
        }

        > div {
            margin-top: 10px;
        }

        > div > div > p {
            font-size: 15px;
        }
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        > p {
            font-size: 13px;
        }

        > div {
            margin-top: 10px;
        }

        > div > div > p {
            font-size: 13px;
        }
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        > p {
            font-size: 10.5px;
        }

        > div {
            margin-top: 10px;
        }

        > div > div > p {
            font-size: 10px;
        }
    }
    `

export const container_buttons = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
    > div {
        width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        border-radius: 5px;
    }

    @media (max-width: ${size.desktop}) {
        gap: 20px;
        > div {
            width: 350px;
            height: 60px;
            font-size: 23px;
        }
    }

    @media (max-width: ${size.laptopXL}) {
        gap: 15px;

        > div {
            width: 320px;
            height: 60px;
            font-size: 22px;
        }
    }

    @media (max-width: ${size.laptopXL2}) {
        gap: 15px;

        > div {
            width: 220px;
            height: 50px;
            font-size: 14px;
        }
    }

    @media (max-width: ${size.laptopL}) {
        gap: 10px;

        > div {
            width: 200px;
            height: 45.5px;
            font-size: 12.5px;
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        gap: 10px;

        > div {
            width: 170px;
            height: 40px;
            font-size: 11px;
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        gap: 10px;

        > div {
            width: 190px;
            height: 45px;
            font-size: 12.5px;
        }
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        > div {
            width: 150px;
            height: 40px;
            font-size: 10.5px;
        }
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        > div {
            width: 110px;
            height: 30px;
            font-size: 8px;
        }
    }
       
`

export const change_password = styled.div `
    background-color: #3982D2;
    padding: 10px;
    cursor: pointer;
    > a {
        text-decoration: none;
        color: white;
    }
    position: relative;
    
    > svg {
        position: absolute;
        right: 15px;
        color: white;
        font-size: 20px;
    }

    @media (max-width: ${size.desktop}) {

        > svg {
            font-size: 28px;
        }
    }

    @media (max-width: ${size.laptopXL}) {
        > svg {font-size: 24px;}
    }

    @media (max-width: ${size.laptopXL2}) {
        > svg {font-size: 16px;}
    }

    @media (max-width: ${size.laptopL}) {
        > svg {font-size: 14px;}
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        > svg {font-size: 13px;}
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        > svg {font-size: 14px;}
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        > svg {font-size: 12px;}
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        > svg {font-size: 8px;  right: 10px;}
    }
`

export const logout = styled.div `
    background-color: transparent;
    padding: 10px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.35);
    cursor: pointer;
    > a {
        text-decoration: none;
        color: #EB090B;
    }

    position: relative;

    > svg {
        position: absolute;
        right: 15px;
        font-size: 20px;
        color: #EB090B;
    }

    @media (max-width: ${size.desktop}) {
        > svg {
            font-size: 28px;
        }
    }

    @media (max-width: ${size.laptopXL}) {
        > svg {
            font-size: 24px;
        }
    }

    @media (max-width: ${size.laptopXL2}) {
        > svg {
            font-size: 16px;
        }
    }

    @media (max-width: ${size.laptopL}) {
        > svg {font-size: 14px;}
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        > svg {font-size: 13px;}
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        > svg {font-size: 14px;}
    }

     @media (max-width: ${size.tablet}) and (orientation: portrait) {
        > svg {font-size: 12px;}
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        > svg {font-size: 8px;  right: 10px;}
    }
`

export const Container_Locations = styled.div `
    width: 90%;
    padding-top: 60px;
    margin: auto;
    height: 100%;
    display: flex;
    margin: auto;
    gap: 40px;
    flex-direction: column;
    white-space: nowrap;

    @media (max-width: ${size.desktop}) {
        gap: 80px;
    }

    @media (max-width: ${size.laptopXL}) {
        gap: 60px;
    }

    @media (max-width: ${size.laptopXL2}) {
        gap: 40px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        gap: 50px;
    }
`

export const Container_Boot_Location = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;

    > h1 {
        color: var(--Secundary-Color);
        font-size: 33px;
        font-family: var(--Primary-Font);
        font-weight: 600;
           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    > div {
        width: 310px;
    }

    @media (max-width: ${size.desktop}) {
        gap: 20px;
        > h1 {
            font-size: 40px;
            font-weight: 700;
        }

        > div {
            width: 400px;
        }
    }

    @media (max-width: ${size.laptopXL}){
        gap: 20px;
        > h1 {
            font-size: 35px;
        }

        > div {
            width: 360px;
        }

    }

    @media (max-width: ${size.laptopXL2}){
        gap: 20px;
        > h1 {
            font-size: 30px;
        }

        > div {
            width: 330px;
        }

    }

    @media (max-width: ${size.laptopL}){
        gap: 20px;
        > h1 {
            font-size: 24px;
        }

        > div {
            width: 300px;
        }

    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        gap: 20px;
        > h1 {
            font-size: 22px;
        }

        > div {
            width: 320px;
        }

    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        gap: 20px;
        > h1 {
            font-size: 26px;
        }

        > div {
            width: 320px;
        }

    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        > h1 {
            font-size: 23px;
            text-align: center;
        }

        > div {
            font-size: 290px;
            margin: auto;
        }
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        > h1 {
            font-size: 21.5px;
            text-align: center;
        }

        > div {
            font-size: 240px;
            margin: auto;
        }
    }

`

export const Container_Favorite_Locations = styled.div `  
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;

    > h1 {
        color: var(--Secundary-Color);
        font-size: 33px;
        font-family: var(--Primary-Font);
        font-weight: 600;
           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: ${size.desktop}) {
        gap: 20px;
        > h1 {
            font-size: 40px;
            font-weight: 700;
        }
    }

    @media (max-width: ${size.laptopXL}) {
        gap: 20px;
        > h1 {
            font-size: 35px;
        }
    }

    @media (max-width: ${size.laptopXL2}) {
        gap: 20px;
        > h1 {
            font-size: 30px;
        }
    }

    @media (max-width: ${size.laptopL}) {
        gap: 20px;
        > h1 {
            font-size: 24px;
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        gap: 20px;
        > h1 {
            font-size: 22px;
        }
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        gap: 20px;
        > h1 {
            font-size: 26px;
        }
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        gap: 20px;
        > h1 {
            font-size: 23px;
            text-align: center;
        }
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        gap: 20px;
        > h1 {
            font-size: 21.5px;
            text-align: center;
        }
    }
`

export const container_favorite_locations = styled.div `
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 290px);
    gap: 5px;

    @media (max-width: ${size.desktop}) {
        grid-template-columns: repeat(4, 400px);
    }

    @media (max-width: ${size.laptopXL}) {
        grid-template-columns: repeat(4, 360px);
    }

    @media (max-width: ${size.laptopXL2}) {
        grid-template-columns: repeat(4, 330px);
    }

    @media (max-width: ${size.laptopL}) {
        grid-template-columns: repeat(3, 300px);
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        grid-template-columns: repeat(2, 320px);
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        grid-template-columns: repeat(2, 320px);
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        grid-template-columns: repeat(2, 290px);
        justify-content: center;
        align-items: center;
    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        grid-template-columns: repeat(2, 240px);
        justify-content: center;
        align-items: center;
    }
`

export const Container_add_favorite_locations = styled.div `
    width: auto;
    height: 120px;
    background-color: white;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;

    box-shadow: 1px 2px 4px rgba(0,0,0,0.25);

    &:hover {
        outline: 3px solid var(--Secundary-Color);
        transition: 90ms ease-in-out;
    }

    svg {
        font-size: 40px;
        color: var(--Secundary-Color);
    }

    @media (max-width: ${size.desktop}) {
        width: 400px;
        height: 140px;
    }

    @media (max-width: ${size.laptopXL}) {
        width: 360px;
    }

    @media (max-width: ${size.laptopXL2}) {
        width: 330px;
        height: 120px;
    }
    @media (max-width: ${size.laptopL}) {
        width: 300px;
        height: 110px;
    }

    @media (max-width: ${size.laptop}) and (orientation: landscape) {
        width: 320px;
        height: 110px;
    }

    @media (max-width: ${size.laptop}) and (orientation: portrait) {
        width: 320px;
        height: 110px;
    }

    @media (max-width: ${size.tablet}) and (orientation: portrait) {
        width: 290px;
        height: 110px;

        > svg {
            font-size: 35px;
        }

    }

    @media (max-width: ${size.tabletS}) and (orientation: portrait) {
        width: 240px;
        height: 100px;

        > svg {
            font-size: 35px;
        }

    }
`