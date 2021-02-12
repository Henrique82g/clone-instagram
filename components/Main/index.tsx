import { Wrapper, Container } from './styles';

import StoryContainer from '../StoryContainer';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <StoryContainer />
      </Container>
    </Wrapper>
  );
};

export default Main;
