import styled from 'styled-components';

export const Container = styled.form`
  padding: 1.1rem 2.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    display: flex;
    align-items: center;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-dark);
    margin-right: 1.5rem;
  }

  section > input {
    width: 100%;

    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.8rem;

    letter-spacing: -0.165px;

    outline: none;
    border: 0;
    background: transparent;

    ::placeholder {
      color: var(--color-text-light);
    }
  }

  button {
    font-size: 1.2rem;
    line-height: 1rem;

    letter-spacing: -0.165px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    opacity: 0.5;

    color: var(--color-text-blue);
  }

  @media (max-width: 500px) {
    display: none;
    visibility: hidden;
  }
`;
