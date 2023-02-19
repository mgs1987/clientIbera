import axios from "axios";
import { FormLabel, Select } from '@chakra-ui/react';
import { useState } from "react";


function DeleteUser() {

    const users = [];
    const [state, setState] = useState("");

    if (users.length === 0) {

        axios.get("http://localhost:3010/users")
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    users.push(res.data[i])

                }
                setState("error")
            })
            .catch((err) => console.log(err));

    }

    console.log(users);
    console.log(state);

    if (users.length !== 0) {

        return (

            <div>

                <FormLabel>Delete User:</FormLabel>

                <Select placeholder='Select-User' borderWidth='3px' maxW='sm'>
                    <option>User 1</option>
                    <option>User 2</option>
                    <option>User 3</option>
                </Select>

            </div>

        );

    } else {

        return (

            <div>Error...</div>

        )

    };

};

export default DeleteUser;