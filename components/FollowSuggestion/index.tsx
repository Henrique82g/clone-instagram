import FollowUser from '../FollowUser';

import { Container, Header } from './styles';

const FollowSuggestion: React.FC = () => {
  return (
    <Container>
      <Header>
        <span>Suggestions For You</span>
        <span>See All</span>
      </Header>

      <FollowUser />
      <FollowUser />
      <FollowUser />
      <FollowUser />
    </Container>
  );
};

export default FollowSuggestion;
