import UserInfo from './UserInfo';
import FollowSuggestion from '../FollowSuggestion';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <UserInfo />
      <FollowSuggestion />
    </Container>
  );
};

export default Sidebar;
