import styled, { keyframes } from 'styled-components';
import { size } from '../../styles/breakpoints';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;


export const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #334155;
  font-family: var(--Primary-Font);
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e2e8f0;
  margin-top: 80px;

  @media (max-width: ${size.mobileL}) {
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: var(--Secundary-Color);
  margin-bottom: 16px;
  letter-spacing: -0.02em;

  @media (max-width: ${size.mobileL}) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: ${size.mobileL}) {
    font-size: 1.05rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--Secundary-Color);
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: #f1f5f9;
    margin-left: 20px;
  }

  @media (max-width: ${size.mobileL}) {
    font-size: 1.8rem;
    gap: 5px;
  }
`;

export const TextBlock = styled.div`
  background: #f8fafc;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  line-height: 1.8;
  font-size: 1.05rem;
  color: #475569;
  
  strong {
    color: var(--Secundary-Color);
    font-weight: 600;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

export const TechCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${props => props.color || '#3b82f6'};
  min-width: 40px;
  display: flex;
  justify-content: center;
`;

export const CardContent = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #334155;
  }
  p {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
  }
`;

export const AuthorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  gap: 20px;

  @media (min-width: ${size.tablet}) {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
  }
`;

export const AuthorInfo = styled.div`
  flex: 1;
  h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: white;

    @media (max-width: ${size.mobileL}) {
        font-size: 1.45rem;
    }
  }
  p {
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;


export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    color: white;
    font-size: 1.8rem;
    opacity: 0.8;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 1;
    }
  }
`;