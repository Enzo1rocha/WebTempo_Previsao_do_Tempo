import styled from "styled-components";
import { size } from "../../styles/breakpoints";

export const conteudo_inteiro = styled.div `
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Background-Color);
`

export const Main = styled.main `
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: auto;

    background-color: var(--Background-Color);
    color: var(--Secundary-Color);
    padding: 40px;

    @media (max-width: ${size.laptopL}) {
        padding: 40px 20px 40px 40px;
    }

    @media (max-width: ${size.tablet}) {
        padding: 40px 20px 40px 40px;
    }

    @media (max-width: ${size.tabletS}) {
        padding: 40px 20px 40px 20px;
    }

    @media (max-width: ${size.mobileL}) {
        padding: 30px 15px 30px 15px;
    }
`

export const textSection = styled.section`
    display: flex;
    flex-direction: column;
`

export const localName = styled.div `
    display: flex;
    justify-content: left;
    flex-direction: row;
    gap: 20px;
    font-size: 21px;
    font-weight: 700;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    > div > p {
        font-size: 18px;
    }

    @media (max-width: ${size.laptop}) {
        font-size: 19px;

        > div > p {
            font-size: 16.5px;
        }
    }

    @media (max-width: ${size.tablet}) {
        font-size: 17px;

        > div > p {
            font-size: 15px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        font-size: 15px;

        > div > p {
            font-size: 13px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        font-size: 13px;

        > div > p {
            font-size: 11.5px;
        }
    }

`

export const temperatureAndIconDiv = styled.div `
    display: flex;
    gap: 85px;
    align-items: center;
    flex-direction: row;

    @media (max-width: ${size.tablet}) {
        gap: 65px;
    }

    @media (max-width: ${size.tabletS}) {
        gap: 55px;
    }

    @media (max-width: ${size.mobileL}) {
        gap: 40px;
    }
`

export const TemperatureDiv = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    > div {

        display: flex;
        justify-content: center;
        align-items: center;

        > p {
            font-size: 100px;
            font-weight: 400;
            position: relative;

            > span {
                
                position: absolute;
                font-size: 50px;
                top: 35px;
                font-weight: 600;
                
            }
        }
    }

    > svg {
        color: var(--Secundary-Color);
        font-size: 100px;
    }

    @media (max-width: ${size.laptop}) {
        > div {
            > p {
                font-size: 85px;
                > span {
                    font-size: 45px;
                }
            }
        }
    }

    @media (max-width: ${size.tablet}) {
        > div {
            > p {
                font-size: 65px;
                > span {
                    font-size: 25px;
                }
            }
        }

        > svg {
            font-size: 68px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        > div {
            > p {
                font-size: 45px;

                > span {
                    font-size: 19px;
                    top: 10px;
                }
            }
        }
    }

    @media (max-width: ${size.mobileL}) {
        > div {
            > p {
                font-size: 35px;

                > span {
                    font-size: 16px;
                }
            }
        }
    }

`

export const TemperatureText = styled.div `

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    line-height: 40px;
    

    > h2 {
        font-size: 39px;
    }

    > h3 {
        font-size: 25px;
    }

    @media (max-width: ${size.laptop}) {
        > h2 {
            font-size: 33px;
        }

        > h3 {
            font-size: 23px;
        }
    }

    @media (max-width: ${size.tablet}) {
        > h2 {
            font-size: 25px;
        }

        > h3 {
            font-size: 17.5px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        > h2 {
            font-size: 19px;
        }

        > h3 {
            font-size: 13px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        > h2 {
            font-size: 15px;
            margin-bottom: -5px;
        }
        > h3 {
            margin-top: -5px;
            font-size: 11px;
        }
    }

`

export const temperatureSymbol = styled.span `
`

export const summaryOfTheDayText = styled.div `
    display: flex;
    align-items: center;
    justify-content: left;

    margin-top: -10px;

    > p {
        font-size: 22px;
        color: var(--Secundary-Color);
        font-weight: 700;
    }

    @media (max-width: ${size.laptop}) {
        > p {
            font-size: 20px;
        }
    }

    @media (max-width: ${size.tablet}) {
        > p {
            margin-top: 8px;
            font-size: 16.5px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        > p {
            margin-top: 10px;
            font-size: 13px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        > p {
            margin-top: 20px;
            font-size: 11.5px;
        }
    }


`

export const summaryOfTheDay = styled.nav `
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    margin-top: 10px;

    gap: 25px;

    > div {
        display: flex;
        flex-direction: column;

        > p {
            font-size: 18px;
            font-weight: 00;
            
            display: flex;
            align-items: center;

            > svg {
                font-size: 22px;
                margin-left: 5px;
            }
        }
    }

    @media (max-width: ${size.laptop}) {
        div > p {
            font-size: 15.5px;
        }
    }

    @media (max-width: ${size.tablet}) {
        div > p {
            font-size: 13.8px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        div > p {
            font-size: 10.5px;
            white-space: nowrap;
        }
    }

    @media (max-width: ${size.mobileL}) {
        gap: 15px;
        div > p {
            font-size: 9.5px;
            > svg {
                font-size: 12px;
            }
        }
    }
`




export const SectionForGraph = styled.section `
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 25px;

    @media (max-width: ${size.tabletS}) {
        gap: 20px;
    }

    @media (max-width: ${size.mobileL}) {
        gap: 18px;
    }

`

export const OptionsForGraphDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    white-space: nowrap;
    gap: 30px;

    > p {
        font-size: 22px;
        font-weight: 700;
    }

    @media (max-width: ${size.laptop}) {
        > p {
            font-size: 20px;
        }
    }

    @media (max-width: ${size.tablet}) {
        gap: 20px;
        > p {
            font-size: 16px;
        }
    }

    @media (max-width: ${size.tabletS}) {
        gap: 15px;
    }

    @media (max-width: ${size.mobileL}) {
        gap: 10px;
       > p {
        font-size: 13px;
       } 
    }
`

export const OptionsForGraph = styled.nav `
    display: flex;
    flex-direction: row;
    gap: 15px;

    @media (max-width: ${size.laptop}) {
        gap: 8px;
    }

    @media (max-width: ${size.mobileL}) {
        gap: 6.5px;
    }
`

export const OptionContent = styled.button `
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    height: 38px;
    padding: 0px 15px;
    white-space: nowrap;

    font-size: 17px;
    font-weight: 700;
    border-radius: 15px;
    border: none;

    @media (max-width: ${size.laptop}) {
        font-size: 15px;
    }

    @media (max-width: ${size.tablet}) {
        height: 38px;
        padding: 0px 10px;
        font-size: 12px;
    }

    @media (max-width: ${size.tabletS}) {
        height: 36px;
        padding: 0px 10px;
        font-size: 10px;
    }

    @media (max-width: ${size.mobileL}) {
        height: 32px;
        padding: 0px 10px;
        font-size: 9px;
    }

`

export const HiddenOptionsContent = styled.button `
    cursor: pointer;
    height: 38px;
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    padding: 0px 13px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;

    > svg {
        font-size: 33px;
    }

    border: none;
    position: relative;

    @media (max-width: ${size.laptop}) {
        > svg {
            font-size: 30px;
        }
    }

    @media (max-width: ${size.tablet}) {
        > svg {font-size: 25px;}
    }

    @media (max-width: ${size.mobileL}) {
        height: 32px;
        > svg {
            font-size: 20px;
        }
    }
`

export const hiddenOptions = styled.div `
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translate(-50%, 25px);
    background-color: var(--Secundary-Color-50-transparent);
    backdrop-filter: blur(10px);
    color: var(--Background-Color);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 10px;
    z-index: 1000;

    > div {
        cursor: pointer;
        > p {
            font-size: 17px;
            font-weight: 700;
        }
    }

    @media (max-width: ${size.laptop}) {
        > div > p {
            font-size: 15px;
        }
    }
    
`

export const visãoGeralDias = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px;
    
`

export const Grafico = styled.div `
    margin-top: 40px;
    position: relative;
    height: 280px;
    width: 1240px;

    @media (max-width: ${size.laptopL}) {
        width: 1190px;
    }

    @media (max-width: 1230px) {
        width: 1030px;
    }

    @media (max-width: ${size.laptop}) {
        width: 920px;
    }

    @media (max-width: ${size.tablet}) {
        width: 690px;
    }

    @media (max-width: ${size.tabletS}) {
        width: 500px;
    }

    @media (max-width: ${size.mobileL}) {
        width: 380px;
    }
`

export const DetalhesDoDia = styled.div `
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    gap: 20px;

    @media (max-width: ${size.laptopL}) {
        grid-template-columns: repeat(3, 380px);     
    }

    @media (max-width: 1230px) {
        grid-template-columns: repeat(3, 325px);
    }

    @media (max-width: ${size.laptop}) {
        grid-template-columns: repeat(3, 300px);
    }

    @media (max-width: ${size.tablet}) {
        grid-template-columns: repeat(2, 335px);
    }

    @media (max-width: ${size.tabletS}) {
        grid-template-columns: repeat(2, 240px);
    }

    @media (max-width: ${size.mobileL}) {
        grid-template-columns: repeat(1, 340px);
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 20px;
    }

`

