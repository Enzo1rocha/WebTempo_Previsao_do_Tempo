import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  padding: 20px;
  font-family: var(--Primary-Font);
`;

export const RegisterCard = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: ${fadeIn} 0.6s ease-out;
  border: 1px solid #e2e8f0;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 35px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--Secundary-Color);
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #334155;
    margin-left: 4px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg.icon {
    position: absolute;
    left: 16px;
    color: #94a3b8;
    font-size: 1rem;
    pointer-events: none;
    transition: color 0.2s;
  }

  svg.toggle {
    position: absolute;
    right: 16px;
    color: #94a3b8;
    cursor: pointer;
    transition: color 0.2s;
    padding: 5px;

    &:hover {
      color: #475569;
    }
  }

  &:focus-within svg.icon {
    color: var(--Secundary-Color);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 45px 14px 45px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  font-size: 1rem;
  color: #0f172a;
  transition: all 0.2s;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: var(--Secundary-Color);
    background-color: white;
    box-shadow: 0 0 0 4px rgba(175, 175, 175, 0.1);
  }

  &::placeholder {
    color: #cbd5e1;
  }
`;

export const ForgotPassword = styled(Link)`
  font-size: 0.85rem;
  color: var(--Secundary-Color);
  text-decoration: none;
  font-weight: 600;
  align-self: flex-end;
  margin-top: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  background-color: var(--Secundary-Color);
  color: white;
  padding: 15px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;
  box-shadow: 0 4px 6px -1px rgba(43, 64, 98, 0.2);

  &:hover {
    background-color: var(--Primary-Color);
    transform: translateY(-1px);
    box-shadow: 0 6px 10px -1px rgba(130, 130, 130, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 0.9rem;
  color: #64748b;

  a {
    color: var(--Secundary-Color);
    font-weight: 600;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;