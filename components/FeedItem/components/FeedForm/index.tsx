import { FiSmile } from 'react-icons/fi';

import { Container } from './styles';

function FeedForm() {
  return (
    <Container>
      <section>
        <span>
          <FiSmile />
        </span>
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Add a comment..."
        />
      </section>
      <button type="button">Post</button>
    </Container>
  );
}

export default FeedForm;
