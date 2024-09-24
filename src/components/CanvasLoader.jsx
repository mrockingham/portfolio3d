import { Text } from '@chakra-ui/react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div "
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span>
        <Text fontSize={'4xl'} color={'white'} fontWeight={'bold'} mt="40px">
          {progress != 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
        </Text>
      </span>
      CanvasLoader
    </Html>
  );
};

export default CanvasLoader;
