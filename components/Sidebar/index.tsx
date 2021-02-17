import UserInfo from './UserInfo';
import FollowSuggestion from '../FollowSuggestion';

import { Container, Wrapper } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <UserInfo />
        <FollowSuggestion />
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
