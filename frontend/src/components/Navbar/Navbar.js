import { Flex, Text } from '@chakra-ui/react';
import React from 'react';


function NavBar() {


  return (

    <Flex as="nav" alignItems="center" justify="space-between" h="10vh" w="100%" backgroundColor="#050A30">
      <Text>Navbar</Text>
    </Flex>
  );
}

export default NavBar;