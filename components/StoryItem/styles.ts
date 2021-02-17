import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  span:first-child {
    display: block;
    height: 5.5rem;
    width: 5.5rem;
    border-radius: 50%;
    background: var(--color-border);
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1rem;
    margin-top: 0.8rem;

    letter-spacing: -0.165px;

    color: var(--color-dark);
  }
`;
