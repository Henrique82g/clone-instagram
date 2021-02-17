import styled from 'styled-components';

export const Wrapper = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-shrink: 0;
`;

export const Container = styled.section`
  max-width: 93.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  position: relative;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const SubContainer = styled.div``;
