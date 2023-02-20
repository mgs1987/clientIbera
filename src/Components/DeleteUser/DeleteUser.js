import axios from "axios";
import {
    FormLabel, Select, Input, Box, Stack, Button,
    Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


function DeleteUser() {

    /*if (User.email !== "pipe.blaksley@gmail.com") {
        window.location.href = "http://localhost:3000";
    };*/

    useEffect(() => {
        console.log(users);
    }, []);

    const users = [];
    const [state, setState] = useState([]);
    const [input, setInput] = useState("");
    const [alert, setAlert] = useState("");
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(user);

    if (state.length === 0) {

        axios.get("http://localhost:3010/users")
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    users.push(res.data[i].email)

                }
                if (users.length) {
                    console.log(users)
                    setState(users);
                };
            })
            .catch((err) => console.log(err));

    };

    const handleInputChange = (e) => {

        const select = document.getElementById('select');

        setInput(e.target.value);

        select.value = "";

        setAlert("");
    };

    const handeleSubmit = (e) => {
        setInput("");
        setAlert("submit");
    };

    console.log(users);
    console.log(state);

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

                    <FormLabel>Select User:</FormLabel>

                    <Select id="select" placeholder='Select-User' borderWidth='3px' maxW='sm' onChange={handleInputChange}>
                        {state && state.map((u) => {
                            return (
                                <option>{u}</option>
                            )
                        })}
                    </Select>

                    <br></br>
                    <br></br>

                    <FormLabel>User:</FormLabel>

                    <Input type='text' value={input} borderWidth='3px' />

                    <br></br>
                    <br></br>

                    <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='teal' variant='solid' onClick={handeleSubmit}>
                            Delete
                        </Button>
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
                                Deleted user!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                You can select another user to delete.
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