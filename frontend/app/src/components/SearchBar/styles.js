import styled from "styled-components";



export const Container = styled.div `
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    font-family: var(--Primary-Font);
`

export const SearchBarContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: var(--Background-Color);
    border: 2px solid var(--Secundary-Color);
    ${props => props.hasSearch ? 'border-radius: 8px 8px 0px 0px;' : 'border-radius: 8px;'}
    ${props => props.hasSearch ?
    'box-shadow: none;' : 'box-shadow: 0px 2px 2px rgba(0,0,0,0.5);'}
    height: 40px;
    padding: 0px 0px 0px 10px;
    gap: 0px;

    > input {
        width: 100%;
        background-color: transparent;
        border: none;
        font-family: var(--Primary-Font);
        color: var(--Secundary-Color);
        font-weight: 600;
        font-size: 16px;
        padding-right: 5px;

        outline: none;
        &::placeholder {
            color: var(--Secundary-Color);
            opacity: 1;
        }
    }

    > svg {
        color: var(--Secundary-Color);
        cursor: pointer;
        height: 80%;
        padding: 5px 10px;
        &:hover {
            background-color: var(--Secundary-Color);
            color: var(--Background-Color);
        } 
    }
    
    > svg[data-icon='magnifying-glass'] {
        border-radius: 0px 8px 0px 0px;
    }
`

export const Containerlocations = styled.div `     
    position: absolute;
    top: 95%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--Secundary-Color);
    border-radius: 0px 0px 8px 8px;
    
`

export const LocationItem = styled.div `
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    border-bottom: 2px solid var(--Secundary-Color);
    cursor: pointer;

    > div {
        height: 100%;
        display: grid;
        grid-template-rows: 35% 100%;
        white-space: nowrap;
        justify-content: center;
        align-items: center;

        > h1 {
        font-size: 18px;
        font-weight: 600;
        color: var(--Secundary-Color);
        }

        > p {
        font-size: 13px;
        font-weight: 500;
        color: var(--Secundary-Color);
        }
    }

    > svg {
        color: var(--Secundary-Color);
        height: 30px;
    }
`