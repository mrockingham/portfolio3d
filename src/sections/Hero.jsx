import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useControls } from 'leva';
const Hero = () => {
  const x = useControls('HackerRoom', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: -10,
      max: 10,
    },
  });
  return (
    <Box
      as="section"
      minH="100vh"
      border="2px"
      borderColor="blue.500"
      w="full"
      flexDir={'column'}
      pos={'relative'}
    >
      <Box
        w="full"
        mx={'auto'}
        flexDir={'column'}
        mt={{ base: 20, md: 36 }}
        gap={3}
      >
        <Text
          fontSize={{ base: '3xl', md: '2xl' }}
          fontWeight={'medium'}
          color={'white'}
          textAlign={'center'}
        >{`Hello, I'm Michael`}</Text>
        <Text
          fontSize={{ base: '2xl', md: '3xl' }}
          color={'gray.300'}
          textAlign={'center'}
          fontWeight={'bold'}
        >
          Building Beautiful Web Experiences
        </Text>
      </Box>

      <Box pos={'absolute'} w="full" h="full" inset={0}>
        <Canvas css={{ with: '100%', height: '100%' }}>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              //   scale={0.5}
              scale={[x.scale, x.scale, x.scale]}
              //   position={[0, 0, 0]}
              //   rotation={[0, -Math.PI / 2, 0]}
              position={[x.positionX, x.positionY, x.positionZ]}
              rotation={[x.rotationX, x.rotationY, x.rotationZ]}
            />
            <ambientLight intensity={5} />
          </Suspense>
        </Canvas>
      </Box>
    </Box>
  );
};

export default Hero;
