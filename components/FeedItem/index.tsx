import FeedFooter from './components/FeedFooter';
import FeedForm from './components/FeedForm';
import FeedHeader from './components/FeedHeader';
import FeedImage from './components/FeedImage';

import { Container, Divider } from './styles';

function FeedItem() {
  return (
    <Container>
      <FeedHeader />
      <FeedImage />
      <FeedFooter />
      <Divider />
      <FeedForm />
    </Container>
  );
}

export default FeedItem;
