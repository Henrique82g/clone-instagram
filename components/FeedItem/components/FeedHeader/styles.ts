import styled from 'styled-components';

export const Container = styled.div`
  /* height: 3rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3.6rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    cursor: pointer;
  }

  div > span {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.165px;

    color: var(--color-dark);
  }

  div span.circle {
    width: 4.2rem;
    height: 4.2rem;
    background: var(--color-border);
    border-radius: 50%;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-dark);
    cursor: pointer;
  }
`;
