import styled from "styled-components";

export const Background = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: var(--Secundary-Color-Change-Boot-Location);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--Primary-Font);


    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`

export const Main = styled.div `
    background-color: var(--Background-Color);
    width: 100%;
    padding: 30px 30px;
    max-width: 500px;
    height: 500px;
    border: 7px solid var(--Secundary-Color);
    border-radius: 30px;
    position: relative;
`

export const SearchContent = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    > h1 {
        font-size: 27px;
        white-space: nowrap;
        text-align: center;
        color: var(--Secundary-Color);
    }

    > div {
        width: 90%;
        margin: auto;
    }
`

export const Return = styled.a`
    cursor: pointer;
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    font-weight:700;
    font-size: 18px;
    padding: 10px 100px;
    border-radius: 15px;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%)
`