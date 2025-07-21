import styled from "styled-components";


export const container = styled.div `
    width: 100vw;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    h1 {
        color: var(--Secundary-Color);
        font-family: var(--Primary-Font);
        font-size: 65px;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
        font-weight: 700;
    }

    p {
        font-size: 18px;
        color: var(--Primary-Color);
        font-family: var(--Primary-Font);
    }
`

export const container_with_buttons = styled.div `
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`

export const cancel_button = styled.button `
    color: var(--Secundary-Color);
    background-color: transparent;
    border: 3px solid var(--Secundary-Color);
    font-family: var(--Primary-Font);
    font-weight: 800;
    font-size: 18px;
    min-width: 200px;
    padding: 7px 2px;
    border-radius: 10px;
    cursor: pointer;
    `

export const confirm_button = styled.button `
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    font-family: var(--Primary-Font);
    font-weight: 800;
    font-size: 18px;
    min-width: 200px;
    padding: 7px 2px;
    border-radius: 10px;
    cursor: pointer;
`