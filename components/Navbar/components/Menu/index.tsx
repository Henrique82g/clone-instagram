import { FiHome, FiSend, FiCompass, FiHeart } from 'react-icons/fi';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <span title="Home">
        <FiHome />
      </span>
      <span title="Send">
        <FiSend />
      </span>
      <span title="Explore">
        <FiCompass />
      </span>
      <span title="Activity">
        <FiHeart />
      </span>
      <span className="circle"></span>
    </Container>
  );
};

export default Menu;
