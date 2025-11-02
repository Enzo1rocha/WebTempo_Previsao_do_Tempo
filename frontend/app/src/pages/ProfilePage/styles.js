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
            font-size: 36px;
            font-weight: 700;
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
            font-size: 24px;
        }

        > div {
            margin-top: 10px;
        }

        > div > div > p {
            font-size: 24px;
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
            width: 300px;
            height: 60px;
            font-size: 21px;
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
        > svg {font-size: 23px;}
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
            font-size: 23px;
        }
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
            font-size: 36px;
        }

        > div {
            width: 360px;
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
            font-size: 36px;
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
    }
`