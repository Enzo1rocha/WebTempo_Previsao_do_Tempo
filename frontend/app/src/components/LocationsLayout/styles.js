import styled from "styled-components";

export const Container = styled.div `
    background-color: var(--Secundary-Color);
    width: auto;
    height: 120px;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    gap: 7px;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        outline: 3px solid var(--Secundary-Color);
        transition: 90ms ease-in-out;
        border: 2px solid var(--Background-Color);
    }

    h1 {
     font-size: 27px;
     font-weight: bolder;
     color: var(--Background-Color);
    }
    p { 
     font-size: 16px;
     color: var(--Background-Color);
     font-weight: bolder;
     text-align: center;
    }
    div {
        position:  absolute;
        cursor: pointer;
        right: 10px;
        top: 10px;
        > svg {
            color: var(--Background-Color);
            font-size: 26px;
        }
    }
`;