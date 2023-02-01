import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: none;
  bottom: 0;
  position: relative;
  height: 4rem;
  width: 50%;
  padding: 2rem;
  margin: 0.5rem 0;

  @media (max-width: 1200px) {
    width: 80%;
    padding: 0 1.8rem;
  }

  @media (max-width: 992px) {
    padding: 0 1.4rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.2rem;
  }

  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};

  @media (max-width: 768px) {
    font-size: 1.6rem;
    white-space: normal;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.font};
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const Heart = styled.span`
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
