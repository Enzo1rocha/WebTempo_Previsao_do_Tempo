import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Container = styled.div `
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: var(--Background-Color);
    overflow: hidden;
    margin: auto;
`

export const TopRight = styled.img `
    position: absolute;
    top: -80px;
    right: -40px;
    z-index: 0;
    height: 550px;
    transform: rotate(260deg);
    background-color: transparent;

    @media (max-width: 2060px) {
        height: 390px;
        top: -40px;
    }

    @media (max-width: 1550px) {
        height: 320px;

    }

    @media (max-width: 1440px) and (orientation: landscape) {
        height: 320px;
    }

    @media (max-width: 1440px) and (orientation: portrait) {
        height: 650px;
        top: -120px;
        right: -50px;
        transform: rotate(255deg);
    }
`

export const BottomLeft = styled.img `
    position: absolute;
    bottom: -30px;
    left: -20px;
    z-index: 0;
    height: 420px;
    transform: rotate(92deg);
    background-color: transparent;

    @media (max-width: 2060px) {
        height: 310px;
        bottom: -5px;
        left: -10px;
    }

    @media (max-width: 1550px) {
        height: 240px;
        bottom: -30px;
    }

    @media (max-width: 1440px) and (orientation: landscape) {
        height: 240px;
    }
    @media (max-width: 1440px) and (orientation: portrait) {
        height: 400px;
        bottom: -40px;
        left: -20px;
    }
`