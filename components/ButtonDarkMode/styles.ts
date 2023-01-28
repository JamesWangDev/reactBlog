import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 4rem;
  width: 8rem;
  background: none;
  border: 0;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.font};
  cursor: not-allowed;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1d1e20;
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 3rem;
  }
`;
