import axios from "axios";
import {
    Box, Stack, Button,
    Card, CardBody, Image,
    Heading, Text, Divider
} from '@chakra-ui/react';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const [newUser, setNewUser] = useState("");

    const { logout } = useAuth0();

    if (isLoading) {
        return (

            <div>Loading...</div>

        )

    } else if (isAuthenticated) {

        if (isAuthenticated) {
            var axiosUser;
            var email = user.email;

            axios
                .get("http://localhost:3010/users")
                .then((res) => {
                    console.log("get axios profile", res.data);

                    axiosUser = res.data.find((u) => {
                        return (
                            u.email === email
                        )
                    });

                    if (!newUser) {
                        setNewUser(axiosUser)
                        console.log(axiosUser);
                    };

                })
                .catch((err) => console.log(err));

        };

        console.log(newUser);

        return (

            <div>

                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={400}
                    p={6}
                    m="10px auto"
                    as="form"
                >

                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={newUser.image}
                                alt='User Image'
                                borderRadius='lg'
                                maxWidth={200}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>User Information</Heading>
                                <Text>
                                    Name: {newUser.first_name} {newUser.last_name}
                                </Text>
                                <Text>
                                    Email: {newUser.email}
                                </Text>
                                <Text>
                                    Nationality: {newUser.nationality}
                                </Text>
                                <Text>
                                    Status: {newUser.status}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>

                    <br></br>

                    <Button
                        colorScheme="teal"
                        variant="solid"
                        onClick={() =>
                            logout({ logoutParams: { returnTo: window.location.origin } })
                        }
                    >
                        Logout
                    </Button>

                </Box >

            </div>

        );

    }

};

export default Profile;