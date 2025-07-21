import styled from "styled-components";

export const Container = styled.div `
    background-color: white;
    width: auto;
    height: 120px;
    padding: 20px 0px 15px 20px ;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 5px;
    gap: 7px;
    white-space: nowrap;
    cursor: pointer;

    box-shadow: 1px 2px 5px rgba(0,0,0,0.25);

    &:hover {
        outline: 3px solid var(--Secundary-Color);
        transition: 90ms ease-in-out;
    }

    h1 {
    margin-top: 16px;
     font-size: 22px;
     font-weight: bolder;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     width: 250px;
     color: var(--Secundary-Color);
    }
    p { 
     font-size: 15px;
     color: var(--Secundary-Color);
     font-weight: bold;
    }
    div {
        cursor: pointer;
        position: absolute;
        background-color: var(--Background-Color);
        height: 30px;
        width: 30px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        top: 10px;
        right: 10px;
        > svg {
            color: var(--Secundary-Color);
            font-size: 16px;
        }
    }
`;