import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import { Containerlocations, LocationItem, SearchBarContainer } from "../../components/SearchBar/styles";
import { size } from "../../styles/breakpoints";

export const Container = styled.div `
    font-family: var(--Primary-Font);
    background-color: var(--Background-Color);
    min-height: 100vh;
    margin: auto;
`;

export const Container_Search = styled.div `
    background-color: var(--Background-Color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    top: 100px;
    position: relative;
    
    > h1 {
        align-self: flex-start;
        font-size: 40px;
        font-weight: 700;
        color: var(--Secundary-Color);
    }

    @media (max-width: ${size.laptopXL}) {
        max-width: 800px;

        > h1 {
            font-size: 35px;
        }
    }

    @media (max-width: ${size.laptopL}) {
        > h1 {
            font-size: 33px;
        }
    }

    @media (max-width: ${size.laptop}) {
        max-width: 600px;

        > h1 {
            font-size: 26px;
        }
    }

    @media (max-width: ${size.tablet}) {
        max-width: 400px;

        > h1 {
            font-size: 21.5px;
        }
    }

    @media (max-width: ${size.mobileL}) {
        max-width: 280px;

        > h1 {
            font-size: 17px;
        }
    }
`;

export const FavoriteSearchBar = styled(SearchBar) `
    max-width: 1000px;

    @media (max-width: ${size.laptopXL}) {
        max-width: 800px;
    }

    @media (max-width: ${size.laptop}) {
        max-width: 600px;
    }

    ${SearchBarContainer} {
        height: 60px;

        > input {
            font-size: 23px;
        }

        @media (max-width: ${size.laptopXL}) {
            height: 58px;

            > input {
                font-size: 21px;
            }
        }

        @media (max-width: ${size.laptopL}) {
            height: 60px;

            > input {
                font-size: 20px;
            }
        }

        @media (max-width: ${size.laptop}) {
            height: 50px;
            > input {
                font-size: 18px
            }
        }

        @media (max-width: ${size.tablet}) {
            height: 45px;

            > input {
                font-size: 15.5px;
            }
        }

        @media (max-width: ${size.mobileL}) {
            height: 32px;

            > input {
                font-size: 11.5px;
            }

            > svg {
                height: 65%;
                padding: 5px;
            }
        }
    }

    ${LocationItem} {
        height: 75px;

        > div {
            > h1 {
                font-size: 26px;
            }

            > p {
                font-size: 21px;
            }
        }

        > svg {
            height: 38px;
        }

        @media (max-width: ${size.laptopXL}) {
            height: 70px;

            > div {
                > h1 {
                    font-size: 25px;
                }

                > p {
                font-size: 20px;
                }
            }

            > svg {
                height: 36px;
            }
        }

        @media (max-width: ${size.laptopL}) {
            height: 60px;

            > div {
                > h1 {
                    font-size: 21px;
                }

                > p {
                    font-size: 17px;
                }
            }

            > svg {
                height: 32px;
            }
        }

        @media (max-width: ${size.tablet}) {
            height: 50px;

            > div {
                > h1 {
                    font-size: 16.5px;
                }

                > p {
                    font-size: 12px;
                }
            }

            > svg {
                height: 27px;
            }
        }

        @media (max-width: ${size.mobileL}) {
            height: 35px;
            padding: 6px 10px;

            > div {
                > h1 {
                    font-size: 12px;
                }

                > p {
                    font-size: 8px;
                }
            }

            > svg {
                height: 20px;
            }
        }
    }
`