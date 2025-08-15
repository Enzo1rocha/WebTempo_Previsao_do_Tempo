import styled from "styled-components";

export const Container = styled.div `
    background-color: white;
    display: flex;
    padding: 8px 12px;

    border-radius: 12px;


    height: 130px;
    width: 180px;
`

export const Content = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
        font-weight: 700;
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

    display: grid;
    grid-template-rows: 35px;

    > p {
        font-size: 24px;
        font-weight: 700;
        color: var(--Secundary-Color);

        &.qualidade {
            font-size: 20px;
        }

        > span {
            font-size: 15px;
        }
    }
`

export const valor_a_direita = styled.div `

    display: grid;
    grid-template-rows: 38px;

    > p {
        font-size: 24px;
        font-weight: 700;
    }
`

export const icone = styled.div `
    > svg {
        font-size: 70px;
        color: var(--Secundary-Color);
    }
`

export const encher = styled.div `
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: gray;
    height: 75px;
    width: 26px;
    border-radius: 15px;
    background-color: var(--Secundary-Color-50-transparent);
`

export const valor = styled.div `
    background-color: var(--Secundary-Color);
    width: 100%;
    height: 50px;
    border-radius: 15px;
`