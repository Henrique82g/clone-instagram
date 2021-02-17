import FeedFooter from './components/FeedFooter';
import FeedHeader from './components/FeedHeader';
import FeedImage from './components/FeedImage';

import { Container } from './styles';

function FeedItem() {
  return (
    <Container>
      <FeedHeader />
      <FeedImage />
      <FeedFooter />
    </Container>
  );
}

export default FeedItem;
