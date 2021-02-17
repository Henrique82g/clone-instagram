import { FiMoreHorizontal } from 'react-icons/fi';

import { Container } from './styles';

function FeedHeader() {
  return (
    <Container>
      <div className="user-info">
        <span className="circle"></span>
        <span>henrique</span>
      </div>

      <span>
        <FiMoreHorizontal title="Menu" />
      </span>
    </Container>
  );
}

export default FeedHeader;
