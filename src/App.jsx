import { Container, Text } from '@chakra-ui/react';
import Navbar from './sections/Navbar';

const App = () => {
  return (
    <Container maxW={'7xl'}>
      <Navbar />
      <Text fontSize="2xl" color="white" textDecor={'underline'}>
        Hello, Three.js!
      </Text>
    </Container>
  );
};

export default App;
