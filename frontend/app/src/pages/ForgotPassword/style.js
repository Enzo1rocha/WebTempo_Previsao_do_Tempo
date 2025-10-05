import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-columns: 53% 47%;
    min-height: 100vh;
    max-width: 100vw;
    
    background-color: transparent;
`

export const ContainerWithImage = styled.picture `
    width: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const image = styled.img `
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 45px;
    z-index: 1;
`

export const containerInput_Button = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;
    width: auto;
`

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 60px;
    width: 500px;
    padding: 50px 20px;
    z-index: 1;

    justify-content: center;
    margin-bottom: 40px;
`


export const Title = styled.h1 `
    font-size: 55px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    color: var(--Primary-Color);
    font-weight: 700;
    letter-spacing: normal;
    line-height: 55px;
`

export const BackTo = styled.a `
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--Secundary-Color);

    &:hover {
        text-decoration: underline;
    }
`

export const button_clicked_notification = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    flex-direction: column;
    text-align: center;

    > p {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        margin-bottom: 20px;
        font-size: 18px;
        color: var(--Text-Color);
        font-weight: 500;
        line-height: 1.4;
    }

    > button {
        background-color: var(--Primary-Color);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
        &:hover {
            background-color: var(--Secundary-Color);
        }
    }
    `