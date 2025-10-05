import styled from "styled-components";

export const Container = styled.div `
    font-family: var(--Primary-Font);
    background-color: var(--Background-Color);
    min-height: 100vh;
    max-width: 1600px;
    margin: auto;
`;

export const Container_Search = styled.div `
    background-color: var(--Background-Color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: auto;
    top: 100px;
    position: relative;
    
    > h1 {
        align-self: flex-start;
        font-size: 24px;
        font-weight: 700;
        color: var(--Secundary-Color);
    }
`;