import styled from "styled-components";

export const Button = styled.button `
    background-color: var(--Secundary-Color);
    width: auto;
    padding: 10px 0px;
    font-size: 20px;
    color: var(--Background-Color);
    font-weight: 700;
    letter-spacing: 0.6px;
    
    border-radius: 15px;

    transition: 0.2s;

    &:hover {
        background-color: var(--Primary-Color);
    }

    &:active {
        cursor: wait;
    }

`