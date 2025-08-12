import styled from "styled-components";

export const Main = styled.main `
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: auto;

    color: var(--Secundary-Color);
    padding: 40px;
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
    font-size: 22px;
    font-weight: 700;
`

export const temperatureAndIconDiv = styled.div `
    display: flex;
    gap: 95px;
    align-items: center;
    flex-direction: row;
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
                bottom: 15px;
                font-weight: 400;
                
            }
        }
    }

    > svg {
        color: var(--Secundary-Color);
        font-size: 100px;
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
`




export const SectionForGraph = styled.section `
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 25px;

`

export const OptionsForGraphDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 30px;

    > p {
        font-size: 22px;
        font-weight: 700;
    }
`

export const OptionsForGraph = styled.nav `
    display: flex;
    flex-direction: row;
    gap: 15px;
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

    font-size: 17px;
    font-weight: 700;
    border-radius: 15px;



`

export const HiddenOptionsContent = styled.button `
    cursor: pointer;
    height: 38px;
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    padding: 0px 13px;
    border-radius: 15px;

    > svg {
        font-size: 33px;
    }
`

export const visãoGeralDias = styled.div `
    display: flex;
    flex-direction: row;
    
`

export const Grafico = styled.div `
`

export const DetalhesDoDia = styled.div `
`

