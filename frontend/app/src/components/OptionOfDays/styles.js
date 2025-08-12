import styled from "styled-components";

export const Container = styled.div `
    background-color: white;
    border: 1px solid black;
    display: flex;
    padding: 10px;


    height: 150px;
    width: 200px;
`

export const Content = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: column;;
    width: 100%;
    height: 100%;
    
`

export const day_content = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    > p {
        font-size: 18px;
        font-weight: 800;
    }
`

export const value_content = styled.div `

`

export const conteudo_com_dados = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const valor_a_esquerda = styled.div `
    > p {
        font-size: 20px;
        font-weight: 600;
        color: var(--Secundary-Color);
    }
`

export const valor_a_direita = styled.div `

    > p {
        font-size: 27px;
        font-weight: 700;
    }
`

export const icone = styled.div `
    > img {
        height: 50px;
        color: var(--Secundary-Color);
    }
`

export const encher = styled.div `
`

export const valor = styled.div `
    height: ${(props) => props.altura_percentual};
`
