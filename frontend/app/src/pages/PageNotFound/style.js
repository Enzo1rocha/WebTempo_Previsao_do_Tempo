import styled from "styled-components";
import Button from "../../components/Button";


export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const content_text = styled.div `
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    bottom: 70px;
    `

export const Img = styled.img `
    height: 75vh;
    position: absolute;
    top: -20px;
`

export const Title = styled.h1 `
    text-align: center;
    color: var(--Secundary-Color);
    font-weight: 700;
    text-shadow: 1px 3px 4px rgba(0,0,0,0.3);
    font-size: 60px;
`

export const Subtitle = styled.p `
    font-size: 19px;
    text-align: center;
`

export const CustomButton = styled.a `
    width: 300px;
    margin: auto;
    padding: 10px;
    border-radius: 15px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.6px;
`


