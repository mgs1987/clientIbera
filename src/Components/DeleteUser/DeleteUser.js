import axios from "axios";
import { FormLabel, Select, Input, Box, Stack, Button } from '@chakra-ui/react';
import { useEffect, useState } from "react";


function DeleteUser() {

    useEffect(() => {
        console.log(users);
    }, []);

    const users = [];
    const [state, setState] = useState([]);
    const [input, setInput] = useState("");

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
    };

    const handeleSubmit = (e) => {
        setInput("");
    };

    console.log(users);
    console.log(state);

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