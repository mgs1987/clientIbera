import axios from "axios";
import {
    FormLabel, Select, Input, Box, Stack, Button,
    Alert, AlertIcon, AlertTitle, AlertDescription
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
    const [newUser, setNewUser] = useState({});

    if (state.length === 0) {

        axios.get("http://localhost:3010/users")
            .then((res) => {
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

        const StateUser = state.find((u) => {
            return (u.email === e.target.value)
        });

        setNewUser(StateUser);
        setAlert("");
        setInput(e.target.value);

        select.value = "";
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

    if (user) {

        if (user.email !== "pipe.blaksley@gmail.com") {
            window.location.href = "http://localhost:3000"
        };

    };


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

                    <Stack>
                        <Button colorScheme='teal' variant='solid' onClick={handleRefresh}>
                            Refresh
                        </Button>
                    </Stack>

                    <br></br>
                    <br></br>

                    <Stack direction='row' spacing={4} align='center'>

                        {newUser.status === "active" ?

                            <Button colorScheme='teal' variant='solid' onClick={handeleEnableDisable}>
                                Disable
                            </Button> :

                            <div></div>

                        }

                        {newUser.status === "disabled" ?

                            <Button colorScheme='teal' variant='solid' onClick={handeleEnableDisable}>
                                Enable
                            </Button> :

                            <div></div>

                        }

                    </Stack>

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



