import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input,
    Stack, Button, Select
} from '@chakra-ui/react';
import "./Login.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import axios from 'axios';

function Login(props) {

    const appId = "1644606985997067";
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [input, setInput] = useState({
        email: "",
        user_password: ""
    });
    const [dataBaseUsers, SetdataBaseUsers] = useState("");
    const [error, setError] = useState("");
    const userArray = [{ name: "tobias", email: "tobias.blaksley@gmail.com", picture: "not found" }];

    const handleInputChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        console.log(input)

    };

    const handeleSubmit = (e) => {

        if (!errorEMsuccessful || !errorPsuccessful) {

            setError("error")

        } else {

            SetdataBaseUsers(userArray)

        }

    };

    var errorEmail = "";
    var errorEMsuccessful = "";

    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (expReg.test(input.email)) {
        errorEMsuccessful = "error";
    } else if (input.email) {
        errorEmail = "error"
    } else {
        errorEmail = "";
        errorEMsuccessful = "";
    };

    var errorPassword = "";
    var errorPsuccessful = "";

    if (input.user_password) {

        if (input.user_password) {

            var number = input.user_password.length - 1;
            console.log(number);

            if (isNaN(input.user_password[0])) {
                errorPassword = "error";
            } else if (isNaN(input.user_password[number])) {
                errorPassword = "error";
            } else if (input.user_password.length < 10) {
                errorPassword = "error";
            } else {
                errorPsuccessful = "error";
            }
        }
    };


    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    } else if (isAuthenticated) {

        console.log(user);

        return (

            <div className='form'>

                <article key="" className="card">

                    <div className="card-header">
                        <img src={user.picture} alt="picture" />
                    </div>

                    <div className="card-info">
                        <ul>

                            <li>
                                <span>
                                    Name:
                                </span>
                                {user.name}
                            </li>

                            <li>
                                <span>
                                    Email:
                                </span>
                                {user.email}
                            </li>

                        </ul>
                    </div>

                </article>

                <Button colorScheme='blue'
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log out
                </Button>

            </div>

        )

    } else if (dataBaseUsers.length === 1) {

        return (

            <div className='form'>

                <article key="" className="card">

                    <div className="card-header">
                        <img src="" alt="picture" />
                    </div>

                    <div className="card-info">
                        <ul>

                            <li>
                                <span>
                                    Name:
                                </span>
                                {dataBaseUsers.name}
                            </li>

                            <li>
                                <span>
                                    Email:
                                </span>
                                {dataBaseUsers.email}
                            </li>

                        </ul>
                    </div>

                </article>

                <Button colorScheme='blue'
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log out
                </Button>

            </div>

        )

    } else {

        return (

            <div>

                <div>

                    <FacebookLoginButton onClick={() => loginWithRedirect()}></FacebookLoginButton>

                    <br></br>

                    <GoogleLoginButton onClick={() => loginWithRedirect()}></GoogleLoginButton>

                </div>

                <div className="form">

                    <FormControl>

                        <FormLabel>Email</FormLabel>
                        <Input type='text' value={input.email} name="email" onChange={handleInputChange} borderWidth='3px' />
                        {!errorEmail && !errorEMsuccessful ? (
                            <FormHelperText>
                                Complete email.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorEmail && !errorEMsuccessful ? (
                            <FormHelperText color="blue">
                                email@example.com
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorEMsuccessful ? (
                            <FormHelperText color="red" className="letter">
                                Successful
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}

                        <FormLabel>Password</FormLabel>
                        <Input type='password' value={input.user_password} name="user_password" onChange={handleInputChange} borderWidth='3px' />
                        {!errorPassword && !errorPsuccessful ? (
                            <FormHelperText>
                                Complete Password.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorPassword && !errorPsuccessful ? (
                            <FormHelperText color="blue">
                                Error: Password should start and finish with number.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorPassword && !errorPsuccessful ? (
                            <FormHelperText color="blue">
                                Error: Password must have 10 characters.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorPsuccessful ? (
                            <FormHelperText color="red" className="letter">
                                Successful
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}

                    </FormControl>

                </div>

                <div className="form">

                    <FormControl className="form">

                        {error ? (
                            <FormHelperText color="green" className="letter">
                                Error in any of the data provided.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}

                    </FormControl>

                </div>

                <div className="form">

                    <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='teal' variant='solid' onClick={handeleSubmit}>
                            Log in
                        </Button>
                    </Stack>

                </div>

            </div>

        )

    }

};

export default Login;

//