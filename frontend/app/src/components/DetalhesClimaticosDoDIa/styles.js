import styled from "styled-components";
import { size } from "../../styles/breakpoints";

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

    @media (max-width: ${size.laptopL}) {
        font-size: 19px;
    }

    @media (max-width: 1230px) {
        font-size: 17px;
    }

    @media (max-width: ${size.laptop}) {
        font-size: 16px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 16.5px;
    }

    @media (max-width: ${size.tabletS}) {
        font-size: 13.5px;
    }

    @media (max-width: ${size.mobileL}) {
        font-size: 14px;
    }

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

    @media (max-width: 1230px) {
        > svg {
            font-size: 39px;
        }

        > div {
            > h2 {
                font-size: 35px;
            }

            > h3 {
                font-size: 18px;
            }
        }
    }

    @media (max-width: ${size.laptop}) {
        > svg {
            font-size: 36px;
        }

        > div {
            > h2 {
                font-size: 31px;
            }

            > h3 {
                font-size: 16px;
            }
        }
    }

    @media (max-width: ${size.tablet}) {
        > svg {
            font-size: 36px;
        }

        > div {
            > h2 {
                font-size: 30px;
            }

            > h3 {
                font-size: 16px;
            }
        }
    }

    @media (max-width: ${size.tabletS}) {
        grid-template-columns: 18% 0%;
        > svg {
            font-size: 30px;
        }

        > div {
            > h2 {
                font-size: 25px;
            }

            > h3 {
                font-size: 14px;
            }
        }
    }

    @media (max-width: ${size.mobileL}) {
        grid-template-columns: 13% 0%;
        > svg {
            font-size: 31.5px;
        }

        > div {
            > h2 {
                font-size: 28px;
            }

            > h3 {
                font-size: 15px;
            }
        }
    }
`

export const sub = styled.p `
    font-size: 14px;

    @media (max-width: ${size.laptopL}) {
        font-size: 13.5px;
    }

    @media (max-width: 1230px) {
        font-size: 12.5px;
    }

    @media (max-width: ${size.laptop}) {
        font-size: 11.2px;
    }

    @media (max-width: ${size.tablet}) {
        font-size: 12px;
    }

    @media (max-width: ${size.tabletS}) {
        font-size: 10px;
    }

    @media (max-width: ${size.mobileL}) {
        font-size: 11.5px;
    }
`