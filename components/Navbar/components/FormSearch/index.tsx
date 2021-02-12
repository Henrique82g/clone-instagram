import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const FormSearch: React.FC = () => {
  return (
    <Container>
      <span>
        <FiSearch />
      </span>
      <span>Search</span>
    </Container>
  );
};

export default FormSearch;
