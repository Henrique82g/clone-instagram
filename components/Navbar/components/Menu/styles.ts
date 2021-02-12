import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2.6rem;
  align-items: center;

  span {
    color: var(--color-dark);
    cursor: pointer;

    svg,
    &.circle {
      width: 2.4rem;
      height: 2.4rem;
    }

    svg {
      flex-shrink: 0;
    }

    &.circle {
      background: var(--color-border);
      border-radius: 50%;
    }
  }
`;
