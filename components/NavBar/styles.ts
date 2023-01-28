import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 8rem;
  width: 50vw;

  @media (max-width: 768px) {
    height: 6rem;
  }

  @media (max-width: 600px) {
    width: 70vw;
    height: 4rem;
  }

  @media (max-width: 400px) {
    width: 60vw;
    height: 3rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 50%;
  height: 4rem;
  margin: 0 0.5rem;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 3rem;
  }

  @media (max-width: 600px) {
    height: 2rem;
  }

  @media (max-width: 400px) {
    height: 1.5rem;
  }
`;

export const Item = styled.li`
  text-decoration: none;
  list-style: none;
  font-size: 1.8rem;
  font-weight: 500;
  color: #c2c9d6;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  border: 0 solid #eaeaea;
  margin: 0 0.5rem;

  &:hover {
    background-color: #1d1e20;
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
