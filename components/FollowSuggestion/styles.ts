import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.1rem;

  span {
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: -0.165px;
  }
  span:first-child {
    font-size: 1.4rem;

    color: var(--color-text-light);
  }

  span:last-child {
    font-size: 1.2rem;

    color: var(--color-dark);
    cursor: pointer;
  }
`;
