import { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Link,
  Button,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('clicked');
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const NavItems = () => {
    return (
      <List>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          w={'full'}
        >
          {navLinks.map(({ id, name, href }, index) => (
            <ListItem
              color={'whiteAlpha.400'}
              fontFamily={'bold'}
              _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
              mr={{ base: 0, md: 4 }}
              key={id}
              // pb={{ base: index === navLinks.length - 1 ? 0 : 4, md: 0 }}
              p={{ base: '4, 4, 4, 0', md: 0 }}
              w={{ base: 'full', md: 'auto' }}
            >
              <Link onClick={() => {}} href={href}>
                {name}
              </Link>
            </ListItem>
          ))}
        </Flex>
      </List>
    );
  };

  console.log('isOpen', isOpen);
  return (
    <Box as="header" bg="black" pos={'fixed'} left={0} right={0} zIndex={50}>
      <Box maxW="7xl" mx="auto">
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          py={5}
          mx={'auto'}
        >
          <Link
            color={'whiteAlpha.400'}
            fontFamily={'bold'}
            _hover={{ color: 'white' }}
            href={'/'}
          >
            Michael
          </Link>
          <Button
            onClick={toggleMenu}
            colorScheme="transparent"
            variant="ghost"
            color={'whiteAlpha.400'}
            _hover={{ color: 'white' }}
            display={{ base: 'block', md: 'none' }}
            aria-label="toggle"
          >
            <Image
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              w={6}
              h={6}
            />
          </Button>
          <Box as="nav" display={{ base: 'none', md: 'block' }}>
            <NavItems />
          </Box>
        </Flex>
      </Box>
      <Box display={isOpen ? 'block' : 'none'} h={isOpen ? '100vh' : 0}>
        <Box bg={'whiteAlpha.50'} as="nav">
          <NavItems />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
