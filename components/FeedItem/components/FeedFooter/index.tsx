import FeedActions from '../FeedActions';

import { Container } from './styles';

function FeedFooter() {
  return (
    <Container>
      <FeedActions />
      <span className="view-count">200,000 views</span>
    </Container>
  );
}

export default FeedFooter;
