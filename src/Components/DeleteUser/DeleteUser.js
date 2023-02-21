import axios from "axios";
import {
    FormLabel, Select, Input, Box, Stack, Button,
    Alert, AlertIcon, AlertTitle, AlertDescription,
    Card, CardBody, Image,
    Heading, Text, Divider
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


function DeleteUser() {

    useEffect(() => {
        console.log(users);
    }, []);

    if (!document.cookie) {
        window.location.href = "http://localhost:3000"
    };

    const users = [];
    const [state, setState] = useState([]);
    const [input, setInput] = useState("");
    const [alert, setAlert] = useState("");
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [newUser, setNewUser] = useState("");

    if (state.length === 0) {

        axios.get("http://localhost:3010/users")
            .then((res) => {
                const logUser = res.data.find((u) => {
                    return u.email === user.email
                })

                if (res.data) {
                    if (logUser.privilige !== true) {
                        window.location.href = "http://localhost:3000"
                    };
                };

                for (let i = 0; i < res.data.length; i++) {
                    users.push(res.data[i])

                }
                if (users.length) {
                    setState(users);
                };
            })
            .catch((err) => console.log(err));

    };

    const handleInputChange = (e) => {

        const select = document.getElementById('select');

        const StateUser = state.filter((u) => {
            return (u.email === e.target.value)
        });

        setNewUser(StateUser);
        setAlert("");
        setInput(e.target.value);

        select.value = "";
    };

    const handleInputChange2 = (e) => {
        const value = document.getElementById('input-search');

        const StateUser2 = state.filter((u) => {
            return (u.email === value.value)
        });

        setNewUser(StateUser2);
        setAlert("");
        setInput(value.value);

        value.value = "";
    };


    const handeleEnableDisable = (e) => {
        axios.put("http://localhost:3010/users/disable", { email: input })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        setInput("");
        setAlert("submit");
    };

    const handleRefresh = (e) => {
        window.location.reload();
    };

    state.sort((a, b) => {

        if (a.email > b.email) {
            return 1;
        }
        if (b.email > a.email) {
            return -1;
        }
        return 0;
    });

    console.log("state", state);
    console.log("newUser", newUser);


    if (state.length !== 0) {

        return (

            <div>

                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={800}
                    p={6}
                    m="10px auto"
                    as="form"
                >

                    <FormLabel>Find User:</FormLabel>

                    <Input id="input-search" type='text' borderWidth='3px' />

                    <br></br>
                    <br></br>

                    <Button colorScheme='teal' variant='solid' onClick={handleInputChange2}>
                        Submit
                    </Button>

                    <br></br>
                    <br></br>

                    <FormLabel>Select User:</FormLabel>

                    <Select id="select" placeholder='Select-User' borderWidth='3px' maxW='sm' onChange={handleInputChange}>
                        {state && state.map((u) => {
                            return (
                                <option>{u.email}</option>
                            )
                        })}
                    </Select>

                    <br></br>
                    <br></br>

                    <FormLabel>User:</FormLabel>

                    <Input type='text' value={input} borderWidth='3px' />

                    <br></br>
                    <br></br>

                    {newUser ?
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
                                        src={newUser[0].image}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        maxWidth={200}
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>User Info</Heading>
                                        <Text>
                                            Name: {newUser[0].first_name} {newUser[0].last_name}
                                        </Text>
                                        <Text>
                                            Email: {newUser[0].email}
                                        </Text>
                                        <Text>
                                            Privilage: {newUser[0].privilige === true ? "This user is admin" : "Nomal user"}
                                        </Text>
                                        <Text>
                                            Status: {newUser[0].status}
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                            </Card>

                        </Box>
                        :
                        <div></div>}

                    <br></br>
                    <br></br>

                    <Stack>
                        <Button colorScheme='teal' variant='solid' onClick={handleRefresh}>
                            Refresh
                        </Button>
                    </Stack>

                    <br></br>
                    <br></br>

                    <Stack direction='row' spacing={4} align='center'>

                        {newUser.length > 0 && newUser[0].status === "active" ?

                            <Button colorScheme='teal' variant='solid' onClick={handeleEnableDisable}>
                                Disable
                            </Button> :

                            <div></div>

                        }

                        {newUser.length > 0 && newUser[0].status === "disabled" ?

                            <Button colorScheme='teal' variant='solid' onClick={handeleEnableDisable}>
                                Enable
                            </Button> :

                            <div></div>

                        }

                    </Stack>

                    <br></br>
                    <br></br>

                    {alert ?

                        <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                User modified!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                Refresh to enable or disable again.
                            </AlertDescription>
                        </Alert> :

                        <div></div>

                    }

                </Box>

            </div>

        );

    } else {

        return (

            <div>

                <div>Loading...</div>

            </div>


        )

    };

};

export default DeleteUser;



