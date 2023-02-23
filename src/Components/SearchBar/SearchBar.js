import React, { useState, useEffect } from "react";

import { useDispatch ,useSelector} from "react-redux";

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
  Stack,
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
const { getAllHotels,getCity } = allActions;



function SearchBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);


  const hotels = useSelector((state) => state.hotels);

  const [destination, setDestination] = useState("");
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [beds, setBeds] = useState("");
  const [city, setCity] = useState("");
  const [newUser, setNewUser] = useState("");
  const [alert, setAlert] = useState("");

  const [state2, setState2] = useState([])



  function handleImputChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  function buttonSubmit(e) {
    e.preventDefault();
    dispatch(getCity(city));

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
  function handleInputDestination(e) {
    setDestination(e.target.value);
  }

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
  const isError = destination === "";

  return (
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

            <Select
              width="50%"
              color="black"
              bgColor="white"
              mr="10px"
              mt="32px"
              rightIcon={FiArrowDown}
              value={beds}
              onChange={handleInputBeds}
            >
              <option value="option1">1 bed</option>
              <option value="option2">2 beds</option>
              <option value="option3">3 beds</option>
              <option value="option4">4 beds</option>
            </Select>
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
          </Grid>
        </FormControl>
      </Box>
    </Box>
  );
}

export default SearchBar;
