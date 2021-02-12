import Image from 'next/image';

import { Wrapper, Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Image src="/logo.svg" alt="Instagram" width={130} height={29} />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
