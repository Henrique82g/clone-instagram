import styled from 'styled-components';

export const Container = styled.div`
  max-width: 64.4rem;

  background: var(--color-primary-light);
  border: 0.1rem solid var(--color-border);

  @media (max-width: 500px) {
    background: transparent;
    border-color: transparent;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  display: block;
  background: #efefef;

  @media (max-width: 500px) {
    display: none;
    visibility: hidden;
  }
`;
