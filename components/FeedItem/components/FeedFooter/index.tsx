import FeedActions from '../FeedActions';

import { Container } from './styles';

function FeedFooter() {
  return (
    <Container>
      <FeedActions />
      <span className="view-count">200,000 views</span>
      <div className="user-comment">
        <span>henrique</span>
        <span>Lorem ipsum dolor, sitde</span>
      </div>
      <span className="comment-count">View all 1,290 comments</span>
      <div>
        <span className="temp">1 hour ago </span>
      </div>
    </Container>
  );
}

export default FeedFooter;
