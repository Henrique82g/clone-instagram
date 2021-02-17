import FeedItem from '../FeedItem';

import { Container } from './styles';

const FeedList: React.FC = () => {
  return (
    <>
      <Container>
        {[1, 2, 3, 4].map((item) => (
          <FeedItem key={`key-${item}`} />
        ))}
      </Container>
    </>
  );
};

export default FeedList;
