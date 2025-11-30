import styled, { keyframes, css } from 'styled-components';
import { size } from '../../styles/breakpoints';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: var(--Primary-Font);
  color: #334155;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 60px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--secundary-Color);
  margin-bottom: 10px;
  margin-top: 40px;

  @media (max-width: ${size.mobileL}) {
    font-size: 1.8rem;
    margin-top: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${size.mobileL}) {
    font-size: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr; 
    gap: 60px;
  }
`;


// --- Lado Esquerdo: Informações ---
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InfoCard = styled.div`
  background: #f8fafc;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    border-color: #cbd5e1;
  }

  h3 {
    font-size: 1.1rem;
    color: #0f172a;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p, a {
    font-size: 0.95rem;
    color: #64748b;
    text-decoration: none;
    line-height: 1.5;
  }

  a:hover {
    color: #3b82f6;
  }
`;

// --- Lado Direito: Formulário ---
export const FormSection = styled.form`
  background: white;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #334155;
  }
`;


const inputStyles = css`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  font-family: var(--Primary-Font);
  font-size: 1rem;
  color: #0f172a;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: var(--Secundary-Color);
    background-color: white;
    box-shadow: 0 0 0 4px rgba(175, 175, 175, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;


export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}
  min-height: 150px;
  resize: vertical;
`;

export const Button = styled.button`
  background-color: var(--Secundary-Color);
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  &:hover {
    background-color: var(--Primary-Color);
  }

  &:disabled {
    background-color: #94a3b8;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.div`
  background-color: #dcfce7;
  color: #166534; 
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  border: 1px solid #bbf7d0;
  animation: ${fadeIn} 0.4s ease;
`;