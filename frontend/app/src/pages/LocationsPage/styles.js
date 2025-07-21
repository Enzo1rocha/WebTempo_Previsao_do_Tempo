import styled from "styled-components";

export const Location_Page_Container =  styled.main `
    width: 100%;
    min-height: 100vh;
    max-width: 1600px;
    margin: auto;
    background-color: var(--Background-Color);
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
           text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
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
           text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
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