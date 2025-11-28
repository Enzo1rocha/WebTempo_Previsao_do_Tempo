import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;


  background-color: rgba(248, 250, 252, 0.8); 
  backdrop-filter: blur(5px);
  z-index: 9999;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(59, 130, 246, 0.2);
  border-top: 4px solid var(--Secundary-Color);
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export const LoadingText = styled.p`
  font-family: var(--Primary-Font);
  color: var(--Secundary-Color);
  font-size: 1.1rem;
  font-weight: 600;
  animation: ${pulse} 1.5s ease-in-out infinite;
  letter-spacing: 0.5px;
`;