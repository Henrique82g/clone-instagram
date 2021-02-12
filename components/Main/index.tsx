import { Wrapper, Container } from './styles';

import StoryContainer from '../StoryContainer';
import Sidebar from '../Sidebar';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <StoryContainer />
        <Sidebar />
      </Container>
    </Wrapper>
  );
};

export default Main;
