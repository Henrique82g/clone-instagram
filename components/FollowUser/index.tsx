import { Container } from './styles';

const FollowUser: React.FC = () => {
  return (
    <Container>
      <span className="circle"></span>
      <div>
        <span>henriquess</span>
        <span>Followed by nicolas + 1 more</span>
      </div>
      <button type="button" role="button">
        Follow
      </button>
    </Container>
  );
};

export default FollowUser;
