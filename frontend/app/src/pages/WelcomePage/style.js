import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 49% 51%;
    width: 100vw;
    height: 100vh;
`;

export const ContainerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 40px;
`

export const Content = styled.div `
    padding: 0px 0px;
    width: 40vw;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 60px;
    z-index: 1;
`

export const title_buttonContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 20px;
`

export const Title = styled.h1 `
    font-size: 70px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    font-weight: 700;
    letter-spacing: 0.1px;
    line-height: 58px;
    color: var(--Primary-Color);
`

export const SubTitle = styled.p `
    font-size: 18px;
    text-align: justify;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 25px;
    color: var(--Primary-Color);
`


export const ContainerWithImage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const ImageContent = styled.img `
    height: 95vh;
    z-index: 1;
    padding: 0px 20px 0px 0px; 
`

export const Button = styled.a `
    width:100%;  
    margin: auto;
    position: relative;
    padding: 12px;
    border-radius: 15px;
    font-size: 20px;
    cursor: pointer;
    bottom: 0px;
    text-decoration: none;
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.6px;
`
 