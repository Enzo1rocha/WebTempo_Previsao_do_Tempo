import styled from "styled-components";

export const Location_Page_Container =  styled.main `
    width: 100%;
    min-height: 100vh;
    background-color: var(--Background-Color);
`

export const Container_Locations = styled.div `
    width: 100%;
    margin: auto;
    height: 100%;
    display: flex;
    padding: 50px 80px 50px 80px;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    white-space: nowrap;
`

export const Container_Boot_Location = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;

    > h1 {
        color: var(--Secundary-Color);
        font-size: 35px;
        font-family: var(--Primary-Font);
        font-weight: 700;
           text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    }

    > div {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4,1fr);
        gap: 5px;
    }

`

export const Container_Favorite_Locations = styled.div `  
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;

    > h1 {
        color: var(--Secundary-Color);
        font-size: 35px;
        font-family: var(--Primary-Font);
        font-weight: 700;
           text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    }
`

export const container_favorite_locations = styled.div `
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4,1fr);
    gap: 5px;
`

export const Container_add_favorite_locations = styled.div ` // verificar width ao fazer responsividade
    width: auto;
    height: 120px;
    background-color: var(--Secundary-Color);
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        outline: 3px solid var(--Secundary-Color);
        transition: 90ms ease-in-out;
        border: 2px solid var(--Background-Color);
    }

    svg {
        font-size: 40px;
        color: var(--Background-Color);
    }
`