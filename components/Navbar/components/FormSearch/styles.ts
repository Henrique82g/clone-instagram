import styled from 'styled-components';

export const Container = styled.div`
  width: 21.5rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--color-background);
  border: 0.1rem solid var(--color-border);
  box-sizing: border-box;
  border-radius: 0.3rem;

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.6rem;

    color: var(--color-text-light);

    :first-child {
      margin-right: 1rem;
    }
  }
`;
