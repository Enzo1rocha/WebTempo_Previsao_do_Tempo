import styled from "styled-components";

export const conteudo = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: white;
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
    transition-duration: 300ms;

    &:hover {
        box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
    }
`

export const titulo = styled.h2 `
    text-align: left;
    font-size: 20px;
    font-weight: 700;
`

export const div_icone_valor = styled.div `
    display: grid;
    grid-template-columns: 16% 0%;
    align-items: center;

    > svg {
        font-size: 43px;
    }

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 20px;
        gap: 2px;

        > h2 {
            font-size: 40px;
            font-weight: 600;
        }
        
        > h3 {
            font-size: 20px;
            font-weight: 700;
        }
    }
`

export const sub = styled.p `
    font-size: 14px;
`