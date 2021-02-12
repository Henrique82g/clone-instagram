import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  span.circle {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    background: var(--color-border);
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.4rem;
      line-height: 1rem;

      letter-spacing: -0.165px;
    }

    span:first-child {
      font-weight: 500;
      color: var(--color-dark);
      margin-bottom: 0.7rem;
    }

    span:last-child {
      font-weight: normal;
      color: var(--color-text-light);
    }
  }
`;
