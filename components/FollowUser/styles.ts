import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4.2rem 1fr 5rem;
  gap: 1.4rem;
  align-items: center;

  span.circle {
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    background: var(--color-border);
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-style: normal;

      letter-spacing: -0.165px;
    }

    span:first-child {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.8rem;

      color: var(---color-dark);
    }

    span:last-child {
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 1.4rem;

      color: var(--color-text-light);
    }
  }

  button {
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-bottom: -2rem;

    letter-spacing: -0.165px;

    background: transparent;
    color: var(--color-text-blue);
    outline: none;
    border: 0;
    cursor: pointer;
  }
`;
