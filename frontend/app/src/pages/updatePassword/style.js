import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 56% 32%;
    width: 100vw;
    height: 100vh;
    align-items: center;
`

export const ContainerWithImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
    z-index: 1;
`

export const ImageContent = styled.img`
    width: auto;
    height: 72vh;
`

export const container_with_form = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const FormPasswordUpdate = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 35px;
`

export const FormTitle = styled.h1`
    font-size: 50px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.13);
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 48px;
    white-space: nowrap;
    color: var(--Primary-Color);
    display: flex;
    align-self: flex-start;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
