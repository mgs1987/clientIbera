import axios from "axios";
import {
    Box, Stack, Button,
    Card, CardBody, Image,
    Heading, Text, Divider,
    FormControl, FormLabel, Input,
    FormHelperText, FormErrorMessage
} from '@chakra-ui/react';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const [newUser, setNewUser] = useState("");
    const [buttonModify, setButtonModify] = useState("");
    const [input, setInput] = useState({
        first_name: "",
        last_name: "",
        date_birth: "",
        mobile: "",
        nationality: ""
    });

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

        const handleInputChange = (e) => {

            setInput({
                ...input,
                [e.target.name]: e.target.value
            });

            console.log(input)

        };

        const HandleModify = (e) => {

            if (buttonModify === "") {
                setButtonModify("modify")
            } else {
                setButtonModify("")
            }

        };

        const SubmitModifyUser = (e) => {

            axios.put(`http://localhost:3010/users/modify/${newUser.email}`, input)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

            window.location.reload();
        };

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
                                    First_name: {newUser.first_name}
                                </Text>
                                <Text>
                                    Last_name: {newUser.last_name}
                                </Text>
                                <Text>
                                    Email: {newUser.email}
                                </Text>
                                <Text>
                                    Nationality: {newUser.nationality}
                                </Text>
                                <Text>
                                    Date_birth: {newUser.date_birth}
                                </Text>
                                <Text>
                                    Mobile: {newUser.mobile}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>

                    <br></br>

                    <Stack>

                        <Button
                            colorScheme="teal"
                            variant="solid"
                            onClick={() =>
                                logout({ logoutParams: { returnTo: window.location.origin } })
                            }
                        >
                            Logout
                        </Button>

                        <Button onClick={HandleModify}>Modify</Button>

                    </Stack>

                    {buttonModify ?

                        <div>

                            <FormControl>

                                <FormLabel>First_name</FormLabel>
                                <Input type='text' value={input.first_name} name="first_name" onChange={handleInputChange} borderWidth='3px' />
                                <FormHelperText>
                                    Complete First_name.
                                </FormHelperText>
                                <FormErrorMessage></FormErrorMessage>

                            </FormControl>

                            <FormControl>

                                <FormLabel>Last_name</FormLabel>
                                <Input type='text' value={input.last_name} name="last_name" onChange={handleInputChange} borderWidth='3px' />
                                <FormHelperText>
                                    Complete Last_name.
                                </FormHelperText>
                                <FormErrorMessage></FormErrorMessage>

                            </FormControl>

                            <FormControl>

                                <FormLabel>Nationality</FormLabel>
                                <Input type='text' value={input.nationality} name="nationality" onChange={handleInputChange} borderWidth='3px' />
                                <FormHelperText>
                                    Complete Nationality.
                                </FormHelperText>
                                <FormErrorMessage></FormErrorMessage>

                            </FormControl>

                            <FormControl>

                                <FormLabel>Date_birth</FormLabel>
                                <Input type='text' value={input.date_birth} name="date_birth" onChange={handleInputChange} borderWidth='3px' />
                                <FormHelperText>
                                    Complete Date_birth.
                                </FormHelperText>
                                <FormErrorMessage></FormErrorMessage>

                            </FormControl>

                            <FormControl>

                                <FormLabel>Mobile</FormLabel>
                                <Input type='text' value={input.mobile} name="mobile" onChange={handleInputChange} borderWidth='3px' />
                                <FormHelperText>
                                    Complete Mobile.
                                </FormHelperText>
                                <FormErrorMessage></FormErrorMessage>

                            </FormControl>

                            <br></br>

                            <Stack>

                                <Button onClick={HandleModify}>Return</Button>

                                <Button colorScheme="teal" variant="solid"
                                    onClick={SubmitModifyUser}
                                >Submit</Button>

                            </Stack>

                        </div>

                        :

                        <div></div>

                    }

                </Box >

            </div>

        );

    }

};

export default Profile;