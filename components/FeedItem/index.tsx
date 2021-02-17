import FeedHeader from './components/FeedHeader';
import FeedImage from './components/FeedImage';

import { Container } from './styles';

function FeedItem() {
  return (
    <Container>
      <FeedHeader />
      <FeedImage />
    </Container>
  );
}

export default FeedItem;
