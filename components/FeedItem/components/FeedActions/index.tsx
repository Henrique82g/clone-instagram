import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from 'react-icons/fi';

import { Container } from './styles';

function FeedActions() {
  return (
    <Container>
      <span>
        <FiHeart />
        <FiMessageCircle />
        <FiSend />
      </span>

      <span>
        <FiBookmark />
      </span>
    </Container>
  );
}

export default FeedActions;
