import styled from "styled-components";


export const Container = styled.div `
    background-color: var(--Background-Color);
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 1600px;
    display: grid;
    grid-template-columns: 59% 41%;
`

export const ContainerWithForm = styled.div `
    width: auto;
    min-height: 100vh;
    background-color: var(--Background-Color);
    padding: 50px 70px;
`

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 50px;
`

export const Container_FormTitle_Alert = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Alert = styled.p `
    font-size: 14px;
    padding: 5px;
    font-weight: 600;
    text-align: start;
    color: #FE3234;
    `

export const FormTitle = styled.h1 `
    color: var(--Primary-Color);
    line-height: 50px;
    letter-spacing: 0.4px;
    font-weight: 700;
    font-size: 50px;
    gap: 10px;
    margin-top: 20px;
`

export const ContainerWithInputs = styled.div `
    display: flex;
    flex-direction: column;
    gap: 15px;
` 











export const ContainerWithImage = styled.div `
    width: auto;
    min-height: 100vh;
    background-color: var(--Primary-Color);
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const PictureContainer = styled.picture `
    width: auto;
    height: 80vh;
    margin-right: ${props => props.$isLogin ? '0px' : '0px'};
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const SignUpImage = styled.img `
    height: 80%;
` 