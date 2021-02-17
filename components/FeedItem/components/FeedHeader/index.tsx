import { FiMoreHorizontal } from 'react-icons/fi';

import { Container } from './styles';

function FeedHeader() {
  return (
    <Container>
      <div className="user-info">
        <span className="cirlce"></span>
        <span>henrique</span>
      </div>

      <span>
        <FiMoreHorizontal />
      </span>
    </Container>
  );
}

export default FeedHeader;
