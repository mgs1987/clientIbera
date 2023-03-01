import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
  Box,
  Grid,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
// import {
//   AutoComplete,
//   AutoCompleteInput,
//   AutoCompleteItem,
//   AutoCompleteList,
// } from "@choc-ui/chakra-autocomplete";

import "./searchbar.css";
import { FiArrowDown } from "react-icons/fi";
import allActions from "../../Redux/actions";
import CardHotel from "../CardHotel/CardHotel";
const { getAllHotels, getCity, getRoomsCities } = allActions;

function SearchBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);

  const hotels = useSelector((state) => state.hotels);

  const nuevaCiudad = useSelector((state) => state.citycheckinout);

  //dispatch(getRoomsCities())
  console.log('esot es nuevaCiudad: ', nuevaCiudad);
  // #13 50.71 src/Components/SearchBar/SearchBar.js
  // ﻿#13 50.71   Line 33:23:  'setDestination' is assigned a value but never used  no-unused-vars
  // const [destination, setDestination] = useState("");
  const [destination] = useState("");
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [beds, setBeds] = useState("");
  const [city, setCity] = useState("");
  const [ciudad, setCiudad] = useState([]);
  // src/Components/SearchBar/SearchBar.js
  // Line 38:10:  'newUser' is assigned a value but never used        no-unused-vars
  // Line 38:19:  'setNewUser' is assigned a value but never used     no-unused-vars
  // Line 39:10:  'alert' is assigned a value but never used          no-unused-vars
  // Line 39:17:  'setAlert' is assigned a value but never used       no-unused-vars
  // Line 40:10:  'state2' is assigned a value but never used         no-unused-vars
  // Line 40:18:  'setState2' is assigned a value but never used      no-unused-vars
  // const [newUser, setNewUser] = useState("");
  // const [alert, setAlert] = useState("");
  // const [state2, setState2] = useState([]);

  function handleImputChange(e) {
    e.preventDefault();
     setCity(e.target.value);
  }

  function buttonSubmit(e) {
    e.preventDefault();
    dispatch(getCity(city));
    console.log(hotels, "TUVIEJA");
    setCity("");
  }

  // function getSuggestions(value) {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;

  //   return inputLength === 0
  //     ? []
  //     : hotels.filter(
  //         (hotel) =>
  //           hotel.city.toLowerCase().slice(0, inputLength) === inputValue
  //       );
  // }

  // function handleInputChange(value) {
  //   setCity(value);
  //   setState2(getSuggestions(value));
  // }

  //!!!!!!
  //   const handleFilter = (e) => {

  //     e.preventDefault();

  //     const inputFilter = setCity(e.target.value);
  //     console.log(inputFilter, "LUCHOOOO")
  //     setState2([...hotels].filter((u) => {
  //       return u.city.toLowerCase().includes(inputFilter.value.toLowerCase())
  //   }))

  //   setAlert("");

  // };
  //!!!!!

  const today = new Date().toISOString().split("T")[0];

  const onlyLetters = /^[a-zA-ZÀ-ÿ]+$/;
  const onlyLettersCheck = (input) => {
    return onlyLetters.test(input);
  };
  // src/Components/SearchBar/SearchBar.js
  // Line 93:12:  'handleInputDestination' is defined but never used  no-unused-vars
  // function handleInputDestination(e) {
  //   setDestination(e.target.value);
  // }

  function handleInputCheckIn(e) {
    setInDate(e.target.value);
  }
  function handleInputCheckOut(e) {
    setOutDate(e.target.value);
  }
  function handleInputBeds(e) {
    setBeds(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (onlyLettersCheck(e.target.value)) {
    }
  }

  function handleTest(e) {
    e.preventDefault();
    dispatch(getRoomsCities(city))
  


    console.log("esto es setCity: ",);
  }
  const isError = destination === "";

  return (
    <div>
    <Box
      borderRadius="8px"
      bgColor="teal"
      opacity="0.9"
      paddingBottom="10px"
      paddingTop="10px"
      width="90%"
      marginLeft="70px"
    >
      <Box display="flex" mx="auto" ml="17%">
        <FormControl onSubmit={(e) => handleSubmit(e)}>
          {/* <AutoCompleteInput
  value={city}
  onChange={(value) => handleInputChange(value)}
  width="500px"
  backgroundColor="white"
  placeholder="Destination"
>
  {({ getInputProps, getDropdownProps }) => (
    <>
      <Input
        {...getInputProps()}
        isInvalid={isError}
        mr="300px"
        id="input-filter"
      />
      <Stack {...getDropdownProps()} maxHeight="200px" overflowY="auto">
        {state2.map((hotel, index) => (
          <Box
            key={index}
            p="2"
            bg={index % 2 === 0 ? "gray.100" : "white"}
            _hover={{ bg: "gray.200", cursor: "pointer" }}
            onClick={() => handleInputChange(hotel.city)}
          >
            {hotel.city}
          </Box>
        ))}
      </Stack>
    </>
  )}
</AutoCompleteInput>
          */}

          <Input
            isInvalid={isError}
            mr="300px"
            width="500px"
            backgroundColor="white"
            placeHolder="Destination"
            type="text"
            value={city}
            id="input-filter"
            onChange={handleImputChange}
          />

          {/* <Stack>
{  
  state2 && state2.map((u) => {
      return (
          <button id="button-filter" onClick={handleFilter} value={u.city}>
              {u.city}
          </button>
      )
  })}
  
  </Stack> */}

          {isError ? (
            <FormHelperText mr="600px" mt="2px" color="black">
              Select a destination, please
            </FormHelperText>
          ) : (
            <FormErrorMessage mr="200px">
              Destination is required
            </FormErrorMessage>
          )}
          <Grid templateColumns="1fr 1fr 1fr 1fr">
            <Box>
              <FormLabel color="white">Check-In</FormLabel>
              <input
                className="checkin"
                bgColor="white"
                type="date"
                value={inDate}
                min={today}
                onChange={handleInputCheckIn}
              ></input>
            </Box>
            <Box>
              <FormLabel color="white">Check-out</FormLabel>
              <input
                className="checkin"
                bgColor="white"
                type="date"
                value={outDate}
                min={today}
                onChange={handleInputCheckOut}
              ></input>
            </Box>

            <Box>
              <Button
                mr="160px"
                mt="31px"
                color="white"
                colorScheme="teal"
                variant="outline"
                type="submit"
                onClick={(e) => buttonSubmit(e)}
              >
                Check Availability
              </Button>
            </Box>
            <Box>
              <Button
                mr="160px"
                mt="31px"
                color="white"
                colorScheme="teal"
                variant="outline"
                type="submit"
                onClick={(e) => handleTest(e)}
              >
                TestCity
              </Button>
            </Box>
          </Grid>
        </FormControl>

      </Box>
      
    </Box>
    {nuevaCiudad.length && nuevaCiudad.map((hotel) => { 
        return(
          <CardHotel
              name={hotel.name}
              city={hotel.city}
              img={hotel.image}
              stars={hotel.stars}
              id={hotel.idHotels}
            />
        )
      })}
    </div>
  );
}

export default SearchBar;
