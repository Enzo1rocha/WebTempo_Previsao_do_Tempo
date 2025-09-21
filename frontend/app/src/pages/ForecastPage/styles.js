import styled from "styled-components";

export const Main = styled.main `
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: auto;

    background-color: var(--Background-Color);
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
`

export const temperatureAndIconDiv = styled.div `
    display: flex;
    gap: 85px;
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
    border: none;



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

    > div {
        cursor: pointer;
        > p {
            font-size: 17px;
            font-weight: 700;
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
    width: 80%;
`

export const DetalhesDoDia = styled.div `
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    gap: 20px;
`

