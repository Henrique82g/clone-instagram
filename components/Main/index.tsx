import { Wrapper, Container, SubContainer } from './styles';

import StoryContainer from '../StoryContainer';
import Sidebar from '../Sidebar';
import FeedList from '../FeedList';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <SubContainer>
          <StoryContainer />
          <FeedList />
        </SubContainer>
        <Sidebar />
      </Container>
    </Wrapper>
  );
};

export default Main;
