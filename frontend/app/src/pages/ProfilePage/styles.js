import styled from "styled-components";

export const Location_Page_Container =  styled.main `
    width: 100%;
    min-height: 100vh;
    max-width: 1600px;
    margin: auto;
    background-color: var(--Background-Color);
    padding-top: 50px;
    padding-bottom: 50px;
`

export const Container_User_Details = styled.div `
    width: 90%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > h1 {
        color: var(--Secundary-Color);
        font-size: 33px;
        font-family: var(--Primary-Font);
        font-weight: 600;
           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
`

export const content_user_details = styled.div `
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    padding: 30px 20px;
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
`

export const Container_Locations = styled.div `
    width: 90%;
    padding-top: 60px;
    margin: auto;
    height: 100%;
    display: flex;
    margin: auto;
    gap: 20px;
    flex-direction: column;
    white-space: nowrap;
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
`

export const container_favorite_locations = styled.div `
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 290px);
    gap: 5px;
`

export const Container_add_favorite_locations = styled.div ` // verificar width ao fazer responsividade
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
`