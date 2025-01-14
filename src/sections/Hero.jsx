/* eslint-disable react/no-unknown-property */

import { Box, Text } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';

import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useControls } from 'leva';
// import { isSmall, isMobile, isTablet } from '../utils/mediaquries';
import { useMediaQuery } from 'react-responsive';
import Cube from '../components/Cube';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Rings from '../components/rings';
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
      borderColor="transparent"
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
              scale={isMobile ? 0.7 : 1.2}
              //   position={[0, 0, 0]}
              rotation={[0, -Math.PI / 2, -0.4]}
              position={isMobile ? [0.3, 1, 1.9] : [0.7, -3.3, 1.9]}
              // rotation={[0, -1.6, -0.4]}
            />
            <group>
              <Target position={[-10.7, 1.6, 1.9]} />
              <ReactLogo position={[7.7, 7.6, 1.9]} />
              <Cube position={[4.7, -6.6, 10.9]} />
              <Rings position={[-20.7, 18.6, 1.9]} />
            </group>
            <ambientLight intensity={5} />

            <directionalLight position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </Box>
    </Box>
  );
};

export default Hero;
