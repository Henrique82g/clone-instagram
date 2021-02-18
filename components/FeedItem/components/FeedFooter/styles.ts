import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.1rem 2.3rem;
  .view-count,
  .user-comment {
    line-height: 1.8rem;
  }

  .user-comment,
  .comment-count {
    margin-bottom: 0.6rem;
  }

  .view-count,
  .user-comment,
  .comment-count {
    font-size: 1.4rem;
    letter-spacing: -0.165px;
  }

  .view-count {
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 1.8rem;

    color: var(--color-dark);
  }

  .user-comment {
    display: flex;
    gap: 1.1rem;

    span:first-child {
      font-weight: 500;
    }
  }

  div span.temp,
  .comment-count {
    color: var(--color-text-light);
  }

  div span.temp {
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.8rem;

    letter-spacing: 0.2px;
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
