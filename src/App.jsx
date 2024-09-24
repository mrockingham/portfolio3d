import { Container } from '@chakra-ui/react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';

const App = () => {
  return (
    <Container as="main" maxW={'7xl'}>
      <Navbar />
      <Hero />
    </Container>
  );
};

export default App;
