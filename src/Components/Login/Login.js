import {
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Input,
    Stack, Button, Select, Card, CardBody, Image,
    Heading, Text, Divider
} from '@chakra-ui/react';
import { useState } from "react";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

function Login(props) {

    const Users = [];
    const PaisesArray = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
    const DayArray = [];
    const MonthArray = [];
    const YearArray = [];
    const appId = "1644606985997067";
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();


    for (let i = 1; i < 32; i++) {
        DayArray.push(i);
    };

    for (let i = 1; i < 13; i++) {
        MonthArray.push(i);
    };

    for (let i = 1922; i < 2024; i++) {
        YearArray.push(i);
    };

    const [errorSubmit, setErrorSubmit] = useState("");
    const [input, setInput] = useState({
        email: "",
        name: "",
        lastName: "",
        birthday: "",
        password: "",
        nationality: ""
    });

    const handleInputChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        console.log(input)

    };

    const handleBirthdayChange = (e) => {

        const selectDay = document.getElementById('select-day');
        const selectMonth = document.getElementById('select-month');
        const selectYear = document.getElementById('select-year');

        setInput({
            ...input,
            [e.target.name]: `${selectDay.value}/${selectMonth.value}/${selectYear.value}`
        });

        console.log(input)

    };

    const handeleSubmit = (e) => {

        const selectDay = document.getElementById('select-day');
        const selectMonth = document.getElementById('select-month');
        const selectYear = document.getElementById('select-year');

        if (
            !errorEmail && !errorName && !errorLastName && !errorPassword &&
            errorEMsuccessful && errorNsuccessful && errorLNsuccessful && errorPsuccessful && input.nationality
            && input.birthday && selectDay.value && selectMonth.value && selectYear.value
        ) {

            Users.push(input);
            console.log(Users);

            setInput({
                email: "",
                name: "",
                lastName: "",
                birthday: "",
                password: "",
                nationality: ""
            });

            setErrorSubmit("");

            selectDay.value = "";
            selectMonth.value = "";
            selectYear.value = "";

        } else {
            setErrorSubmit("error");
        }

    };

    var errorBirthday = "error";
    var errorBsuccessful = "";

    if (input.birthday.length >= 8) {
        var errorBirthday = "";
        var errorBsuccessful = "error";
    };


    var errorNTsuccessful = "";
    var errorNation = "error";

    if (input.nationality) {
        var errorNTsuccessful = "error";
        var errorNation = "";
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


    var errorName = "";
    var errorNsuccessful = "";

    if (input.name.length > 0 && input.name.length < 3) {
        errorName = "error"
    };

    if (input.name.length >= 3) {
        errorNsuccessful = "error"
    };



    var errorLastName = "";
    var errorLNsuccessful = "";

    if (input.lastName.length > 0 && input.lastName.length < 3) {
        errorLastName = "error"
    };

    if (input.lastName.length >= 3) {
        errorLNsuccessful = "error"
    };


    var errorPassword = "";
    var errorPsuccessful = "";

    if (input.password) {

        if (input.password) {

            var number = input.password.length - 1;
            console.log(number);

            if (isNaN(input.password[0])) {
                errorPassword = "error";
            } else if (isNaN(input.password[number])) {
                errorPassword = "error";
            } else if (input.password.length < 10) {
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
                    Logout
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

                <br></br>

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

                        <FormLabel>Name</FormLabel>
                        <Input type='text' value={input.name} name="name" onChange={handleInputChange} borderWidth='3px' />
                        {!errorName && !errorNsuccessful ? (
                            <FormHelperText>
                                Complete Name.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorName && !errorNsuccessful ? (
                            <FormHelperText color="blue">
                                Error: Name should have 3 letters.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorNsuccessful ? (
                            <FormHelperText color="red" className="letter">
                                Successful
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}

                        <FormLabel>Last Name</FormLabel>
                        <Input type='text' value={input.lastName} name="lastName" onChange={handleInputChange} borderWidth='3px' />
                        {!errorLastName && !errorLNsuccessful ? (
                            <FormHelperText>
                                Complete Last Name.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorLastName && !errorLNsuccessful ? (
                            <FormHelperText color="blue">
                                Error: Last Name should have 3 letters.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {errorLNsuccessful ? (
                            <FormHelperText color="red" className="letter">
                                Successful
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}

                        <FormLabel>Password</FormLabel>
                        <Input type='password' value={input.password} name="password" onChange={handleInputChange} borderWidth='3px' />
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

                    <FormLabel>Birthday</FormLabel>

                    <Select placeholder='day' id="select-day" name="birthday" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                        {DayArray && DayArray.map((d) => {
                            return (
                                <option> {d} </option>
                            )
                        })}
                    </Select>

                    <Select placeholder='month' id="select-month" name="birthday" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                        {MonthArray && MonthArray.map((m) => {
                            return (
                                <option> {m} </option>
                            )
                        })}
                    </Select>

                    <Select placeholder='year' id="select-year" name="birthday" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                        {YearArray && YearArray.map((y) => {
                            return (
                                <option> {y} </option>
                            )
                        })}
                    </Select>

                </div>

                <div className='form'>

                    <FormControl>

                        {errorBirthday && !errorBsuccessful ? (
                            <FormHelperText>
                                Complete Birthday.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {!errorBirthday && errorBsuccessful ? (
                            <FormHelperText color="red" className="letter">
                                Successful
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}

                    </FormControl>

                </div>

                <div className="form">

                    <FormLabel>Nationality</FormLabel>

                    <Select placeholder='Select option' id="select-nation" name="nationality" value={input.nationality} onChange={handleInputChange} borderWidth='3px'>
                        {PaisesArray && PaisesArray.map((p) => {
                            return (
                                <option> {p} </option>
                            )
                        })}
                    </Select>

                </div>

                <div className='form'>

                    <FormControl>

                        {errorNation && !errorNTsuccessful ? (
                            <FormHelperText>
                                Complete Nationality.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}
                        {!errorNation && errorNTsuccessful ? (
                            <FormHelperText color="red" className="letter">
                                Successful
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}

                    </FormControl>

                </div>

                <div className="form">

                    <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='teal' variant='solid' onClick={handeleSubmit}>
                            Submmit
                        </Button>
                    </Stack>

                    <FormControl className="form">

                        {errorSubmit ? (
                            <FormHelperText color="green" className="letter">
                                Error in any of the data provided.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage></FormErrorMessage>
                        )}

                    </FormControl>

                </div>

            </div>

        )

    }

};

export default Login;

//