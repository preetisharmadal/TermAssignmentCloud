import { Button, Flex, FormControl, FormLabel, Heading, Input, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../../services/UserServices/UserService';
import { theme } from '../../theme';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const toast = useToast();
    const handleLogin = async () => {
        const response = await LoginUser(email, password);
        if (response.success) {
            toast({
                title: 'Login Successful',
                description: 'You have successfully logged in!',
                status: 'success',
                duration: 5000, // Duration in milliseconds
                isClosable: true,
            });
            localStorage.setItem('salestarUser', response.customer_id);
            navigate("/")
        }
        else {
            toast({
                title: 'Login Unsuccessful',
                description: 'There was an error Logging you In!',
                status: 'error',
                duration: 5000, // Duration in milliseconds
                isClosable: true,
            });
        }
    };
    return (


        <Flex w="100%" minHeight="100vh" backgroundColor={theme.primaryBackground} alignItems="center" justifyContent="space-evenly">
            <Flex flexDir="column" gap="12px" width="35%">
                <Heading mb={4}>SALESTAR</Heading>
                <form>
                    <FormControl mb={4}>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button colorScheme="teal" onClick={handleLogin}>
                        Login
                    </Button>
                </form>
                <Flex>
                    <Text mt={4} fontSize="sm">
                        Don't have an account?
                    </Text>
                    <button onClick={() => navigate("/user/signup")}>
                        <Text mt={4} fontSize="sm" fontWeight='bold' ml="5px" textDecoration="underline"> Sign up</Text>
                    </button>
                </Flex>

            </Flex>

        </Flex>
    );
}

export default Login;