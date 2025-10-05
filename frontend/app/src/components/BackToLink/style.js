import styled from "styled-components";

export const BackToLink = styled.a `
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: var(--Secundary-Color);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        cursor: wait;
    }
`