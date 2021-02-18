import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 5.4rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;

  background: var(--color-primary-light);
  border: 0.1rem solid var(--color-border);
  margin-bottom: 3rem;

  @media (max-width: 640px) {
    margin-bottom: 0.1rem;
  }
`;

export const Container = styled.div`
  max-width: 96.5rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
