import styled from "styled-components";
import BackToLink from "../../components/BackToLink";

export const container = styled.div `
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    align-items: center;
`

export const container_with_image = styled.div `
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const image = styled.img `
    z-index: 1;
    width: auto;
    height: 85vh;
`

export const container_with_form = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const change_password_form = styled.form `
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`

export const h1_form = styled.h1 `
    font-size: 50px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 55px;
    color: var(--Primary-Color);
    white-space: nowrap;
    display: flex;
    align-self: flex-start;
`

export const error_message = styled.p `
    font-weight: 600;
    color: var(--Error-Color);
    font-size: 14px;
    align-self: flex-start;
`

export const input_container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 22px;
`