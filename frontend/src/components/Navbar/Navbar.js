import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../../theme';


function NavBar() {
  const handleLogout = () => {
    localStorage.setItem('salestarUser', "");
    window.location.reload();
  }


  return (

    <Flex as="nav" alignItems="center" justify="center" h="10vh" w="100%" backgroundColor={theme.primaryBackground} >
      <Flex justify="space-between" width="1080px">
        <Text fontWeight="bold" fontSize="2xl">SALESTAR</Text>
        <Button bgColor={theme.secondaryForeground} onClick={handleLogout}>LOGOUT</Button>
      </Flex>
    </Flex>
  );
}

export default NavBar;