import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 4rem;
  width: 100vw;
  background: none;
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
  font-weight: 700;
  color: ${({ theme }) => theme.colors.font};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
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
