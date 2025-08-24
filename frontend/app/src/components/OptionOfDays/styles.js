import styled from "styled-components";

export const Container = styled.div `
    background-color: white;
    display: flex;
    padding: 8px 12px;

    border-radius: 12px;
    cursor: pointer;


    height: 130px;
    width: 180px;
    transition-duration: 300ms;

    &:hover {
        box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.4);
    }
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

        &.uv {
            font-size: 19px;
        }

        &.precipitação {
            font-size: 18px;
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
    align-items: flex-end;
    justify-content: center;
    background-color: gray;
    height: 75px;
    width: 26px;
    border-radius: 15px;
    background-color: var(--Secundary-Color-50-transparent);
`

export const valor = styled.div `
    background-color: var(--Secundary-Color);
    width: 100%;
    height: ${props => props.altura_percentual}%;
    border-radius: 15px 15px 15px 15px;
`