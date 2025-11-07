import styled from "styled-components";
import { size } from "../../styles/breakpoints";
import SearchBar from "../SearchBar";
import { Containerlocations, LocationItem, SearchBarContainer } from "../SearchBar/styles";

export const Background = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: var(--Secundary-Color-Change-Boot-Location);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--Primary-Font);


    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
`

export const Main = styled.div `
    background-color: var(--Background-Color);
    width: 100%;
    padding: 30px 30px;
    max-width: 900px;
    height: 700px;
    border: 12px solid var(--Secundary-Color);
    border-radius: 30px;
    position: relative;

    @media (max-width: ${size.desktop}) {
        padding: 30px 30px;
        max-width: 700px;
        border: 10px solid var(--Secundary-Color);
        height: 650px;
    }

    @media (max-width: ${size.laptopXL2}) {
        max-width: 600px;
        height: 540px;
    }

    @media (max-width: ${size.laptop}) {
        max-width: 450px;
        height: 485px;
    }

    @media (max-width: ${size.mobileL}) {
        border: 6px solid var(--Secundary-Color);
        max-width: 280px;
        height: 390px;
    }
`

export const SearchContent = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    > h1 {
        font-size: 37px;
        white-space: nowrap;
        text-align: center;
        color: var(--Secundary-Color);
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    @media (max-width: ${size.desktop}) {
        > h1 {
            font-size: 30px;
        }
    }

    @media (max-width: ${size.laptopXL2}) {
        > h1 {
            font-size: 24px;
        }
    }

    @media (max-width: ${size.laptop}) {
        gap: 20px;
        > h1 {
            font-size: 20px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        > h1 {
            font-size: 14px;
        }
    }
`

export const Return = styled.a`
    cursor: pointer;
    background-color: var(--Secundary-Color);
    color: var(--Background-Color);
    font-weight:700;
    font-size: 20px;
    padding: 15px 120px;
    border-radius: 15px;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: ${size.desktop}) {
        font-size: 20px;
        padding: 15px 150px;
    }

    @media (max-width: ${size.laptopXL2}) {
        font-size: 14px;
        padding: 10px 130px;
    }

    @media (max-width: ${size.laptop}) {
        font-size: 14px;
        padding: 10px 100px;
    }

    @media (max-width: ${size.mobileL}) {
        font-size: 11px;
        padding:8px 70px;
        border-radius: 10px;
    }
`

export const LocationSearchBar = styled(SearchBar) `
    max-width: 700px;
    width: 100%;

    @media (max-width: ${size.desktop}) {
        max-width: 500px;
    }

    @media (max-width: ${size.laptopXL2}) {
        max-width: 450px;
    }

    @media (max-width: ${size.laptop}) {
        max-width: 300px;
    }

    @media (max-width: ${size.mobileL}) {
        max-width: 300px;
    }


    ${SearchBarContainer} {
        height: 60px;

        border: 3.15px solid var(--Secundary-Color);

        > input {
            font-size: 22px;
        }

        @media (max-width: ${size.desktop}) {
            height: 56px;

            > input {
                font-size: 21px;
            }
        }

        @media (max-width: ${size.laptopXL2}) {
            height: 44px;

            > input {
                font-size: 17px;
            }
        }

        @media (max-width: ${size.laptop}) {
            height: 36px;
            border: 2px solid var(--Secundary-Color);

            > input {
                font-size: 15px;
            }
        }

        @media (max-width: ${size.mobileL}) {
            border: 1.8px solid var(--Secundary-Color);
            height: 30px;
            > input {
                font-size: 11px;
            }
        }
    }

    ${Containerlocations} {
        border-radius: 3.15px solid var(--Secundary-Color);

        @media (max-width: ${size.laptop}) {
            border: 2px solid var(--Secundary-Color);
        }

        @media (max-width: ${size.mobileL}) {
            border: 1.8px solid var(--Secundary-Color);
        }
    }

    ${LocationItem} {
        height: 70px;

        > div {
            > h1 {
                font-size: 24px;
            }

            > p {
                font-size: 20px;
            }
        }

        > svg {
            height: 37px;
        }

        @media (max-width: ${size.desktop}) {
            height: 65px;

            > div {
                > h1 {
                    font-size: 21px;
                }

                > p {
                    font-size: 17px;
                }
            }

            > svg {
                height: 36px;
            }
        }

        @media (max-width: ${size.laptopXL2}) {
            height: 52px;

            > div {
                > h1 {
                    font-size: 17px;
                }

                > p {
                    font-size: 14px;
                }
            }

            > svg {
                height: 32px;
            }
        }

        @media (max-width: ${size.laptop}) {
            height: 45px;
            padding: 7px 5px;
            > div {
                > h1 {
                    font-size: 15px;
                }

                > p {
                    font-size: 12px;
                }
            }

            > svg {
                height: 24px;
            }
        }

        @media (max-width: ${size.mobileL}) {
            height: 35px;
            padding: 6px 5px;

            > div {
                > h1 {
                    font-size: 12px;
                }

                > p {
                    font-size: 8.5px;
                }
            }

            > svg {
                height: 19.5px;
            }
        }
    }
`