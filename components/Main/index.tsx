import { Wrapper, Container } from './styles';

import StoryContainer from '../StoryContainer';
import UserInfo from './components/UserInfo';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <StoryContainer />
        <UserInfo />
      </Container>
    </Wrapper>
  );
};

export default Main;
