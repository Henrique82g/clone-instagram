import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  margin: 1rem 0 0.8rem;

  span:first-child {
    display: flex;
    gap: 1.7rem;
  }

  span svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-dark);
    cursor: pointer;
  }
`;
