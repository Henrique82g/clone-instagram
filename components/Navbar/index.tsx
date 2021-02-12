import Image from 'next/image';

import FormSearch from './components/FormSearch';

import { Wrapper, Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Image src="/logo.svg" alt="Instagram" width={130} height={29} />
        <FormSearch />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
