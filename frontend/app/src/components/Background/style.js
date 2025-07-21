import styled from 'styled-components';

export const Container = styled.div `
    position: relative;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    background-color: var(--Background-Color);
    overflow: hidden;
    margin: auto;
`

export const TopRight = styled.img `
    position: absolute;
    top: -4.4%;
    right: -1.5%;
    z-index: 0;
    height: 45vh;
    transform: rotate(260deg);
    background-color: transparent;
`

export const BottomLeft = styled.img `
    position: absolute;
    bottom: -2%;
    left: -2%;
    z-index: 0;
    height: 32vh;
    transform: rotate(92deg);
    background-color: transparent;
`