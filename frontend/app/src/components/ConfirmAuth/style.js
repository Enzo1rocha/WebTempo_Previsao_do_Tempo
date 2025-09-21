import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`

export const LabelForButton = styled.label `
    color: var(--Primary-Color);
    font-size: 30px;
    font-weight: 700;
`

export const Button = styled.button `
    width: 180px;
    height: 50px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    background-color: var(--Primary-Color);

    cursor: pointer;

    display:  flex;
    justify-content: center;
    align-items: center;

    &:active {
        cursor: wait;
    }
`

export const SignImage = styled.img `
    height: 70px;
`

