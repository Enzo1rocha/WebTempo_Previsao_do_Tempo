import styled from "styled-components";
import { size } from "../../styles/breakpoints";

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

    @media (max-width: ${size.laptop})  {
        height: 120px;
        width: 160px;
    }

    @media (max-width: ${size.tablet}) {
        height: 105px;
        width: 160px;
    }

    @media (max-width: ${size.tabletS}) {
        height: 95px;
        width: 115px;
    }

    @media (max-width: ${size.mobileL}) {
        height: 82px;
        width: 88px;        
    }

    @media (max-width: 406px) {
        height: 76px;
        width: 82px;
        padding: 7.5px 11px;
    }

    @media (max-width: ${size.mobileLX}) {
        height: 71px;
        width: 76px;
    }

    @media (max-width: 345px) {
        height: 68px;
        width: 72px;
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

    @media (max-width: ${size.laptop}) {
        > p {
            font-size: 16px;
        }
    }

    @media (max-width: ${size.tablet}) {
        > p {
            font-size: 13.5px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        > p {
            font-size: 11.5px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        > p {
            font-size: 9px;
        }
    }

    @media (max-width: 406px) {
        > p {
            font-size: 8.5px;
        }
    }

    @media (max-width: ${size.mobileLX}) {
       > p {
        font-size: 7.8px;
       }     
    }

    @media (max-width: 345px) {
        > p {
            font-size: 7.1px;
        }
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
            font-size: 24px;
        }
    }

    @media (max-width: ${size.laptop}) {
        > p {
            font-size: 21.5px;

            &.uv {
                font-size: 17px;
            }

            &.precipitação {
                font-size: 16px;
            }

            > span {
                font-size: 18px;
            }
        }
        }

    @media (max-width: ${size.tablet}) {
        > p {
            font-size: 18px;

            &.uv {
                font-size: 15px;
            }

            &.precipitação {
                font-size: 14px;
            }



            > span {
                font-size: 15px;
            }
        }
    }

    @media (max-width: ${size.tabletS}) {
        grid-template-rows: 28px;
        > p {
            font-size: 16px;

            &.uv {
                font-size: 12px;
            }

            &.precipitação {
                font-size: 11px;
            }

            > span {
                font-size: 11.5px;
            }
        }
    }

    @media (max-width: ${size.mobileL}) {
        grid-template-rows: 25px;

        > p {
            font-size: 11.5px;

            &.uv {
                font-size: 9px;
            }

            &.precipitação {
                font-size: 8.2px;
            }

            > span {
                font-size: 8px;
            }
        }
    }

    @media (max-width: 406px) {
        grid-template-rows: 24px;
      > p {
            font-size: 10px;

            &.uv {
                font-size: 8.2px;
            }

            &.precipitação {
                font-size: 7.6px;
            }

            > span {
                font-size: 8px;
            }
        }
    }


    @media (max-width: ${size.mobileLX}) {
    grid-template-rows: 21px;
       > p {
        font-size: 9.5px;

        &.uv {
            font-size: 7.6px;
        }

        &.precipitação {
            font-size: 7px;
        }

        > span {
            font-size: 7.3px;
        }
       }     
    }

    @media (max-width: 345px) {
        grid-template-rows: 20px;

        > p {
            font-size: 9.1px;
            &.uv {
                font-size: 7.8px;
            }

            &.precipitação {
                font-size: 6.5px;
            }

            > span {
                font-size: 8px;
            }
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

    @media (max-width: ${size.laptop}) {
        > p {
            font-size: 19px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        grid-template-rows: 28px;
        > p {
            font-size: 16px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        grid-template-rows: 25px;

        > p {
            font-size: 12px;
        }
    }

    @media (max-width: 406px) {
        grid-template-rows: 22px;

        > p {
            font-size: 10.5px;
        }
    }

    @media (max-width: ${size.mobileLX}) {
        > p {
            font-size: 9.5px;
        }        
    }

    @media (max-width: 345px) {
        > p {
            font-size: 9.3px;
        }
    }
`

export const icone = styled.div `
    > svg {
        font-size: 70px;
        color: var(--Secundary-Color);
    }

    @media (max-width: ${size.tablet}) {
        > svg {
            font-size: 58px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        > svg {
            font-size: 48px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        > svg {
            font-size: 37px;
        }
    }

    @media (max-width: 406px) {
        > svg {
            font-size: 33px;
        }
    }

    @media (max-width: ${size.mobileLX}) {
        > svg {
            font-size: 30px;
        }    
    }

    @media (max-width: 345px) {
        > svg {
            font-size: 29px;
        }
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

    @media (max-width: ${size.tabletS}) {
        height: 50px;
        width: 18px;
    }

    @media (max-width: ${size.mobileL}) {
        width: 12px;
        height: 38px;
    }

    @media (max-width: 406px) {
        width: 11px;
        height: 34px;
    }
`

export const valor = styled.div `
    background-color: var(--Secundary-Color);
    width: 100%;
    height: ${props => props.altura_percentual}%;
    border-radius: 15px 15px 15px 15px;
`