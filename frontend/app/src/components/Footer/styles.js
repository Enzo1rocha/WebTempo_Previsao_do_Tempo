import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  background-color: var(--Primary-Color);
  color: #f8fafc;
  padding: 60px 20px 20px;
  font-family: var(--Primary-Font);
  margin-top: auto;
  z-index: 999;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    color: #94a3b8;
    line-height: 1.6;
    max-width: 300px;
    font-size: 0.95rem;
  }
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    margin-bottom: 5px;
  }

  a {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
    width: fit-content;

    &:hover {
      color: #fff;
      transform: translateX(5px);
    }
  }
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    margin-bottom: 5px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    background-color: #334155;
    color: white;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.2s;
    font-size: 1.2rem;

    &:hover {
      background-color: var(--Primary-Color);
      transform: translateY(-3px);
    }
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid #334155;
  margin-top: 60px;
  padding-top: 20px;
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;