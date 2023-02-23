import {
    Stack, Button, Box, Card, Image, CardBody, CardFooter, Heading, Text,
    Divider, ButtonGroup
} from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import axios from 'axios';

function Login(props) {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    } else if (isAuthenticated) {

        console.log(user);

        return (

            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
            >

                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src={user.picture}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{user.name}</Heading>
                            <Text>
                                On behalf of Ibera Hotels, we want to thank you immensely for the decision to purchase our services
                                for your stay and we are delighted to be able to collaborate with its development.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                {user.email}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log out
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

            </Box>

        )

    } else {

        return (

            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
            >

                <div>

                    <FacebookLoginButton onClick={() => loginWithRedirect()}></FacebookLoginButton>

                    <br></br>

                    <GoogleLoginButton onClick={() => loginWithRedirect()}></GoogleLoginButton>

                </div>

            </Box>

        )

    }

};

export default Login;

////