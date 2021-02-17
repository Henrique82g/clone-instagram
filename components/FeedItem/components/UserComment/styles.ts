import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  div {
    display: flex;
    gap: 1rem;

    span {
      font-size: 1.4rem;
      line-height: 1.8rem;

      letter-spacing: -0.165px;

      color: var(--color-dark);
    }

    span:first-child {
      font-weight: 500;
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;

    color: var(--color-dark);
  }
`;
